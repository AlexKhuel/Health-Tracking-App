import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
// import OpenAI from 'openai';

import {
  addDiet,
  addExercise,
  addHydration,
  addLogin,
  addSleep,
  addSuggestions,
} from '../DataEntry/index.js';

import { 
  verifyLogin, 
  getAllUserData,
 } from './index.js';

/* OpenAI setup
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
*/

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

if (process.env.NODE_ENV !== 'production') {
  app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
}

// Example route
app.get('/api/user/:id', async (req, res) => {
  try {
    const data = await getAllUserData(req.params.id);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch user data' });
  }
});

app.post('/api/echo', (req, res) => {
  res.json({ youSent: req.body });
});

// PRODUCTION: serve React build
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')));
  app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API listening on ${PORT}`));