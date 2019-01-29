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
        trainingProvider:'IBM Cognitive Class',
        duration:'(April 2018)',
        course:'HTML5 and CSS3',
        type:'Certificate'
      },
      {
        trainingProvider:'IBM Cognitive Class',
        duration:'(April 2018)',
        course:'API',
        type:'Certificate',
        url:'https://www.youracclaim.com/badges/3913a206-5735-477d-a672-fee24ad4c805/linked_in_profile'
      },
      {
        trainingProvider:'IBM Cognitive Class',
        duration:'(April 2018)',
        course:'SQL and Relational Databases',
        type:'Certificate',
        url:'https://courses.cognitiveclass.ai/certificates/15d604dffe4d4fdbadb6a98eca0bde19'
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