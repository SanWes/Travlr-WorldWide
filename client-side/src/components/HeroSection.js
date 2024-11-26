import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css';


function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/videos/video-3.mp4" autoPlay loop muted />
            <h1>Embark on an Unforgettable Adventure</h1>
            <p>Dream destinations are a click away</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn-outline'
                buttonSize='btn--large'>GET STARTED</Button>
                <Button className='btns' buttonStyle='btn-primary'
                buttonSize='btn--large'>WATCH TRAILER <i className="far fa-play-circle"/> </Button>
                {/* new buttons that will link to next pages  */}
            </div>
        </div>
    )
}

export default HeroSection
