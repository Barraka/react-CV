import React from 'react'

function Education2(props) {
    function confirm() {
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
            props.changeEducation(info);
            sname.removeAttribute('data-id');
        }
        else props.addEducation(info);
        sname.value='';
        tname.value='';
        sdate.value='';
        sadditional.value='';
    }


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
                    <button onClick={confirm}>Add to CV</button>
                </div>
            </div>
    )
}

export default Education2