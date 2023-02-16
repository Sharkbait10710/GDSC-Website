import React, { useEffect, useState } from 'react';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { Button } from '@mui/material';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_vpnFneHF9Dwa9PNIOBtaKihK6wz5aVM",
    authDomain: "gdsc-website-9d5c2.firebaseapp.com",
    projectId: "gdsc-website-9d5c2",
    storageBucket: "gdsc-website-9d5c2.appspot.com",
    messagingSenderId: "284181410073",
    appId: "1:284181410073:web:77caf34f069a478183d588",
    measurementId: "G-B9MSK6D2ML"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Signs-in Friendly Chat.
export async function signIn() {
  // Sign in Firebase using popup auth and Google as the identity provider.
  var provider = new GoogleAuthProvider();
  await signInWithPopup(getAuth(), provider);
}

// Signs-out of Friendly Chat.
export function signOutUser() {
  // Sign out of Firebase.
  signOut(getAuth());
}

// Returns the signed-in user's profile Pic URL.
export function getProfilePicUrl() {
  return getAuth().currentUser.photoURL || '/images/profile_placeholder.png';
}

// Returns the signed-in user's display name.
export function getUserName() {
  return getAuth().currentUser.displayName;
}

// Returns true if a user is signed-in.
export function isUserSignedIn() {
  return !!getAuth().currentUser;
}

export function addAuthListener(listenerFunction) {
  onAuthStateChanged(getAuth(), listenerFunction);
}

export default function Auth() {
  // Initialize firebase auth
  function initFirebaseAuth() {
    // Listen to auth state changes.
    onAuthStateChanged(getAuth(), authStateObserver);
  }

  // Triggers when the auth state change for instance when the user signs-in or signs-out.
  function authStateObserver(user) {
    if (user) {
      // User is signed in!
      // Get the signed-in user's profile pic and name.
      setProfilePicUrl(getProfilePicUrl());
      setUserName(getUserName());

      // Set the user's profile pic and name.
      //   userPicElement.style.backgroundImage =
      //     'url(' + addSizeToGoogleProfilePic(profilePicUrl) + ')';
      //   userNameElement.textContent = userName;

      //   // Show user's profile and sign-out button.
      //   userNameElement.removeAttribute('hidden');
      //   userPicElement.removeAttribute('hidden');
      //   signOutButtonElement.removeAttribute('hidden');

      //   // Hide sign-in button.
      //   signInButtonElement.setAttribute('hidden', 'true');

      //   // We save the Firebase Messaging Device token and enable notifications.
      //   saveMessagingDeviceToken();
      // } else {
      //   // User is signed out!
      //   // Hide user's profile and sign-out button.
      //   userNameElement.setAttribute('hidden', 'true');
      //   userPicElement.setAttribute('hidden', 'true');
      //   signOutButtonElement.setAttribute('hidden', 'true');

      //   // Show sign-in button.
      //   signInButtonElement.removeAttribute('hidden');
    }
  }
  initFirebaseAuth();

  const [userName, setUserName] = useState('');
  const [profilePicUrl, setProfilePicUrl] = useState('');

  return (
    <div>
      <Button variant="contained" id="signin" onClick={signIn}>
        Sign In
      </Button>
      <Button variant="contained" id="signout" onClick={signOut}>
        Sign Out
      </Button>
    </div>
  );
}
