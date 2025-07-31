import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import About from './components/About/About'
import Contact from './components/contact/Contact'
import Service from './components/Service/Service'
import {Routes,Route} from 'react-router-dom'
import { Link } from 'react-router-dom'
import Login  from './components/login/Login'
import Trip from "./components/Trip/TripPlanner";
import "./firebaseConfig"; // or wherever you stored it

// import SearchForm from "./components/Trip/SearchForm";



function App() {
  // const [count, setCount] = useState(0)
 

  return (
    
    <>
     {/* <nav>
   <Link to="/" >Home</Link>
    <Link to="/About" >    About</Link>
     <Link to="/Contact" >   Contact</Link>
      <Link to="/Service" >   Service</Link>
  </nav> */}

      <nav className="navbar">
     <img src="logo.png" alt="" />
      <div className="logo"><i>Explore world with Bhaskar Tours</i></div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/Service">Service</Link></li>
         <li><Link to="/Login">Login</Link></li>
      </ul>
    </nav>

     <Routes>
      <Route path="" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Service" element={<Service/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Trip" element={<Trip />} />


      
     </Routes>
    
    </>

  )
}

export default App;
