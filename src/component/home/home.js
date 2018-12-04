import React, { Component } from 'react';
import { Button, Card, Jumbotron } from 'reactstrap';
import logo from '../../logo.svg';
import CardComponent from '../card/card'
import CardComponentSort from '../card/card_sort'
import '../../App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      headTitle: true,
      choice1: false,
      choice2: false
    }
  }
  render() {
    return (
      <div className="App">
        {/* <img src="https://images6.alphacoders.com/310/thumb-1920-310137.jpg" className="img-bg"/> */}
        <header className="App-header">

          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <div id="headTitle">
            {this.state.headTitle &&
              <Jumbotron>
                <h1 id="head-title">การสอนอมรม 128 ข้อ</h1>
                <hr />
                <div className="btn-start">
                  <Button outline color="success" onClick={() => this.setState({ choice1: !this.state.choice1, choice2: false })}> แบบเรียงลำดับ </Button>
                  <Button outline color="primary" onClick={() => this.setState({ choice2: !this.state.choice2, choice1: false })}> แบบสุ่ม </Button>
                </div>
              </Jumbotron>
            }
          </div>

          <div className="card-form">
            {this.state.choice1 &&
              <CardComponentSort
                number={0}
              />
            }
            {this.state.choice2 &&
              <CardComponent
                number={this.props.number}
              />
            }
          </div>

        </header>
      </div>
    );
  }
}

export default App;
