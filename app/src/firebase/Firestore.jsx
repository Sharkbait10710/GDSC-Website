import { getFirestore, collection, addDoc, updateDoc, serverTimestamp, getDocs } from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { getUserName, getProfilePicUrl } from './Auth';
import { getAuth } from 'firebase/auth';

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
