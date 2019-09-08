import React from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationButtons = props => {
    const { activePage, activePageNo, numberOfPages, handlePagination } = props;

    return (
        <React.Fragment>
            <Pagination className='pagination-group'>
                <Pagination.Item 
                    active={activePage === 'First'}
                    onClick={() => handlePagination(0, 'First')}
                >{'First'}</Pagination.Item>
                <Pagination.Item
                    active={activePage === 'Previous'}
                    onClick={() => activePageNo > 0 && 
                                handlePagination(activePageNo-1, 'Previous')}
                >{'Previous'}</Pagination.Item>
                <Pagination.Item
                    active={activePage === 'Next'}
                    onClick={() => activePageNo < numberOfPages - 1 &&
                                handlePagination(activePageNo+1, 'Next')}
                >{'Next'}</Pagination.Item>
                <Pagination.Item
                    active={activePage === 'Last'}
                    onClick={() => handlePagination(numberOfPages-1, 'Last')}
                >{'Last'}</Pagination.Item>
            </Pagination>
        </React.Fragment>
    );
};

export default PaginationButtons;