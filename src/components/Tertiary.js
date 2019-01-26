import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

export default class WorkExperience extends Component {
  render() {
    return (
      <div>
        <Grid className="tertiary">
            <Cell col={4}>
               <p>{this.props.training.duration}</p>
            </Cell>
            <Cell col={8} >
                <h4>{this.props.training.trainingProvider}</h4>
                <p>{this.props.training.course}</p>
                <p>{this.props.training.type}</p>
            </Cell>
        </Grid>
        <hr style={{borderTop:'2px dotted red'}}/>
      </div>
    )
  }
}