/**
 * @author Bruno Prdt
 * container/DetailsPage/HeaderDetails
 */
import React from 'react';
import DetailsContainer from './DetailsContainer';
import Stars from "./stars";
import '../../css/HeaderDetails.css';

class HeaderDetails extends React.Component {
    render() {
        return (
            <div className="headerDetails">
                <div className="badge-decoration">{this.props.status}</div>
                <div className="headerDetails--poster">
                    <img className="headerDetails--poster" src={this.props.imgSrc} alt="poster" />
                </div>
                <div className="headerDetails--container">
                    <h3 className="headerDetails--container__title">{this.props.mTitle}</h3>
                    <p className="headerDetails--container__desc">{this.props.mDesc}</p>
                    <div className="headerDetails--info">
                        <DetailsContainer iconName="clock" content={this.props.runtime} />
                        <Stars fakeArray1={['1', '1', '1']} fakeArray2={['2', '2', '2']} />
                        <DetailsContainer iconName="money" content={this.props.revenue} />
                    </div>
                 </div>
            </div>
        );
    }
}

export default HeaderDetails;