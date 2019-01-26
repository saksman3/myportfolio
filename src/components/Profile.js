import React, { Component } from 'react';
import {  Grid, Cell} from "react-mdl";
import Education from '../containers/Education';
import Experience from './WorkExperience';
import About from './about';

export default class Profile extends Component {
  
  render() {
    return (
      <div>
        <Grid>
           
          <Cell className="profile-right-col" col={8} style={{width:'70%',margin:'auto'}}>
          
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
