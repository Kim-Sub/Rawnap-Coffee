// 탭메뉴 컴포넌트로 사용 가능합니다.
import React, { useState, useEffect } from 'react';
import styled from "styled-components"

import Franchise1 from "./franchise/Franchise1"
import Franchise2 from "./franchise/Franchise2"
import Franchise3 from "./franchise/Franchise3"
import Franchise4 from "./franchise/Franchise4"






const StoryButton = styled.button`
   width: 17.5%; padding: 10px 0 ; margin: 50px 0;
   border-top:  1px solid #ccc; border-bottom:  1px solid #ccc;
   border-left: none; border-right: none;
   color: ${(props) => (props.isActive ? "#19660a" : "#666")};
   background-color: ${(props) => (props.isActive ? "#f0f0f0" : "#fff")};
   font-weight: ${(props) => (props.isActive ? "bold" : "unset")};
   cursor: pointer;  transition: .5s;
   font-size: 17px; font-family: 'Hahmlet', serif;
`

const Franchise = () => {
   const tab = ["가맹문의", "가맹비용", "가맹절차", "브랜드 컨셉" ,]
   const [activeTab, setActiveTab] = useState(tab[0])

   const handleTabClick = (tab) => {
      setActiveTab(tab)
   }
// 페이지 로드시 tabDiv 너비 변화 애니메이션
const [tabWidth, setTabWidth] = useState(10);
  useEffect(() => { setTabWidth(100); }, []); 


   return (
      <div id='Franchise'>
         <div className="inner">
            <h1>Franchise</h1>
            <div className='tabDiv' style={{ display: "flex", justifyContent: "center", width: `${tabWidth}%` }}>
               {tab.map((tabItem) => (
                  <StoryButton key={tabItem} onClick={() => handleTabClick(tabItem)} isActive={activeTab === tabItem}>
                     {tabItem}
                  </StoryButton>
               ))}
            </div>
         </div>

         <div className="inner">
            {activeTab === "가맹문의" && <section><Franchise1/></section>}
            {activeTab === "가맹비용" && <section><Franchise2/></section>}
            {activeTab === "가맹절차" && <section><Franchise3/></section>}
            {activeTab === "브랜드 컨셉" && <section><Franchise4/></section>}

         </div>
      </div>
   )
}

export default Franchise
