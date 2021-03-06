import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import PropTypes from 'prop-types';

// generic dropdown selector component definition.
// used in both variable selector and n_rows selector
export default class Selector extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.any).isRequired,
    default: PropTypes.number,
    onItemSelect: PropTypes.func.isRequired,
    bsStyle: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
  }

  static defaultProps = {
    placeholder: '',
    default: 5,
  }

  constructor(props) {
    super(props);
    this.state = {
      // items of the dropdown list
      items: props.items,
      selectedItem: props.default || null,
    };
  }

  static getDerivedStateFromProps(nextProps) {
    return {
      items: nextProps.items,
    };
  }

    onItemSelect = (item) => {
      this.setState({
        selectedItem: item,
      });
      this.props.onItemSelect(item);
    }

    render() {
      return (
        <DropdownButton
          bsStyle={this.props.bsStyle}
          id={this.props.id}
          title={this.state.selectedItem || this.props.placeholder}
        >
          {
            // map over each item
            this.state.items.map(item => (
              <MenuItem key={item} eventKey={item} onSelect={this.onItemSelect}>
                {item}
              </MenuItem>))}
        </DropdownButton>
      );
    }
}
