import React from 'react';
import Loader from '../../loader-component';
import SentencesTable from './sentences-table-component';

const Sentences = props => {
    const { sentences, isLoading } = props;
    const renderComponent = isLoading ? <Loader /> : <SentencesTable sentences={sentences}/>;

    return (
        <div className='sentences'>
            {renderComponent}
        </div>
    );
}

export default Sentences;