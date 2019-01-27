import React, { Component } from 'react';
import {  Grid, Cell} from "react-mdl";
import Education from '../containers/Education';
import Experience from './WorkExperience';
import About from './about';

export default class Profile extends Component {
  
  render() {
    return (
      <div className="profile-container">
        <Grid>
           
          <Cell  col={8} className="profile-right-col" style={{width:'80%', margin:'auto'}}>
          
          <About/>
              <Education/>
              <hr style={{borderTop:'5px solid red'}}/>
              <Experience/>
          </Cell>
        </Grid>
      </div>
    )
  }
}
