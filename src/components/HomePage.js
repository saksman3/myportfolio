import React, { Component } from 'react'
import {Grid, Cell} from 'react-mdl'
export default class Profile extends Component {
  render() {
    return (
      <div style={{width:'100%',margin:'auto'}}>
        <Grid className="homepage-grid">
             <Cell col={12}>
                <img
                 src="https://scontent.fjnb1-1.fna.fbcdn.net/v/t1.0-9/40397985_990581931110059_5902450650108657664_n.jpg?_nc_cat=106&_nc_eui2=AeFw2F9y1W_Jp6WVF-AhIejkj_udO97nx6tE0kDD3pIQJJjnfK7OpqTKZ7uRIxv_wfeLadLhBDHZgC_J4fB573q4CLk7vCA9kBJKqiHTRS1CVQ&_nc_ht=scontent.fjnb1-1.fna&oh=42cf2d4eda833e0d3b0287e181838929&oe=5CB9DE58"
                 alt="avatar"
                className="avatar-img"
                />
                <div className="banner-text">
                   <h1 style={{marginBottom:'0px'}}>Full stack developer</h1>
                   <hr/>
                   <p>
                    HTML|CSS |Bootstrap|NodeJs | Python | React | Redux |Javascript|MySQL
                   </p>
                   <div className="social-links">
                      <a href="https://za.linkedin.com/in/sakhile-sibuyi-795548112"  rel="noopener noreferrer" target="_blank">
                      <i class="fa fa-linkedin-square"></i>
                      </a>

                      {/*twitter*/}
                      <a href="https://twitter.com/sakhilesibuyi"  rel="noopener noreferrer" target="_blank">
                      <i class="fa fa-twitter-square"></i>
                      </a>
                      {/* GitHub */}
                      <a href="https://github.com/saksman3/"  rel="noopener noreferrer" target="_blank">
                        <i class="fa fa-github"></i>
                      </a>  
                   </div>
                </div>

             </Cell>
        </Grid>
      </div>
    )
  }
}
