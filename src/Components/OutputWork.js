import React, { Component } from 'react'

class OutputWork extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className='outputSection'>
                <div class="itemWork">
                    <div className='positionName'>Position</div>
                    <div className='companyName'>Company name</div>
                    <span className='dateFrom'>01/01/01</span>
                    <span className='dateTo'>01/01/01</span>
                    <div className='tasks'>tasks</div>
                </div>
            </div>
        )
    }
}

export default OutputWork