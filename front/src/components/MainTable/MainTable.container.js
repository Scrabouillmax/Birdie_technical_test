import { connect } from 'react-redux';

import MainTable from './MainTable.presentational';

const mapStateToProps = state => {
    let content = [[]];
    let n_total_lines = 0;
    // retrieve content for variable if it is saved in the app state
    if (JSON.stringify(state.data.data)!==JSON.stringify({})){
        content = state.data.data[state.selectedVariable].content;
        n_total_lines = state.data.data[state.selectedVariable].n_total_lines;
    }
    return ({
        // number of rows to display
        n_rows: state.selectedNRows,
        // variable data is displayed
        variable: state.selectedVariable,
        // displayed content
        content,
        // size of the data, including not displayed data
        n_total_lines
})};

export default connect(mapStateToProps, null)(MainTable);