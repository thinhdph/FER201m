let img1='https://hcmuni.fpt.edu.vn/Data/Sites/1/media/2020-kim-vi/seo/campus/1-truong-dai-hoc-fpt-tphcm/truong-dai-hoc-fpt-tp-hcm-(1).jpg';
let img2 ='https://hcmuni.fpt.edu.vn/Data/Sites/1/media/2020-kim-vi/seo/campus/1-truong-dai-hoc-fpt-tphcm/truong-dai-hoc-fpt-tp-hcm-(7).jpg';
import React from 'react'

export default function img() {
  return (
  <div>
   <div className='card'>
    <img src={img1} alt=''/>
    <div className='card_content'>
        <h2 className='card_title'>FPT UNIVERSITY</h2>
        <p className='card_description'>D1 street, saigon</p>
    </div>
</div> 
<div className="card dark_card">
<img src={img2} alt=''/>
<div className='card_content'>
        <h2 className='card_title'>CONTACT</h2>
        <p className='card_description'>abcdef@fpt.edu.vn</p>
    </div>
</div> </div>
  )
}

