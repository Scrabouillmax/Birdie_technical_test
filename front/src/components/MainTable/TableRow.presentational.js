import React from 'react';

export default ({ rowContent, index }) => {
    return (
        <tr>
            <td>{index}</td>
            {
                // map over row's items
                rowContent.map((value, index) => <td key={index}>{value}</td>)
            }
        </tr>
    );
}