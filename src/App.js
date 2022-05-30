import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from 'pages/Landing';
import Profile from 'pages/Profile';
import Login from 'pages/Login';
import Register from 'pages/Register';
import ProfileFood from 'pages/ProfileFood';
import ProfilePlay from 'pages/ProfilePlay';
import RecoCourse from 'pages/RecoCourse';
import Courses1 from 'pages/Course1';
import Courses2 from 'pages/Course2';
import Courses3 from 'pages/Course3';

// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import 'assets/styles/bgpic.css'

function App() {
    return (
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/profileFood" component={ProfileFood} />
            <Route exact path="/profilePlay" component={ProfilePlay} />
            <Route exact path="/recoCourse" component={RecoCourse} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/courses1" component={Courses1} />
            <Route exact path="/courses2" component={Courses2} />
            <Route exact path="/courses3" component={Courses3} />
            <Redirect from="*" to="/" />
        </Switch>
    );
}

export default App;
