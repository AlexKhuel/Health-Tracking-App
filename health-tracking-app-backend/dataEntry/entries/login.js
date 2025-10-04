import bcrypt from 'bcrypt';
import { db } from '../../src/firebaseConfig.js';

export async function addLogin(username, plainPassword) {
	try {
		const usersRef = db.collection("users");
		const snapshot = await usersRef.where("username", "==", username).get();
		if (!snapshot.empty) {
	  		throw new Error("Username already exists");
		}

		const passwordHash = await bcrypt.hash(plainPassword, 10);

		const userRef = usersRef.doc();
		await userRef.set({
	  		username,
			passwordHash,
	 		createdAt: new Date(),
		});

		console.log('Login added for user:', userId);
		return userRef.id;
	} 
	catch (e) {
		console.error('Error adding login entry:', e);
		throw e;
	}
}