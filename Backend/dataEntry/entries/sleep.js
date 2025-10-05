import { collection, doc, addDoc } from 'firebase/firestore';
import { db } from '../../src/firebaseConfig.js';

export async function addSleep(userId, sleepData) {
	try {
		const docRef = await addDoc(
			collection(db, 'users', userId, 'sleep'),
			sleepData
		);

		console.log('Sleep entry added with ID:', docRef.id);
	} catch (e) {
		console.error('Error adding sleep entry:', e);
	}
}
