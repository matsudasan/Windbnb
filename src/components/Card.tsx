import React from 'react';
import { Stays } from '../App'
import '../css/Card.css'
import Star from '../img/star.svg'
type Props = {
    content: Stays
}
const Card: React.FC<Props> = ({ content }) => {
    return (
        <div className="card">
            <div className="image-area">
                <img className="image" src={content.photo} alt="商品イメージ" />
            </div>
            <div className="text">
                {content.superHost ? <span className="super-host">SUPER HOST</span> : ''}
                <span>{content.type}・{content.beds}beds</span>
                <span className="star">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="coral" width="25px" height="25px"><path d="M0 0h24v24H0z" fill="none" /><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                    <label>{content.rating}</label>
                </span>
            </div>
            <p>{content.title}</p>
        </div>
    )
}

export default Card