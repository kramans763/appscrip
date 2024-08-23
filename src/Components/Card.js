import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const Card = ({product}) => {
    const [isLiked, setIsLiked] = useState(false);

   
  
    const toggleLike = () => {
      setIsLiked(!isLiked);
    }
  return (
    <div className="card">
        <div className="imageContainer">
           <Image src={product.image} alt={product.title} layout="fill"/>
        </div>
       <div className="card-content">
            <h2 className="title">{product.title}</h2>
            <h2>Rs. {product.price}</h2>
            <div className="rating-and-like">
               <span>Rating: {product.rating.rate} ({product.rating.count} reviews)</span>
               <div className="heart" onClick={toggleLike}>
                  {isLiked ? '❤️' : <Image src="/assets/heart.png" alt="heart" width={24} height={24} />}
               </div>
            </div>
            
        </div>
    </div>
  )
}

export default Card