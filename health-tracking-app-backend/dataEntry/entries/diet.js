import { collection, doc, addDoc } from 'firebase/firestore';
import { db } from '../../src/firebaseConfig.js';

export async function addDiet(userId, dietData) {
	try {
		const docRef = await addDoc(
			collection(db, 'users', userId, 'diet'),
			dietData
		);

		console.log('Diet entry added with ID:', docRef.id);
	} catch (e) {
		console.error('Error adding diet entry:', e);
	}
}
