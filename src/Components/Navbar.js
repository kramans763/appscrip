import React from 'react'
import Image from 'next/image';
const Navbar = () => {
    

  return (
    <div className='navbar'>
    <div className='navbar-top'>
        <div className='navbar-top-left'>
            <div className='menu-icon'>
               &#9776;
            </div>
            <Image src="/assets/logo.png" alt="Logo" width={36} height={36} />
        </div>
        <div className='navbar-top-center'>
            <p>LOGO</p>
        </div>
        <div className='navbar-top-right'>
            <Image src="/assets/search-normal.png" alt="search" width={24} height={24} />
            <Image src="/assets/heart.png" alt="heart" width={24} height={24} />
            <Image src="/assets/shopping-bag.png" alt="bag" width={24} height={24} />
            <Image className='profileImg' src="/assets/profile.png" alt="profile" width={24} height={24} />
            <div className='navbar-top-right-lang'>
                <h4>ENG</h4>
                <Image src="/assets/arrow-down.png" alt="arrow" width={20} height={20} />
            </div>
        </div>
    </div>
    <div className="navbar-bottom">
        <p>SHOP</p>
        <p>SKILLS</p>
        <p>STORIES</p>
        <p>ABOUT</p>
        <p>CONTACT US</p>
    </div>
</div>
  )
}

export default Navbar