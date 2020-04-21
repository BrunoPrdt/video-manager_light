/**
 * @author Bruno Prdt
 * SearchBar *
 * This is the first thing users see of our App, at the '/' route
 */
import React from 'react';
import Fontawesome from 'react-fontawesome';
import '../../css/SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }

    handleChange = e => {
        this.setState({ value: e.currentTarget.value });
    };

    onSearchClick = () => {
        this.props.onSearchClick(this.state.value)
    };

    handleCheck = e => {
        this.props.handleCheck(e.currentTarget.checked);
    };

    render() {
        return (
            <div className="searchBar--container">
                <div className="searchBar">
                    <input
                        className="searchBar--input"
                        type="text"
                        placeholder="Rechercher un film"
                        value = {this.state.value}
                        onChange={this.handleChange}
                    />
                    <div className="searchBar--submit">
                        <Fontawesome
                            className="searchIcon"
                            name="search"
                            onClick={this.onSearchClick}
                        />
                    </div>
                </div>
                <div>
                    <span style={{ color: '#fff', fontSize: '2rem' }} >
                        {' '}
                        Autoriser le contenu adulte{' '}
                    </span>
                    <input type="checkbox" onClick={this.handleCheck} />
                </div>
            </div>
        );
    }
}

export { SearchBar };