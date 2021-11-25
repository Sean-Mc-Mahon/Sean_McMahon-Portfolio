import React from 'react'
//import Images
import me3 from '../img/me3.jpg'

function ServicesSection() {
    return (
        <div className="services">
            <div className="description">
                <h2>Clean and <span>beautiful</span>  UX design</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon"></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, pariatur!</p>
                    </div>
                    <div className="card">
                        <div className="icon"></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, pariatur!</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, pariatur!</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, pariatur!</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, pariatur!</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, pariatur!</p>
                    </div>
                </div>
            </div>
            <img src={me3} alt="3 of me" />
        </div>
    )
}

export default ServicesSection
