import React, { Component } from 'react'
import pic from'../assets/who.png';

class Intro extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.addtocv=this.addtocv.bind(this);
        this.modifyIntro=this.modifyIntro.bind(this);
        this.loadFile=this.loadFile.bind(this);
    }
    loadFile(e) {
        const profile = document.querySelector('.profile');
        profile.src= URL.createObjectURL(e.target.files[0]);
    }
    addtocv() {
        let fname1 = document.querySelector('#fname');
        let lname1 = document.querySelector('#lname');
        let pos1 = document.querySelector('#pos');
        let phone1 = document.querySelector('#phone');
        let email1 = document.querySelector('#email');
        let photo = document.querySelector('.profile');
        if(fname1.value==='') {
            fname1.setCustomValidity('Field must not be empty');
            fname1.reportValidity();
            return;
        }
        else if(lname1.value==='') {
            lname1.setCustomValidity('Field must not be empty');
            lname1.reportValidity();
            return;
        }
        else if(pos1.value==='') {
            pos1.setCustomValidity('Field must not be empty');
            pos1.reportValidity();
            return;
        }
        else if(phone1.value==='') {
            phone1.setCustomValidity('Field must not be empty');
            phone1.reportValidity();
            return;
        }
        else if(email1.value==='') {
            email1.setCustomValidity('Field must not be empty');
            email1.reportValidity();
            return;
        }
        const info = {
            fname:fname1.value,
            lname:lname1.value,
            position:pos1.value,
            phone:phone1.value,
            email:email1.value,
            photo:photo.src,
        };
        this.props.changeIntro(info);
        fname1.value = '';
        lname1.value = '';
        pos1.value = '';
        phone1.value = '';
        email1.value = '';
        photo.src=pic;
    }
    modifyIntro(o) {
        const fname1 = document.querySelector('#fname');
        const lname1 = document.querySelector('#lname');
        const pos1 = document.querySelector('#pos');
        const phone1 = document.querySelector('#phone');
        const email1 = document.querySelector('#email');
        fname1.value=o.fname;
        lname1.value=o.lname;
        pos1.value=o.position;
        phone1.value=o.phone;
        email1.value=o.email;
    }

    render() {
        return (
            <div className="section">
                <div className="subsection">
                    <div className="introLeft">
                        <label htmlFor='file'><img src={pic} alt="profilePic" className="profile"></img></label>
                        <input type="file"  accept="image/*" name="image" id="file" className='chooseFile' onChange={this.loadFile}></input>
                        
                        </div>
                    <div className="introRight">
                        <div className="sectionLine"><label htmlFor="fname" className='sectionLabel'>First name:</label><input type="text" name="fname" id="fname"></input></div>
                        <div className="sectionLine"><label htmlFor="lname" className='sectionLabel'>Last name:</label><input type="text" name="lname" id="lname"></input></div>
                        <div className="sectionLine"><label htmlFor="pos" className='sectionLabel'>Position:</label><input type="text" name="pos" id="pos"></input></div>
                        <div className="sectionLine"><label htmlFor="phone" className='sectionLabel'>Phone:</label><input type="text" name="phone" id="phone"></input></div>
                        <div className="sectionLine"><label htmlFor="email" className='sectionLabel'>email:</label><input type="text" name="email" id="email"></input></div>
                    </div>
                </div>
                
                <div className="submitButton incomplete">
                    <button onClick={this.addtocv}>Confirm</button>
                </div>
            </div>
        )
    }
}

export default Intro