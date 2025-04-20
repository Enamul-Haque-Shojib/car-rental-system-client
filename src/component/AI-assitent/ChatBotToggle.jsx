import React from 'react';
import ChatAI from './ChatAI';
import{ FaRobot } from 'react-icons/fa';
import { useState } from 'react';
const ChatBotToggle = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="fixed bottom-16  right-6 z-50">
        {/* Floating AI Icon Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
        >
          <FaRobot className="text-xl" />
          
          
        </button>
  
        {/* Chat Window */}
        <div
          className={`fixed bottom-20 right-16 w-[350px] max-h-[90vh] bg-white border border-gray-300 shadow-xl rounded-xl overflow-y-auto transition-all duration-500 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
          }`}
        >
          <ChatAI />
        </div>
      </div>
    );
  }

export default ChatBotToggle;