import { createRequire } from 'module';
import { initializeApp, getApps, getApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import admin from 'firebase-admin';

const require = createRequire(import.meta.url);
const serviceAccount = require('./serviceAccountKey.json');

const app = !getApps().length
	? initializeApp({
			credential: admin.credential.cert(serviceAccount),
		})
	: getApp();

const db = getFirestore(app);

export { db };
