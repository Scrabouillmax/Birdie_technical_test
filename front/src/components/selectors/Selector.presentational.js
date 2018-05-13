import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

// generic dropdown selector component definition. 
// used in both variable selector and n_rows selector
export default class Selector extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // items of the dropdown list
            items: props.items,
            selectedItem: props.default || null
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            items: nextProps.items
        })
    }

    onItemSelect = (item) => {
        this.setState({
            selectedItem: item
        });
        this.props.onItemSelect(item);
    }    

    render() {
        return (
            <DropdownButton
                bsStyle={this.props.bsStyle}
                id={this.props.id}
                title={this.state.selectedItem || this.props.placeholder}>
                {
                    // map over each item
                    this.state.items.map(
                    (item, i) => {
                        return <MenuItem key={item} eventKey={item} onSelect={this.onItemSelect}>
                            {item}
                        </MenuItem>
                        }
                )}
            </DropdownButton>
        );
    }
}