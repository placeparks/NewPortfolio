import React, { useState, useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";
import 'animate.css/animate.min.css';


const RATE_LIMIT = 5000; // Rate limit in milliseconds

function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const [lastAPICall, setLastAPICall] = useState(0);
  const ApiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    if (typing || messages.length === 0) return;

    const conversationDiv = document.querySelector(".Chatbot-conversation");
    conversationDiv.scrollTop = conversationDiv.scrollHeight;
  }, [messages, typing]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (Date.now() - lastAPICall < RATE_LIMIT) {
      alert("Please wait before sending another message.");
      return;
    }
  
    setLastAPICall(Date.now());
    setMessages((prevMessages) => [...prevMessages, { role: "user", content: input }]);
    setInput("");
    setTyping(true);
  
    const configuration = new Configuration({
      apiKey: ApiKey,
    });
    const openai = new OpenAIApi(configuration);
  
    const requestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        ...messages.map((message) => ({ role: message.role, content: message.content })),
        { role: "user", content: input },
      ],
    };
  
    try {
      const result = await openai.createChatCompletion(requestBody);
      const botResponse = result.data.choices[0].message.content;
      setTyping(false);
      setMessages((prevMessages) => [...prevMessages, { role: "assistant", content: botResponse }]);
    } catch (error) {
      setTyping(false);
      console.error("Error:", error);
      console.error("Error response:", error.response);
      if (error.response && error.response.data) {
        console.error("OpenAI error message:", error.response.data);
      }
      alert(`OpenAI error message: ${JSON.stringify(error.response.data)}`);
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: "Sorry, there was an error processing your request. Please try again later." },
      ]);
    }
  };

  const [chatVisible, setChatVisible] = useState(false);

const toggleChatVisibility = () => {
  setChatVisible(!chatVisible);
};

const formatTimestamp = (timestamp) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    }).format(timestamp);
  };
  
  

  return (
    <div style={{ color:"black", position: 'fixed', right: '0', bottom: '0', padding:'10px', backgroundColor:"white" }}>
    <button onClick={toggleChatVisibility} className="toggle-chat-btn">
      {chatVisible ? "X" : "Show Chatbot"}
    </button>
    {chatVisible && (
  <div className="Chatbot animate__animated animate__fadeIn">
          <div className="Chatbot">
            <h1>Mirac.eth Chatbot</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="input">Ask Me Anything:</label>
              <input
                id="input"
                type="text"
                value={input}
                onChange={handleChange}
                required
              />
              <button type="submit">Send</button>
            </form>
            <div className="Chatbot-conversation">
              {messages.map((message, index) => (
                <p key={index} className={`${message.role} message-animation animate__animated animate__fadeIn`}>
                  <strong>{message.role === "user" ? "You: " : "Mirac Bot: "}</strong>
                  <span>{message.content}</span>
                  <span className="timestamp">
                    {' '}
                    ({formatTimestamp(message.timestamp)})
                  </span>
                </p>
              ))}
              {typing && <p className="typing-indicator">Mirac Bot is typing...</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
  
}

export default Chatbot;