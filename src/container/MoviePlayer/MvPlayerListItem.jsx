/**
 * @author Bruno Prdt
 * app/container/MoviePlayer/MvPlayerListItem
 */
import React from "react";
import '../../css/MvPlayerListItem.css';
import { Link } from "react-router-dom";

function MvPlayerListItem(props) {
    const activeClass = props.active? 'active' : '';
    return (
        <Link
            style={{textDecoration: "none", color: "#fff"}}
            to={`/player/${props.id}`}
        >
            <div className="mvPlayerListItem">
                <div className={activeClass}>
                    <div className="mvPlayerListItem--number">{props.number}</div>
                    <div className="mvPlayerListItem--title">{props.title}</div>
                    <div className="mvPlayerListItem--time">{props.duration}</div>
                </div>
            </div>
            <div className="mvPlayerListItem--divider"/>
        </Link>
    );
}

export { MvPlayerListItem };