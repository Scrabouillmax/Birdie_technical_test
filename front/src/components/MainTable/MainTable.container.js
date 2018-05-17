import { connect } from 'react-redux';

import MainTable from './MainTable.presentational';

const mapStateToProps = state => {
    return ({
        // number of rows to display
        n_rows: state.selectedNRows,
        // variable data is displayed
        variable: state.selectedVariable,
        // displayed content
        content: state.data[state.selectedVariable].content,
        // size of the data, including not displayed data
        n_total_lines: state.data[state.selectedVariable].n_total_lines
})};

export default connect(mapStateToProps, null)(MainTable);