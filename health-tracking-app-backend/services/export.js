import { db } from "../src/firebaseConfig.js";

export async function getAllUserData(userId) {
  const userRef = db.collection("users").doc(userId);

  try {
    const subcollections = await userRef.listCollections();

    const allData = {};

    for (const subcol of subcollections) {
      const snapshot = await subcol.get();

      allData[subcol.id] = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    }

    console.log("All user data:", allData);
    return allData;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
}