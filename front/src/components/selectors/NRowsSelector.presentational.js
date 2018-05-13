import React from 'react';

import Selector from './Selector.presentational';

// dropdown component to select the number of rows to display
const NRowsSelector = (props) => {
    return (
        <Selector 
            id='number-of-rows-dropdown-selector'
            bsStyle='primary'
            default={props.items[0]}
            items={props.items}
            onItemSelect={props.onItemSelect}
        />
    );
};

export default NRowsSelector;