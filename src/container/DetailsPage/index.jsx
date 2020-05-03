/**
 * @author Bruno Prdt
 * container/DetailsPage/Details
 */
import React from 'react';
import '../../css/Container.css';
import HeaderDetails from './HeaderDetails';
import ActorList from './ActorList';
import { Spinner } from '../Spinner/Spinner';
import { API_KEY, API_URL } from "../../config";
import axios from "axios";

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            actors: [],
            mTitle: '',
            mDesc: '',
            tag: '',
            runtime: '',
            revenue: '',
            status: '',
            imgSrc: '',
            vote: '',
        };
    }

   async componentDidMount() {
       const ID = this.props.match.params.id;
       const UrlMovieDetails = `${API_URL}/movie/${ID}?api_key=${API_KEY}&language=fr`;
       const UrlMovieArtist = `${API_URL}/movie/${ID}/credits?api_key=${API_KEY}&language=fr`;
       const {data: {
           title,
           tag,
           overview,
           runtime,
           revenue,
           status,
           poster_path,
           vote_average,
       }} = await this.loadInfos(UrlMovieDetails);
       this.setState({
           mTitle: title,
           tag: tag,
           mDesc: overview,
           runtime: runtime,
           revenue: revenue,
           status: status,
           imgSrc: poster_path,
           vote: vote_average,
       }, async () => {
           const { data: { cast } } = await this.loadInfos(UrlMovieArtist);
           this.setState({actors: cast, loading: false });
       })
    }

    loadInfos = url => axios.get(url);

    render() {
        const {
            mTitle,
            tag,
            mDesc,
            runtime,
            revenue,
            status,
            imgSrc,
            vote
        } = this.state;
        return (
            <div className="app">
                {this.props.loading? (
                    <Spinner />
                ) : (
                    <>
                        <HeaderDetails
                            mTitle={ mTitle }
                            tag={ tag }
                            mDesc={ mDesc }
                            runtime={ runtime }
                            revenue={ revenue }
                            status={ status }
                            imgSrc={ imgSrc }
                            vote={ vote }
                        />
                        <ActorList actors={this.state.actors} />
                    </>
                )}
            </div>
        );
    }
}

export default Details;