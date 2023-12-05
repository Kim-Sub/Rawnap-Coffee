import React from 'react';
import { Link } from 'react-router-dom';


// 아이콘 import
import { SiNaver } from "react-icons/si"; 
import { AiFillInstagram } from "react-icons/ai"; 
import { AiFillMail } from "react-icons/ai"; 


const Footer = () => {
   return (
      <footer id='Footer'>
         <div className='inner'>

            <div className='footerLeft'>
               <h1 className='en'>Raw Nap Coffee Haus.</h1>
               <p>(주) 샬로우커피</p>
               <p>울산 남구 달삼로23번길 8</p>
               <p>TEL :　1234 - 5678</p>
               <span>이메일무단수집거부</span> <br />
               <span>개인정보처리방침</span>
            </div>

            <div className='footerRight'>
               <ul>
                  {/* 가맹문의 */}
                  <li><Link to='/Franchise'><AiFillMail /></Link></li>
                  {/* 인스타 eslint-disable-next-line  */}
                  <li><a href='https://instagram.com/offtotheshallow/' target='_blank' rel='noopener noreferrer'><AiFillInstagram /></a></li>
                  {/* 네이버 블로그 eslint-disable-next-line  */}
                  <li><a href='https://www.naver.com/' target='_blank' rel='noopener noreferrer'><SiNaver className='naver' /></a></li>
               </ul>
            </div>
         </div>

         <span>Copyright © 2023 SHALLOW COFFEE. All Rights Reserved</span>

      </footer>
   );
};

export default Footer;