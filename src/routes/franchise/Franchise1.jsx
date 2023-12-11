import React from 'react'
import FranchiseInput from './Franchise-Input'


const Franchise1 = () => {
   
   return (
      <div id='Franchise1'>
         <section className='introduce'>
            <div>
               <h2>로우랩은 언제나 고객을 "첫번째"로 생각합니다.</h2>
               <span className='en'>We always think of the consumer as the first</span>
               <p>로우랩은 커피에 대한 지식과 충분한 전문 실무교육을 통해 카페창업의 꿈을 이루어 드릴 수 있도록 전문적인 커리큘럼과 강사진, 완벽한 수강환경을 제공하고 있습니다.</p>
               <p>우리나라 평균1인당 연간 커피 소비량은 512잔 입니다. 커피없이 하루를 시작할 수 없을 정도로 엄청난 커피 소비량을 가진 나라가 되었으며, 2019년 기준 카페는 10만개, 인구 400명당 1명씩은 카페를 운영하고 있단 뜻입니다. 치열한 카페시장 속에서 살아남기 위해서는 메뉴 개발이 꼭 필요합니다.</p>
               <p>로우랩은 아카데미 교육 브랜드 런칭 이후, 창업을 생각하시는 분들의 니즈를 정확하게 파악하고 전달해 드리기 위해 퍼스트만의 Raw Nap LAB 카페를 운영하고 있습니다. 카페의 특성상 최신 트렌드를 따라가는 과정은 끊임없이 이뤄져야 하는 부분으로 전문 음료개발팀을 도입하여 최신 트렌드 음료는 물론 시그니처 음료 개발을 꾸준히 진행하고 있습니다.</p>
               <p>교육을 중점으로 하는 로우랩은 최신 트렌드 음료, 시그니처 음료에 대한 연구를 게을리 하지 않고 있으며, 전략적인 카페 컨설팅 체계적인 바리스타 교육 프로그램 까지도 연계해서 전달해 드리고 있습니다.</p>
            </div>
            <div className='introImg'></div>
         </section>
         <FranchiseInput />
      </div>
   )
}

export default Franchise1
