import React from 'react';
import Loader from '../../loader-component';
import TopFeaturesTable from './top-features-table-component';

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