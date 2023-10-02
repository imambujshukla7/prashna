const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const openai = require("openai");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

openai.apiKey = process.env.OPENAI_API_KEY;

const questions = [
  "What is the capital of France?",
  "Who is the president of the United States?",
  "What is the square root of 144?",
  // Add more questions here
];

app.get("/api/questions", (req, res) => {
  res.json({ questions });
});

app.post("/api/generate-question", async (req, res) => {
  const { prompt } = req.body;
  try {
    const response = await openai.Completion.create({
      engine: "text-davinci-003",
      prompt: prompt,
      max_tokens: 100,
    });
    const generatedQuestion = response.choices[0].text.trim();
    res.json({ question: generatedQuestion });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
