import React, { Component } from 'react'
import './App.css';
import './cv.css';
import Education from './Components/Education';
import Intro from './Components/Intro';
import Work from './Components/Work';
import uniqid from 'uniqid';
import OutputIntro from './Components/OutputIntro';
import OutputSchool from './Components/OutputSchool';
import OutputWork from './Components/OutputWork';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            intro: {
                fname:'First Name',
                lname:'Last Name',
                phone:'081 948 6892',
                email:'person@email.com',
                photo:'',
            },
            education: [
                {
                id:1,
                school: 'School name',
                title: 'Title of study',
                completion: '01/01/2023',
                additional: 'Some interesting achievements or extra-curricular activites and there are other words to put on this section to see if it overflows.',
                },
                {
                    id:2,
                    school: 'London Business School',
                    title: 'Masters in Economy',
                    completion: '01/01/2023',
                    additional: 'Things about being part of a group or something',
                    },
            ],
            work: [
                {
                    id:1,
                    company: 'Company Name',
                    position: 'Position held',
                    from: '30/12/2022',
                    to: '31/12/2022',
                    tasks: 'Tasks accomplished',
                }
            ]
        }
    }
    render() {
        return (
            <div className="App">
        <div className="leftSide">
            <Intro info={this.state.intro}/>
            <Education info={this.state.education}/>
            <Work info={this.state.work}/>
        </div>
        <div className='rightSide'>
                <OutputIntro info={this.state.intro}/>
                <OutputSchool info={this.state.education} />
                <OutputWork info={this.state.work} />
        </div>
      
    </div>
        )
    }
}

export default App;





