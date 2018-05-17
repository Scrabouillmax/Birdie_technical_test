import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({ rowContent, index }) => (
  <tr>
    <td>{index}</td>
    {
      // map over row's items
      // eslint-disable-next-line
      rowContent.map((value, index) => <td key={index}>{value}</td>)
    }
  </tr>
);

TableRow.propTypes = {
  rowContent: PropTypes.arrayOf(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
};

export default TableRow;
