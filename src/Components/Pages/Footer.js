import React from 'react'
import logo from './Logo.png'
const Footer = () => {
    const wb ='</>'
    const date = new Date().getFullYear()
  return (
    <div className='footer'>
        <div>
            <img style={{width:'50px',marginLeft:'30px',marginBottom:'5px'}} src={logo} alt="" />
                <p>&copy;{date} Chandru {wb}</p>
        </div>
    </div>
  )
}

export default Footer