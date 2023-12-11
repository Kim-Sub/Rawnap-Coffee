import React, { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import ScrollPosition from '../../hook/ScrollPosition';

const FranchiseInput = () => {
   const scrollPosition = ScrollPosition()

   const [formData, setFormData] = useState({
      // 미리 보이는 내용
      name: '',
      phone: '',
      email: '',
      location: '',
      source: '',
      existingStore: 'no',
      inquiry: '창업예산, 오픈희망일 그리고 기타 문의사항을 남겨주시면 됩니다.',
      agree: false
   })

   const handleChange = (e) => {
      const { name, value, type, checked } = e.target
      setFormData((prevData) => ({
         ...prevData,
         [name]: type === 'checkbox' ? checked : value
      }))
   }

   const [state, handleSubmit] = useForm('mnqkeokr')
   // 시리얼 코드 : mnqkeokr

   if (state.succeeded) {
      return <p className='thanksBox en'>Thanks for Joining !</p>
   }

   return (
      <section id='FranchiseInput' >
         <div className='titleBox'>
            <h1 className={`transOpacity ${scrollPosition >= 400 ? 'originOpacity' : ''}`}>Start-Up Inquiry</h1>
            <p className={`transOpacity ${scrollPosition >= 400 ? 'originOpacity' : ''}`}>창업 문의</p>
         </div>
         <form onSubmit={handleSubmit}>
            <p className={`transOpacity ${scrollPosition >= 500 ? 'originOpacity' : ''}`}>
               <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} required />
               <label htmlFor='name'>성함</label>
               <span></span>
            </p>

            <p className={`transOpacity ${scrollPosition >= 600 ? 'originOpacity' : ''}`}>
               <input type='tel' id='phone' name='phone' value={formData.phone} onChange={handleChange} required />
               <label htmlFor='phone'>연락처</label>
               <span></span>
            </p>

            <p className={`transOpacity ${scrollPosition >= 700 ? 'originOpacity' : ''}`}>
               <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} required />
               <label htmlFor='email'>이메일</label>
               <ValidationError prefix='Email' field='email' errors={state.errors} />
               <span></span>
            </p>

            <p className={`transOpacity ${scrollPosition >= 800 ? 'originOpacity' : ''}`}>
               <input type='text' id='location' name='location' value={formData.location} onChange={handleChange} required />
               <label htmlFor='location'>창업 희망 지역</label>
               <span></span>
            </p>

            <p className={`transOpacity ${scrollPosition >= 900 ? 'originOpacity' : ''}`}>
               <input type='text' id='source' name='source' value={formData.source} onChange={handleChange} required />
               <label htmlFor='source'>알게되신 경로</label>
               <span></span>
            </p>

            <div className={`existingStore transOpacity ${scrollPosition >= 900 ? 'originOpacity' : ''}`}>
               <label htmlFor='existingStore'>현재 점포 유무</label>
               <select id='existingStore' name='existingStore' value={formData.existingStore} onChange={handleChange} required>
                  <option value='yes'>있음, 현재 운영중인 점포가 있습니다.</option>
                  <option value='no'>없음, 현재 운영중인 점포가 없습니다.</option>
               </select>
            </div>

            <div className={`inquiry transOpacity ${scrollPosition >= 1000 ? 'originOpacity' : ''}`}>
               <label htmlFor='inquiry'>문의내용</label>
               <textarea id='inquiry' name='inquiry' rows='4' value={formData.inquiry} onChange={handleChange} required></textarea>
               <ValidationError prefix='Message' field='inquiry' errors={state.errors} />
            </div>

            <div className={`agree transOpacity ${scrollPosition >= 1100 ? 'originOpacity' : ''}`}>
               <input type='checkbox' id='agree' name='agree' checked={formData.agree} onChange={handleChange} required />
               <label id='agreeCheckbox' htmlFor='agree'>개인정보취급방침을 읽었으며 내용에 동의합니다.</label>
            </div>

            <button type='submit' disabled={state.submitting}>
               작성 완료
            </button>
         </form>
      </section>
   )
}

export default FranchiseInput
