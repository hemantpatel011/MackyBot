# MackyBot - A Chatbot for MackyTech

This is the official repository for MackyBot, a chatbot designed to provide information about MackyTech. The chatbot is built with the MERN stack (MongoDB, Express, React, Node.js) and utilizes the OpenAI API for natural language processing.

## Features

*   **Conversational Interface:** Engage in natural conversations with the chatbot to get information about MackyTech.
*   **Google Gemini API Integration:** Leverages the power of Google Gemini large language models to understand and respond to user queries.
*   **MERN Stack:** Built with a modern and robust technology stack for scalability and maintainability.
*   **Easy to Use:** Simple and intuitive user interface for a seamless user experience.

## Tech Stack

*   **Frontend:**
    *   React
    *   Vite
    *   ESLint
*   **Backend:**
    *   Node.js
    *   Express
    *   Cors
    *   node-fetch
    *   Dotenv
    *   Gemini API
*   **Development:**
    *   Concurrently
    *   Nodemon

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   Node.js and npm installed on your machine.
*   An Google Gemini API key.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/MackyBot.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd MackyBot
    ```
3.  **Install server dependencies:**
    ```bash
    npm install
    ```
4.  **Navigate to the client directory and install client dependencies:**
    ```bash
    cd client
    npm install
    ```
5.  **Navigate to the server directory and install server dependencies:**
    ```bash
    cd ../server
    npm install
    ```

### Running the App

1.  **Create a `.env` file in the `server` directory and add your OpenAI API key:**
    ```
PORT=5000
GEMINI_API_KEY=YOUR_GEMINI_API_KEY

    ```
2.  **Navigate to the root directory of the project:**
    ```bash
    cd ..
    ```
3.  **Run the development server:**
    ```bash
    npm  start
    ```
    This will start both the client and server concurrently. The client will be running on `http://localhost:5173` and the server will be running on `http://localhost:5000`.

## Project Structure

```
MackyBot/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatbotIcon.jsx
│   │   │   ├── ChatForm.jsx
│   │   │   └── ChatMessage.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── mackyTechInfo.js
│   │   └── main.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── README.md
│   └── vite.config.js
├── server/
│   ├── .env
│   ├── .gitignore
│   ├── index.js
│   └── package.json
├── .gitignore
├── package.json
└── README.md
```

## Auther

Hemant Patel - hemantpatel951625@gmail.com

[AI Intern at Macky's Tech]


