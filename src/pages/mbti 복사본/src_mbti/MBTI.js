import './App.css';
import Home from './pages/Home';
import Question from './pages/Question';
import Result from './pages/Result';
import { Route, Router} from 'react-router-dom'

function MBTI() {
  return (
    <>
      <Router>
        <Route path='/' element={<Home />} />
        <Route path='/qustion' element={<Question />} />
        <Route path='/result' element={ <Result />} />      
      </Router>
    </>
  );
}

export default MBTI;