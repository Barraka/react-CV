import React, { Component } from 'react'

class OutputSchool extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        const info=this.props.info;
        window.info=info;
        const output = this.props.info.map(x=> {

                return (
                    <div className="itemSchool" key={x.id}>
                        <div className='titleName'>{x.title}</div>
                        <div className='school'>{x.school}</div>
                        <span className='completion'>Completed: {x.completion}</span>
                        <div className='additional'>{x.additional}</div>
                    </div>
                )
                

        })
        window.output=output;
        return (
            <div className='outputSection'>
                {output}
            </div>
            
            
        )
    }
}

export default OutputSchool