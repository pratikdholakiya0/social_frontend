import { useState } from 'react';
import { CameraIcon, PencilIcon } from '@heroicons/react/24/outline';
import Logo from './Logo';
import Sidebar from './Sidebar';
import Post from './Post';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'chintan bhutiya',
    username: '@chintu69',
    bio: 'Digital creator | Coding enthusiast | Coffee lover',
    location: 'porbandar, Gujarat',
    website: 'chintan.com',
    followers: 1250,
    following: 450,
    posts: 69
  });

  // Sample posts data
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        name: 'chintan bhutiya',
        avatar: 'https://images.hdqwalls.com/download/son-goku-dragon-ball-super-5k-anime-1a-2048x2048.jpg'
      },
      content: 'Just finished my latest photography project! Check it out!',
      image: 'https://th.bing.com/th/id/OIP.twShHXy5ikGjP-cjGlsVFQHaEK?cb=iwp1&rs=1&pid=ImgDetMain',
      timestamp: '2 hours ago',
      likes: 245,
      comments: [
        {
          user: {
            name: 'pratik dholakiya',
            avatar: 'https://yt3.ggpht.com/a/AGF-l79pRkJMjEmWQJSyNfBDcOW2j6Tj_YsxySycFA=s900-c-k-c0xffffffff-no-rj-mo'
          },
          text: 'chintan taro photo mast aavyo chhe',
          timestamp: '1 hour ago'
        }
      ],
      shares: 12
    },
    {
      id: 2,
      user: {
        name: 'John Doe',
        avatar: 'https://images.hdqwalls.com/download/son-goku-dragon-ball-super-5k-anime-1a-2048x2048.jpg'
      },
      content: 'Beautiful sunset at the beach today 🌅',
      image: 'https://th.bing.com/th/id/R.04d26daf397bd912f958423ca939b828?rik=cJi6xNuf7teVrg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fAwesome-Sunset-Beaches-Backgrounds.jpg&ehk=QyLtFSgSQ6UB9oVUM%2bML72Uhj%2fLvvi%2blldGWRMe%2fHl8%3d&risl=&pid=ImgRaw&r=0',
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
                    src="https://images.hdqwalls.com/download/son-goku-dragon-ball-super-5k-anime-1a-2048x2048.jpg"
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