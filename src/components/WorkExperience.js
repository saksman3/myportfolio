import React, { Component } from 'react'
import Experience from './Experience';
export default class WorkExperience extends Component {
  state = {
       workExperience:[
         {
           position:'Junior Software Developer',
           company:'IBM SA',
           duration:'April 2018 to date',
           duties:[
            'Design Web Application Using Python on Django Web Framework pattern to make it extensible and flexible',
            'Building Reusable code and libraries for future use.',
            'Development of API’s using Django-Rest-framework with the help of its documentations.',
            'Developing new user-facing features using React.js',
            'Building reusable components and front-end libraries for future use.',
            'Using GIT for version control',
            'Wrote and executed various MYSQL database queries from python using Python-MySQL connector and MySQL dB package.',
            'Integrating React with Redux for proper state managment',
            'Developing UI by using common Front end Framework like Material UI, antd and react-mdl',
           ]
         },
         {
          position:'Junior Software Developer',
          company:'Brolink',
          duration:'July 2017 to March 2018',
          duties:[
            'Handling day to day clients requests on the websure system,',
            'Development of JSON API to allow communication between ASP.NET and Universe basic web system.',
            'Involved in the Integration of Websure system structure from universe into ASP.NET.',
            'Tested and troubleshooted all applications, websites and components as being developed.',
            'Reporting projects status and updating sprint cards on trello boards during the 15min daily scrum meetings',
            'Ensuring that completed tickets meet the description of done as set out during the beginning of a sprint'
          ]
        },
        {
          position:'Systems Developer Intern',
          company:'Geekulcha',
          duration:'1 year (June 2016 to June 2017)',
          duties:[
            'Design, build, and maintain efficient, reusable, and reliable C++ code',
            'Implement performance and quality modules.',
            'Identify bottlenecks and bugs, and devise solutions to these problems',
            'Help maintain code quality, organization, and atomization',
            'Front-end Development using HTML5,CSS3, Javascript and JQUERY',
            'Back-End development using ASP.Net/ PHP as server side depending on the project requirement.',
            'Development and maintenance of the database stored procedures, views and functions for hosted web applications. ',
            'Ensure all database systems meet business and performance requirements.',
            'Identify inefficiencies in current databases and investigate solutions. ',
            'Team leader leading the Development team, and served as a lead mentor for the Geekulcha Vacation work hosted in Pretoria, Soweto and also in Kimberly.'
          ]
        }
       ]
  }
  render() {
    return (
      <div className="experience-container">
        <h1>Work Experience</h1>
        {
          this.state.workExperience.map((exp,index)=>{
            return <Experience exp={exp} key={index}/>
          })
        }
      </div>
    )
  }
}
