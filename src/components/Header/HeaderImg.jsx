/**
 * @author Bruno Prdt
 * HeaderImg *
 * This is the first thing users see of our App, at the '/' route
 */
import React from 'react'
import '../../css/HeaderImg.css'

function HeaderImg(props) {
    // eslint-disable-next-line react/prop-types
    const { imgSrc, title, overview } = props;
    return (
        <div
            className="headerImg"
            style={{ background: `url(${imgSrc}) no-repeat` }}
        >
            <div className="headerImg--overlay">
                <h3 className="headerImg--overlay__title">{title}</h3>
                <p className="headerImg--overlay__desc">{overview}</p>
            </div>
        </div>
    );
}

export { HeaderImg };