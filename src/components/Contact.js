import React, { Component } from 'react';
import {Grid,Cell, List, ListItemContent, ListItem} from 'react-mdl';

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
                 style={{height:'200px'}}
              />
              <p className="contact-message">I am actively looking for people to connect, collaborate and share information and skills with ,perhaps if you have a project in mind or would like to meet me so we can have a cup of coffee while brainstorming then feel free to contact me using any of the contacts method listed.</p>
           </Cell>
           <Cell col={6}>
              <h2>Contact Me</h2>
              <hr/>
                <div className="contacts-list">
                    <List>
                        <ListItem>
                            <ListItemContent className="list-items" ><i className="fa fa-phone" aria-hidden="true"/> (+27) 8253 21066</ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent className="list-items"><i className="fa fa-envelope" aria-hidden="true"/>saksman3@gmail.com</ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent className="list-items"><i className="fa fa-skype" aria-hidden="true"/>live:saksman3</ListItemContent>
                        </ListItem>
                    </List>
                </div>
           </Cell>
        </Grid>
      </div>
    )
  }
}
