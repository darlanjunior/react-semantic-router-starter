import './App.css';

import { Container, Header } from 'semantic-ui-react';
import { Link, Route } from 'react-router-dom';
import React, { Component } from 'react';

const FirstPage = () => <Container>
  <Header>Hello Semantic</Header>
  <Link to="/router">Go To /router</Link>
</Container>

const HelloRouter = () => <Container>
  <Header>Hello Router</Header>
  <Link to="/">Go To /</Link>
</Container>

class App extends Component {
  render() {
    return [
      <Route path="/" component={FirstPage} exact/>,
      <Route path="/router" component={HelloRouter} />
    ];
  }
}

export default App;
