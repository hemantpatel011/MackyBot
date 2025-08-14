import React, {  useEffect, useRef, useState } from "react";
import ChatbotIcon from "./components/ChatbotIcon";
import ChatForm from "./components/ChatForm";
import { ChatMessage } from "./components/ChatMessage";
import { mackyTechInfo } from "./mackyTechInfo";
const App = () => {
  const [chatHistory, setChatHistory] = useState([{
    hideInChat: true, //hideINChat property is used to prevent the data from being displayed in the chat
    role: "model",
    text: mackyTechInfo //Adding company info as the initial message so it can respond to user queries about the company.
  }]);
  const [showChatbot, setShowChatbot] = useState(false);
  const chatScrollRef = useRef(); 

  const generateBotResponse = async(history) => {

      const updateHistory = (botMessage, isError  = false) => {
        setChatHistory((prevHistory) => [...prevHistory.filter(msg => msg.text !== "Thinking..."), { role: "model", text: botMessage, isError }]);
      }

  //  Format chat history for API request.
      history = history.map(({role, text}) => ({role, parts: [{text}]}));


  try{
      const response = await fetch("http://localhost:5000/api/generate",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({prompt: history})
      })
      const data = await response.json();

      // Check if the response is ok and contains a valid message
      if(!response.ok) throw new Error(data.error.message || "Something went wrong!");
       
      console.log(data);
        
      // Update chat history with the bot's response
      const botMessage = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
      
      updateHistory(botMessage);
    } catch (error) {
     updateHistory(error.message, true);
    }

};

useEffect(() => {
  // Scroll to the bottom of the chat when chatHistory changes
  // This ensures the latest message is always visible
  if (chatScrollRef.current) {
    chatScrollRef.current.scrollTo({
      top: chatScrollRef.current.scrollHeight,
      behavior: "smooth"
    });
  }
}, [chatHistory]);




  return (
    <div className={`container ${showChatbot ? "show-chatbot" : ""}`}>
      <button onClick={()=> setShowChatbot(prev => !prev)} id="chatbot-toggler">
        <span className="chatbot material-symbols-rounded"><ChatbotIcon /></span>
        <span className="chatbot-close material-symbols-rounded">close</span>
      </button>
      <div className="chatbot-popup">
        {/* Chatbot Header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">MackyBot</h2>
          </div>
          <button onClick={()=> setShowChatbot(prev => !prev)} className="material-symbols-rounded">keyboard_arrow_down</button>
        </div>
        {/* Chatbot Body */}
        <div ref={chatScrollRef} className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Hey there 👋
              <br />
              How can i help you today?
            </p>
          </div>

          {/* Render the chat gistory Dynamically */}
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>

        {/* Chatbot Footer */}
        <div className="chat-footer">
          <ChatForm
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
