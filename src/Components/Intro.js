import React, { Component } from 'react'
import pic from'../assets/who.png';
import './Intro.css'

class Intro extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className="section">
                <div className="subsection">
                    <div className="introLeft"><img src={pic} alt="profilePic"></img></div>
                    <div className="introRight">
                        <div className="sectionLine"><label htmlFor="fname" className='sectionLabel'>First name:</label><input type="text" name="fname" id="fname"></input></div>
                        <div className="sectionLine"><label htmlFor="lname" className='sectionLabel'>Last name:</label><input type="text" name="lname" id="lname"></input></div>
                        <div className="sectionLine"><label htmlFor="phone" className='sectionLabel'>Phone:</label><input type="text" name="phone" id="phone"></input></div>
                        <div className="sectionLine"><label htmlFor="email" className='sectionLabel'>email:</label><input type="text" name="email" id="email"></input></div>
                    </div>
                </div>
                
                <div className="submitButton incomplete">
                    <button>Add to CV</button>
                </div>
            </div>
        )
    }
}

export default Intro