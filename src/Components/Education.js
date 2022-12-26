import React, { Component } from 'react'

class Education extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.confirm=this.confirm.bind(this);
    }
    confirm() {
        const sname = document.querySelector('#sname');
        const tname = document.querySelector('#tname');
        const sdate = document.querySelector('#sdate');
        const sadditional = document.querySelector('#additional');
        if(sname.value==='') {
            sname.setCustomValidity('Field must not be empty');
            sname.reportValidity();
            return;
        }
        if(tname.value==='') {
            tname.setCustomValidity('Field must not be empty');
            tname.reportValidity();
            return;
        }
        if(sdate.value==='') {
            sdate.setCustomValidity('Field must not be empty');
            sdate.reportValidity();
            return;
        }
        const info ={
            school: sname.value,
            title: tname.value,
            completion: sdate.value,
            additional: sadditional.value,
        };
        if(sname.getAttribute('data-id')) {
            info.id=sname.getAttribute('data-id');
            this.props.changeEducation(info);
            sname.removeAttribute('data-id');
        }
        else this.props.addEducation(info);
        sname.value='';
        tname.value='';
        sdate.value='';
        sadditional.value='';
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
                    <input type="text" name="tname" id="tname"></input>
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
                    <button onClick={this.confirm}>Add to CV</button>
                </div>
            </div>
        )
    }
}

export default Education