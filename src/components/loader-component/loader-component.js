import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './loader.scss';

const Loader = () => {

  return (
    <div className="loader">
        <FontAwesomeIcon icon={faSpinner} className="fa-spin" size='4x'/>
    </div>
  );
};

export default Loader;