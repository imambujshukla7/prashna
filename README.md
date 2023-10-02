# Prashna

Prashna as a quiz platform generates questions using the OpenAI API. It provides users with a personalized learning experience based on their quiz performance.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm
- OpenAI API key

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/prashna.git
   ```

2. Navigate to the frontend directory:

   ```bash
   cd prashna-frontend
   ```

3. Install frontend dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the frontend directory and add the backend server URL:

   ```env
   REACT_APP_BACKEND_URL=http://localhost:5000
   ```

5. Run the frontend:

   ```bash
   npm start
   ```

6. In a new terminal, navigate to the backend directory:

   ```bash
   cd ../prashna-backend
   ```

7. Install backend dependencies:

   ```bash
   npm install
   ```

8. Create a `.env` file in the backend directory and add your OpenAI API key:

   ```env
   OPENAI_API_KEY=your-openai-api-key
   ```

9. Run the backend:

   ```bash
   npm start
   ```

Prashna platform should now be running. Open your browser and go to localhost to start using Prashna.

## Project Structure

- **prashna-backend:** Contains the backend Node.js and Express application.
- **prashna-frontend:** Contains the frontend React application.

## Usage

- Visit to access the Prashna 
- Start a quiz, answer questions, and receive personalized feedback.

## License

This project is licensed under the MIT License 
