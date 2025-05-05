import { useState, useRef } from 'react';
import { PhotoIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Sidebar from './Sidebar';

const CreatePost = () => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement post creation logic
    console.log({ image, caption });
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <Sidebar />
      <div className="ml-64 flex-1 p-8">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Create Post</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Image Upload */}
            <div 
              className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-indigo-500"
              onClick={() => fileInputRef.current.click()}
            >
              {image ? (
                <div className="relative">
                  <img src={image} alt="Preview" className="max-h-96 mx-auto rounded-lg" />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setImage(null);
                    }}
                    className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                  >
                    <XMarkIcon className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <PhotoIcon className="h-12 w-12 mx-auto text-gray-400" />
                  <p className="text-gray-600">Click to upload an image</p>
                  <p className="text-sm text-gray-500">or drag and drop</p>
                </div>
              )}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />
            </div>

            {/* Caption */}
            <div>
              <label htmlFor="caption" className="block text-sm font-medium text-gray-700 mb-2">
                Caption
              </label>
              <textarea
                id="caption"
                rows="4"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Write a caption..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!image}
              className={`w-full py-3 px-4 rounded-lg text-white font-medium ${
                image ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost; 