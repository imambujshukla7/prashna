import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Quiz() {
  // Add your quiz logic here
  const [question, setQuestion] = useState("");

  useEffect(() => {
    // Fetch a question from the backend when the component mounts
    fetchQuestion();
  }, []);

  const fetchQuestion = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/generate-question", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: "Generate a quiz question" }),
      });
      const data = await response.json();
      setQuestion(data.question);
    } catch (error) {
      console.error("Error fetching question:", error);
    }
  };

  return (
    <div>
      <h2>Quiz Question</h2>
      <p>{question}</p>
      {/* Display options and handle user responses */}
      <Link to="/results">
        <button>Submit Quiz</button>
      </Link>
    </div>
  );
}

export default Quiz;
