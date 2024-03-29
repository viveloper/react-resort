import React from 'react'
import { Link } from 'react-router-dom'
import defaultImg from '../images/room-1.jpeg'
import PorpTypes from 'prop-types'

const Room = ({room}) =>{
    const {name, slug, images, price} = room;
    return (        
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="single room"></img>
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/rooms/${slug}`} className="btn-primary room-link">
                    Features
                </Link>
            </div>
            <p className="room-info">{name}</p>
        </article>                    
    );
}

Room.propTypes = {
    room: PorpTypes.shape({
        name: PorpTypes.string.isRequired,
        slug: PorpTypes.string.isRequired,
        images: PorpTypes.arrayOf(PorpTypes.string).isRequired,
        price: PorpTypes.number.isRequired
    })
};

export default Room