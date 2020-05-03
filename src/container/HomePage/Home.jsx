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
import { connect } from 'react-redux'
import { getMovies } from "../../actions/movie";

class HomeComponent extends React.Component {
    componentDidMount() {
        this.props.getWhishedMovies();
    }

    render() {
        const {movieTitle, movieDescription, image, movies, loading, activePage, totalPages, localMovies} = this.props;
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
                <PosterList movies={movies} localMovies={localMovies} />
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

const mapStateToProps = state => {
    return {
        localMovies: state.movies.movies
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getWhishedMovies: () => dispatch(getMovies())
    }
};

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);

export { Home }