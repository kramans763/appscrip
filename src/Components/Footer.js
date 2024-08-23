import React from 'react'
import Image from 'next/image';
const Footer = () => {
return (
<div className='footer'>
    <div className='footer-top'>
        <div className='footer-top-left'>
            <p className='bold'>BE THE FIRST TO KNOW</p>
            <p>Sign up for updates from mettā muse.</p>
            <div className='footer-email'>
                <input type="email" placeholder='Enter Your Email' />
                <button>SUBSCRIBE</button>
            </div>
        </div>
        <div className='footer-top-right'>
            <p className='bold'>CONTACT US</p>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
            <p className='bold'>CURRENCY</p>
            <div className='us-logo'>
                <Image src="/assets/uslogo.jpg" alt="USLogo" width={16} height={16} /> 
                <ul><li>USD</li></ul>
            </div>
            <p>Transactions will be completed in Euros and a currency reference is available.</p>

        </div>
    </div>
    <div className='footer-bottom'>
        <div className='footer-bottom-left'>
            <h4>Metta Muse</h4>
            <p>About us</p>
            <p>Stories</p>
            <p>Artisans</p>
            <p>Boutiques</p>
            <p>Contact Us</p>
            <p>EU Compliances Docs</p>
        </div>
        <div className='footer-bottom-center'>
           <h4>QUICK LINKS</h4>
           <p>Orders & Shipping</p>
           <p>Join/Login as a seller</p>
           <p>Payment & Pricing</p>
           <p>Return & Refunds</p>
           <p>FAQs</p>
           <p>Privacy Policy</p>
           <p>Terms & Conditions</p>
        </div>
        <div className='footer-bottom-right'>
            <h4>FOLLOW US</h4>
            <div className='social'>
                <Image src="/assets/insta.jpg" alt="Instagram" width={16} height={16} />
                <Image src="/assets/linkdin.jpg" alt="LinkedIn" width={16} height={16} />
            </div>
            <p>Metta muse ACCEPT</p>
            <div className='payment'>
                <Image src="/assets/paytm.png" alt="Apple Pay" width={45} height={15} /> 
                <Image src="/assets/gpay.png" alt="Google Pay" width={45} height={15} />
                <Image src="/assets/amex-card1708.jpg" alt="Amex Card" width={45} height={15} />
                <Image src="/assets/applepay.svg" alt="Apple Pay" width={45} height={15} />
                <Image src="/assets/phonpe.jpg" alt="Apple Pay" width={45} height={15} />   
            </div>

        </div>
    </div>
</div>

  )
}

export default Footer