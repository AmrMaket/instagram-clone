import React from 'react';
import './App.css';
import Login from './pages/Login/index';
import SignupForm from './pages/Signup';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/signup' element={<SignupForm/>}></Route>
          <Route path='/' element={<Login/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
