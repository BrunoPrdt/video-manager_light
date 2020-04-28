/**
 * @author Bruno Prdt
 * container/DetailsPage/Actor
 */
import React from 'react';
import '../../css/Actor.css';
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

class Actor extends React.Component {
    state = {
        hover: false,
    };

    showOverlay = () => {
        if (this.state.hover) {
            return;
        }
        this.setState({hover: true})
    };

    hideOverlay = () => {
        this.setState({hover: false})
    };

    render() {
        const name = this.props.name.split(" ");
        return (
            <div
                className="actor"
                onMouseEnter={this.showOverlay}
                onMouseLeave={this.hideOverlay}
            >
                <img
                    className="actor--img"
                    src={`${IMAGE_BASE_URL}/${POSTER_SIZE}/${this.props.imgSrc}`}
                    alt="actor"
                />
                <p style={{ fontSize: "2em", fontWeight: "bold", }}>
                    Dans le rôle de : {this.props.character}
                </p>
                {this.state.hover ?
                    (
                        <div className="actor--overlay">
                            <h3 className="actor--name">{name[0]}</h3>
                            <h3 className="actor--name">{name[1]}</h3>
                        </div>
                    ) : null}
            </div>
        );
    }
}

export default Actor;