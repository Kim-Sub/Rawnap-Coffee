import React from 'react'

const Story2 = () => {
   return (
      <div id='Story2'>
         <h2>결국, 최고의 커피 맛은 원두가 결정합니다</h2>
         <span>
            워시드와 내추럴 가공법을 거친 커피의 적절한 수분 함유량을 준수하고, 커핑을 통한 바디감, <br />
            후미, 향미, 산미 부분에서 각 독특한 특성을 잃지 않게끔 원두의 엄격한 기준을 세웠습니다.</span>
         <div className='videoBox'>
            <video autoPlay loop muted playsInline src={require('../../video/story2.mov')}></video>
         </div>

         <section>
            <div className='left'>
               <img src={require('../../img/story/Specialtycoffeebeans1.jpg')} alt='' />
            </div>
            <div className='right'>
               <h3>이탈리아 중부 산지의 생두</h3>
               <p>이탈리아에서 수만 킬로미터 떨어진 산지에서 재배 · 가공 되어 배에 실려 운반된 생두는 이동 기간 동안 바다의 염분과 습기를 머금고 있기 때문에 로스팅 이전까지 습도 · 온도의 조절과 관리를 통해 지속적으로 품질을 유지시킬 수 있도록 해야 합니다.</p>
            </div>
         </section>

         <section>
            <div className='left'>
               <img src={require('../../img/story/Specialtycoffeebeans2.jpg')} alt='' />
            </div>
            <div className='right'>
               <h3>생두 보관의 천혜의 환경</h3>
               <p>이탈리아 중부 '몬테체리뇨네’(Monte Cerignone)는 파스쿠찌 가문에서 오랜동안 생두를 보관해온 곳으로 일년 내내 일정한 온도와 낮은 습도가 유지되는 천혜의 요새와 같은 곳입니다. 콘가(Conga) 강 계곡 600m의 미기후(micr-oclimate)는 생두가 고유의 향미를 지속시키며 자연스럽게 시간에 따라 숙성시켜 나갈 수 있도록 하기 때문에 최신 시설의 생두 보관 창고 보다 깊이있고 산지의 기후와 작황에 상관 없이 일관된 커피 맛을 낼 수 있도록 합니다.</p>
            </div>
         </section>

         <section>
            <div className='left'>
               <img src={require('../../img/story/Specialtycoffeebeans3.jpg')} alt='' />
            </div>
            <div className='right'>
               <h3>이탈리아 중부 - 생두 보관의 천혜의 환경</h3>
               <p>이탈리아에서 수만 킬로미터 떨어진 산지에서 재배 · 가공 되어 배에 실려 운반된 생두는 이동 기간 동안 바다의 염분과 습기를 머금고 있기 때문에 로스팅 이전까지 습도 · 온도의 조절과 관리를 통해 지속적으로 품질을 유지시킬 수 있도록 해야 합니다.</p>
            </div>
         </section>
      </div>
   )
}

export default Story2
