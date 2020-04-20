/**
 * @author Bruno Prdt
 * container/Poster
 */
import React from 'react';
import Fontawesome from 'react-fontawesome';
import '../../css/Poster.css';

class Poster extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            whished: this.props.whished,
        };
    }

    showOverlay = () => {
        if (this.state.hover) {
            return;
        }
        this.setState({hover: true})
    };

    hideOverlay = () => {
        this.setState({hover: false})
    };

    posterWish = () => {
        if (this.state.whished) {
            return;
        }
        this.setState({whished: true})
    };

    posterUnwish = () => {
        if (!this.state.whished) {
            return;
        }
        this.setState({whished: false})
    };

    render() {
        return (
            <div
                className="poster"
                onMouseEnter={this.showOverlay}
                onMouseLeave={this.hideOverlay}
            >
                <img
                    className="poster--img"
                    src={this.props.imgSrc}
                    alt={this.props.mTitle}
                />
                {this.state.hover ? (
                    <div className="poster--overlay">
                        <h3 className="poster--overlay__text">LISTE DE SOUHAITS</h3>
                        {this.state.whished ? (
                            <Fontawesome
                                className="poster--icon"
                                name="heart"
                                size="3x"
                                onClick={this.posterUnwish}
                            />
                        ) : (
                            <Fontawesome
                                className="poster--icon__not"
                                name="heart" size="3x"
                                onClick={this.posterWish}
                            />
                        )}
                    </div>
                ) : null}
            </div>
        );
    }
}
export default Poster;