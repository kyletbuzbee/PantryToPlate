// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAU8I63Jmkzxeo5VMbGichygNLJA6VqSc",
  authDomain: "pantrytoplate-f153b.firebaseapp.com",
  projectId: "pantrytoplate-f153b",
  storageBucket: "pantrytoplate-f153b.appspot.com",
  messagingSenderId: "311456878697",
  appId: "1:311456878697:web:5a54696da0bb77c8cbd2f8",
  measurementId: "G-4LKYS7GRPH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Example function to create a new user with email and password
function registerUser(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("User registered:", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error registering user:", errorCode, errorMessage);
    });
}

// Example function to sign in a user with email and password
function loginUser(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("User signed in:", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error signing in user:", errorCode, errorMessage);
    });
}

// Example function to add a new recipe to Firestore
function addRecipe(name, ingredients) {
  addDoc(collection(db, "recipes"), {
    name: name,
    ingredients: ingredients
  })
  .then((docRef) => {
    console.log("Recipe added with ID:", docRef.id);
  })
  .catch((error) => {
    console.error("Error adding recipe:", error);
  });
}

// Example function to upload a file to Firebase Storage
function uploadFile(file) {
  const storageRef = ref(storage, 'uploads/' + file.name);
  uploadBytes(storageRef, file).then((snapshot) => {
    console.log("File uploaded successfully:", snapshot);
    getDownloadURL(snapshot.ref).then((downloadURL) => {
      console.log("File available at:", downloadURL);
    });
  }).catch((error) => {
    console.error("Error uploading file:", error);
  });
}

// Example usage
// registerUser("example@example.com", "password123");
// loginUser("example@example.com", "password123");
// addRecipe("Spaghetti Carbonara", ["spaghetti", "eggs", "bacon", "cheese"]);
// uploadFile(someFileObject);
