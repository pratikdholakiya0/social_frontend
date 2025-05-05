import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Profile from './components/Profile';
import CreatePost from './components/CreatePost';
import Stories from './components/Stories';
import Search from './components/Search';
import Home from './components/Home';
import FriendsPage from './components/Friend';
import NotificationsPage from './components/Notification';
import MessagesPage from './components/Message';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/messages" element={<MessagesPage/>} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App; 