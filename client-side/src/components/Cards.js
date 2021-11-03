import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import img2 from '../images/img-2.jpg'
import img6 from '../images/img-6.jpg'
import img7 from '../images/img-7.jpg'
import img8 from '../images/img-8.jpg'
import img4 from '../images/img-4.jpg'

function Cards() {
    return (
        <div className="cards">
            <h1>Discover the Next Epic Destination Today!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src={img2}
                        text="Explore Beautiful Islands and Conjure Dreams of Paradise in a Private Cruise"
                        label='Luxury'
                        path='/services'
                         />
                        <CardItem
                        src={img6}
                        text="Venture to Amazing Red and Black Volcanic Beaches and Enjoy Sublime Sunsets"
                        label='Luxury'
                        path='/services'
                         />
                         </ul>
                         <ul className="cards__items">
                        <CardItem
                        src={img7}
                        text="Walk through New Zealand as it Hosts Brillant Blue Glacial Waters and Never-Ending Fields of Pink and Purple Lupins."
                        label='Adventure'
                        path='/services'
                         />
                        <CardItem
                        src={img4}
                        text="Dive into the Philippines Where Coral Reefs Teem With an Impressive Diversity of Tropical Fish, Offering Some of the Best Diving in The World."
                        label='Adventure'
                        path='/services'
                         />
                        <CardItem
                        src={img8}
                        text="Ride Through the Sahara Desert on a Guided Camel Tour"
                        label='Adventure'
                        path='/services'
                         />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
