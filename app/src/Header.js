import React from 'react'
import HeaderElements from './maps.js'


export default function Header( { Link1 , Link2 , Link3  } ) {
  return (

    

    <div id='Header' style={{background:HeaderElements.background , height:HeaderElements.height, color:HeaderElements.color}} >

            <button id='menu-btn' >
                <div></div>
                <div></div>
                <div></div>
            </button>
            
                    
        <ul>


            
               <a>  <li> {HeaderElements.employer}    </li></a>
               <a>  <li> {HeaderElements.job_seeker}  </li></a>
               <a>  <li> {HeaderElements.job_list}    </li></a>
               <a>  <li> {HeaderElements.pricing}     </li></a>
               <a>  <li> {HeaderElements.buy_now}     </li></a>
               <a>  <li> {HeaderElements.register}    </li></a>
               <a>  <li> {HeaderElements.login}       </li></a>



            
        </ul>

    </div>

  )
}
