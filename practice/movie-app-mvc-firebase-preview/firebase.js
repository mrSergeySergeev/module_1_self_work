import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js'
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js'

const firebaseConfig = {
  apiKey: "AIzaSyCJhR833KKLI7kbEYyUPP1SLCTEPadVrPE",
  authDomain: "films-2fc24.firebaseapp.com",
  databaseURL: "https://films-2fc24-default-rtdb.firebaseio.com",
  projectId: "films-2fc24",
  storageBucket: "films-2fc24.appspot.com",
  messagingSenderId: "963195631248",
  appId: "1:963195631248:web:c6225e3b75003a81ef4a15"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export async function add(film) {
  try {
    const docRef = await addDoc(collection(db, "films"), {
      id: Date.now(),
      order: Date.now(),
      done: false,
      film
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

console.log(db)