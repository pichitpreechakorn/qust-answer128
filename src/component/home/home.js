import React, { Component } from 'react';
import { Jumbotron, Row, Col, Badge } from 'reactstrap';
import { Button, Icon, Header, Image, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import logo from '../../logo.svg';
import CardComponent from '../card/card'
import CardComponentSort from '../card/card_sort'
import ModalRegis from '../modal/modal_regis'
import ModalStart from '../modal/modal_end'
import '../../App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      headTitle: true,
      choice1: false,
      choice2: false,
      modal_regis: false,
      modal_start: false,
      status_choice: 0,
      scoreStatus: true,
    }
  }
  // componentWillMount() {
  //   console.log(this.state.modal_start)
  //   this.setState({ modal_start: true })
  //   // setTimeout(() => {
  //   //   this.setState({ modal_start: !this.state.modal_start })
  //   // }, 3000)
  // }
  addRegisSort() {
    this.setState({ modal_regis: !this.state.modal_regis, status_choice: 0 })
  }
  addRegisRandom() {
    this.setState({ modal_regis: !this.state.modal_regis, status_choice: 1, choice2: !this.state.choice2, choice1: false })
  }
  setScore() {
    this.setState({ scoreStatus: true })
    console.log("setScore" + this.props.score.point)
  }
  checkChoice() {
    if (this.state.status_choice === 0) {
      this.setState({ choice1: !this.state.choice1 })
    }
    else if (this.state.status_choice === 1) {
      this.setState({ choice2: !this.status_choice })
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
                        // onClick={() => this.setState({ choice1: !this.state.choice1, choice2: false })}>
                        onClick={this.addRegisSort.bind(this)}>

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
                        onClick={this.addRegisRandom.bind(this)}>
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
            {this.props.username.name === "" ?
              <div>

              </div>
              :
              <div>
                <Jumbotron>
                  {this.state.scoreStatus &&
                    <h1 id="head-title2">คะแนน : <Badge color="success" pill>{this.props.score.point}</Badge></h1>
                  }
                  <h2 id="head-title">หมายเลขความสูง : {this.props.username.higthNumber}</h2>
                  <h3 id="head-title">ชื่อ-นามสกุล : {this.props.username.name}  {this.props.username.lastname}</h3>
                  <h4 id="head-title">เลขที่ : {this.props.username.ground}{this.props.username.number}</h4>
                </Jumbotron>
              </div>

            }

          </div>

          <div className="card-form">
            {this.state.choice1 &&
              <Row>
                <Col xs={10} sm={10} md={10}>
                  <CardComponentSort
                    getScore={this.setScore.bind(this)}
                    number={0}
                  />
                </Col>
              </Row>

            }
            {this.state.choice2 &&
              <Row>
                <Col xs={10} sm={12} md={12}>
                  <CardComponent
                    getScore={this.setScore.bind(this)}
                    number={this.props.number}
                  />
                </Col>
              </Row>
            }
            {this.state.modal_regis &&
              <Row>
                <Col xs={10} sm={12} md={12}>
                  <ModalRegis
                    regis={this.checkChoice.bind(this)}
                  />
                </Col>
              </Row>
            }
            {this.state.modal_start &&
              <Row>
                <Col xs={10} sm={12} md={12}>
                  <ModalStart
                  // regis={this.checkChoice.bind(this)}
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

const mapStateToProps = state => {
  return {
    username: state.username,
    score: state.score
  }
}

export default connect(mapStateToProps)(App);
