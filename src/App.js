import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Home} from './container/HomePage';
import { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from './config';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            badge: 0,
            movies: [],
            movieTitle: '',
            movieDescription: '',
            image: '',
            loading: false,
            activePage: 0,
            totalPages: 0,
            searchText: null,
        };
    };

    /* loadMovies = () => {
        const myApiHeader = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        const init = {
            method: 'GET',
            headers: myApiHeader,
            mode: 'cors',
        };
        const page = this.state.activePage + 1;
        const moviesUrl = `${API_URL}/movie/popular?api_key=${API_KEY}&page=${page}&language=fr`;
        fetch(moviesUrl, init)
            .then(response => response.json())
            .then(json => {
                const DATA = json;
                console.log(DATA.results);
                this.setState({movies: DATA.results});
                console.log('movies after', this.state.movies);
            })
            .catch(error => console.log(error)) // catch error json
            .catch(error => console.log(error)); // catch error API
    }; */
    loadMovies = () => {
        const page = this.state.activePage + 1;
        const moviesUrl = `${API_URL}/movie/popular?api_key=${API_KEY}&page=${page}&language=fr`;
        return axios.get(moviesUrl);
    };

    async componentDidMount() {
        try {
            const { data: { results, activePage, total_pages } } = await this.loadMovies();
            this.setState({
                movies: results,
                totalPages: total_pages,
                activePage: activePage,
                image: `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${results[0].backdrop_path}`,
                movieTitle: results[0].title,
                movieDescription: results[0].overview,
            });
        } catch (e) {
            console.log('error e', e);
        }
    }

    handleSearch = value => {
        // launch search
        console.log(value);
    };

    loadMore = () => {
        // launch query
        console.log('test loadMore');
    };

  render() {
    return (
        <div className="App">
            <Header badge={this.state.badge} />
            <Home
                {...this.state}
                onSearchClick={this.handleSearch}
                onButtonClick={this.loadMore}
            />
        </div>
    );
  }
}
export default App;
