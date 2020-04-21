/**
 * @author Bruno Prdt
 * container/Poster
 */
import React from 'react';
import '../../css/LoadButton.css';
import { spinner } from '../Spinner/Spinner';

function LoadButton(props) {
    const page = props.activePage+1;
    return (
        <>
            {/* eslint-disable-next-line react/prop-types */}
            {props.loading ? (
                spinner
            ) : (
                <div
                    className="loadButton"
                    /* eslint-disable-next-line react/prop-types */
                    onClick={props.onButtonClick}
                >
                    <h3 className="loadButton--text">VOIR PLUS ({page}/{props.totalPages})</h3>
                </div>
            )}
        </>
    );
}

export default LoadButton;