/**
 * @author Bruno Prdt
 * container/PosterList
 */
import React from 'react';
import '../../css/PosterList.css';
import Poster from '../Poster/poster';

class PosterList extends React.Component{
    // arow function to bind this
    whish = false;

    renderPoster = () => {
        return this.props.movies.map( movie => {
            const imgSrc = movie.poster_path;
            return (
                <Poster
                    key={movie.id}
                    imgSrc={imgSrc}
                    hover={false}
                    whished={this.whish}
                    movie={movie}
                    mTitle={movie.title}
                    mDesc={movie.overview}
                />
            )
        })
    };
    render() {
        return (
            <div className="posterList">
                <h3 className="posterList--title">NOUVEAUX FILMS</h3>
                <div className="posterList--grid">{this.renderPoster()}</div>
            </div>
        );
    }
}

export default PosterList