import React from 'react';
import Loader from '../loader-component';
import TopFeaturesTable from './components/top-features-table-component';
import './top-features.scss';

const TopFeatures = props => {
    const { topFeatures, isLoading } = props;
    const renderComponent = isLoading ? <Loader /> : <TopFeaturesTable topFeatures={topFeatures}/>;

    return (
        <div className='top-features'>
            {renderComponent}
        </div>
    );
}

export default TopFeatures;