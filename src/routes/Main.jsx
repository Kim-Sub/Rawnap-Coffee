import React, { useState, useRef } from 'react';
import ScrollPosition from '../hook/ScrollPosition';


const Main = () => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollPosition = ScrollPosition()

  const valueDetailRef = useRef(null);

  const handleHover = () => {
   setIsHovered(true);
   const currentScrollY = window.scrollY;
   window.scrollTo({
     top: currentScrollY + 500,
     behavior: 'smooth',
   });
 };



  return (
    <div id='Main'>
      <div className='videoBox'>
        <video autoPlay loop muted playsInline src={require('../video/main.mp4')}></video>
      </div>

      <div className='brandIntro'>
        <h1 className={`transOpacity ${scrollPosition >= 400 ? 'originOpacity' : ''}`}>
          로우냅 , <br />
          당신을 위한 고요하고 <br />
          특별한 커피의 시작.
        </h1>
        <p className={`en transOpacity ${scrollPosition >= 500 ? 'originOpacity' : ''}`}>Nice Price, Nice Quality, Nice Daily Life</p>
      </div>

      <div className='introExplan'>
        <p className={`transOpacity ${scrollPosition >= 800 ? 'originOpacity' : ''}`}>
          " 로우냅 커피하우스는 지속가능한 커피 문화를 추구하고 , <br />
          소비자들에게는 품격 높은 커피 경험을 선사하고자 하는 <br />
          열망에서 시작되었습니다. "
        </p>
      </div>

      <div className={`brandValue transOpacity ${scrollPosition >= 1100 ? 'originOpacity' : ''}`}>
        <div className={`circle ${isHovered ? 'rounded' : ''}`} onMouseEnter={handleHover}>
          <h1 className='en'>Raw Nap Coffee Haus.</h1>
          <p className='en'>Brand Value</p>
        </div>
      </div>
      
      <div ref={valueDetailRef} className={`valueDetail ${isHovered ? 'visible' : ''}`}>
        <p>
          브랜드 가치
        </p>
      </div>
    </div>
  );
};

export default Main;
