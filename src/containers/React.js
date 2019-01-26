import React, { Component } from 'react'
import Project from '../components/project';
 
export default class ReactProjects extends Component {
    state = {
        logo:'https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png',
        textColor:'white',
        projects:[
            {
                title:'Articles App',
                description:'A simple articles app with React + django',
                url:{
                    github:'http://guthub.com/saksman3/articles',
                    liveDemo:'http://articles-app.herokuapp.com'
                }
            },
            {
                title:'beer-app',
                description:'beer app for canpango',
                url:{
                    github:'http://guthub.com/saksman3/beer-app',
                    liveDemo:'http://my-beer-app.herokuapp.com'
                }
            },
            {
                title:'portfolio-app',
                description:'Portfolio app illustrations using react-mdl components, css and react router',
                url:{
                    github:'http://guthub.com/saksman3/myportfolio',
                    liveDemo:'https://sakhile-portfolio-app.herokuapp.com/'
                }
            }
        ]
    }
  render() {
    return (
      <div className="Projects-container">
        {
            this.state.projects.map((project,index)=>{
                return <Project project={project} key={index} logo={this.state.logo} textColor={this.state.textColor}/>
            })
        }
      </div>
    )
  }
}
