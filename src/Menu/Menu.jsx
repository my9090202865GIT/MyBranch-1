import "./Menu.css";
import React from "react";
import {BrowserRouter,Link,Routes,Route,Navigate} from 'react-router-dom'
import {Home} from '../Home';
import {About} from '../About'
import {Contact} from '../Contact'

function template() {
  const {menuItem,isMobileView,left}= this.state
  return (
     <div>

        {isMobileView && <button onClick={this.fnMobileMenuBtnClick} className='mobile-menu-btn'>menu</button>}
        <BrowserRouter>

            <ul style={{left:left}} onClick={this.fnMenuClick} className={isMobileView ? 'mobile-menu':'menu'}>
               <li  className={menuItem == 'H' && 'menu-active'}><Link id='H' to='home'>Home</Link></li>
               <li  className={menuItem == 'A' && 'menu-active'}><Link id='A' to='about'>About</Link></li>
               <li  className={menuItem == 'C' && 'menu-active'}><Link id='C' to='contact'>Contact</Link></li>
            </ul>

            <Routes>
               <Route path='/home' element={<Home />} />
               <Route path='/about' element={<About />} />
               <Route path='/contact' element={<Contact />} />
               <Route path='*' element={<Navigate to='home' />} />
            </Routes>

        </BrowserRouter>
       
       
    </div>
  );
};

export default template;
