# MackyBot

## Project Name & Description

**MackyBot** is your personal AI assistant from Macky's Tech, designed to provide instant and comprehensive information about the company, its services, team, and contact details. This project integrates a React-based frontend with a Node.js Express backend, leveraging the Google Gemini AI model to deliver intelligent conversational responses. The chatbot is pre-loaded with extensive information about Macky's Tech to ensure accurate and relevant answers to user queries.

**About Macky's Tech (MackyBot's Knowledge Base):**

Macky's Tech is a forward-thinking technology company dedicated to shaping the future with innovative and powerful solutions. We are dedicated to transforming businesses with our expertise in AI-powered solutions, robust cybersecurity, quantum computing, blockchain technology, artificial intelligence, web/app development, and the Internet of Things (IoT). Macky's Tech is here to help you build businesses and individuals by leveraging technology to solve complex problems and create new opportunities.

Founded by Pankaj Gupta (Macky), a seasoned software developer with over eight years of experience, Macky's Tech is driven by a passion for innovation and a commitment to excellence. Our team of experts is dedicated to delivering high-quality solutions and services that are tailored to meet the unique needs of each client. We are committed to providing top-notch services and building long-lasting partnerships with our clients.

**Company Overview:**
*   **Name**: Macky’s Tech Pvt Ltd
*   **Established**: 2022
*   **Team size**: Approximately 10–50 employees

**Our Mission:**
At Macky's Tech, we believe in the power of technology to transform businesses and improve lives. Our mission is to empower organizations with innovative solutions that drive growth and success. We are committed to staying at the forefront of technological advancements and delivering exceptional value to our clients.

**Services:**
*   Custom Software Development
*   AI-Powered Solutions
*   Cybersecurity
*   Quantum Computing
*   Blockchain Technology
*   Web & App Development
*   Cloud Solutions
*   Data Analytics
*   DevOps
*   IT Consulting

**Community Engagement:**
Macky's Tech is committed to fostering a vibrant tech community. We regularly host hackathons, expert sessions, and other events to promote learning and collaboration. We also offer an internship program for students and recent graduates who are passionate about technology and eager to gain hands-on experience in the field.

