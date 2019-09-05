import React from 'react';
import NoResultsFound from './no-results-found';
import { Table } from 'react-bootstrap';

const SentencesTable = props => {
    const { sentences = [] } = props;

    if(sentences.length === 0) {
        return <NoResultsFound />;
    }

    return (
        <div className='sentences-table'>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Sentence</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sentences.map((sentence,index) => {
                            return (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{sentence}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default SentencesTable;