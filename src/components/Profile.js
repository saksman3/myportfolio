import React, { Component } from 'react';
import {  Grid, Cell} from "react-mdl";
import Education from '../containers/Education';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell className="profile-left-col" col={4}>
             <div style={{textAlign:'center'}}>
                 <img
                 src="https://scontent.fjnb1-1.fna.fbcdn.net/v/t1.0-9/40397985_990581931110059_5902450650108657664_n.jpg?_nc_cat=106&_nc_eui2=AeFw2F9y1W_Jp6WVF-AhIejkj_udO97nx6tE0kDD3pIQJJjnfK7OpqTKZ7uRIxv_wfeLadLhBDHZgC_J4fB573q4CLk7vCA9kBJKqiHTRS1CVQ&_nc_ht=scontent.fjnb1-1.fna&oh=42cf2d4eda833e0d3b0287e181838929&oe=5CB9DE58"
                    alt="profile-pic"
                    style={{height:'200px',borderRadius:'100px'}}
                 />
             </div>
             <h2 style={{paddingTop:'2em'}}>Sakhile Sibuyi</h2>
             <h4 style={{color:'gray'}}>Software Developer</h4>
             <hr style={{borderTop:'5px solid red', width:'50%'}}/>
             <p>I am a competent individual always ready to take up on a challenge, I have good Mentorship skills, able to work under pressure, alone or in a team, I am an Agile Fan.</p>
             <hr style={{borderTop:'5px solid red', width:'50%'}}/>
             <h5>Phone</h5>
             <p>(+27) 8253 21066</p>
             <h5>Address</h5>
             <p>24501 Barcelona, Daveyton, 1520</p>
          </Cell>
          <Cell className="profile-right-col" col={8}>
              <Education/>
          </Cell>
        </Grid>
      </div>
    )
  }
}
