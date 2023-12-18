import React, { useState, useEffect } from 'react';
import Modal from 'react-modal'

import BranchData from '../data/branch/Branch-Data';

// 아이콘 import
import { MdRateReview } from "react-icons/md"; 


const Branch = () => {
   const data = BranchData

   const [isModalOpen, setIsModalOpen] = useState(false)
   const [selectedBranch, setSelectedBranch] = useState(null)
   const [isAccordionOpen, setIsAccordionOpen] = useState(false)

   const openModal = (branch) => {
      setSelectedBranch(branch)
      setIsModalOpen(true)
   }
   const closeModal = () => {
      setIsModalOpen(false)
      setSelectedBranch(null)
   }

   const toggleAccordion = () => {
      setIsAccordionOpen(!isAccordionOpen)
   }

   // 페이지 로드시 tabDiv 너비 변화 애니메이션
   const [tabWidth, setTabWidth] = useState(10);
   useEffect(() => { setTabWidth(100); }, []); 

   return (
      <div id='Branch'>
         <div className='inner'>
            <h1>Branch Info.</h1>
            {/* 공지사항 (아코디언 형식) */}
            <div onClick={toggleAccordion} className='tabDiv' style={{width: `${tabWidth}%` }} >
               <h3>공지사항</h3>
               {isAccordionOpen &&
                  <p>공지사항 뭐라고 쓸까?</p>
               }
            </div>

            {/* 지점 목록 */}
            <ul>
               {data.map((branch) => (
                  <li key={branch.id} onClick={() => openModal(branch)}>
                     {branch.name}
                     <div className='imgBox'>
                        <div className='hoverBox'>
                           자세히보기
                        </div>
                        <img src={branch.image} alt={branch.name} />
                     </div>
                  </li>
               ))}
            </ul>

            <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel='Branch Modal'
            style={{
               overlay: {},
               content: {
                 width: '50%', height: '70%',
                 margin: 'auto', padding: '20px', borderRadius: '15px 0 0 15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
               },
             }}>
               {selectedBranch && (
                  <>
                  {/* .ReactModal__Content */}
                     <h2>{selectedBranch.name}</h2>
                     <img src={selectedBranch.image} alt={selectedBranch.name} />
                     <p>주소 : {selectedBranch.address} </p>
                     {/* eslint-disable-next-line */}
                     <a href={selectedBranch.link} target='_blank' rel='noopener noreferrer'>
                        <p>네이버 리뷰 보기 <MdRateReview /> </p>
                     </a>
                  </>
               )}
            </Modal>
         </div>
      </div>
   )
}

export default Branch
