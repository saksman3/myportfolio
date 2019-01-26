import React, { Component } from 'react'
import Tertiary from '../components/Tertiary'
import Secondary from '../components/Secondary'
export default class Education extends Component {
  state = {
    tertiary:[
      {
        trainingProvider:'Tshwane University Of Technology',
        duration:'Jan 2014 - Oct 2017',
        course:'Computer Systems Engineering',
        type:'National Diploma'
      },
      {
        trainingProvider:'IBM Cognitive',
        duration:'1 week',
        course:'HTML5 and CSS3',
        type:'Certificate'
      }
    ],
    secondary:{
      schoolName:'Vezukhono Secondary School',
      name:'Grade 12',
      completionDate:'Dec 2012'
    }
  }
  render() {
    return (
      <div className="education">
        <h1>Education</h1>
         <h2>Tertiary</h2>
          {
            this.state.tertiary.map((training,index)=>{
              return <Tertiary training={training} key={index}/>
            })
          }
          <h2>Secondary</h2>
           <Secondary secondary={this.state.secondary}/>
      </div>
    )
  }
}