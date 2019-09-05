import React from 'react';
import Loader from '../loader-component';
import SentencesTable from './components/sentences-table-component';
import './sentences.scss';

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