import React, { Component } from 'react';
import logo from './logo.svg';
import { Container, Row, Col } from 'reactstrap'
import './App.css';
import BackgroundImage from 'react-background-image-loader';
import Home from './component/home/home'
import Nav from './component/nav/nav'
import Footer from './component/footer/footer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      random: 0
    };
  }

  render() {
    return (
        <Row>
          <Col xs="12" sm="12" md="12">
              <Nav />
              <div className="bg-header">
                <BackgroundImage src="https://images6.alphacoders.com/310/thumb-1920-310137.jpg">
                  <Home
                    number={this.state.random}
                  />
                </BackgroundImage>
              </div>
              <div className="footer">
                <Footer />
              </div>
          </Col>
        </Row>


      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
