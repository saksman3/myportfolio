import React, { Component } from 'react'
import {Grid, Cell} from 'react-mdl'
export default class Profile extends Component {
  render() {
    return (
      <div style={{width:'100%',margin:'auto'}}>
        <Grid className="homepage-grid">
             <Cell col={12}>
                <img
                 src="https://media.licdn.com/dms/image/C5603AQHQhqzJb-g1uw/profile-displayphoto-shrink_200_200/0?e=1553126400&v=beta&t=5ybWAHGYO2sFW7DwND1R95liYsDB8_SMLp-ruI_Gq20"
                 alt="avatar"
                className="avatar-img"
                />
                <div className="banner-text">
                   <h1>Full stack developer</h1>
                   <hr/>
                   <p>
                    HTML|CSS |Bootstrap|NodeJs | Python | React | Redux |Javascript|MySQL
                   </p>
                   <div className="social-links">
                      <a href="http://google.com"  rel="noopener noreferrer" target="_blank">
                      <i class="fa fa-linkedin-square"></i>
                      </a>

                      {/*twitter*/}
                      <a href="http://google.com"  rel="noopener noreferrer" target="_blank">
                      <i class="fa fa-twitter-square"></i>
                      </a>
                      {/* GitHub */}
                      <a href="http://google.com"  rel="noopener noreferrer" target="_blank">
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
