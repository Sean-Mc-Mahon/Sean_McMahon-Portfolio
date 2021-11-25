import React from 'react'
import profile from '../img/profile.jpg';

const aboutSection = () => {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>let me make</h2>
                        <h2>your <span>dream</span> website</h2>
                    </div>
                </div>
            </div>
            <p>Contact me for any projects you have in mind.</p>
            <button>Contact</button>
            <img src={profile} alt="profile pic" />
        </div>
    )
}

export default  aboutSection;