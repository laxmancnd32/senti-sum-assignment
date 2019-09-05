import React, { Component } from 'react';
import { orderBy } from 'lodash/collection';
import SearchBar from '../search-bar';
import ResultsListing from '../results-list';
import { fetchSearchDetails } from '../../service';
import { BASE_URL } from '../../app-constants';
import './home-page.scss';

class HomePage extends Component {
    state = { isLoading: true, queryText: 'hello', sentences: [], topFeatures: [], numberOfPages: 1 };

    componentDidMount() {
        this.callSearchAPI();
    }

    formatAndSortTopFeatures = topFeatures => {
        const topFeaturesList = Object.keys(topFeatures).map(key => {
            return {
                featureString: key,
                frequency: topFeatures[key]
            };
        });
        const sortedTopFeatures = orderBy(topFeaturesList, 'frequency', 'asc');
        
        return sortedTopFeatures;
    };

    formatSentences = sentences => {
        const sentenceList = Object.keys(sentences).map(sentence => sentence);

        return sentenceList;
    };

    callSearchAPI = () => {
        const { queryText } = this.state;
        fetchSearchDetails(BASE_URL, queryText).then(data=>{
            const { sentences = {}, topFeatures = {} } = data;
            const sortedTopFeatures = this.formatAndSortTopFeatures(topFeatures);
            const formattedSentences = this.formatSentences(sentences);
            const numberOfPages = Math.ceil(formattedSentences.length/30);
            this.setState({ sentences: formattedSentences, topFeatures: sortedTopFeatures, isLoading: false, numberOfPages });
        });
    };

    handleInputChange = event => {
        const queryText = event.target.value;

        this.setState({ queryText });
    };

    handleSearchTrigger = () => {
        this.setState({ isLoading: true });
        this.callSearchAPI();
    };

    render() {
        const { isLoading, sentences, topFeatures } = this.state;

        return (
            <div className='home-page container'>
                <div className="row">
                    <div className="col">
                        <SearchBar
                            handleInputChange={this.handleInputChange}
                            handleSearchTrigger={this.handleSearchTrigger}
                        />
                    </div>
                </div>
                <hr className="horizontal-seperator" />
                <div className="row">
                    <div className="col">
                        <ResultsListing 
                            isLoading={isLoading}
                            sentences={sentences}
                            topFeatures={topFeatures}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;