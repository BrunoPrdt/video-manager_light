/**
 * @author Bruno Prdt
 * container/DetailsPage/Details
 */
import React from 'react';
import '../../css/Container.css';
import HeaderDetails from './HeaderDetails';
import ActorList from './ActorList';
import { spinner } from "../Spinner/Spinner";

class Details extends React.Component {
    constructor(props) {
        super(props);
        state = {
            actors: [
                { name: 'Roger Moore' },
                { name: 'Ben Afleck' },
                { name: 'Al Pacino' },
                { name: 'Rober Deniro' },
                { name: 'Brad Pit' },
                { name: 'Jessica Alba' },
                { name: 'Sophie Marceau' },
            ],
        };
    }

    render() {
        return (
            <div className="app">
                {this.props.loading? (
                    spinner
                ) : (
                    <>
                        <HeaderDetails
                            mTitle="Batman"
                            mDesc="La description"
                            runtime="2h15"
                            revenue="150.000.000"
                            status="Release"
                            imgSrc="../../images/Fast_small.jpg"
                            vote=""
                        />
                        <ActorList actors={actors} />
                    </>
                )}
            </div>
        );
    }
}

export default Details;