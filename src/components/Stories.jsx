import { useState, useRef } from 'react';
import { PhotoIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Sidebar from './Sidebar';

const Stories = () => {
  const [stories, setStories] = useState([]);
  const [newStory, setNewStory] = useState(null);
  const fileInputRef = useRef(null);

  const handleStoryUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewStory({
          id: Date.now(),
          image: reader.result,
          timestamp: Date.now(),
          expiresAt: Date.now() + 24 * 60 * 60 * 1000 // 24 hours from now
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddStory = () => {
    if (newStory) {
      setStories([...stories, newStory]);
      setNewStory(null);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <Sidebar />
      <div className="ml-64 flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Stories</h2>
          
          {/* Create Story */}
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Create New Story</h3>
            <div 
              className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-indigo-500"
              onClick={() => fileInputRef.current.click()}
            >
              {newStory ? (
                <div className="relative">
                  <img src={newStory.image} alt="Preview" className="max-h-96 mx-auto rounded-lg" />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setNewStory(null);
                    }}
                    className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                  >
                    <XMarkIcon className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <PhotoIcon className="h-12 w-12 mx-auto text-gray-400" />
                  <p className="text-gray-600">Click to upload a story</p>
                  <p className="text-sm text-gray-500">or drag and drop</p>
                </div>
              )}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleStoryUpload}
                accept="image/*"
                className="hidden"
              />
            </div>
            {newStory && (
              <button
                onClick={handleAddStory}
                className="mt-4 w-full py-3 px-4 rounded-lg text-white font-medium bg-indigo-600 hover:bg-indigo-700"
              >
                Add to Story
              </button>
            )}
          </div>

          {/* Active Stories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((story) => (
              <div key={story.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative">
                  <img src={story.image} alt="Story" className="w-full h-64 object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                    <p className="text-white text-sm">
                      Expires in: {Math.round((story.expiresAt - Date.now()) / (60 * 60 * 1000))} hours
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories; 