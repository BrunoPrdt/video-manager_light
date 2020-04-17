import React from 'react';
import './App.css';
import Text1 from "./Text1";
import Text2 from "./Text2";

class App extends React.Component {
  render() {
    return (
        <div className="App">
            <Text1 placeholder="champs 1"/>
            <Text2 placeholder="champs 2"/>
        </div>
    );
  }
}
export default App;
