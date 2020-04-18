/**
 * @author Bruno Prdt
 * container/Poster
 */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import '../../css/LoadButton.css';

library.add(faSpinner);

class LoadButton extends React.Component {
  render() {
    return (
        <React.Fragment>
            {console.log("loadin :",this.props.loading)}
          {this.props.loading ?

              <FontAwesomeIcon
                  icon="spinner"
                  pulse
                  size="7x"
                  className="fa-faSpinner"
              />
             :

              <div className="loadButton">
                <h3 className="loadButton--text">VOIR PLUS</h3>
              </div>

          }
        </React.Fragment>
    );
  }
}

export default LoadButton;