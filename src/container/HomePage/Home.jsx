/**
 * @author Bruno Prdt
 * HomePage *
 * This is the first thing users see of our App, at the '/' route
 */
import React from 'react'
import { HeaderImg } from '../../components/Header/HeaderImg';
import {SearchBar} from '../SearchBar/SearchBar';
import PosterList from '../PosterList/PosterList';
import LoadButton from '../LoadButton/LoadButton';

class Home extends React.Component {
    render() {
        const {movieTitle, movieDescription, image, movies, loading, activePage, totalPages} = this.props;
        return (
            <div>
            <HeaderImg
                title={movieTitle}
                overview={movieDescription}
                imgSrc={image}
            />
                <SearchBar
                    onSearchClick={this.props.onSearchClick}
                    handleCheck={this.props.handleCheck}
                />
                <PosterList movies={movies} />
                <LoadButton
                    loading={loading}
                    onButtonClick={this.props.onButtonClick}
                    activePage={activePage}
                    totalPages={totalPages}
                />
            </div>
        );
    }
}

export { Home }