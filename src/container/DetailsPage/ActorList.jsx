/**
 * @author Bruno Prdt
 * container/DetailsPage/ActorList
 */
import React from 'react';
import Actor from './Actor';
import '../../css/ActorList.css';

function ActorList(props) {
    function renderActor() {
        return props.actors.map((actor, index) => {
            const imgSrc = actor.profile_path;
            return (
                <Actor
                    /* eslint-disable-next-line react/no-array-index-key */
                    key={index}
                    imgSrc={imgSrc}
                    character={actor.character}
                    name={actor.name}
                    hover={false}
                />
            );
        });
    }

    return (
        <div className="actorList">
            <h3 className="actorList--title">ACTEURS</h3>
            <div className="actorList--grid">
                {renderActor()}
            </div>
        </div>
    );
}

export default ActorList;