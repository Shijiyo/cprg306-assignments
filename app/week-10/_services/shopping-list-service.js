import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
  if (!userId) return [];

  const items = [];
    
  const itemsRef = collection(db, "users", userId, "items");
  const q = query(itemsRef);

  const snapshot = await getDocs(q);

  snapshot.forEach((doc) => {
    items.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return items;
}

export async function addItem(userId, item) {
  if (!userId) return null;

  // Reference the user's items subcollection
  const itemsRef = collection(db, "users", userId, "items");

  // Add and return new document reference
  const docRef = await addDoc(itemsRef, item);

  return docRef.id;
}