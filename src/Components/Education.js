import React, { Component } from 'react'

class Education extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className='section'>
                <div className="sectionLine">
                    <label htmlFor="sname" className='sectionLabel'>School:</label>
                    <input type="text" name="sname" id="sname"></input>
                </div>
                <div className="sectionLine">
                    <label htmlFor="tname" className='sectionLabel'>Title of study:</label>
                    <input type="text" name="fname" id="fname"></input>
                </div>
                <div className="sectionLine">
                    <label htmlFor="sdate" className='sectionLabel'>Completion:</label>
                    <input type="text" name="sdate" id="sdate"></input>
                </div>
                <div className="sectionLine">
                    <label htmlFor="additional" className='sectionLabel'>Additional info:</label>
                    <textarea name="additional" id="additional"></textarea>
                </div>
                <div className="submitButton">
                    <button>Add to CV</button>
                </div>
            </div>
        )
    }
}

export default Education