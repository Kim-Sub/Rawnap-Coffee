import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';
import Refuseemailcollect from "./footer/Refuse-emailcollect";
import Privacypolicy from "./footer/Privacy-policy";


// 아이콘 import
import { SiNaver } from "react-icons/si"; 
import { AiFillInstagram } from "react-icons/ai"; 
import { AiFillMail } from "react-icons/ai"; 



const Footer = () => {
   // 모달 상태관리 1,2,3
   const [isModalOpen1, setIsModalOpen1] = useState(false);
   const [isModalOpen2, setIsModalOpen2] = useState(false);
   const [isModalOpen3, setIsModalOpen3] = useState(false);
   const handleOpenModal1 = () => {
     setIsModalOpen1(true);
   };
   const handleCloseModal1 = () => {
     setIsModalOpen1(false);
   };
   const handleOpenModal2 = () => {
     setIsModalOpen2(true);
   };
   const handleCloseModal2 = () => {
     setIsModalOpen2(false);
   };
   const handleOpenModal3 = () => {
     setIsModalOpen3(true);
   };
   const handleCloseModal3 = () => {
     setIsModalOpen3(false);
   };

   return (
      <footer id='Footer'>
         <div className='inner'>

            <div className='footerLeft'>
               <h1 className='en'>Raw Nap Coffee Haus.</h1>
               <p>(주) 샬로우커피</p>

               {/* 주소와 지도 팝업 */}
               <span className='address' onClick={handleOpenModal1}>울산 남구 달삼로23번길 8</span>
               <Modal isOpen={isModalOpen1} onClose={handleCloseModal1} content={
                  <iframe
                  //src는 구글 지도에서 공유 - 지도퍼가기 방식입니다.
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.7049158282966!2d129.3290196762933!3d35.53628913792161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3567cd008364faf7%3A0xbe2ce61c12850934!2z7IOs66Gc7Jqw7Luk7ZS8!5e0!3m2!1sko!2skr!4v1702963585576!5m2!1sko!2skr"
                    width="100%" height="450" style={{ border: 0 }}
                    allowFullScreen="" loading="lazy" title="Google Maps"
                  ></iframe>
               }/>

               <span className="tel"><a href="tel:12345678">TEL :　1234 - 5678</a></span>

               <span onClick={handleOpenModal2}>이메일무단수집거부</span>
               <Modal isOpen={isModalOpen2} onClose={handleCloseModal2} content={<Refuseemailcollect/>} />

               <span onClick={handleOpenModal3}>개인정보처리방침</span>
               <Modal isOpen={isModalOpen3} onClose={handleCloseModal3} content={<Privacypolicy/>} />
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