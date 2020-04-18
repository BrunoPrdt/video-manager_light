/**
 * @author Bruno Prdt
 * PosterList.jsx
 */
import React from "react";
import '../../css/PosterList.css';

class PosterList extends React.Component{
    render() {
        return (
            <div className="posterList">
                <h3 className="posterList--title">NOUVEAUX FILMS</h3>
                <div className="posterList--grid">{this.renderPoster()}</div>
            </div>
        );
    }
}

export default PosterList