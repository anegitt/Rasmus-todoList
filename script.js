// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0zvN5xSoAwvlbwnXckqEUUGIEBMKsVdk",
  authDomain: "todolist-99d5f.firebaseapp.com",
  projectId: "todolist-99d5f",
  storageBucket: "todolist-99d5f.appspot.com",
  messagingSenderId: "116436697857",
  appId: "1:116436697857:web:49f80dbe420e955c7e5100",
  measurementId: "G-E941VH4MQH"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

import {
    getFirestore,
    collection,
    doc,
    query,
    where,
    getDoc,
    getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"

const db = getFirestore(app)
const docRef = doc(db, "todoItems", "1");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}

const listeRef = document.getElementById("liste")

// const q = query(collection(db, "todoItems"), where("erFerdig", "==", false));
// const querySnapshot = await getDocs(q);
const querySnapshot = await getDocs(collection(db, "todoItems"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  const item = document.createElement("li")
  item.innerHTML = doc.data().tekst
  listeRef.appendChild(item)
});
