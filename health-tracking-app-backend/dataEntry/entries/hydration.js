import { collection, doc, addDoc } from 'firebase/firestore';
import { db } from '../../src/firebaseConfig.js';

export async function addHydration(userId, hydrationData) {
	try {
		const docRef = await addDoc(
			collection(db, 'users', userId, 'hydration'),
			hydrationData
		);

		console.log('Hydration entry added with ID:', docRef.id);
	} catch (e) {
		console.error('Error adding hydration entry:', e);
	}
}
