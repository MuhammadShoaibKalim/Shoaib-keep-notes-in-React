import React from "react";
import logo from './images/google keep up notes.png';

const Header=() =>{
  return (
   <div className="header">
    <img src={logo} alt="logo" width='70' height='50'/>
   <h1>Shoaib Keep</h1>
   </div>
  );
}

export default Header;
