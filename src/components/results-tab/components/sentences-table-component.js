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
                        sentences.map(sentence => {
                            const { key, value } = sentence;
                            return (
                                <tr key={key}>
                                    <td>{key+1}</td>
                                    <td>{value}</td>
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