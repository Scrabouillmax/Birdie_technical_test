import React, { Component } from 'react';
import { Well } from 'react-bootstrap';

import MainTable from '../MainTable/MainTable.container';
import VariableSelector from '../selectors/VariableSelector.container';
import NRowsSelector from '../selectors/NRowsSelector.container';
import './App.css';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      isLoading: false
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isLoading: nextProps.isLoading
    })
  }
  
  render() {
    return (
      <div>
        <h1>Technical test Birdie</h1>
          <div className="container">
            <Well >
              <p>Select a variable : </p>
              <VariableSelector />
            </Well>
            <Well >
              <p>Max number of rows to display : </p>
              <NRowsSelector 
                items={[5, 10, 20, 50, 100]}
              />
            </Well>
          </div>
        {
          // don't show the table if we are currently fetching data
          !this.state.isLoading&&<MainTable />
        }
        {this.state.isLoading&&<p>Loading...</p>}
      </div>
    );
  }
}
