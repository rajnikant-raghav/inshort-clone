import React, { useState } from "react";
import logo from './logo_inshorts.png'
import '../index.css';

const Navbar = ({setCategory}) => {
    const [flag, setFlag] = useState(false)
    const category=["Business", "Entertainment", "General", "Health", "Science", "Sports", "Technology"];
     const handleClick = (e)=>{
        setCategory(e.target.id)
        }
  return (
    <>
    <div className="nav">
      <div className="menuIcon">
        <i onClick={()=>setFlag(!flag)} className="fa-solid fa-bars"></i><span>Menu</span>
      </div>
        <img className="logo" src={logo} alt="" />
    </div>
    <div className={flag?"sidebar":"hide"}>
    <i onClick={()=>setFlag(!flag)} className="fa-solid fa-xmark"></i>
        <span>Category</span>
        <div className="category">
        {
        category.map((ele,idx)=>(
            <button id={ele} key={idx} onClick={(e)=>handleClick(e)}>{ele}</button>
        ))
      }
        </div>
      
    </div>
    </>
  );
};

export default Navbar;
