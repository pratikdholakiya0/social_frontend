import { FiSearch, FiUserPlus } from 'react-icons/fi';
import Sidebar from './Sidebar';

const FriendsPage = () => {
  const friends = [
    { id: 1, name: "Alex Johnson", username: "@alexj", mutual: 12, online: true },
    { id: 2, name: "Sarah Miller", username: "@sarahm", mutual: 5, online: false },
    { id: 3, name: "Jamie Wilson", username: "@jamiew", mutual: 8, online: true },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4">
        <Sidebar/>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Friends</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search friends..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      {/* Friends List */}
      <div className="space-y-4">
        {friends.map((friend) => (
          <div key={friend.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold">
                  {friend.name.charAt(0)}
                </div>
                {friend.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-bold">{friend.name}</h3>
                <p className="text-gray-500 text-sm">{friend.username}</p>
                <p className="text-gray-500 text-sm">{friend.mutual} mutual friends</p>
              </div>
              <button className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center">
                <FiUserPlus className="mr-1" /> Follow
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsPage;