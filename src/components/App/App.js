import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';

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

        <Router>
          <Link to="/feelings">go to feelings</Link>

          {/* <Comments />
      <Feelings />
      <Review />
      <Submitted />
      <Support />
      <Understanding /> */}

          <Route exact path="/feelings" component={Feelings} />
          <Route exact path="/understanding" component={Understanding} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/submitted" component={Submitted} />
          <Route exact path="/support" component={Support} />
          <Route exact path="/comments" component={Comments} />

        </Router>

        <br />
      </div>
    );
  }
}

export default App;
