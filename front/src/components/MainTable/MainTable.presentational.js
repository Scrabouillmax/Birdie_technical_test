import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

import TableBody from './TableBody.presentational';

class MainTable extends Component {
  static propTypes = {
    variable: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired,
    n_rows: PropTypes.number.isRequired,
    n_total_lines: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      variable: props.variable,
      content: props.content,
      n_rows: props.n_rows,
      n_total_lines: props.n_total_lines,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      variable: nextProps.variable || this.state.variable,
      content: nextProps.content || this.state.content,
      n_rows: nextProps.n_rows || this.state.n_rows,
      n_total_lines: nextProps.n_total_lines || this.state.n_total_lines,
    });
  }

  render() {
    return (
      <div>
        <p>Total number of different values : {this.state.n_total_lines}</p>
        <p>Lines not displayed : {Math.max(this.state.n_total_lines - this.state.n_rows, 0)}</p>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>#</th>
              <th>{this.state.variable || 'Variable'}</th>
              <th>Count</th>
              <th>Average Age</th>
            </tr>
          </thead>
          <TableBody tableContent={this.state.content} n_rows={this.state.n_rows} />
        </Table>
      </div>
    );
  }
}

export default MainTable;
