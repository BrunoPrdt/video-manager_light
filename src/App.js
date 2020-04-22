import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import {Header} from "./components/Header";
import {Home} from './container/HomePage';
import { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE } from './config';
import axios from 'axios';
import { spinner } from "./container/Spinner/Spinner";
import Details from "./container/DetailsPage";
import NotFound from "./container/NotFoundPage";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            badge: 0,
            movies: [],
            movieTitle: '',
            movieDescription: '',
            image: null,
            loading: true,
            activePage: 0,
            totalPages: 0,
            searchText: '',
            adultContent: false,
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
        const moviesUrl = `${API_URL}/movie/popular?api_key=${API_KEY}&page=${page}&language=fr&include_adult=${
            this.state.adultContent}`;
        return axios.get(moviesUrl);
    };

    async componentDidMount() {
        try {
            const { data: { results, page, total_pages } } = await this.loadMovies();
            this.setState({
                movies: results,
                totalPages: total_pages,
                activePage: page,
                image: `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${results[0].backdrop_path}`,
                movieTitle: results[0].title,
                movieDescription: results[0].overview,
            });
        } catch (e) {
            console.log('error e', e);
        }
    }

    loadMore = async () => {
        try {
            this.setState({loading: true});
            const {
                data: { results, page, total_pages },
            } = await this.loadMovies();
            this.setState({
                movies: [...this.state.movies, ...results],
                totalPages: total_pages,
                activePage: page,
                image: `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${results[0].backdrop_path}`,
                movieTitle: results[0].title,
                movieDescription: results[0].overview,
                loading: false,
            });
        } catch (e) {
            console.log('error e', e);
        }
    };

    searchMovie = () => {
        const moviesUrlById = `${API_URL}/search/movie?api_key=${API_KEY}&language=fr&query=${ 
            this.state.searchText
        }&include_adult=${this.state.adultContent}`;
        return axios.get(moviesUrlById);
    };

    handleSearch = value => {
        try {
            this.setState(
                { searchText: value, loading: true, image: null },
                async () => {
                    const {
                        data: { results, page, total_pages },
                    } = await this.searchMovie();
                    this.setState({
                        movies: results,
                        totalPages: total_pages,
                        activePage: page,
                        image: `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${
                            results[0].backdrop_path}`,
                        movieTitle: results[0].title,
                        movieDescription: results[0].overview,
                        loading: false,
                        searchText: true,
                    });
                },
                )
        } catch (e) {
            console.log('error e', e);
        }
    };

    handleCheck = e => {
        this.setState({ adultContent: e });
    };

  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header badge={this.state.badge} />
                {!this.state.image ? (
                    spinner
                ) : (
                    <Switch>
                        {/* <Route exact path="/" component={Home} />  methode si pas besoin de passer des props */}
                        <Route exact path="/" render={() => (
                            <Home
                                {...this.state}
                                onSearchClick={this.handleSearch}
                                onButtonClick={this.loadMore}
                                handleCheck={this.handleCheck}
                            />
                        )}
                        />
                        <Route path="/details/:id" component={Details} />
                        <Route path="" component={NotFound} />
                    </Switch>
                )}
            </div>
        </BrowserRouter>
    );
  }
}
export default App;
