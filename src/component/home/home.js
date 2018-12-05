import React, { Component } from 'react';
import { Card, Jumbotron, Row, Col } from 'reactstrap';
import { Button, Icon } from 'semantic-ui-react'
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
                <label id="head-title">เลือกรูปแบบคำถาม</label>
                <div className="btn-start">
                  <Row>
                    <Col xs={12} sm={12} md={12} id="btn-sort">
                      <Button
                        animated
                        fluid
                        icon labelPosition='left'
                        inverted color='green'
                        size='large'
                        onClick={() => this.setState({ choice1: !this.state.choice1, choice2: false })}>
                        <Button.Content visible>
                          <Icon name='align justify' />
                          <span className="App">    แบบเรียงลำดับ</span>
                        </Button.Content>
                        <Button.Content hidden>
                          <Icon name='align justify' />
                        </Button.Content>
                      </Button>
                      {/* <Button outline block size="lg" color="success" onClick={() => this.setState({ choice1: !this.state.choice1, choice2: false })}> แบบเรียงลำดับ </Button> */}
                    </Col>
                    <Col xs={12} sm={12} md={12} id="btn-random">
                      <Button
                        animated
                        fluid
                        
                        inverted color='blue'
                        size='large'
                        onClick={() => this.setState({ choice2: !this.state.choice2, choice1: false })}>
                        <Button.Content 
                          visible
                          icon labelPosition='left'
                          >
                          <Icon name='random' />
                          <span className="App">    แบบสุ่ม</span>
                        </Button.Content>
                        <Button.Content hidden>
                          <Icon name='random' />
                        </Button.Content>
                      </Button>
                    </Col>
                  </Row>

                </div>
              </Jumbotron>
            }
          </div>

          <div className="card-form">
            {this.state.choice1 &&
              <Row>
                <Col xs={10} sm={10} md={10}>
                  <CardComponentSort
                    number={0}
                  />
                </Col>
              </Row>

            }
            {this.state.choice2 &&
              <Row>
                <Col xs={10} sm={12} md={12}>
                  <CardComponent
                    number={this.props.number}
                  />
                </Col>
              </Row>
            }
          </div>

        </header>
      </div>
    );
  }
}

export default App;
