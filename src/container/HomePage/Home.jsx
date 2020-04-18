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

const movies = [
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
];

class Home extends React.Component {
    render() {
        return (
            <div>
            <HeaderImg
                title="Fast and Furious"
                overvieuw="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
                imgSrc='./images/Fast_large.jpg'
            />
            <SearchBar />
            <PosterList movies={movies} />
            <LoadButton loading={false} />
            </div>
        );
    }
}

export { Home }