import React, { Component } from 'react';
import { orderBy } from 'lodash/collection';
import SearchBar from '../search-bar';
import { Tabs, Tab } from 'react-bootstrap';
import TopFeatures from '../results-tab/top-features-component';
import Sentences from '../results-tab/sentences-component';
import PaginationButtons from './pagination-buttons';
import { fetchSearchDetails } from '../../service';
import { BASE_URL } from '../../app-constants';
import './home-page.scss';

class HomePage extends Component {
    state = { isLoading: true, queryText: 'hello',
              sentences: [], topFeatures: [], numberOfPages: 1,
              paginationButtons: ['First', 'Previous', 'Next', 'Last'],
              activePage: 'First', activePageNo: 0
            };

    componentDidMount() {
        this._callSearchAPI();
    }

    _formatAndSortTopFeatures = topFeatures => {
        const topFeaturesList = Object.keys(topFeatures).map(key => {
            return {
                featureString: key,
                frequency: topFeatures[key]
            };
        });
        const sortedTopFeatures = orderBy(topFeaturesList, 'frequency', 'asc');
        
        return sortedTopFeatures;
    };

    _formatSentences = sentences => {
        const sentenceList = Object.keys(sentences).map((sentence, index) => {
            return { key: index, value: sentence};
        });

        return sentenceList;
    };

    _callSearchAPI = () => {
        const { queryText } = this.state;
        fetchSearchDetails(BASE_URL, queryText).then(data=>{
            const { sentences = {}, topFeatures = {} } = data;
            const sortedTopFeatures = this._formatAndSortTopFeatures(topFeatures);
            const formattedSentences = this._formatSentences(sentences);
            const numberOfPages = Math.ceil(formattedSentences.length/30);
            this.setState({ sentences: formattedSentences, topFeatures: sortedTopFeatures, isLoading: false, numberOfPages });
        });
    };

    _handleInputChange = event => {
        const queryText = event.target.value;

        this.setState({ queryText });
    };

    _handleSearchTrigger = () => {
        this.setState({ isLoading: true });
        this._callSearchAPI();
    };

    _handlePagination = (activePageNo, activePage) => {
        let currentPage = activePage;
        if(activePageNo === 0) {
            currentPage = 'First';
        } else if(activePageNo === this.state.numberOfPages - 1) {
            currentPage = 'Last';
        }
        this.setState({activePage: currentPage, activePageNo});
    };

    _getPaginatedData = () => {
        const { activePageNo, sentences } = this.state;
        let startIndex = 0;
        if(activePageNo > 0) {
            startIndex = activePageNo*30;
        }
        const endIndex = startIndex+30;
        const paginatedSentences = sentences.slice(startIndex,endIndex);

        return paginatedSentences;
    };

    render() {
        const { isLoading, sentences, topFeatures, activePage, activePageNo, numberOfPages } = this.state;
        const paginatedSentences = numberOfPages > 1 ? this._getPaginatedData() : sentences;
        const paginationComponent = numberOfPages > 1
                                    ? <PaginationButtons
                                        activePage={activePage}
                                        activePageNo={activePageNo}
                                        numberOfPages={numberOfPages}
                                        handlePagination={this._handlePagination}
                                    />
                                    : null;
        const sentenceCountClass = numberOfPages > 1
                                    ? 'paginated-sentence-count'
                                    : 'sentence-count';

        return (
            <div className='home-page container'>
                <div className="row">
                    <div className="col">
                        <SearchBar
                            handleInputChange={this._handleInputChange}
                            handleSearchTrigger={this._handleSearchTrigger}
                        />
                    </div>
                </div>
                <hr className="horizontal-seperator" />
                <div className="row">
                    <div className="col">
                        <Tabs defaultActiveKey="top-features" transition={false} id="noanim-tab-example">
                            <Tab eventKey="top-features" title="Top features">
                                <div className="top-features-count">{`${topFeatures.length} Top Features found`}</div>
                                <TopFeatures 
                                    topFeatures={topFeatures}
                                    isLoading={isLoading}
                                />
                            </Tab>
                            <Tab eventKey="sentences" title="Sentences" className="sentences-tab">
                                <div className={sentenceCountClass}>{`${sentences.length} Sentences found`}</div>
                                {paginationComponent}
                                <Sentences 
                                    sentences={paginatedSentences}
                                    isLoading={isLoading}
                                />
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;