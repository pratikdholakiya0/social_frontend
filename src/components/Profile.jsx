import { useState } from 'react';
import { CameraIcon, PencilIcon } from '@heroicons/react/24/outline';
import Logo from './Logo';
import Sidebar from './Sidebar';
import Post from './Post';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    username: '@johndoe',
    bio: 'Digital creator | Photography enthusiast | Coffee lover',
    location: 'New York, USA',
    website: 'johndoe.com',
    followers: 1250,
    following: 450,
    posts: 89
  });

  // Sample posts data
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        name: 'John Doe',
        avatar: 'https://via.placeholder.com/40'
      },
      content: 'Just finished my latest photography project! Check it out!',
      image: 'https://via.placeholder.com/600x400',
      timestamp: '2 hours ago',
      likes: 245,
      comments: [
        {
          user: {
            name: 'Jane Smith',
            avatar: 'https://via.placeholder.com/32'
          },
          text: 'Amazing work! The composition is perfect.',
          timestamp: '1 hour ago'
        }
      ],
      shares: 12
    },
    {
      id: 2,
      user: {
        name: 'John Doe',
        avatar: 'https://via.placeholder.com/40'
      },
      content: 'Beautiful sunset at the beach today 🌅',
      image: 'https://via.placeholder.com/600x400',
      timestamp: '1 day ago',
      likes: 189,
      comments: [],
      shares: 5
    }
  ]);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, likes: post.likes + 1 }
        : post
    ));
  };

  const handleComment = (postId, commentText) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? {
            ...post,
            comments: [
              ...post.comments,
              {
                user: {
                  name: 'John Doe',
                  avatar: 'https://via.placeholder.com/32'
                },
                text: commentText,
                timestamp: 'Just now'
              }
            ]
          }
        : post
    ));
  };

  const handleShare = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, shares: post.shares + 1 }
        : post
    ));
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 ml-64 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Info Card */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <button className="absolute bottom-0 right-0 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700">
                    <CameraIcon className="h-4 w-4" />
                  </button>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{profileData.name}</h1>
                  <p className="text-gray-600">{profileData.username}</p>
                </div>
              </div>
              <button
                onClick={handleEdit}
                className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                <PencilIcon className="h-5 w-5" />
                <span>{isEditing ? 'Save Changes' : 'Edit Profile'}</span>
              </button>
            </div>

            {isEditing ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={profileData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Bio</label>
                  <textarea
                    name="bio"
                    value={profileData.bio}
                    onChange={handleChange}
                    rows="3"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={profileData.location}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Website</label>
                  <input
                    type="text"
                    name="website"
                    value={profileData.website}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-gray-700">{profileData.bio}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>{profileData.location}</span>
                  <a href={`https://${profileData.website}`} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700">
                    {profileData.website}
                  </a>
                </div>
                <div className="flex items-center space-x-6 pt-4">
                  <div>
                    <span className="font-semibold">{profileData.posts}</span>
                    <span className="text-gray-600 ml-2">Posts</span>
                  </div>
                  <div>
                    <span className="font-semibold">{profileData.followers}</span>
                    <span className="text-gray-600 ml-2">Followers</span>
                  </div>
                  <div>
                    <span className="font-semibold">{profileData.following}</span>
                    <span className="text-gray-600 ml-2">Following</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Posts Section */}
          <div className="space-y-4">
            {posts.map(post => (
              <Post
                key={post.id}
                post={post}
                onLike={handleLike}
                onComment={handleComment}
                onShare={handleShare}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 