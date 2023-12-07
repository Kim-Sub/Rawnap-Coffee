import React from 'react'
import SignatureData from '../../data/menu/Signature-Data'

const Menu1 = () => {
   const data = SignatureData

   return (
      <div id='Menu1'>
         <div className='menuContainer inner flexCenter'>
            {data.map((item, index) => (
               <div key={index} className='menuItem'>
                  <img src={item.imgUrl} alt={item.name} />
                  <p>{item.nameKO}</p>
                  <span>{item.nameEN}</span>
               </div>
            ))}
         </div>
      </div>
   )
}

export default Menu1
