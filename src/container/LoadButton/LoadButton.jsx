/**
 * @author Bruno Prdt
 * container/Poster
 */
import React from 'react';
import '../../css/LoadButton.css';
import { spinner } from '../Spinner/Spinner';

class LoadButton extends React.Component {
  render() {
    return (
        <React.Fragment>
            {this.props.loading ? (
                spinner
            ) : (
                <div className="loadButton">
                    <h3 className="loadButton--text">VOIR PLUS</h3>
                </div>
            )}
        </React.Fragment>
    );
  }
}

export default LoadButton;