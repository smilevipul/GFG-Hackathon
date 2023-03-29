
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './App.css';
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Error from './components/Error';
import Login from './components/Sharkslogin';
import Sharkssignup from './components/Sharkssignup';

function App() {
  return (
    <>
       <Navbar/>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/about" element = {<About/>}/>
      <Route path="/contact" element = {<Contact/>}/>
      <Route path="/sharkslogin" element = {<Login/>}/>
      <Route path="/shakssignup" element = {<Sharkssignup/>}/>
      <Route path="*" element = {<Error/>}/>
    </Routes>  
    </>
  );
}

export default App;
