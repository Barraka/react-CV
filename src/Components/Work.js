import React, { Component } from 'react'

class Work extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.confirm=this.confirm.bind(this);
    }

    confirm() {
        const cname = document.querySelector('#cname');
        const position = document.querySelector('#position');
        const start = document.querySelector('#start');
        const end = document.querySelector('#end');
        const task = document.querySelector('#task');

        const info ={
            company: cname.value,
            position: position.value,
            from: start.value,
            to: end.value,
            tasks: task.value,
        };
        if(cname.getAttribute('data-id')) {
            info.id=cname.getAttribute('data-id');
            this.props.changeWork(info);
            cname.removeAttribute('data-id');
        }
        else this.props.addWork(info);
        cname.value='';
        position.value='';
        start.value='';
        end.value='';
        task.value='';
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
                    <label htmlFor="task" className='sectionLabel'>Tasks:</label>
                    <textarea name="task" id="task"></textarea>
                </div>
                <div className="submitButton">
                    <button onClick={this.confirm}>Add to CV</button>
                </div>
            </div>
        )
    }
}

export default Work