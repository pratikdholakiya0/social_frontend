import { useState } from 'react';
import { 
  HeartIcon, 
  ChatBubbleLeftIcon, 
  ShareIcon,
  FaceSmileIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

const Post = ({ post, onLike, onComment, onShare }) => {
  const [commentText, setCommentText] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  const [localLikes, setLocalLikes] = useState(post.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLocalLikes(prev => isLiked ? prev - 1 : prev + 1);
    onLike(post.id, !isLiked);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      onComment(post.id, commentText);
      setCommentText('');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      {/* Post Header */}
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={post.user.avatar}
          alt={post.user.name}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h3 className="font-semibold text-gray-900">{post.user.name}</h3>
          <p className="text-sm text-gray-500">{post.timestamp}</p>
        </div>
      </div>

      {/* Post Content */}
      <p className="text-gray-800 mb-4">{post.content}</p>
      {post.image && (
        <img
          src={post.image}
          alt="Post content"
          className="w-full rounded-lg mb-4"
        />
      )}

      {/* Post Actions */}
      <div className="flex items-center justify-between border-t border-b py-3 mb-4">
        <button
          onClick={handleLike}
          className={`flex items-center space-x-2 transition-colors duration-200 ${
            isLiked ? 'text-red-500 hover:text-red-600' : 'text-gray-500 hover:text-red-500'
          }`}
        >
          {isLiked ? (
            <HeartIconSolid className="h-6 w-6" />
          ) : (
            <HeartIcon className="h-6 w-6" />
          )}
          <span className="font-medium">{localLikes}</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-500 hover:text-indigo-500 transition-colors duration-200">
          <ChatBubbleLeftIcon className="h-6 w-6" />
          <span className="font-medium">{post.comments.length}</span>
        </button>
        <button
          onClick={() => onShare(post.id)}
          className="flex items-center space-x-2 text-gray-500 hover:text-indigo-500 transition-colors duration-200"
        >
          <ShareIcon className="h-6 w-6" />
          <span className="font-medium">{post.shares}</span>
        </button>
      </div>

      {/* Comments Section */}
      <div className="space-y-4">
        {post.comments.map((comment, index) => (
          <div key={index} className="flex items-start space-x-3">
            <img
              src={comment.user.avatar}
              alt={comment.user.name}
              className="w-8 h-8 rounded-full"
            />
            <div className="flex-1">
              <div className="bg-gray-50 rounded-2xl px-4 py-2">
                <p className="font-semibold text-sm">{comment.user.name}</p>
                <p className="text-gray-700">{comment.text}</p>
              </div>
              <p className="text-xs text-gray-500 mt-1">{comment.timestamp}</p>
            </div>
          </div>
        ))}

        {/* Comment Input */}
        <form onSubmit={handleCommentSubmit} className="flex items-center space-x-3">
          <img
            src="https://images.hdqwalls.com/download/son-goku-dragon-ball-super-5k-anime-1a-2048x2048.jpg"
            alt="Your Profile"
            className="w-8 h-8 rounded-full"
          />
          <div className="flex-1 relative">
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Write a comment..."
              className="w-full bg-gray-50 rounded-full px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-indigo-500"
            >
              <FaceSmileIcon className="h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Post; 