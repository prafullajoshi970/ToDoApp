import React from 'react'
import "./Header.css"
const Header = (Logoutcred) => {
  return (
    <div className='main'>
        <div className='left'>
            <h1>Geekster</h1>
            </div>
            <div className='right'>
                <a href='H'>Home</a>
                <a href='H'>About</a>
                <a href='H'>Contact</a>
                <a href='H'>Detail</a>
                <button onClick={()=>{Logoutcred()}}>Logout</button>
            </div>
        
    </div>
  )
}

export default Header