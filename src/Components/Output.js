import React, { Component } from 'react'
import OutputIntro from './OutputIntro'
import '../cv.css'

class Output extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className='output'>
                {this.props.info}
                <OutputIntro info={this.props.info}></OutputIntro>
            </div>
        )
    }
}

export default Output