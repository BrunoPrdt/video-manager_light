/**
 * @author Bruno Prdt
 * app/container/MoviePlayer/MvPlayerList
 */
import React from "react";
import { MvPlayerListItem } from './index';
import '../../css/MvPlayerList.css';

function MvPlayerList(props) {
    const renderList = props => {
        return props.movies.map((movie, i) => {
            const active = movie.id === props.selectedMovie.id;
            return (
              <MvPlayerListItem
                  {...movie}
                  key={movie.id}
                  number={i + 1}
                  active={active}
              />
            );
        })
    };
    const position = props.selectedMovie.position;
    const total = props.movies.length;
    return (
        <div className="mvPlayerList">
            <div className="mvPlayerList--header">
                <h3>{props.selectedMovie.title}</h3>
                <div className="mvPlayerList--badge">{position}/{total}</div>
            </div>
            <div className="mvPlayerList--list">{renderList(props)}</div>
        </div>
    );
}

export { MvPlayerList }