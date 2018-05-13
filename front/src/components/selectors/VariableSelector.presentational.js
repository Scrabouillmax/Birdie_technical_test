import React, { Component } from 'react';

import Selector from './Selector.presentational';

// dropdown component to select which variable data to display
class VariableSelector extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: props.items
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            items: nextProps.items
        })
    }

    render(){
        return (
            <Selector 
                id='variable-dropdown-selector'
                bsStyle='primary'
                items={this.state.items}
                placeholder="variable"
                onItemSelect={this.props.onItemSelect}
            />
        );
    }
};

export default VariableSelector;