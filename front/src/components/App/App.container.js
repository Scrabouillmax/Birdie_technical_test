import { connect } from 'react-redux';

import App from './App.presentational';

const mapStateToProps = state => {
    return ({
        isLoading: state.data.isLoading
})};

export default connect(mapStateToProps, null)(App);