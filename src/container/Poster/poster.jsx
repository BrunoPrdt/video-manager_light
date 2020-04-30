/**
 * @author Bruno Prdt
 * container/Poster
 */
import React from 'react';
import Fontawesome from 'react-fontawesome';
import '../../css/Poster.css';
import { Link } from "react-router-dom";
import { addMovie, removeMovie } from "../../actions/movie";
import { connect } from "react-redux";

class PosterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            wished: this.props.wished,
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
        if (this.state.wished) {
            return;
        }
        this.setState({wished: true});
        this.props.wishMovie(this.props.movie);
    };

    posterUnwish = () => {
        if (!this.state.wished) {
            return;
        }
        this.setState({wished: false});
        this.props.unwishMovie(this.props.id);
    };

    render() {
        return (
            <div
                className="poster"
                onMouseEnter={this.showOverlay}
                onMouseLeave={this.hideOverlay}
            >
                <Link to={`/details/${this.props.id}`}>
                    <img
                        className="poster--img"
                        src={this.props.imgSrc}
                        alt={this.props.mTitle}
                    />
                </Link>
                {this.state.hover ? (
                    <div className="poster--overlay">
                        <h3 className="poster--overlay__text">LISTE DE SOUHAITS</h3>
                        {this.state.wished ? (
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

const mapDispatchMovieToProps = dispatch => {
    return {
        wishMovie: movie => dispatch(addMovie(movie)),
        unwishMovie: movieId => dispatch(removeMovie(movieId)),
    }
};

const Poster = connect(null, mapDispatchMovieToProps)(PosterComponent);

export default Poster;