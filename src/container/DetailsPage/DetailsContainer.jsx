/**
 * @author Bruno Prdt
 * container/DetailsPage/DetailsContainer
 */
import React from 'react';
import FontAwesome from 'react-fontawesome';
import '../../css/Container.css';

function DetailsContainer(props) {
    return (
        <div className="container">
            <FontAwesome name={props.iconName} style={{color: "#fff"}} size="5x" />
            <h3 className="container--title">{props.content}</h3>
        </div>
    );
}

export default DetailsContainer;