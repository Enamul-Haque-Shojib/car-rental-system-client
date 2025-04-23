import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router';
import { Typewriter } from 'react-simple-typewriter';

const ChatAI = () => {
    const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const SUGGESTIONS = [
    "SUVs under 2000 BDT/day",
    "Electric cars available in Dhaka",
    "Luxury cars in Chattogram",
    "Minivans with GPS and 7 seats",
    "Manual transmission cars under 1500 BDT/day",
  ];
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    setShowSuggestions(false);
    try {
      const res = await axios.post("http://localhost:5000/api/ai/ask", {
        message: input,
      });

      const aiMsg = {
        sender: "ai",
        text: res.data.reply,
        cars: res.data.cars || [],
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      console.error("AI error:", error);
    } finally {
      setLoading(false);
    }
  };
  console.log(messages);

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
        <h1 className='text-xl text-center'> Ai chatBot  </h1>
      <div className="bg-white rounded-lg px-4 border h-[60vh] overflow-y-auto space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={msg.sender === "user" ? "text-right" : "text-left"}>
            <div
              className={`inline-block px-4 py-2 rounded-lg max-w-[75%] ${
                msg.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {msg.sender === "ai" ? (
                <Typewriter
                  words={[msg.text]}
                  cursor
                  typeSpeed={35}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              ) : (
                msg.text
              )}
            </div>

            {msg.cars?.length > 0 && (
              <div className="grid md:grid-cols-1 gap-4 mt-4">
                {msg.cars.map((car) => (
                  <div key={car.id} className="border rounded shadow p-3">
                    <img
                      src={car.image}
                      alt={car.model}
                      className="w-full h-40  object-cover rounded mb-2"
                    />
                    <h3 className="font-bold">{car.brand} {car.model}</h3>
                    <p className="text-sm text-gray-600">{car.year} • {car.type}</p>
                    <p className="text-sm">Location: {car.location}</p>
                    <p className="text-sm font-semibold">৳ {car.pricePerDay} / day</p>
                    {car.id ? <Link to={`/detailsCar/${car.id}`} className="text-blue-500 text-sm underline mt-1 inline-block">View Car →</Link> : <Link to={car.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm underline mt-1 inline-block">View Details →</Link>}
                    
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {loading && <p className="italic text-gray-500">Thinking...</p>}
      </div>
<div className="mt-4 relative">
      <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setShowSuggestions(true);
            }}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask me to find a car..."
            className="flex-1 border border-gray-300 rounded-l-lg p-2 focus:outline-none"
          />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700"
        >
          Send
        </button>
        </div>
        {/* Suggestions Dropdown */}
        {showSuggestions && (
          <div className="absolute z-60 bg-white shadow rounded mt-1 w-full border border-gray-200 max-h-40 overflow-y-auto">
            <p className='text-xs text-green-400'>suggestion</p>
            {SUGGESTIONS.filter((s) =>
              s.toLowerCase().includes(input.toLowerCase())
            ).map((suggestion, i) => (
              <div
                key={i}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                onClick={() => {
                  setInput(suggestion);
                  setShowSuggestions(false);
                }}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatAI;