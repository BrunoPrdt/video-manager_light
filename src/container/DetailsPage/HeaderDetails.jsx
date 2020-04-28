/**
 * @author Bruno Prdt
 * container/DetailsPage/HeaderDetails
 */
import React from 'react';
import DetailsContainer from './DetailsContainer';
import Stars from "./stars";
import '../../css/HeaderDetails.css';
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import { calcTime, convertMoney } from "../../Utils/Helpers";

function HeaderDetails(props) {
    let fakeArray1 = [];
    let fakeArray2 = [];
    const calcVote = () => {
        const vote = Math.round(props.vote/2); // arondit le nombre si besoin
        const rest = 5 - vote;
        for (let i = 0; i < vote; i++) {
            fakeArray1.push(1);
        }
        if (rest !== 0) {
            for (let i = 0; i < rest; i++) {
                fakeArray2.push(1);
            }
        }

    };

    calcVote();

    return (
        <div className="headerDetails">
            <div className="badge-decoration">{props.status}</div>
            <div className="headerDetails--poster">
                <img
                    className="headerDetails--poster"
                    src={`${IMAGE_BASE_URL}/${POSTER_SIZE}/${props.imgSrc}`}
                    alt="poster"
                />
            </div>
            <div className="headerDetails--container">
                <h3 className="headerDetails--container__title">{props.mTitle}</h3>
                <p className="headerDetails--container__desc">{props.tag}</p>
                <p className="headerDetails--container__desc">{props.mDesc}</p>
                <div className="headerDetails--info">
                    <DetailsContainer iconName="clock" content={`duree: ${calcTime(props.runtime)}`} />
                    <Stars fakeArray1={fakeArray1} fakeArray2={fakeArray2} />
                    <DetailsContainer iconName="money" content={convertMoney(props.revenue)} />
                </div>
             </div>
        </div>
    )
}

export default HeaderDetails;