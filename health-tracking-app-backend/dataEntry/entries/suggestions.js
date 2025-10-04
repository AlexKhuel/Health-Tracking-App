import { collection, doc, addDoc } from 'firebase/firestore';
import { db } from '../../src/firebaseConfig.js';

export async function addSuggestions(userId, suggestionsData) {
	try {
		const docRef = await addDoc(
			collection(db, 'users', userId, 'suggestions'),
			suggestionsData
		);

		console.log('Suggestions entry added with ID:', docRef.id);
	} catch (e) {
		console.error('Error adding suggestions entry:', e);
	}
}
