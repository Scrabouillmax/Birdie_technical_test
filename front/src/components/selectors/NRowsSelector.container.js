import { connect } from 'react-redux';

import NRowsSelector from './NRowsSelector.presentational';
import { changeNRows } from '../../actions';

const mapDispatchToProps = dispatch => ({
    onItemSelect: n_rows => {
        // update selected n_rows
        dispatch(changeNRows(n_rows));
    }
});

export default connect(null, mapDispatchToProps)(NRowsSelector);