import React, { Component } from 'react';
import {Tabs,Tab, Grid, Cell} from 'react-mdl';
import ReactProjects from '../containers/React';

export default class Projects extends Component {
  state = {
    activeTab:0
  }
  OnChange=(tabId)=>{
     this.setState(()=>{
       return {
         activeTab:tabId
       }
     })
  }
  toggleTabs = ()=>{
    const tab = this.state.activeTab;
    switch (tab) {
      case 1:  
        return(
          <div>
          <h1>Python.</h1>
          </div>
        );
      case 2:
      return(
        <div>
        <h1>Mysql Projects</h1>
        </div>
      );  
      default:
      return(
        
            
            <ReactProjects/>
        
      );
    }
  }
  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.OnChange(tabId)} ripple>
            <Tab style={{color:'white'}}>React</Tab>
            <Tab style={{color:'white'}}>Python</Tab>
            <Tab style={{color:'white'}}>MySQL</Tab>
        </Tabs>
        <section>
          <Grid>
              <Cell col={12}>
                  <div className="content">
                     {this.toggleTabs()}
                  </div>
              </Cell>
          </Grid>
        
        </section>
      </div>
    )
  }
}