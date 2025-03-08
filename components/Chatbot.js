"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      if (!res.ok) throw new Error(`HTTP Error! Status: ${res.status}`);

      const data = await res.json();
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: data.response },
      ]);
    } catch (error) {
      console.error("Fetch error:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: "Sorry, something went wrong." },
      ]);
    }

    setInput("");
  };

  // Auto-scroll to the latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-lg w-[600px] h-[700px] flex flex-col">
        {/* Robot GIF Header */}
        <div className="bg-blue-600 text-white p-5 flex items-center justify-center rounded-t-lg">
          {/* <Image src="/robot.gif" alt="Chatbot" width={50} height={50} /> */}
          <h3 className="text-xl font-semibold ml-3">Gym bot</h3>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-5 overflow-y-auto bg-gray-100 space-y-3">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg max-w-[80%] ${
                msg.sender === "user"
                  ? "ml-auto bg-blue-500 text-white"
                  : "bg-gray-300 text-black"
              }`}
            >
              {msg.text}
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Input Field & Send Button */}
        <div className="p-4 bg-white border-t flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type a message..."
            className="flex-1 p-3 border rounded-l-lg focus:outline-none text-black"
          />
          <button
            onClick={sendMessage}
            className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-500 transition"
          >
            Send
          </button>
        </div>
      </div>
        <Link href="/"><button className="bg-amber-900 absolute top-3 right-3.5 border-amber-50 p-1 cursor-pointer">return</button></Link>
    </div>
    
  );
};

export default Chatbot;
