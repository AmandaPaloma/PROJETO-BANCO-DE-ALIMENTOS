import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import BMALogo from './images/BMALogo.png';
import * as BsIcons from 'react-icons/bs';
import { SidebarData } from './SidebarData';
import "./Sidebar.css";
import logoutbutton from './images/logout.png';
import person from './images/person.png';
import { AuthContext } from '../../../context/Auth';


function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const renderSidebarData = (sidedata,index) =>{
    return(
      <li key={`sidedata-${sidedata.id}`} className={sidedata.cName}>
        <Link to={sidedata.path}>{sidedata.icon}<span className='menu-title'>{sidedata.title}{sidedata.icon2}</span></Link>
      </li>
    )
  }
  const{logout}=useContext(AuthContext);
  const handleLogout=() => {
    logout();
  }
  return (
    <>
      {/*<div className='bma-logo'>
        <Link to='/'> 
            <img src={BMALogo} />
        </Link>
  </div>*/}

      <div className={sidebar? 'nav-menu active' : 'nav-menu'} >
      <div className='navbar-toggle'>
        <Link to='#' className='navbar-arrow'>
           <BsIcons.BsFillArrowRightSquareFill onClick={showSidebar} />
        </Link>
      </div>

      <div className='navbar-open'>
        <Link to='#' className='navbar-arrow'>
           <BsIcons.BsFillArrowLeftSquareFill onClick={showSidebar} />
        </Link>
      </div>
      </div>      
      <nav className={sidebar? 'nav-menu active' : 'nav-menu'}>
        
        <ul className='nav-menu-items'> 
                           
          {SidebarData.map(renderSidebarData)}
         <li className='logout-text'>
         <img src = {person}/>
        <span className='menu-title'>Logout<buton className = 'logout' onClick={handleLogout}><img src={logoutbutton}/></buton></span> 
        
         </li>
        </ul>    
        
      </nav>
    </>
  )
}
       
         
        

export default Sidebar