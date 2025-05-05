import { FiSearch, FiHeart, FiUserPlus, FiMessageCircle } from 'react-icons/fi';
import Sidebar from './Sidebar';

const NotificationsPage = () => {
  const notifications = [
    {
      id: 1,
      type: "like",
      user: "Alex Johnson",
      username: "@alexj",
      action: "liked your post",
      time: "2 hours ago",
      read: false
    },
    {
      id: 2,
      type: "friend",
      user: "Sarah Miller",
      username: "@sarahm",
      action: "sent you a friend request",
      time: "5 hours ago",
      read: true
    },
    {
      id: 3,
      type: "comment",
      user: "Jamie Wilson",
      username: "@jamiew",
      action: "commented on your photo",
      time: "1 day ago",
      read: true
    },
  ];

  const getIcon = (type) => {
    switch(type) {
      case "like": return <FiHeart className="text-red-500" />;
      case "friend": return <FiUserPlus className="text-blue-500" />;
      case "comment": return <FiMessageCircle className="text-green-500" />;
      default: return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Sidebar />
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Notifications</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search notifications..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {notifications.map((notif) => (
          <div 
            key={notif.id} 
            className={`p-4 rounded-lg flex items-start ${
              notif.read ? "bg-white" : "bg-blue-50"
            } border border-gray-100`}
          >
            <div className="mr-3 mt-1">
              {getIcon(notif.type)}
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <div>
                  <span className="font-bold">{notif.user}</span> {notif.action}
                </div>
                <span className="text-sm text-gray-500">{notif.time}</span>
              </div>
              <p className="text-sm text-gray-500">{notif.username}</p>
            </div>
            {!notif.read && (
              <div className="w-2 h-2 bg-blue-500 rounded-full ml-2 mt-2"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsPage;