import React from 'react';
import {Grid, Cell} from 'react-mdl';
import Bio from './description';

const About = () => {
    return (
        <div>
            <Grid>
            <Cell className="profile-left-col" col={6}>
            <div style={{}}>
                <img
                src="https://scontent.fjnb1-1.fna.fbcdn.net/v/t1.0-9/40397985_990581931110059_5902450650108657664_n.jpg?_nc_cat=106&_nc_eui2=AeFw2F9y1W_Jp6WVF-AhIejkj_udO97nx6tE0kDD3pIQJJjnfK7OpqTKZ7uRIxv_wfeLadLhBDHZgC_J4fB573q4CLk7vCA9kBJKqiHTRS1CVQ&_nc_ht=scontent.fjnb1-1.fna&oh=42cf2d4eda833e0d3b0287e181838929&oe=5CB9DE58"
                   alt="profile-pic"
                   style={{height:'200px',borderRadius:'100px'}}
                />
            </div>
            <h2 style={{paddingTop:'1px'}}>Sakhile Sibuyi</h2>
            <h4 style={{color:'gray'}} className="job-description">Full Stack Web Developer</h4>
            <hr style={{borderTop:'2px solid red', width:'100%'}}/>
            </Cell>

            <Cell col={6} className="contact-section" style={{textAlign:'right'}}>
                <h4>Phone</h4>
                <p> (+27) 8253 21066</p>
                <h4>Email</h4>
                <p> saksman3@gmail.com</p>
                <h4>Address</h4>
                <p>24501 Barcelona, Daveyton, 1520</p>
            </Cell>
        </Grid>
        
        <Bio/>
        <hr style={{borderTop:'5px solid red', width:'100%'}}/>
        </div>
    );
};

export default About;