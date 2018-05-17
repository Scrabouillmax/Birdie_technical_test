import React, { Component } from 'react';
import { connect } from 'react-redux';

import VariableSelector from './VariableSelector.presentational';
import { changeVariable, fetchVariableData } from '../../actions';

class VariableSelectorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    fetch('/variables')
      .then(data => data.json())
      .then((data) => {
        this.setState({ items: data });
      });
  }

  render() {
    return (
      <VariableSelector
        items={this.state.items}
        onItemSelect={this.props.onItemSelect}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onItemSelect: (variable) => {
    // fetch data
    dispatch(fetchVariableData(variable));
    // update selected variable
    dispatch(changeVariable(variable));
  },
});

export default connect(null, mapDispatchToProps)(VariableSelectorContainer);
