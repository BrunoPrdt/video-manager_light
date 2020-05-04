/**
 * @author Bruno Prdt
 * app/container/MoviePlayer/moviePlayer
 */
import React from "react";
import { VideoPlayer, MvPlayerList} from "./index";
import '../../css/MoviePlayer.css';
import { Spinner } from "../Spinner/Spinner";
import { API_KEY, API_URL, IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";
import axios from "axios";
import _ from 'lodash';
import {calcTime} from "../../Utils/Helpers";

let newMovies = [];

class MoviePlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [
                {
                    duration: "2h 9m",
                    id: 429617,
                    imageUrl: "http://image.tmdb.org/t/p/w1280//5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
                    position: 1,
                    title: "Spider-Man : Far from home",
                    videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                },
                {
                    duration: "2h 9m",
                    id: 429618,
                    imageUrl: "http://image.tmdb.org/t/p/w1280//5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
                    position: 1,
                    title: "Spider-Man : Far from home",
                    videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                },
                ],
            selectedMovie: {
                duration: "2h 9m",
                id: 429617,
                imageUrl: "http://image.tmdb.org/t/p/w1280//5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
                position: 1,
                title: "Spider-Man : Far from home",
                videoUrl: "https://www.youtube.com/watch?v=5BlrwSjWqUQ",
            },
            loading: false,
        };
    }

   async componentDidMount() {
        const oldMovies = JSON.parse(localStorage.getItem('movies'));
        const results = await this.getNewMovies(oldMovies);
        const DURATION = [];
        const TRAILERKEY = [];
        results.map((result, i) => {
            if (i % 2 === 0){
                DURATION.push(result);
            } else {
                TRAILERKEY.push(result);
            }
        });
        newMovies = oldMovies.map((oldMovie, index) => {
            return{
                id: oldMovie.id,
                position: index + 1,
                title: oldMovie.title,
                duration: DURATION[index],
                imageUrl: `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${oldMovie.backdrop_path}`,
                videoUrl: `https://www.youtube.com/watch?v=${TRAILERKEY[index]}`,
                videoUrl2: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            }
        });
        const id = this.props.match.params.id;
        if (id) {
            const selectedMovie = this.getSelectedMovie(newMovies, id);
            this.setState({
                loading: false,
                movies: [...newMovies],
                selectedMovie,
            })
        } else {
            const selectedMovie = newMovies[0];
            this.setState({
                loading: false,
                movies: [...newMovies],
                selectedMovie,
            });
            this.props.history.push({
                pathname: `/player/${selectedMovie.id}`,
            });
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.id !== this.props.match.params.id){
            const id = this.props.match.params.id;
            const selectedMovie = this.getSelectedMovie(newMovies, id);
            console.log('componentDidUpdate');
            this.setState({
                loading: false,
                selectedMovie,
            })
        }
    }

    getSelectedMovie = (movies, movieId) => {
        const selectedMovie = _.find(movies, { id: parseInt(movieId, 10) });
        return selectedMovie;
    };

    // arow function to bind this
    handleEnded = () => {
        console.log("video Ended");
        const {movies, selectedMovie} = this.state;
        const movieIndex = movies.findIndex(movie => selectedMovie.id === movie.id);
        const nextMovieIndex = movieIndex === movies.length - 1 ? 0 : movieIndex + 1;
        const newSelectedMovies = movies[nextMovieIndex];
        this.props.history.push({pathname: `/player/${newSelectedMovies.id}`});
        this.setState({newSelectedMovies: newSelectedMovies});
    };

    getTime = movieId => {
        return new Promise((resolve, reject) => {
            const Url = `${API_URL}/movie/${movieId}?api_key=${API_KEY}&language=fr`;
            axios.get(Url)
                .then(data => {
                    const duration = data.data.runtime;
                    resolve(duration);
                })
                .catch(e => {
                    console.log(e);
                    reject('error', e);
                })
        })
    };

    getTrailerKey = movieId => {
        return new Promise((resolve, reject) => {
            const Url = `${API_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=fr`;
            axios.get(Url)
                .then(data => {
                    const trailerKey = data.data.results[1].key;
                    resolve(trailerKey);
                })
                .catch(e => {
                    console.log(e);
                    reject('error', e);
                })
        })
    };

    getNewMovies = async oldMovies => {
      let promises = [];
      for (let i = 0; i<oldMovies.length; i++) {
          const element = oldMovies[i];
          const id = element.id;
          const TIME = await this.getTime(id);
          promises.push(calcTime(TIME));
          promises.push(this.getTrailerKey(id));
      }
      return Promise.all(promises);
    };

    render() {
        const { movies, selectedMovie } = this.state;

        return (
            <div className="moviePlayer">
                {this.state.loading?
                    (
                        <Spinner />
                    ) :
                    (
                        <>
                            <VideoPlayer
                                videoUrl={selectedMovie.videoUrl}
                                imageUrl={selectedMovie.imageUrl}
                                handleEnded={this.handleEnded}
                            />
                            <MvPlayerList
                                movies={movies}
                                selectedMovie={selectedMovie}
                            />
                        </>
                    )
                }
            </div>
        );
    }
}

export { MoviePlayer };