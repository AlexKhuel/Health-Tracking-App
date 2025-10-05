import { collection, doc, addDoc } from 'firebase/firestore';
import { db } from '../../src/firebaseConfig.js';

export async function addStrength(userId, strengthData) {
	try {
		const docRef = await addDoc(
			collection(db, 'users', userId, 'strength'),
			strengthData
		);

		console.log('Strength entry added with ID:', docRef.id);
	} catch (e) {
		console.error('Error adding strength entry:', e);
	}
}
