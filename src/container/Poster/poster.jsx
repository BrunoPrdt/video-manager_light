/**
 * @author Bruno Prdt
 * container/Poster
 */
import React from 'react';
import Fontawesome from 'react-fontawesome';
import '../../css/Poster.css';

class Poster extends React.Component {
    render() {
        return (
            <div className="poster">
                <img className="poster--img" src={this.props.imgSrc} alt="poster" />
                {this.props.hover ? (
                    <div className="poster--overlay">
                        <h3 className="poster--overlay__text">LISTE DE SOUHAITS</h3>
                        {this.props.whished ? (
                            <Fontawesome className="poster--icon" name="heart" size="3x" />
                        ) : (
                            <Fontawesome className="poster--icon__not" name="heart" size="3x" />
                        )}
                    </div>
                ) : null}
            </div>
        );
    }
}
export default Poster;