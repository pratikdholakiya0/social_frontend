import { FiSearch, FiMessageCircle } from 'react-icons/fi';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';

const MessagesPage = () => {
  const navigate = useNavigate();

  const handleNavigate = ()=>{
    navigate("/chat")
  }

  const conversations = [
    { 
      id: 1, 
      name: "Alex Johnson", 
      username: "@alexj", 
      lastMsg: "Hey, how are you doing?", 
      time: "2h ago", 
      unread: true 
    },
    { 
      id: 2, 
      name: "Sarah Miller", 
      username: "@sarahm", 
      lastMsg: "Meeting at 3pm tomorrow", 
      time: "5h ago", 
      unread: false 
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Sidebar />
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Messages</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search messages..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      {/* Conversations */}
      <div className="space-y-3">
        {conversations.map((conv) => (
          <div 
            key={conv.id} 
            className={`p-4 rounded-lg cursor-pointer ${
              conv.unread ? "bg-blue-50 border border-blue-100" : "bg-white border border-gray-100"
            }`}
            onClick={handleNavigate}
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold">
                {conv.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between">
                  <h3 className="font-bold">{conv.name}</h3>
                  <span className="text-sm text-gray-500">{conv.time}</span>
                </div>
                <p className={`text-sm truncate ${conv.unread ? "font-semibold text-gray-800" : "text-gray-500"}`}>
                  {conv.lastMsg}
                </p>
              </div>
              {conv.unread && (
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagesPage;