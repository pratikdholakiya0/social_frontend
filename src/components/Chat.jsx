import { useState } from 'react';
import { FiSearch, FiSend, FiMoreVertical } from 'react-icons/fi';

const Chatting = () => {
  const [activeChat, setActiveChat] = useState(null);
  const [message, setMessage] = useState('');
  const [conversations, setConversations] = useState([
    { 
      id: 1, 
      name: "Alex Johnson", 
      username: "@alexj", 
      messages: [
        { text: "fuck you!!!!", time: "10:30 AM", sent: false },
        { text: "bitch", time: "10:31 AM", sent: false },
        { text: "go and fuck your mom", time: "10:35 AM", sent: true }
      ],
      lastActive: "2h ago"
    },
    { 
      id: 2, 
      name: "Sarah Miller", 
      username: "@sarahm", 
      messages: [
        { text: "Meeting at 3pm tomorrow", time: "Yesterday", sent: false },
        { text: "Got it, I'll be there", time: "Yesterday", sent: true }
      ],
      lastActive: "5h ago"
    },
  ]);

  const handleSendMessage = () => {
    if (message.trim() === '' || !activeChat) return;
    
    const updatedConversations = conversations.map(conv => {
      if (conv.id === activeChat) {
        return {
          ...conv,
          messages: [
            ...conv.messages,
            { text: message, time: "Just now", sent: true }
          ],
          lastActive: "Just now"
        };
      }
      return conv;
    });
    
    setConversations(updatedConversations);
    setMessage('');
  };

  return (
    <div className="flex h-[calc(100vh-80px)]">
      {/* Conversation List */}
      <div className={`${activeChat ? 'hidden md:block' : 'block'} w-full md:w-80 border-r border-gray-200`}>
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold mb-4">Messages</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>

        <div className="overflow-y-auto h-[calc(100%-80px)]">
          {conversations.map((conv) => (
            <div
              key={conv.id}
              className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                activeChat === conv.id ? 'bg-blue-50' : ''
              }`}
              onClick={() => setActiveChat(conv.id)}
            >
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold mr-3">
                  {conv.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between">
                    <h3 className="font-bold truncate">{conv.name}</h3>
                    <span className="text-xs text-gray-500">{conv.lastActive}</span>
                  </div>
                  <p className="text-sm text-gray-500 truncate">
                    {conv.messages[conv.messages.length - 1]?.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      {activeChat ? (
        <div className="flex-1 flex flex-col">
          {conversations.filter(c => c.id === activeChat).map(chat => (
            <div key={chat.id} className="flex flex-col h-full">
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold mr-3">
                    {chat.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold">{chat.name}</h3>
                    <p className="text-xs text-gray-500">{chat.username}</p>
                  </div>
                </div>
                <button className="p-1 text-gray-500 hover:bg-gray-100 rounded-full">
                  <FiMoreVertical />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                <div className="space-y-3">
                  {chat.messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${msg.sent ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs md:max-w-md rounded-lg p-3 ${
                          msg.sent
                            ? 'bg-blue-500 text-white rounded-br-none'
                            : 'bg-white border border-gray-200 rounded-bl-none'
                        }`}
                      >
                        <p>{msg.text}</p>
                        <p className={`text-xs mt-1 ${
                          msg.sent ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex items-center">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Write a message..."
                    className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="ml-2 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
                  >
                    <FiSend />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="hidden md:flex flex-1 items-center justify-center bg-gray-50">
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Select a conversation</h3>
            <p className="text-gray-500">Choose an existing chat or start a new one</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatting;