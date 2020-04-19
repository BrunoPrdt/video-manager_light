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
    constructor(props) {
        super(props);
        {/* this.state = {
            movies: [
                {
                    backdrop_path: './images/Fast_large.jpg',
                    id: 475557,
                    overview:
                        'Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.',
                    poster_path: './images/Fast_small.jpg',
                    title: 'Joker',
                },
                {
                    backdrop_path: './images/Fast_large.jpg',
                    id: 475558,
                    overview:
                        'Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.',
                    poster_path: './images/Fast_small.jpg',
                    title: 'Joker',
                },
                {
                    backdrop_path: './images/Fast_large.jpg',
                    id: 475559,
                    overview:
                        'Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.',
                    poster_path: './images/Fast_small.jpg',
                    title: 'Joker',
                },
                {
                    backdrop_path: './images/Fast_large.jpg',
                    id: 475554,
                    overview:
                        'Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.',
                    poster_path: './images/Fast_small.jpg',
                    title: 'Joker',
                },
            ],
            movieTitle: 'Fast and Furious',
            movieDescription:
                'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
            image: './images/Fast_large.jpg',
            loading: false,
            activePage: 0,
            totalPages: 0,
            searchText: null,
        }; */}
    }
    render() {
        const {movieTitle, movieDescription, image, movies, loading} = this.props;
        return (
            <div>
            <HeaderImg
                title={movieTitle}
                overvieuw={movieDescription}
                imgSrc={image}
            />
                <SearchBar onSearchClick={this.props.onSearchClick} />
                <PosterList movies={movies} />
                <LoadButton
                    loading={loading}
                    onButtonClick={this.props.onButtonClick}
                />
            </div>
        );
    }
}

export { Home }