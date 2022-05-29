import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from 'pages/Landing';
import Profile from 'pages/Profile';
import Login from 'pages/Login';
import Register from 'pages/Register';
import ProfileFood from 'pages/ProfileFood';
import ProfilePlay from 'pages/ProfilePlay';
import RecoCourse from 'pages/RecoCourse';
import MBTI from 'pages/\bmbti/src_mbti/MBTI';
import Course1 from 'components/reco_course/courses/Course1';
import Course2 from 'components/reco_course/courses/Course2';
import Course3 from 'components/reco_course/courses/Course3';
import Course4 from 'components/reco_course/courses/Course4';
import Course5 from 'components/reco_course/courses/Course5';
import Course6 from 'components/reco_course/courses/Course6';

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
            <Route path='/course1' element={<Course1/>} />
            <Route path='/course2' element={<Course2/>} />
            <Route path='/course3' element={<Course3/>} />
            <Route path='/course4' element={<Course4/>} />
            <Route path='/course5' element={<Course5/>} />
            <Route path='/course6' element={<Course6/>} />
            <Route path="*" render={() => <Navigate to="/" />} />
        </Routes>
    );
}

export default App;