import React from "react"
import {NavLink} from 'react-router-dom';
import ScrollPosition from "../hook/ScrollPosition";



const Nav = () => {
   const scrollPosition = ScrollPosition()

   // CSS 위치적인 요소만 미리 작성되었으므로, 컬러나 폰트 사이즈 수정 必
   const NobackNav = 
   {height: '90px', width: '100%', boxSizing: 'border-box' , padding: '0 20% 0 20%',
   position: 'fixed', top: '0', left: '0', display: 'flex', justifyContent: 'space-between'};

   const h1 = 
   {width: '25%', height: '90px',}
   const a = 
   {height: '90px', width: '100%', display: 'flex', alignItems: 'center',}
/*    const logoImg = 
   {height: '70px',} */
   const nav = 
   {width: '75%', display: 'flex', alignItems: 'center', justifyContent: 'space-around',}

   // 활성화된 메뉴 컬러
   const activeStyle={
      color:'#1c5710', 
  }   
  

   return (
      <div id='Nav' style={NobackNav} className={scrollPosition >= 100 ? 'changeWhite' : 'changeWhite'}>
         {/* ↑ 위 부분 : 뒷부분 changeWhite 지우면 작동 가능   */}
            {/* 로고 */}
            <h1 style={h1}>
               <NavLink to='/' style={a}>
                  Raw Nap Coffee Haus.
                  {/* <img src={require("../img/")} alt="logoImage" style={logoImg} className={scrollPosition >= 800 ? 'invert' : ''} /> */}
               </NavLink>
            </h1>
            {/* 네비 */}
            <ul className="nav" style={nav}>
                <li><NavLink to="/" style={({isActive}) => (isActive ? activeStyle: undefined)}>Main</NavLink></li>
                <li><NavLink to="/Story" style={({isActive}) => (isActive ? activeStyle: undefined)}>Story</NavLink></li>
                <li><NavLink to="/Menu" style={({isActive}) => (isActive ? activeStyle: undefined)}>Menu</NavLink></li>
                <li><NavLink to="/Branch" style={({isActive}) => (isActive ? activeStyle: undefined)}>Branch</NavLink></li>
                <li><NavLink to="/Franchise" style={({isActive}) => (isActive ? activeStyle: undefined)}>Franchise</NavLink></li>
            </ul>
      </div>
   )
}

export default Nav
