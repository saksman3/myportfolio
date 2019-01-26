import React from 'react';
import {Grid, Cell} from 'react-mdl';

const Experience = (props) => {
    return (
        <Grid>
             <Cell col={4}>
             <h5 style={{marginTop:'0px'}}>{props.exp.position}</h5>
              
             </Cell>
             <Cell col={8}>
              <p className="company-description">{props.exp.company} {props.exp.duration}</p>
              <ul className = "work-duties">
              {
                  props.exp.duties.map((duty,index)=>{
                      return (
                          <li key={index}> {duty}</li>
                      );
                  })
              }
              </ul>
             </Cell>
        </Grid>
    );
};
export default Experience;

