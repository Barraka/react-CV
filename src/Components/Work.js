import React, { Component } from 'react'

class Work extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className='section'>
                <div className="sectionLine">
                    <label htmlFor="cname" className='sectionLabel'>Company:</label>
                    <input type="text" name="cname" id="cname"></input>
                </div>
                <div className="sectionLine">
                    <label htmlFor="position" className='sectionLabel'>Position:</label>
                    <input type="text" name="position" id="position"></input>
                </div>
                <div className="sectionLine work">
                    <label htmlFor="start" className='sectionLabel'>From:</label>
                    <input type="date" name="start" id="start"></input>
                </div>
                <div className="sectionLine work">
                    <label htmlFor="end" className='sectionLabel'>To:</label>
                    <input type="date" name="end" id="end"></input>
                </div>
                <div className="sectionLine work">
                    <label htmlFor="task" className='sectionLabel'>Task:</label>
                    <textarea name="task" id="task"></textarea>
                </div>
                <div className="submitButton">
                    <button>Add to CV</button>
                </div>
            </div>
        )
    }
}

export default Work