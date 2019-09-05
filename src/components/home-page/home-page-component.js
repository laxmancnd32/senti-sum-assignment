import React, { Component } from 'react';
import SearchBar from '../search-bar';
import ResultsListing from '../results-list';
import { fetchSearchDetails } from '../../service';
import { BASE_URL } from '../../app-constants';
import './home-page.scss';

class HomePage extends Component {
    state = { isLoading: true, queryText: 'hello' };

    componentDidMount() {
        const { queryText } = this.state;
        fetchSearchDetails(BASE_URL, queryText).then(data=>{
            this.setState({ data, isLoading: false });
        });
    }

    handleInputChange = queryText => {
        this.setState({ queryText });
    };

    handleSearchTrigger = () => {
        const { queryText } = this.state;
        fetchSearchDetails(BASE_URL, queryText).then(data=>{
            this.setState({ data, isLoading: false });
        });
    };

    render() {
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

                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;