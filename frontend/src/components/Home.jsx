import React from 'react'
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
import Footer from './Footer';
import himg  from "../images/about1.png";

const Home = () => {
  return (
    <>
    <div className="hmain">
    <div className='hsec_1'>
    <h1>Now Every Entrepreneurs Get Investment</h1>
        <h2> & </h2>
    <h1>Everyone Can Be A Sharks</h1>    
    <div className="btns">
    <Button variant="outlined" color="success" className='btn' >
        <NavLink to="/sharkslogin" className="btnlink" >Sharks Login/SignUp </NavLink>
    </Button>
        <Button variant="outlined" color="success" className='btn'>
        <NavLink to="/eplogin" className="btnlink">  Entrepreneurs Login/SignUp</NavLink>
        </Button>
    </div>   
    </div>
    <div className='hright'>
    </div>
       <img className='homeimg' src={himg} alt="homeimg"/>
    </div>
    <Footer/>
 
    
    </>
  )
}

export default Home