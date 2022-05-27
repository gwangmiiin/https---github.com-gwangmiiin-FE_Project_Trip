import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from 'pages/Landing';
import Profile from 'pages/Profile';
import Login from 'pages/Login';
import Register from 'pages/Register';
import ProfileFood from 'pages/ProfileFood';
import ProfilePlay from 'pages/ProfilePlay';
import RecoCourse from 'pages/RecoCourse';
import MBTI from 'pages/\bmbti/src_mbti/MBTI';

// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import 'assets/styles/bgpic.css'

function App() {
    return (
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profileFood" element={<ProfileFood />} />
            <Route path="/profilePlay" element={<ProfilePlay />} />
            <Route path="/recoCourse" element={<RecoCourse />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/mbti" element={<MBTI />} />
            <Route path="*" render={() => <Navigate to="/" />} />
        </Routes>
    );
}

export default App;
