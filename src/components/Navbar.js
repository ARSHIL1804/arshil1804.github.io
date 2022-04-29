import React from 'react'
import '../componentCss/navbar.css'
export default function Navbar() {
  return (
    <div className='navbar'>
      <h3 onClick={()=>{console.log("gr");window.location.reload()}}><i className='fas fa-video'> </i> BookIt</h3>
    </div>
  )
}