/**
 * @author Bruno Prdt
 * Header
 */
import React from 'react';
import Fontawesome from 'react-fontawesome';
import '../../css/Header.css'

function Header(props) {
	return (
		<div className="header">
			<Fontawesome className="header--movie" name="film" size="5x" />
			<h3>NETPRIME</h3>
			<Fontawesome className="header--heart" name="heart" size="5x" />
			{/* eslint-disable-next-line react/prop-types */}
			<div className="header--badge">{props.badge}</div>
		</div>
	);
}

export { Header };
