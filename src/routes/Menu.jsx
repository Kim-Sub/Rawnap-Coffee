// 탭메뉴 컴포넌트로 사용 가능합니다.
import React, { useState, useEffect } from 'react';
import styled from "styled-components"

import Menu1 from "./menu/Menu1"
import Menu2 from "./menu/Menu2"
import Menu3 from "./menu/Menu3"
import Menu4 from "./menu/Menu4"
import Menu5 from "./menu/Menu5"




const StoryButton = styled.button`
   width: 17.5%; padding: 10px 0 ; margin: 50px 0;
   border-top:  1px solid #ccc; border-bottom:  1px solid #ccc;
   border-left: none; border-right: none;
   color: ${(props) => (props.isActive ? "#19660a" : "#666")};
   background-color: ${(props) => (props.isActive ? "#f0f0f0" : "#fff")};
   font-weight: ${(props) => (props.isActive ? "bold" : "unset")};
   cursor: pointer;  transition: .5s;
   font-size: 20px; font-family: 'Dai Banna SIL', serif;
`

const Menu = () => {
   const tab = ["SIGNATURE", "COFFEE", "NON COFFEE", "TEA" ,"BAKERY"]
   const [activeTab, setActiveTab] = useState(tab[0])

   const handleTabClick = (tab) => {
      setActiveTab(tab)
   }
// 페이지 로드시 tabDiv 너비 변화 애니메이션
const [tabWidth, setTabWidth] = useState(10);
  useEffect(() => { setTabWidth(100); }, []); 

   return (
      <div id='Menu'>
         <div className="inner">
            <h1>Raw Nap MENU</h1>
            <div className='tabDiv' style={{ display: "flex", justifyContent: "center", width: `${tabWidth}%` }}>
               {tab.map((tabItem) => (
                  <StoryButton key={tabItem} onClick={() => handleTabClick(tabItem)} isActive={activeTab === tabItem}>
                     {tabItem}
                  </StoryButton>
               ))}
            </div>
         </div>

         <div className="inner">
            {activeTab === "Menu1" && <section><Menu1/></section>}
            {activeTab === "Menu2" && <section><Menu2/></section>}
            {activeTab === "Menu3" && <section><Menu3/></section>}
            {activeTab === "Menu4" && <section><Menu4/></section>}
            {activeTab === "Menu5" && <section><Menu5/></section>}

         </div>
      </div>
   )
}

export default Menu
