import React, { Component } from 'react'
import pic from'../assets/who.png';

class OutputIntro extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        let fname, lname, phone, email,photo;
        if(!this.props.info) {
            fname="First Name";
            lname="Last Name";
            phone="081 948 6892";
            email="person@emailprovider.com"
            photo=pic;
        } else {
            fname=this.props.info.fname;
            lname=this.props.info.lname;
            phone=this.props.info.phone;
            email=this.props.info.email;
            photo=this.props.info.lname;
            photo= this.props.info.photo ? this.props.info.photo : pic;
        }
        return (
            <div className='outputSection'>
                <div className='editWrapper'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6.625 21q-.7 0-1.162-.462Q5 20.075 5 19.375V4.625q0-.7.463-1.163Q5.925 3 6.625 3H14.5L19 7.5v3.6h-1V8h-4V4H6.625q-.25 0-.437.188Q6 4.375 6 4.625v14.75q0 .25.188.437.187.188.437.188h4.65v1ZM6 20V4v16Zm11.375-5.425.625.6-3.85 3.85v1.05h1.05l3.85-3.85.625.625-4.1 4.1h-2.3v-2.275Zm2.3 2.275-2.3-2.275L18.55 13.4q.225-.225.563-.225.337 0 .562.225l1.175 1.175q.225.225.225.562 0 .338-.225.563Z"/></svg>
                </div>
                <div className="introWrapper">
                    <div className='picWrapper'>
                        <img src={photo} alt='photo'></img>
                    </div>
                    <div className='cvIntro'>
                        <div className='cvFname'>{fname}</div>
                        <div className='cvLname'>{lname}</div>
                        <div className='cvPhone'>{phone}</div>
                        <div className='cvEmail'>{email}</div>
                    </div>
                </div>

            </div>
        )
    }
}

export default OutputIntro