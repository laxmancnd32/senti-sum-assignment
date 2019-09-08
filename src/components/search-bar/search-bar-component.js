import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './search-bar.scss';

const SearchBar = props => {
    const { handleInputChange, handleSearchTrigger } = props;

    return (
        <div className='search-bar'>
            <InputGroup>
                <FormControl
                    placeholder="Type a word"
                    onChange={event => handleInputChange(event)}
                    onKeyPress={ event => event.charCode === 13 && handleSearchTrigger() }
                />
                <Button onClick={handleSearchTrigger}>
                    <FontAwesomeIcon icon={faSearch} />
                </Button>
            </InputGroup> 
        </div>
    );
}

export default SearchBar;