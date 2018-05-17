import React from 'react';
import PropTypes from 'prop-types';
import Row from './TableRow.presentational';

const TableBody = ({ tableContent, n_rows }) => (
  <tbody>
    {
    // map over each Row
    tableContent[0].length > 0 &&
    tableContent.slice(0, n_rows).map((rowContent, index) => (
      <Row
        rowContent={rowContent}
        key={rowContent[0]}
        index={index}
      />))}
  </tbody>
);

TableBody.propTypes = {
  tableContent: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired,
  n_rows: PropTypes.number.isRequired,
};

export default TableBody;
