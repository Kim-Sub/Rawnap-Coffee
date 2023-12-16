import React from 'react'

const Story3 = () => {
   return (
      <div id='Story3'>
         <h2>모든 스페셜티를 직접 하우스 블렌딩</h2>
         <span>차별화된 핵심 셀링포인트를 만들어냈습니다.</span>
         <div className='videoBox'>
            <video autoPlay loop muted playsInline src={require('../../video/story3.mp4')}></video>
         </div>
      </div>
   )
}

export default Story3
