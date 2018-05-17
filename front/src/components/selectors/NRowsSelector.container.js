import { connect } from 'react-redux';

import NRowsSelector from './NRowsSelector.presentational';
import { changeNRows } from '../../actions';

const mapDispatchToProps = dispatch => ({
  onItemSelect: (nRows) => {
    // update selected n_rows
    dispatch(changeNRows(nRows));
  },
});

export default connect(null, mapDispatchToProps)(NRowsSelector);
