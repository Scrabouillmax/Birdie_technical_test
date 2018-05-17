import React, { Component } from 'react';
import { Well } from 'react-bootstrap';
import PropTypes from 'prop-types';

import MainTable from '../MainTable/MainTable.container';
import VariableSelector from '../selectors/VariableSelector.container';
import NRowsSelector from '../selectors/NRowsSelector.container';
import './App.css';

export default class App extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    selectedVariable: PropTypes.string,
  };

  static defaultProps = {
    selectedVariable: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: props.isLoading,
      selectedVariable: props.selectedVariable,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.isLoading === prevState.isLoading &&
      nextProps.selectedVariable === prevState.selectedVariable) {
      return null;
    }
    return {
      isLoading: nextProps.isLoading,
      selectedVariable: nextProps.selectedVariable,
    };
  }

  render() {
    let body;
    if (this.state.selectedVariable) {
      body = this.state.isLoading ? <p>Loading...</p> : <MainTable />;
    } else {
      body = <p> Please select a variable to display informations </p>;
    }
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
        {body}
      </div>
    );
  }
}
