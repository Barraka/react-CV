import React from 'react'
import pic from'../assets/who.png';

function OutputIntro2(props) {
    function modify() {
        // const cvFname = document.querySelector('.cvFname').textContent;
        // const cvLname = document.querySelector('.cvLname').textContent;
        // const cvPhone = document.querySelector('.cvPhone').textContent;
        // const cvEmail = document.querySelector('.cvEmail').textContent;
        // const oprofile = document.querySelector('.oprofile').src;
        // const cvPos = document.querySelector('.cvPos').textContent;

        const fname1 = document.querySelector('#fname');
        const lname1 = document.querySelector('#lname');
        const phone1 = document.querySelector('#phone');
        const email1 = document.querySelector('#email');
        const profile = document.querySelector('.profile');
        const position = document.querySelector('#pos');
        // fname1.value=cvFname;
        // lname1.value=cvLname;
        // phone1.value=cvPhone;
        // email1.value=cvEmail;
        // profile.src=oprofile;
        // position.value=cvPos;

        fname1.value=props.info.fname;
        lname1.value=props.info.lname;
        phone1.value=props.info.phone;
        email1.value=props.info.email;
        if(props.info.photo)profile.src=props.info.photo;
        position.value=props.info.position;
    }
    let fname, lname, position, phone, email,photo;
    fname=props.info.fname;
    lname=props.info.lname;
    position=props.info.position;
    phone=props.info.phone;
    email=props.info.email;
    // photo=props.info.lname;
    photo= props.info.photo ? props.info.photo : pic;
    return (
        
        <div className='outputSection'>
                <div className='editWrapper' onClick={modify}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6.625 21q-.7 0-1.162-.462Q5 20.075 5 19.375V4.625q0-.7.463-1.163Q5.925 3 6.625 3H14.5L19 7.5v3.6h-1V8h-4V4H6.625q-.25 0-.437.188Q6 4.375 6 4.625v14.75q0 .25.188.437.187.188.437.188h4.65v1ZM6 20V4v16Zm11.375-5.425.625.6-3.85 3.85v1.05h1.05l3.85-3.85.625.625-4.1 4.1h-2.3v-2.275Zm2.3 2.275-2.3-2.275L18.55 13.4q.225-.225.563-.225.337 0 .562.225l1.175 1.175q.225.225.225.562 0 .338-.225.563Z"/></svg>
                </div>
                <div className="introWrapper">
                    <div className='picWrapper'>
                        <img src={photo} alt='photo' className='oprofile'></img>
                    </div>
                    <div className='cvIntro'>
                        <div className="nameLine">
                            <span className='cvFname cvName'>{fname}</span>
                            <span className='cvLname cvName'>{lname}</span>
                        </div>
                        <div className='cvPos nameLine'>{position}</div>
                        <div className='cvPhone'>{phone}</div>
                        <div className='cvEmail'>{email}</div>
                    </div>
                </div>

            </div>
    )
}

export default OutputIntro2

