/**
 * @author Bruno Prdt
 * container/DetailsPage/Stars
 */
import React from 'react';
import FontAwesome from 'react-fontawesome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import '../../css/stars.css';

function Stars(props) {
    function renderStars1() {
        return props.fakeArray1.map((element, index) => {
            return <FontAwesomeIcon key={index} icon={faStar} size="3x" />
        })
    }

    function renderStars2() {
        return props.fakeArray2.map((element, index) => {
            return <FontAwesome
                key={index}
                className="stars"
                name="star-o"
                size="3x"
            />
        })
    }

    return <div className="stars">
        {renderStars1()}
        {renderStars2()}
    </div>;
}


export default Stars;