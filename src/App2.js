import React, { useState } from 'react'
import './App.css';
import './cv.css';
import Education2 from './Components/Education2';
import Intro2 from './Components/Intro2';
import Work2 from './Components/Work2';
import uniqid from 'uniqid';
import OutputIntro2 from './Components/OutputIntro2';
import OutputSchool2 from './Components/OutputSchool2';
import OutputWork2 from './Components/OutputWork2';

function App2() {
    const [info, updateInfo] = useState({
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
    });
    function changeIntro(o) {
        const temp={...info};
        temp.intro=o;
        updateInfo(temp);
    }
    function changeEducation(o) {
        const temp={...info};
        const tempId=o.id;
        const newList=info.education.map(x=>(x.id)===(o.id) ? o : x);
        temp.education=newList;
        updateInfo(temp);
    }
     function changeWork(o) {
        const temp={...info};
        const tempId=o.id;
        const newList=info.work.map(x=>(x.id)===(o.id) ? o : x);
        temp.work=newList;
        updateInfo(temp);
    }
    function removeEducationItem(i) {
        const temp={...info};
        const newList=info.education.filter(x=>(x.id)!=(i));
        temp.education=newList;
        updateInfo(temp);
    }
    function removeWorkItem(i) {
        const temp={...info};
        const newList=info.work.filter(x=>(x.id)!=(i));
        temp.work=newList;
        updateInfo(temp);
    }
    function addEducation(o) {
        const temp={...info};
        o.id=uniqid();
        temp.education.push(o);
        updateInfo(temp);
    }
    function addWork(o) {
        const temp={...info};
        o.id=uniqid();
        temp.work.push(o);
        updateInfo(temp);
    }

    //----
    //Currently just renamed each componenet. I now need to create them in a functional way.
    return (
        <div className="App">
                <div className="leftSide">
                    <Intro2 info={info.intro} changeIntro={changeIntro}/>
                    <Education2 info={info.education} changeEducation={changeEducation}  addEducation={addEducation}/>
                    <Work2 info={info.work} changeWork={changeWork} addWork={addWork}/>
                </div>
                <div className='rightSide'>
                        <OutputIntro2 info={info.intro}/>
                        <OutputSchool2 info={info.education} removeEducationItem={removeEducationItem}/>
                        <OutputWork2 info={info.work} removeWorkItem={removeWorkItem}/>
                </div>    
            </div>
            
    )
}

export default App2