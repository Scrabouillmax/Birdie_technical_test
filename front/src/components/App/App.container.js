import { connect } from 'react-redux';

import App from './App.presentational';

const mapStateToProps = state => ({
  isLoading: state.data.isLoading,
  error: state.data.error,
  selectedVariable: state.selectedVariable,
});

export default connect(mapStateToProps, null)(App);
