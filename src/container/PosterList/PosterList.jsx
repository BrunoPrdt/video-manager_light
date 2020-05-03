/**
 * @author Bruno Prdt
 * container/PosterList
 */
import React from 'react';
import '../../css/PosterList.css';
import Poster from '../Poster/poster';
import {POSTER_SIZE, IMAGE_BASE_URL} from "../../config";

function PosterList(props) {

    const renderPoster = () =>
        // eslint-disable-next-line react/prop-types
        props.movies.map(movie => {
            const imgSrc = `${IMAGE_BASE_URL}/${POSTER_SIZE}/${movie.poster_path}`;

            let wish = false;
            if (props.localMovies) {
                props.localMovies.forEach(localMovie => {
                    if (movie.id === localMovie.id) {
                        wish = true;
                    }
                })
            }

            return (
                <Poster
                    key={movie.id}
                    id={movie.id}
                    imgSrc={imgSrc}
                    wished={wish}
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