**Contact Information:**
*   **Website**: [https://mackystech.vercel.app/](https://mackystech.vercel.app/)
*   **YouTube**: [https://www.youtube.com/@MackysTech](https://www.youtube.com/@MackysTech)
*   **Email**: hr.mackystech@gmail.com, mackystech@gmail.com
*   **Phone**: +91 82359 10315
*   **Address**: 20/B, Marathi Mandir, Anand Nagar, Bhopal, Madhya Pradesh – 462022, India
*   **Response Time**: All inquiries receive a response within 24 hours during business days.

**Social Media:**
*   **Facebook**: [https://www.facebook.com/share/16t452Joyp/](https://www.facebook.com/share/16t452Joyp/)
*   **Instagram**: [https://www.instagram.com/mackystech?igsh=MTYxbmRrMnZuMzR2dQ==](https://www.instagram.com/mackystech?igsh=MTYxbmRrMnZuMzR2dQ==)
*   **LinkedIn**: [https://www.linkedin.com/company/macky-s-tech/](https://www.linkedin.com/company/macky-s-tech/)
*   **WhatsApp**: [chat.whatsapp.com/Ff2VT5dOadM2nZYv59fv8W](chat.whatsapp.com/Ff2VT5dOadM2nZYv59fv8W) or [https://wa.me/918235910315](https://wa.me/918235910315)

## Screenshots

*(Add screenshots here)*

## Features and Functionalities

*   **AI-Powered Responses**: Utilizes the Google Gemini AI model (`gemini-2.5-flash`) for generating intelligent and relevant answers based on pre-fed company information.
*   **Interactive Chat Interface**: A user-friendly and responsive chat window.
*   **Chatbot Toggle**: A floating button to easily open and close the chatbot interface.
*   **Dynamic Chat History Display**: Shows both user queries and bot responses in a clear, conversational format.
*   **"Thinking..." Indicator**: Provides visual feedback to the user while the bot is generating a response.
*   **Initial Context**: The chatbot starts with a welcoming message and is immediately aware of Macky's Tech details through a pre-loaded knowledge base.
*   **Error Handling**: Gracefully handles API errors and displays informative messages to the user.
*   **Responsive Design**: Optimized for various screen sizes, including mobile devices.
*   **Backend API**: A dedicated Express.js backend to manage communication with the Gemini AI model, abstracting API keys and processing requests.
*   **Health Check Endpoint**: A basic health check endpoint for the backend server (`GET /`).

## Available npm/yarn scripts

### Root Directory (`MackyBot/MackyBot`)

*   `npm start`: Starts both the frontend and backend applications concurrently.

### Client-side (`MackyBot/MackyBot/client`)

*   `npm start`: Starts the development server using Vite.
*   `npm build`: Compiles the React application for production deployment.
*   `npm lint`: Runs ESLint to check for code quality and style issues.
*   `npm preview`: Serves the production build locally for previewing.

### Server-side (`MackyBot/MackyBot/server`)

*   `npm start`: Starts the Node.js Express server.
*   `npm dev`: Starts the Node.js Express server using Nodemon, enabling automatic restarts on code changes during development.

## Installation Steps

Follow these steps to set up and run the MackyBot project locally.

### Prerequisites

*   Node.js (>= 18)
*   npm or yarn

### 1. Clone the repository

```bash
git clone https://github.com/hemantpatel011/MackyBot.git
cd MackyBot
```

### 2. Backend Setup

Navigate to the `server` directory and install dependencies:

```bash
cd server
npm install # or yarn install
```

Create a `.env` file in the `server` directory and add your environment variables:

```env
PORT=5000
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

*   Replace `YOUR_GEMINI_API_KEY` with your actual Google Gemini API key.
*   You can obtain a Gemini API key from [Google AI Studio](https://aistudio.google.com/).

### 3. Frontend Setup

Navigate to the `client` directory and install dependencies:

```bash
cd ../client
npm install # or yarn install
```

Create a `.env` file in the `client` directory and add the company information:

```env
VITE_MACKYTECH_INFO="Introduction:
 I'm MackyBot, I'm your personal AI assistant from Macky's Tech.

  About Macky's Tech: Pioneering the Future of Technology
  ... (Full company information as provided in the project content) ...
  Whether you are a business looking for a technology partner or an individual looking to grow your skills, Macky's Tech has something to offer."
```

*   Ensure the `VITE_MACKYTECH_INFO` variable contains the complete and accurate company description, formatted as a single string. Newlines can be included directly in the string for `VITE` environment variables.

### 4. Run the Application

Navigate back to the root directory of the project:

```bash
cd ..
```

Start both the frontend and backend concurrently:

```bash
npm start # or yarn start
```

This will:
*   Start the backend server on `http://localhost:5000` (or your specified `PORT`).
*   Start the frontend development server, typically on `http://localhost:5173`.

You can access the MackyBot application in your web browser.

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
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
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

### 2. `POST /api/generate`

*   **Description**: This endpoint sends the entire chat history (including a pre-fed company info) to the Google Gemini AI model to generate a conversational response.
*   **Request Method**: `POST`
*   **Request Body**: `application/json`
    *   The body should contain a `prompt` array, which represents the conversational history. Each object in the array should have a `role` (either "user" or "model") and `parts` containing the text message.
    ```json
    {
      "prompt": [
        { "role": "model", "parts": [{ "text": "Introduction:\n I'm MackyBot, I'm your personal AI assistant from Macky's Tech..." }] },
        { "role": "user", "parts": [{ "text": "Hello, MackyBot!" }] },
        { "role": "model", "parts": [{ "text": "Hi there! How can I help you today?" }] },
        { "role": "user", "parts": [{ "text": "What services does Macky's Tech offer?" }] }
      ]
    }
    ```
*   **Success Response (`200 OK`)**:
    *   A JSON object containing the AI's generated response, typically found in the `candidates` array.
    ```json
    {
      "candidates": [
        {
          "content": {
            "parts": [
              {
                "text": "Macky's Tech offers a comprehensive suite of services including Custom Software Development, AI-Powered Solutions, Cybersecurity, and more."
              }
            ]
          }
        }
      ]
    }
    ```
*   **Error Responses**:
    *   `400 Bad Request`: If the `prompt` is missing from the request body.
        ```json
        {
          "error": "Prompt is required"
        }
        ```
    *   `500 Internal Server Error`: For any server-side issues or errors encountered when communicating with the Gemini API.
        ```json
        {
          "error": "Internal Server Error"
        }
        ```

## Contribution Guidelines

Contributions are welcome! Please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines on how to contribute to this project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author Information

*   **Hemant Patel**
    *   GitHub: [hemantpatel011](https://github.com/hemantpatel011)

## Acknowledgements

Special thanks to:

*   **Macky's Tech** for the internship opportunity and providing the comprehensive company information that forms the core knowledge base of MackyBot.
*   **Pankaj Gupta (Macky)**, Founder & CEO of Macky's Tech, for guidance and leadership.
*   The entire **Macky's Tech team and fellow interns** for a collaborative environment:
    *   Saud Ansari (Frontend Developer)
    *   Khushi Gupta (Student Intern)
    *   Riya Mathur (Web Development Intern)
    *   Kajal Reddy (Machine Learning Intern)
    *   Shivam Kumar soni (Full Stack Developer Intern)
    *   Tanya Sinha (AI Research Intern)
    *   Purnima Sharma (Android Developer Intern)
    *   Sujal Pandey (Full Stack Web Development Intern)