/**
 * @author Bruno Prdt
 * container/Poster
 */
import React from 'react';
import '../../css/LoadButton.css';
import { spinner } from '../Spinner/Spinner';

function LoadButton(props) {
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
                    <h3 className="loadButton--text">VOIR PLUS</h3>
                </div>
            )}
        </>
    );
}

export default LoadButton;