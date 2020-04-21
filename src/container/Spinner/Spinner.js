import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faSpinner);

export const spinner = props => {
    return (
        <FontAwesomeIcon icon="spinner" pulse size="7x" className="fa-faSpinner" />
    )
} ;
