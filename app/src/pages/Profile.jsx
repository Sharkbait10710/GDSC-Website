import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { addAuthListener, getProfilePicUrl, getUserName, isUserSignedIn } from '../firebase/Auth';
import { getUserProfile } from '../firebase/Firestore';
import { getAuth } from 'firebase/auth';

const Profile = (props) => {
  const [userName, setUserName] = useState('');
  const [profilePicUrl, setProfilePicUrl] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    let ignore = false;
    const fetchProfile = async () => {
      if (!profile) {
        const userProfile = await getUserProfile(getAuth().currentUser.uid);
        if (userProfile) {
          if (!ignore) {
            setProfile(userProfile);
            console.log(userProfile);
          }
        } else {
          console.error('Could not fetch profile ', userProfile);
        }
      }
    };

    if (isUserSignedIn()) {
      setIsSignedIn(true);
      setUserName(getUserName());
      setProfilePicUrl(getProfilePicUrl());
      fetchProfile();
    }

    addAuthListener((user) => {
      if (user) {
        // if user is signed in
        setIsSignedIn(true);
        if (!profile) {
          fetchProfile();
        }
      } else {
        setIsSignedIn(false);
      }
    });
    return () => {
      ignore = true;
    };
  }, [profile]);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        top: '10%',
        height: '80vh',
        width: '80%',
      }}
    >
      {isSignedIn ? (
        <>
          {profilePicUrl !== '' && <img alt="profile" src={profilePicUrl} />}
          <Typography>Welcome Home, {userName}</Typography>
          {profile && (
            <ul>
              {Object.entries(profile).map(([key, value], index) => {
                if (key === 'timestamp') {
                } else {
                  return (
                    <li key={index}>
                      {key} - {value.toString()}
                    </li>
                  );
                }
              })}
            </ul>
          )}
          {/* <Typography>{profile}</Typography> */}
        </>
      ) : (
        <Typography>Please Sign In to View This Page</Typography>
      )}
    </div>
  );
};

export default Profile;
