// components/ChatBot.jsx

import React, { useState } from "react";
import axios from "axios";

const ChatBot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!input) return;

    const userMessage = { role: "user", content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");

    try {
      const res = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: newMessages,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
        }
      );

      const botReply = res.data.choices[0].message;
      setMessages([...newMessages, botReply]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="chatbot-box p-3 border rounded" style={{ maxWidth: "600px", margin: "auto" }}>
      <h4>🤖 AI Chat Assistant</h4>
      <div className="chat-window" style={{ maxHeight: "300px", overflowY: "auto" }}>
        {messages.map((msg, index) => (
          <div key={index} className={msg.role === "user" ? "text-end" : "text-start"}>
            <p><strong>{msg.role === "user" ? "You" : "Bot"}:</strong> {msg.content}</p>
          </div>
        ))}
      </div>
      <div className="d-flex mt-3">
        <input
          className="form-control me-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button className="btn btn-primary" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
