/**
 * @author Bruno Prdt
 * container/DetailsPage/Actor
 */
import React from 'react';
import '../../css/Actor.css';

class Actor extends React.Component {
    state = {

    };

    render() {
        const name = this.props.name.split(" ");
        return (
            <div className="actor">
                <img className="actor--img" src={this.props.imgSrc} alt="actor"/>
                {this.props.hover ?
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