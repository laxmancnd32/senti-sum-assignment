import React from 'react';
import NoResultsFound from './no-results-found';
import { Table } from 'react-bootstrap';

const TopFeaturesTable = props => {
    const { topFeatures = [] } = props;
    
    if(topFeatures.length === 0) {
        return <NoResultsFound />;
    }
    return (
        <div className='top-features-table'>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Frequency</th>
                        <th>String</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        topFeatures.map((feature,index) => {
                            return (
                                <tr key={index}>
                                    <td>{feature.frequency}</td>
                                    <td>{feature.featureString}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>        
        </div>
    );
}

export default TopFeaturesTable;