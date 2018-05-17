import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import VariableSelector from './VariableSelector.presentational';
import { changeVariable, fetchVariableData } from '../../actions';

class VariableSelectorContainer extends Component {
    static propTypes = {
      onItemSelect: PropTypes.func.isRequired,
    }
    constructor(props) {
      super(props);
      this.state = {
        items: [],
      };
    }

    componentDidMount() {
      // eslint-disable-next-line
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
