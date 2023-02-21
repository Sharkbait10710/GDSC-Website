import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  serverTimestamp,
  getDocs,
  getDoc,
  setDoc,
  doc,
  query,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { getUserName, getProfilePicUrl } from './Auth';
import { getAuth } from 'firebase/auth';

/**
 * Fetches the users profile. If it doesn't exist, add the user to the /users/ collection and return their profile.
 * @param {string} uid unique identifier of a user, generated from getAuth().currentUser.uid
 * @returns an object representing all of the fields in the user profile
 */
export async function getUserProfile(uid) {
  const querySnapshot = await getDoc(doc(getFirestore(), 'users', uid));
  if (querySnapshot.exists()) {
    return querySnapshot.data();
  } else {
    // Create user profile
    const DEFAULT_BIO = 'Hello and welcome to my profile!';
    console.log('Creating user profile for uid ', uid);
    const user = getAuth().currentUser;
    if (!user) {
      console.error('cannot create null user');
    }
    const userProfile = {
      displayName: user.displayName,
      username: uid,
      email: user.email,
      emailVerified: user.emailVerified,
      photoUrl: user.photoURL,
      bio: DEFAULT_BIO,
      timestamp: serverTimestamp(),
      admin: false
    };
    await setDoc(doc(getFirestore(), 'users', uid), userProfile);
    const querySnapshot = await getDoc(doc(getFirestore(), 'users', uid));
    if (querySnapshot.exists()) {
      return querySnapshot.data();
    } else {
      console.error('error creating user');
      return null;
    }
  }
}

/**
 * Loads all projects in the 'projects' collection on firestore, and returns a list of the project objects.
 * @async
 * @returns {list} list of project objects in the form { title, description, githubLink, publicLink, imageUrl, profilePicUrl, timestamp }
 */
export async function loadProjects() {
  const querySnapshot = await getDocs(collection(getFirestore(), 'projects'));
  let allProjects = [];

  querySnapshot.forEach((doc) => {
    allProjects.push(doc.data());
  });

  return allProjects;
}

/**
 * Saves a Project to the firestore 'projects' collection, and an image into a storage bucket
 * @async
 * @param {string} title title of the project
 * @param {string} description description of the project
 * @param {string} githubLink link to the github repository of the project
 * @param {file} image an image uploaded to display on the website
 * @param {string} publicLink optional - link to a publicly hosted version of the project
 */
export async function saveProject(title, description, githubLink, image, publicLink = '') {
  // A loading image URL.
  var LOADING_IMAGE_URL = 'https://www.google.com/images/spin-32.gif?a';
  try {
    // 1 - We add a project with a loading icon that will get updated with the shared image.
    const projectRef = await addDoc(collection(getFirestore(), 'projects'), {
      name: getUserName(),
      title,
      description,
      githubLink,
      publicLink,
      imageUrl: LOADING_IMAGE_URL,
      profilePicUrl: getProfilePicUrl(),
      timestamp: serverTimestamp(),
      authorUid: getAuth().currentUser.uid,
    });

    // 2 - Upload the image to Cloud Storage.
    const filePath = `${getAuth().currentUser.uid}/${projectRef.id}/${image.name}`;
    const newImageRef = ref(getStorage(), filePath);
    const fileSnapshot = await uploadBytesResumable(newImageRef, image);

    // 3 - Generate a public URL for the file.
    const publicImageUrl = await getDownloadURL(newImageRef);

    // 4 - Update the project with the image's URL.
    await updateDoc(projectRef, {
      imageUrl: publicImageUrl,
      storageUri: fileSnapshot.metadata.fullPath,
    });
    console.log('project saved in firestore');
  } catch (error) {
    console.error('There was an error uploading a file to Cloud Storage:', error);
  }
}



/**
 * Loads all meetings in the 'meetings' collection on firestore, and returns a list of the meeting objects.
 * @async
 * @returns {list} list of meeting objects in the form { title, description, date, location, name, authorUid, timestamp }
 */
export async function loadMeetings() {
  const querySnapshot = (await getDocs(query(collection(getFirestore(), 'meetings'), orderBy("date", 'asc')) ));
  let allMeetings = [];
  querySnapshot.forEach((doc) => {
    allMeetings.push(doc.data());
  });
    
  return allMeetings;
}

/**
 * Saves a Meeting to the firestore 'meetings' collection
 * @async
 * @param {string} title title of the meeting
 * @param {string} description description of the meeting
 * @param {string} date date of the meeting
 * @param {string} location location of the meeting
 */
export async function saveMeeting(title, description, date, location) {

  try {
    // Push a new meeting to firestore
    await addDoc(collection(getFirestore(), 'meetings'), {
      title,
      description,
      date,
      location,
      name: getUserName(),
      authorUid: getAuth().currentUser.uid,
      timestamp: serverTimestamp(),
    });

    console.log('meeting saved in firestore');
  } catch (error) {
    console.error('There was an error writing a meeting to firebase database:', error);
  }
}
