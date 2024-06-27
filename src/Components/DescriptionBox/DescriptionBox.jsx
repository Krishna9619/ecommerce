import React from 'react'
import "./DescriptionBox.css"
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="decriptionbox-description">
            <p>At Shopper, we believe that everyone deserves to look and feel their best, 
                no matter their age or gender. Our online store is dedicated to providing
                a diverse and inclusive collection of dresses that cater to all styles,
                occasions, and preferences. Whether you're shopping for yourself, a loved one,
                or the whole family, Shopper is your one-stop destination for high-quality, 
                stylish dresses that celebrate individuality and expression.</p>

            <p>Shopper is more than just a store; it's a community of fashion enthusiasts who 
                celebrate diversity and individuality. Follow us on social media for the latest 
                trends, style tips, and exclusive offers. Sign up for our newsletter to stay 
                updated on new arrivals and special promotions. Discover your style and express
                yourself with confidence at Shopper. Shop with us today and find the perfect dress
                for every occasion, every gender, and every age. Welcome to Shopper, where fashion
                is for everyone!</p>    
        </div>
    </div>
  )
}

export default DescriptionBox
