import { connect } from 'react-redux';

import MainTable from './MainTable.presentational';

const mapStateToProps = state => {
    let content = [[]];
    // retrieve content for variable if it is saved in the app state
    if (JSON.stringify(state.data.data)!==JSON.stringify({})){
        content = state.data.data[state.selectedVariable];
    }
    return ({
        // number of rows to display
        n_rows: state.selectedNRows,
        // variable data is displayed
        variable: state.selectedVariable,
        // displayed content
        content
})};

export default connect(mapStateToProps, null)(MainTable);