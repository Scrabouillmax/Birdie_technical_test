import React from 'react';
import Row from './TableRow.presentational';

export default ({ tableContent, n_rows }) => {
    return (
        <tbody>
            {
                // map over each Row
                tableContent[0].length>0 &&
                tableContent.slice(0, n_rows).map(
                    (rowContent, index) => (
                        <Row 
                            rowContent={rowContent}
                            key={rowContent[0]} 
                            index={index} 
                        />)
            )}
        </tbody>
    );
}