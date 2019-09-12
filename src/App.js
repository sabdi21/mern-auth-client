import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css';
import Content from './content/Content'
import Nav from './nav/Nav';
import Header from './nav/Header';


class App extends React.Component {
  state = {
    user: null
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Nav user={this.state.user}/>
          <Header />
          <Content />
        </div>
      </Router>
    );
  }
}

export default App;
