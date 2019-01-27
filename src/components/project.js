import React from 'react';
import {Card, CardMenu, CardActions, CardText, CardTitle, IconButton} from 'react-mdl';

const project = (props) => {
    return (
        
        <Card className="projectCards" shadow={5}>
           <CardTitle style={{color:`${props.textColor}`,height:'176px',background:`url(${props.logo}) center / cover` }}>
              {props.project.title}
           </CardTitle>
           <CardText>
               {props.project.description}
           </CardText>
           <hr/>
           <CardActions className="cardActions">
                <a rel="noopener noreferrer" target="_blank" href={`${props.project.url.github}`}><i className="fa fa-github"/></a>
                <a rel="noopener noreferrer" target="_blank" href={`${props.project.url.liveDemo}`}>LiveDemo</a>
           </CardActions>
           <CardMenu style={{color:"#6363fc"}}>
                <IconButton name="share"/>
           </CardMenu>
                   
        </Card>
    );
};

export default project;