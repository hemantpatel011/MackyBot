import { useRef } from "react"

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse}) => {
 
     const inputRef = useRef();
     

     const handleFormSubmit =(e) =>{
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        //  console.log(userMessage);
        if(!userMessage){
          console.log("userMessage is empty");
            return;
        }
        // Clear the input field
        inputRef.current.value = "";
        
        // Update chat history with thr user's message
        setChatHistory((history) =>[...history, {role: "user", text: userMessage}]);

      //  Delay 600 ms before showing "Thinking..." and generating response
      setTimeout(() => {
         // Add a "Thinking..." placeholder for bot response
          setChatHistory((history) =>[...history, {role: "model", text: "Thinking..."}]);
     
        // Calling the function to generate bot's response    
        // Adding a prifix to each user message so the the chatbot responds only based on the provided data.
      generateBotResponse([...chatHistory, {role: "user", text: `Using the details provided above, please address this query${userMessage}`}]);
        }, 600);
       
     };

  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
            <input ref={inputRef} type="text" 
            placeholder="Message..."
            className="message-input" required />
              <button className="material-symbols-rounded">arrow_upward</button>

          </form>
  )
}

export default ChatForm