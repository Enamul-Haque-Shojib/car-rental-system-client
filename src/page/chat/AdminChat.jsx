import { useEffect, useState } from "react";
import {db,ref,push,onValue} from "@/firebase/firebase.config";


const AdminChat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const messagesRef = ref(db, "messages");
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const messagesList = data ? Object.values(data) : [];
      setMessages(messagesList);
    });
  }, []);

  const sendMessage = () => {
    if (message.trim() && selectedUser) {
      push(ref(db, "messages"), {
        receiverId: selectedUser,
        text: message,
        senderId: "admin",
        timestamp: Date.now(),
      });
      setMessage("");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">Admin Chat</h2>
      <div className="flex">
        <div className="w-1/3 border-r p-2">
          <h3 className="font-semibold">Users</h3>
          {[...new Set(messages.filter(msg => msg.senderId !== "admin").map((msg) => msg.senderId ))].map((user) => {
            // console.log(user);
           return (
            
              <button
                key={user}
                onClick={() => setSelectedUser(user)}
                className="block p-2 border mt-1 w-full text-left"
              >
                {user}
              </button>
            )
          })}
        </div>
        <div className="w-2/3 p-2">
          <div className="h-64 overflow-y-auto border p-2">
            {selectedUser && messages
              .filter((msg) => (msg.senderId === selectedUser && msg.receiverId === 'admin') || (msg.senderId === 'admin' && msg.receiverId === selectedUser))
              .map((msg, index) => (
                <p
                  key={index}
                  className={`p-2 my-1 ${
                    msg.senderId === "admin"
                      ? "bg-blue-100 text-right"
                      : "bg-gray-100"
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
      </div>
    </div>
  );
};

export default AdminChat;
