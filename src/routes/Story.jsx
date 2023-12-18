// 탭메뉴 컴포넌트로 사용 가능합니다.
import React, { useState, useEffect } from 'react';
import styled from "styled-components"

import Story1 from "./story/Story1"
import Story2 from "./story/Story2"
import Story3 from "./story/Story3"




const StoryButton = styled.button`
   width: 25%; padding: 10px 0 ; margin: 50px 0;
   border-top:  1px solid #ccc; border-bottom:  1px solid #ccc;
   border-left: none; border-right: none;
   color: ${(props) => (props.isActive ? "#19660a" : "#666")};
   background-color: ${(props) => (props.isActive ? "#f0f0f0" : "#fff")};
   font-weight: ${(props) => (props.isActive ? "bold" : "unset")};
   cursor: pointer;  transition: .5s;
   font-size: 20px; font-family: 'Dai Banna SIL', serif;
`

const Story = () => {
const tab = ["From the farm", "Specialty coffee beans", "Good blending"]
   const [activeTab, setActiveTab] = useState(tab[0])
   const handleTabClick = (tab) => {
      setActiveTab(tab)
   }

// 페이지 로드시 tabDiv 너비 변화 애니메이션
const [tabWidth, setTabWidth] = useState(10);
  useEffect(() => { setTabWidth(100); }, []); 


   return (
      <div id='Story'>
      <div className="inner">
        <h1>Coffee Story</h1>
        <div className='tabDiv' style={{ display: "flex", justifyContent: "center", width: `${tabWidth}%` }}>
          {tab.map((tabItem) => (
            <StoryButton key={tabItem} onClick={() => handleTabClick(tabItem)} isActive={activeTab === tabItem}>
              {tabItem}
            </StoryButton>
          ))}
        </div>
      </div>

      <div className="inner">
        {activeTab === "From the farm" && <section><Story1 /></section>}
        {activeTab === "Specialty coffee beans" && <section><Story2 /></section>}
        {activeTab === "Good blending" && <section><Story3 /></section>}
      </div>
    </div>
   )
}

export default Story
