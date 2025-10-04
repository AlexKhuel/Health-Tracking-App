// Install dependencies first:
//   npm install openai readline-sync dotenv
//
// Create a .env file with your key:
//   OPENAI_API_KEY=your_api_key_here
//
// Then run with:
//   node foodLogger.js

const OpenAI = require("openai");
const readlineSync = require("readline-sync");
require("dotenv").config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Helper: Ask the OpenAI model
async function ask(prompt) {
  const resp = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: prompt },
    ],
    temperature: 0.2,
  });
  return resp.choices[0].message.content;
}

async function main() {
  // Ask how many foods
  const amount = parseInt(
    readlineSync.question("How many things did you eat today? "),
    10
  );

  let event = [];
  for (let i = 0; i < amount; i++) {
    const answer = readlineSync.question(`What is your ${i + 1} food thing? `);
    event.push(answer);
  }

  let prompt = `Analyze each food for the following categories without giving me a range of numbers. 
Give me an exact number; alcohol_g, calories_kcal, carbohydrates_g, fat_g, fiber_g, protein_g, sugar_g.
If you need more information put FALSE in all capital letters as the first line of the answer and then follow up with the information that you need. 
If you feel that you can make a SOMEWHAT accurate computation with the information given or if you are going in circles put TRUE on the first line.
If you see that there's information I can't give don't keep asking for it and print TRUE.
If you print TRUE, then you have to give the contents of the food item/s.
`;

  event.forEach((food, i) => {
    prompt += `\n\t${i + 1}. ${food}`;
  });

  prompt += "\nAny other information known follows this line:";

  let Chat_Done = false;
  let n = 0;
  let Calorie_nums = "";

  while (!Chat_Done && n <= 5) {
    Calorie_nums = await ask(prompt);

    if (Calorie_nums.split("\n")[0].trim() === "TRUE") {
      Chat_Done = true;
      console.log("\n\nIt got through\n\n");
      console.log(Calorie_nums)
    } else {
      const Continued_Question = readlineSync.question(Calorie_nums + "\n> ");
      prompt += `\nAssistant asked: ${Calorie_nums}\nUser replied: ${Continued_Question}`;
      console.log(prompt);
    }
    n++;
  }

  // Final formatting call
  const formatted = await ask(`
Im giving you food item/items that I have eaten. 
Find the information in this string and format it like seen below. 
Do not include any other text that is not shown in this format

food: "food item",
    macronutrients: {
        alcohol_g: 0,
        calories_kcal: 720,
        carbohydrates_g: 45,
        fat_g: 32,
        fiber_g: 4,
        protein_g: 48,
        sugar_g: 8,
    },
    mealTime: datePlaceholder
###\n${Calorie_nums}
  `);

  console.log("\nFinal formatted output:\n");
  console.log(formatted);
}

main().catch(console.error);
