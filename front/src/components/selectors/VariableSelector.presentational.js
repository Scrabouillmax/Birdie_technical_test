import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Selector from './Selector.presentational';

// dropdown component to select which variable data to display
class VariableSelector extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onItemSelect: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      items: nextProps.items,
    });
  }

  render() {
    return (
      <Selector
        id="variable-dropdown-selector"
        bsStyle="primary"
        items={this.state.items}
        placeholder="variable"
        onItemSelect={this.props.onItemSelect}
      />
    );
  }
}

export default VariableSelector;
