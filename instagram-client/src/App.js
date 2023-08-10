import React from 'react';
import './App.css';
import Login from './pages/Login/index';
import SignupForm from './pages/Signup';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Menu from './Components/Menu/index';
import Post from './Components/Post/index';
import UserCard  from './Components/UserCard';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path='/signup' element={<SignupForm/>}></Route> */}
          {/* <Route path='/' element={<Login/>}></Route> */}
          {/* <Route path='/' element={<Menu />}></Route> */}
          {/* <Route path='/' element={<Post />}></Route> */}
          <Route path='/' element={<UserCard />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
