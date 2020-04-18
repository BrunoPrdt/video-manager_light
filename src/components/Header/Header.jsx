/**
 * @author Bruno Prdt
 * Header
 */
import React from 'react';
import Fontawesome from 'react-fontawesome';
import '../../css/Header.css'

class Header extends React.Component {
	render() {
		return (
		<div className="header">
			<Fontawesome className="header--movie" name="film" size="5x" />
			<h3>NETPRIME</h3>
			<Fontawesome className="header--heart" name="heart" size="5x" />
			<div className="header--badge">{this.props.badge}</div>
		</div>
	)}
}

export { Header };
