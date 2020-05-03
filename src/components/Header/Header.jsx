/**
 * @author Bruno Prdt
 * Header
 */
import React, { useEffect } from 'react';
import Fontawesome from 'react-fontawesome';
import '../../css/Header.css'
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import { getNumber } from "../../actions/movie";

function HeaderComponent(props) {

	useEffect( () => {
		props.getNumber();
	}, [props]);

	return (
		<div className="header">
			<Link to="/">
				<Fontawesome className="header--movie" name="film" size="5x" />
			</Link>
			<Link
				to="/"
				style={{textDecoration: "none", color: "#fff"}}
			>
				<h3>NETPRIME</h3>
			</Link>
			<Link to="/player">
				<Fontawesome className="header--heart" name="heart" size="5x" />
			</Link>
			{/* eslint-disable-next-line react/prop-types */}
			<div className="header--badge">{props.badge}</div>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		badge: state.movies.number,
	}
};

const mapDispatchToProps = dispatch => {
	return {
		getNumber: () => dispatch(getNumber()),
	}
};

const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);

export { Header };
