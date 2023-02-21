import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { addAuthListener, getProfilePicUrl, getUserName, isUserSignedIn } from '../firebase/Auth';
import { getUserProfile } from '../firebase/Firestore';
import { getAuth } from 'firebase/auth';
// Image imports
import profile_bg from '../imgs/profile_bg.png';

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
        marginTop: "2%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '80vh',
        width: '80%'
      }}
    >
      {isSignedIn ? (
        <>
            <div
                style={{
                    position: "absolute",
                    height: '80vh',
                    width: '80%',
                    overflow: "hidden",
                    border: "1px solid #ececec",
                    boxShadow: "8px 10px #d9d9d9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: -1
                }}>
                    <img src={profile_bg} alt="bg" height={1500} />
            </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '70vh',
              width: '80vw',
            }}
          >
            {profilePicUrl !== '' && (
              <div
                style={{
                  height: '20%',
                  width: '90%',
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    border: '1px solid',
                    borderRadius: '90px',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img alt="profile" src={profilePicUrl} height="150px" />
                </div>
              </div>
            )}
            <Typography
              sx={{
                fontFamily: 'Google Sans',
                marginLeft: '50px',
                fontSize: '60px',
              }}
            >
              Welcome Home, {userName}
            </Typography>
            {profile && (
              <ul>
                {Object.entries(profile).map(([key, value], index) => {
                  if (key === 'timestamp') {
                  } else {
                    return (
                      <li key={index} className="profileEle">
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          <div style={{ fontWeight: '600', marginRight: '5px', fontSize: '30px' }}>{key}</div>{' '}
                          <div style={{marginTop: "5px"}}>- {value.toString()} </div>
                        </div>
                      </li>
                    );
                  }
                })}
              </ul>
            )}
          </div>
          {/* <Typography>{profile}</Typography> */}
        </>
      ) : (
        <Typography>Please Sign In to View This Page</Typography>
      )}
    </div>
  );
};

export default Profile;