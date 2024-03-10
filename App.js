import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import CreatePost from './Pages/CreatePost'
import { useState } from 'react'
import {signOut} from 'firebase/auth'
import { auth } from './Firebase-config';
import {setIsAuth} from './Firebase-config'
function App() {
  const[isAuth,setIsAuth] = useState(localStorage.getItem('isAuth'));
 
  const  signUserOut= () =>{
  signOut(auth).then(()=>{
    localStorage.clear();
  setIsAuth(false);
  window.location.pathname='/login';
  });
}
  return (
    <div className="App">
      
      <Router>
        <nav>
          <Link to="/">Home</Link> 
         {!isAuth ? <Link to="/Login">Login</Link> :
         <>
         <Link to="/createpost">Createpost</Link>
         <button onClick={signUserOut}>Sign Out</button>
         
          </>}
        </nav>
        <Routes>
          <Route path="/" element={<Home isAuth={isAuth}/>}/>
          <Route path="/Login" element={<Login setIsAuth={setIsAuth} />}/>
          <Route path="/CreatePost" element={<CreatePost isAuth ={setIsAuth} />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
