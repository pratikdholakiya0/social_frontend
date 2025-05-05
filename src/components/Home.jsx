import { useState } from 'react';
import { 
  PhotoIcon, 
  VideoCameraIcon, 
  FaceSmileIcon,
  MapPinIcon,
  UserGroupIcon,
  CalendarIcon,
  SparklesIcon,
  PlusCircleIcon
} from '@heroicons/react/24/outline';
import Sidebar from './Sidebar';
import Post from './Post';

const Home = () => {
  // Sample friends' posts data
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        name: 'Sarah Johnson',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
      },
      content: 'Had an amazing time at the concert last night! 🎵 The energy was incredible!',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      timestamp: '3 hours ago',
      likes: 156,
      comments: [
        {
          user: {
            name: 'Mike Wilson',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
          },
          text: 'Looks like a great show! Wish I was there!',
          timestamp: '2 hours ago'
        }
      ],
      shares: 8
    },
    {
      id: 2,
      user: {
        name: 'Alex Chen',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
      },
      content: 'Just finished my new painting. What do you think? 🎨',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      timestamp: '5 hours ago',
      likes: 89,
      comments: [],
      shares: 3
    }
  ]);

  const [newPostContent, setNewPostContent] = useState('');
  const [newPostImage, setNewPostImage] = useState(null);

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
                  name: 'You',
                  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
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

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (newPostContent.trim() || newPostImage) {
      const newPost = {
        id: posts.length + 1,
        user: {
          name: 'You',
          avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
        },
        content: newPostContent,
        image: newPostImage,
        timestamp: 'Just now',
        likes: 0,
        comments: [],
        shares: 0
      };
      setPosts([newPost, ...posts]);
      setNewPostContent('');
      setNewPostImage(null);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPostImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Sample suggestions data
  const [suggestions, setSuggestions] = useState([
    {
      id: 1,
      name: 'Emma Wilson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      mutualFriends: 3,
      isFollowing: false
    },
    {
      id: 2,
      name: 'James Brown',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      mutualFriends: 5,
      isFollowing: false
    },
    {
      id: 3,
      name: 'Sophia Lee',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      mutualFriends: 2,
      isFollowing: false
    }
  ]);

  const handleFollow = (suggestionId) => {
    setSuggestions(suggestions.map(suggestion => 
      suggestion.id === suggestionId 
        ? { ...suggestion, isFollowing: true }
        : suggestion
    ));
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 ml-64">
        <div className="max-w-2xl mx-auto px-4 py-8 mr-[336px]">
          {/* Stories Section */}
          <div className="bg-white rounded-2xl shadow-sm p-4 mb-6 overflow-x-auto">
            <div className="flex space-x-4">
              <div className="flex flex-col items-center">
                <div className="relative">
                  <img
                    src="https://images.hdqwalls.com/download/son-goku-dragon-ball-super-5k-anime-1a-2048x2048.jpg"
                    alt="Your Story"
                    className="w-16 h-16 rounded-full border-4 border-indigo-500"
                  />
                  <div className="absolute bottom-0 right-0 bg-indigo-500 text-white rounded-full p-1">
                    <PlusCircleIcon className="h-4 w-4" />
                  </div>
                </div>
                <span className="text-xs mt-1">Your Story</span>
              </div>
              {[1, 2, 3, 4, 5].map((story) => (
                <div key={story} className="flex flex-col items-center">
                  <img
                    src={`https://static.vecteezy.com/system/resources/previews/036/280/650/large_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg`}
                    alt={`Story ${story}`}
                    className="w-16 h-16 rounded-full border-4 border-indigo-500"
                  />
                  <span className="text-xs mt-1">Friend {story}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Create Post */}
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="https://images.hdqwalls.com/download/son-goku-dragon-ball-super-5k-anime-1a-2048x2048.jpg"
                alt="Your Profile"
                className="w-10 h-10 rounded-full"
              />
              <form onSubmit={handleCreatePost} className="flex-1">
                <input
                  type="text"
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                  placeholder="What's on your mind?"
                  className="w-full bg-gray-50 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </form>
            </div>
            {newPostImage && (
              <div className="relative mb-4">
                <img
                  src={newPostImage}
                  alt="Preview"
                  className="w-full rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => setNewPostImage(null)}
                  className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}
            <div className="flex items-center justify-between border-t pt-4">
              <div className="flex space-x-4">
                <label className="flex items-center space-x-2 text-gray-500 hover:text-indigo-600 cursor-pointer">
                  <PhotoIcon className="h-6 w-6" />
                  <span>Photo</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
                <button className="flex items-center space-x-2 text-gray-500 hover:text-indigo-600">
                  <VideoCameraIcon className="h-6 w-6" />
                  <span>Video</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-500 hover:text-indigo-600">
                  <FaceSmileIcon className="h-6 w-6" />
                  <span>Feeling</span>
                </button>
              </div>
              <button
                type="submit"
                disabled={!newPostContent.trim() && !newPostImage}
                className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                Post
              </button>
            </div>
          </div>

          {/* Posts Feed */}
          <div className="space-y-6">
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

        {/* Right Sidebar */}
        <div className="fixed right-8 top-8 w-80 space-y-4">
          {/* Birthday Section */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 bg-blue-50 rounded-xl">
                <CalendarIcon className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Birthdays</h3>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Alex Chen</span> and <span className="font-semibold">2 others</span> have birthdays today.
              </p>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold transition-colors duration-200">
                Send Wishes
              </button>
            </div>
          </div>

          {/* Suggestions Section */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Suggestions For You</h3>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold transition-colors duration-200">
                See All
              </button>
            </div>
            <div className="space-y-4">
              {suggestions.map((suggestion) => (
                <div key={suggestion.id} className="flex items-center justify-between group">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img
                        src={suggestion.avatar}
                        alt={suggestion.name}
                        className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1 border-2 border-white">
                        <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                        {suggestion.name}
                      </p>
                      <p className="text-xs text-gray-500">{suggestion.mutualFriends} mutual friends</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleFollow(suggestion.id)}
                    className={`text-sm font-semibold px-4 py-1.5 rounded-lg transition-all duration-200 ${
                      suggestion.isFollowing
                        ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md'
                    }`}
                  >
                    {suggestion.isFollowing ? 'Following' : 'Follow'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="text-xs text-gray-500 space-y-2 px-1">
            <div className="flex flex-wrap gap-x-3 gap-y-1.5">
              <a href="#" className="hover:underline hover:text-gray-600 transition-colors duration-200">About</a>
              <a href="#" className="hover:underline hover:text-gray-600 transition-colors duration-200">Help</a>
              <a href="#" className="hover:underline hover:text-gray-600 transition-colors duration-200">Privacy</a>
              <a href="#" className="hover:underline hover:text-gray-600 transition-colors duration-200">Terms</a>
              <a href="#" className="hover:underline hover:text-gray-600 transition-colors duration-200">Advertising</a>
              <a href="#" className="hover:underline hover:text-gray-600 transition-colors duration-200">Ad Choices</a>
            </div>
            <p className="text-gray-400">© 2024 Buzzly</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 