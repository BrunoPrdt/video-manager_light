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
        this.state = {
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
            title: 'Fast and Furious',
            overview:
                'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
            imgSrc: './images/Fast_large.jpg',
            loading: false,
        };
    }
    render() {
        return (
            <div>
            <HeaderImg
                title={this.state.title}
                overvieuw={this.state.overview}
                imgSrc={this.state.imgSrc}
            />
                <SearchBar />
                <PosterList movies={this.state.movies} />
                <LoadButton loading={this.state.loading} />
            </div>
        );
    }
}

export { Home }