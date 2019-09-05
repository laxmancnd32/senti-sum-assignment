import React from 'react';
import TopFeatures from './components/top-features-component';
import Sentences from './components/sentences-component';
import './results-listing.scss';

const ResultsListing = props => {
    const { isLoading, sentences, topFeatures } = props;

    return (
        <div className='results-listing'>
            <TopFeatures 
                topFeatures={topFeatures}
                isLoading={isLoading}
            />
            <Sentences 
                sentences={sentences}
                isLoading={isLoading}
            />
        </div>
    );
}

export default ResultsListing;