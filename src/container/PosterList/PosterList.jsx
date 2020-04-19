/**
 * @author Bruno Prdt
 * container/PosterList
 */
import React from 'react';
import '../../css/PosterList.css';
import Poster from '../Poster/poster';

function PosterList(props) {
    const whish = false;

    const renderPoster = () =>
        // eslint-disable-next-line react/prop-types
        props.movies.map(movie => {
            const imgSrc = movie.poster_path;
            return (
                <Poster
                    key={movie.id}
                    imgSrc={imgSrc}
                    whished={whish}
                    movie={movie}
                    mTitle={movie.title}
                    mDesc={movie.overview}
                />
            );
        });
    return (
        <div className="posterList">
            <h3 className="posterList--title">NOUVEAUX FILMS</h3>
            <div className="posterList--grid">{renderPoster()}</div>
        </div>
    );
}

export default PosterList