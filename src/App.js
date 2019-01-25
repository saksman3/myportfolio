import React, { Component } from 'react';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import CustomLayout from './containers/Layout';
class App extends Component {
  render() {
    return (
      <div className="App">
          <CustomLayout>
              <AppRoutes/>
          </CustomLayout> 
      </div>
    );
  }
}

export default App;
