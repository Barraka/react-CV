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
                fname:'John',
                lname:'Smith',
                position: 'Senior Developer',
                phone:'081 948 6892',
                email:'person@email.com',
                photo:'',
            },
            education: [                
                {
                    id:'1',
                    school: 'London Business School',
                    title: 'Masters in Economy',
                    completion: '01/01/2023',
                    additional: 'Things about being part of a group or something',
                },
                {
                    id:'2',
                    school: 'Random High School',
                    title: 'Things I learnt',
                    completion: '01/01/2023',
                    additional: 'President of the debate team.',
                },
            ],
            work: [
                {
                    id:'1',
                    company: 'Elixir',
                    position: 'Senior Developer',
                    from: '2022-12-30',
                    to: '2022-12-31',
                    tasks: 'Coded a Hello World program. Not only that but it was also in vanilla javascript with only a few bugs.',
                }
            ]
        }
        this.changeIntro=this.changeIntro.bind(this);
        this.changeEducation=this.changeEducation.bind(this);
        this.changeWork=this.changeWork.bind(this);
        this.removeEducationItem=this.removeEducationItem.bind(this);
        this.removeWorkItem=this.removeWorkItem.bind(this);
        this.addEducation=this.addEducation.bind(this);
        this.addWork=this.addWork.bind(this);
    }
    changeIntro(o) {
        this.setState({intro: o});
    }
    changeEducation(o) {
        const tempId=o.id;
        const newList=this.state.education.map(x=>(x.id)===(o.id) ? o : x);
        this.setState({education: newList});
    }
    changeWork(o) {
        const tempId=o.id;
        const newList=this.state.work.map(x=>(x.id)===(o.id) ? o : x);
        this.setState({work: newList});
    }
    removeEducationItem(i) {
        const newList=this.state.education.filter(x=>(x.id)!=(i));
        this.setState({education: newList});
    }
    removeWorkItem(i) {
        const newList=this.state.work.filter(x=>(x.id)!=(i));
        this.setState({work: newList});
    }
    addEducation(o) {
        const tempEd=this.state.education;
        o.id=uniqid();
        tempEd.push(o);
        this.setState({education: tempEd});
    }
    addWork(o) {
        const tempWork=this.state.work;
        o.id=uniqid();
        tempWork.push(o);
        this.setState({work: tempWork});
    }


    render() {
        return (
            <div className="App">
                <div className="leftSide">
                    <Intro info={this.state.intro} changeIntro={this.changeIntro}/>
                    <Education info={this.state.education} changeEducation={this.changeEducation}  addEducation={this.addEducation}/>
                    <Work info={this.state.work} changeWork={this.changeWork} addWork={this.addWork}/>
                </div>
                <div className='rightSide'>
                        <OutputIntro info={this.state.intro} changeIntro={this.changeIntro}/>
                        <OutputSchool info={this.state.education} removeEducationItem={this.removeEducationItem}/>
                        <OutputWork info={this.state.work} removeWorkItem={this.removeWorkItem}/>
                </div>      
            </div>
        )
    }
}

export default App;





