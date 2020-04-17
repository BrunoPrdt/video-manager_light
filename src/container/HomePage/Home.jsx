/**
 * @author Bruno Prdt
 * HomePage *
 * This is the first thing users see of our App, at the '/' route
 */
import React from 'react'

const movies = [
    {
        backdrop_path: "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
        id: 475557,
        overview:
            "Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.",
        poster_path: "/tWjJ3ILjsbTwKgXxEv48QAbYZ19.jpg",
        title: "Joker"
    }
];

class Home extends React.Component {
    render() {
        return(
            <div>Home</div>
        )
    }
}

export {Home}