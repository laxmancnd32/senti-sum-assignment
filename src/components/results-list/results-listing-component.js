import React from 'react';
import TopFeatures from './components/top-features-component';
import Sentences from './components/sentences-component';
import './results-listing.scss';

const ResultsListing = props => {
    return (
        <div className='results-listing'>
            <TopFeatures />
            <Sentences />
        </div>
    );
}

export default ResultsListing;