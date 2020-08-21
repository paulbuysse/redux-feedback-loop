import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Comments from '../Comments/Comments.js';
import Feelings from '../Feelings/Feelings.js';
import Review from '../Review/Review.js';
import Submitted from '../Submitted/Submitted.js';
import Support from '../Support/Support.js';
import Understanding from '../Understanding/Understanding.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>

      <Comments />
      <Feelings />
      <Review />
      <Submitted />
      <Support />
      <Understanding />

        <br/>
      </div>
    );
  }
}

export default App;
