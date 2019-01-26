import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

export default class WorkExperience extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p style={{fontSize:15}}>{this.props.secondary.completionDate}</p>
        </Cell>
        <Cell col={8}>
           <h4 style={{marginTop:'0px'}}>{this.props.secondary.schoolName}</h4>
           <p>{this.props.secondary.name}</p>
        </Cell>
      </Grid>
    )
  }
}