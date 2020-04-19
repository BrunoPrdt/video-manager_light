import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Home} from './container/HomePage';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            badge: 0,
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
        }
    };

  render() {
    return (
        <div className="App">
            <Header badge={this.state.badge} />
            <Home {...this.state} />
        </div>
    );
  }
}
export default App;
