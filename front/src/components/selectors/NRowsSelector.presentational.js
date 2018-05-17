import React from 'react';
import PropTypes from 'prop-types';

import Selector from './Selector.presentational';

// dropdown component to select the number of rows to display
const NRowsSelector = props => (
  <Selector
    id="number-of-rows-dropdown-selector"
    bsStyle="primary"
    default={props.items[0]}
    items={props.items}
    onItemSelect={props.onItemSelect}
  />
);

NRowsSelector.propTypes = {
  items: PropTypes.arrayOf(PropTypes.number).isRequired,
  onItemSelect: PropTypes.func.isRequired,
};

export default NRowsSelector;
