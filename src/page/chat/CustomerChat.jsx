import { useEffect, useState } from "react";
import { db, ref, push, onValue } from "@/firebase/firebase.config";
import useAuth from "@/hooks/useAuth";


const CustomerChat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const { user } = useAuth()
  const userId = user ? `user${user._id.slice(-6)}` : 'GuestUser'

  useEffect(() => {
    const messagesRef = ref(db, "messages");

    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const messagesList = data ? Object.values(data) : [];
      setMessages(messagesList);
    });
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      push(ref(db, "messages"), {
        senderId: userId,
        receiverId: "admin",
        text: message,
        timestamp: Date.now(),
      });
      setMessage("");
    }
  };

  return (
    <div className="fixed bottom-20 right-5 w-80 bg-white border shadow-lg rounded-lg p-4 z-1">
      <div className="h-64 overflow-y-auto">
        {messages.filter(msg => (msg.senderId === userId && msg.receiverId === 'admin') || (msg.senderId === 'admin' && msg.receiverId === userId)).map((msg, index) => (
          <p
            key={index}
            className={`p-2 my-1 ${msg?.senderId === "admin" ? "bg-gray-100 text-right" : "bg-blue-100 "
              } rounded`}
          >
            {msg.text}
          </p>
        ))}
      </div>
      <div className="flex mt-2">
        <input
          type="text"
          className="flex-1 p-2 border rounded-l"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={sendMessage}
          className="p-2 bg-blue-500 text-white rounded-r"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default CustomerChat;
