import React from 'react';
import './App.css';
import {Header} from "./components/Header";

class App extends React.Component {
  render() {
    return (
        <div className="App">
            <Header badge={15} />
        </div>
    );
  }
}
export default App;
