import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Home} from './container/HomePage';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            badge: null,
        }
    };

  render() {
    return (
        <div className="App">
            <Header badge={15} />
            <Home />
        </div>
    );
  }
}
export default App;
