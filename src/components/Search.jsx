import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Sidebar from './Sidebar';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Mock search results - replace with actual API call
  const mockUsers = [
    { id: 1, username: '@johndoe', name: 'John Doe', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: 2, username: '@janedoe', name: 'Jane Doe', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { id: 3, username: '@alexsmith', name: 'Alex Smith', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // In a real app, this would be an API call
    const results = mockUsers.filter(user => 
      user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <Sidebar />
      <div className="ml-64 flex-1 p-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Search Users</h2>
          
          {/* Search Form */}
          <form onSubmit={handleSearch} className="mb-8">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by username or name..."
                className="w-full px-4 py-3 pl-12 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
            </div>
          </form>

          {/* Search Results */}
          <div className="space-y-4">
            {searchResults.map((user) => (
              <div key={user.id} className="bg-white rounded-xl shadow-md p-4 flex items-center">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">{user.name}</h3>
                  <p className="text-indigo-600">{user.username}</p>
                </div>
                <button className="ml-auto px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">
                  Follow
                </button>
              </div>
            ))}
          </div>

          {/* No Results */}
          {searchQuery && searchResults.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-600">No users found matching "{searchQuery}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search; 