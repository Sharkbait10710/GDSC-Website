import React from 'react';
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
  apiKey: 'AIzaSyA_vpnFneHF9Dwa9PNIOBtaKihK6wz5aVM',
  authDomain: 'gdsc-website-9d5c2.firebaseapp.com',
  projectId: 'gdsc-website-9d5c2',
  storageBucket: 'gdsc-website-9d5c2.appspot.com',
  messagingSenderId: '284181410073',
  appId: '1:284181410073:web:77caf34f069a478183d588',
  measurementId: 'G-B9MSK6D2ML',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

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
