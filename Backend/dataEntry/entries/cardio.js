import { collection, doc, addDoc } from 'firebase/firestore';
import { db } from '../../src/firebaseConfig.js';

export async function addCardio(userId, cardioData) {
	try {
		const docRef = await addDoc(
			collection(db, 'users', userId, 'cardio'),
			cardioData
		);

		console.log('Cardio entry added with ID:', docRef.id);
	} catch (e) {
		console.error('Error adding cardio entry:', e);
	}
}
