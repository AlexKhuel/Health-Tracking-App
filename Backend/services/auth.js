import bcrypt from 'bcrypt';
import { db } from '../src/firebaseConfig.js';

export async function verifyLogin(username, plainPassword) {
	try {
		const usersRef = db.collection("users");
		const snapshot = await usersRef.where('username', '==', username).get();

		if (snapshot.empty) return false;

		const userDoc = snapshot.docs[0];
		const storedHash = userDoc.data().passwordHash;
		const match = await bcrypt.compare(plainPassword, storedHash);

		return { valid: match, userId: match ? userDoc.id : undefined}
	}
	catch (e) {
		console.error("Error verifying login:", error);
    	return { valid: false };
	}
}