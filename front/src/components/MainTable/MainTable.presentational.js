import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import TableBody from './TableBody.presentational';

export default class MainTable extends Component {

  constructor(props){
    super(props);
    this.state = {
      variable: props.variable,
      content: props.content,
      n_rows: props.n_rows
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      variable: nextProps.variable||this.state.variable,
      content: nextProps.content||this.state.content,
      n_rows: nextProps.n_rows||this.state.n_rows
    })
  }

  render() {
    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>#</th>
            <th>{this.state.variable||"Variable"}</th>
            <th>Count</th>
            <th>Average Age</th>
          </tr>
        </thead>
        <TableBody tableContent={this.state.content} n_rows={this.state.n_rows} />
      </Table>);
  }
}