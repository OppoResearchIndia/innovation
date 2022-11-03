import './style.css'
import { Link, useLocation } from "react-router-dom";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react';

const Navbar = ()=>{
    const location = useLocation();
    const [mobileNavbar, setMobileNavbar] = useState(false);
    if(mobileNavbar===true){
        document.body.style.overflow = "hidden";
    }else{
        document.body.style.overflow = "scroll";
    }
    return(
        <>
            <div className='nav-main'>
                <div className='nav-logo'>
                <Link onClick={()=>setMobileNavbar(!mobileNavbar)} to={"/"} style={{textDecoration: 'none', color:'white'}}><h2>OPLUS</h2></Link>
                </div>
                <div className = {mobileNavbar === false?'nav-options mobile-nav-option':'nav-options'}>
                    <ul>
                        <li><Link className = {location.pathname==="/"? 'link curr-page':'link'} onClick={()=>setMobileNavbar(false)} to={"/"}>Home</Link></li>
                        <li><Link className={location.pathname==="/aboutus"? 'link curr-page':'link'} onClick={()=>setMobileNavbar(false)} to={"/aboutus"}>About Us</Link></li>
                        <li><Link className={location.pathname==="/research"? 'link curr-page':'link'} onClick={()=>setMobileNavbar(false)} to={"/research"}>Research</Link></li>
                        <li><Link className={location.pathname==="/contactus"? 'link curr-page':'link'} onClick={()=>setMobileNavbar(false)} to={"/contactus"}>Contact Us</Link></li>
                        <li><Link className={location.pathname==="/career"? 'link curr-page':'link'} onClick={()=>setMobileNavbar(false)} to={"/career"}>Career</Link></li>
                    </ul>
                </div>
                <div className="hamburger-menu" onClick={()=>setMobileNavbar(!mobileNavbar)}>
                    {mobileNavbar === false?<AiOutlineMenu className='hamburger-menu-icon'/>:<AiOutlineClose className='hamburger-menu-icon'/>}
                </div>
                
            </div>
        </>
    )
}
export default Navbar;