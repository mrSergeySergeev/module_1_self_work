import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js'
import {
  collection,
  doc,
  getDocs,
  deleteDoc,
  updateDoc,
  setDoc,
  serverTimestamp,
  query,
  orderBy
} from 'https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js'


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
const keyDb = "films"

export async function add(film) {
  try {
    await setDoc(doc(db, keyDb, film.id), {
      id: film.id,
      order: serverTimestamp(),
      done: false,
      film: film.film
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function get() {
  const ref = collection(db, keyDb)
  const q = query(ref, orderBy("order"));
  const querySnapshot = await getDocs(q);
  const films = []
  films.length = 0
  querySnapshot.forEach((doc) => {
    const result = doc.data();
    films.push({
      id: result.id,
      order: result.order,
      done: result.done,
      film: result.film
    });
  });
  return films;
}

export async function deleteItem(id) {
  await deleteDoc(doc(db, keyDb, id));
}

export async function doneItemTrue(id) {
  const ref = doc(db, keyDb, id);
  await updateDoc(ref, {
    done: true
  });
}

export async function doneItemFalse(id) {
  const ref = doc(db, keyDb, id);
  await updateDoc(ref, {
    done: false
  });
}