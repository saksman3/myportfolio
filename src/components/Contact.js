import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
           <Cell col={6}>
              <h2>Sakhile Sibuyi</h2>
              <img
                 src="https://scontent.fjnb1-1.fna.fbcdn.net/v/t1.0-9/40397985_990581931110059_5902450650108657664_n.jpg?_nc_cat=106&_nc_eui2=AeFw2F9y1W_Jp6WVF-AhIejkj_udO97nx6tE0kDD3pIQJJjnfK7OpqTKZ7uRIxv_wfeLadLhBDHZgC_J4fB573q4CLk7vCA9kBJKqiHTRS1CVQ&_nc_ht=scontent.fjnb1-1.fna&oh=42cf2d4eda833e0d3b0287e181838929&oe=5CB9DE58"
                 alt="avatar"
                 style={{height:'256px'}}
              />
           </Cell>
           <Cell col={6}>half</Cell>
        </Grid>
      </div>
    )
  }
}
