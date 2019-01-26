import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

export default class WorkExperience extends Component {
  render() {
    return (
      <Grid className="secondary">
        <Cell col={4} >
          <p >{this.props.secondary.completionDate}</p>
        </Cell>
        <Cell col={8}>
           <h4 >{this.props.secondary.schoolName}</h4>
           <p>{this.props.secondary.name}</p>
        </Cell>
      </Grid>
    )
  }
}