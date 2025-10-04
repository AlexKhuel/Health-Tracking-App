import {
	addDiet,
	addExercise,
	addHydration,
	addLogin,
	addSleep,
	addSuggestions,
    getAllUserData,
} from './data/index.js';
import { verifyLogin } from './services/index.js';

// Example usage for all functions:
/*
addSleep("JD-ChapCS-080707", {
    entryDate: new Date(),
    startTime: new Date(2025, 9, 1, 0, 30),
    endTime: new Date(2025, 9, 1, 8),
    durationHours: 7.5,
    sleepQuality: 6
});

 addDiet("JD-ChapCS-080707", {
    entryDate: new Date(),
    food: "Chicken Parm",
    macronutrients: {
        alcohol_g: 0,
        calories_kcal: 720,
        carbohydrates_g: 45,
        fat_g: 32,
        fiber_g: 4,
        protein_g: 48,
        sugar_g: 8,
    },
    mealTime: new Date(2025, 9, 1, 18)
});

 addExercise("JD-ChapCS-080707", {
    entryDate: new Date(),
    exerciseName: "Squats",
    "sets": [
    { "reps": 10, "weightLbs": 85 },
    { "reps": 6, "weightLbs": 100 },
    { "reps": 6, "weightLbs": 120 },
    { "reps": 6, "weightLbs": 140 }
    ],
    caloriesBurned: 230
});

 addExercise("JD-ChapCS-080707", {
    entryDate: new Date(),
    exerciseName: "Running",
    durationMinutes: 25,
    distanceMiles: 3,
    caloriesBurned: 230
});

 addHydration("JD-ChapCS-080707", {
    entryDate: new Date(),
    water_ml: 750
});

addSuggestions("JD-ChapCS-080707", {
    entryDate: new Date(),
    suggestion1: "Insert chatGPT suggestion",
    suggestion2: "Insert chatGPT suggestion",
    suggestion3: "Insert chatGPT suggestion"
});

addLogin("JD-C
*/

console.log(await verifyLogin("AlexKhuel", "Iw2b@nnjn33r"));

console.log(await getAllUserData("JD-ChapCS-080707"));