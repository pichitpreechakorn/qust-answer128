import React, { Component } from 'react';
import {
  Card, CardText, CardBody, CardImg,
  CardTitle, CardSubtitle, Form, FormGroup, Label, Input, Col, Row, Alert, FormFeedback
} from 'reactstrap';
import { Button, Icon } from 'semantic-ui-react'
import ModalSuccess from '../modal/modal_success'
import { connect } from 'react-redux'
import ModalFaild from '../modal/modal_fail'
import dataQust from '../../data/dataQuest'
import './card.css'

class CardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusModalSuccess: false,
      statusModalFail: false,
      status_textarea: 1,
      number: 0
    };
  }
  componentDidMount() {
    console.log(dataQust[0].qust)
  }
  componentWillMount() {
    this.randomNumber()
  }
  randomNumber() {
    const min = 0;
    // const max = 127;
    const max = 127;
    const rand = min + Math.random() * (max - min);
    this.setState({ number: parseInt(this.state.number + rand) });
    this.setState({ number: parseInt(rand) });

    setTimeout(() => {
      console.log(this.state.number)
    }, 100)
  }
  handleSubmit = (e) => {
    console.log(this.getAnswer.value)

  }
  toggle = () => {
    this.setState({ status: !this.state.status })
    console.log(this.getAnswer.value)
    this.checkAnswer()
  }
  checkAnswer() {
    if ((this.getAnswer.value !== "" || null) && (this.getAnswer.value === dataQust[this.state.number].answer || this.getAnswer.value === dataQust[this.state.number].answer2)) {
      this.setState({ statusModalSuccess: !this.state.statusModalSuccess, status_textarea: 1 })
      this.getAnswer.value = ""
      this.props.setPoint(this.props.score.point + 1)
      this.props.getScore(true)
      console.log("ถูก")
    }
    else if (this.getAnswer.value !== dataQust[this.state.number].answer) {
      this.setState({ statusModalFail: !this.state.statusModalFail, status_textarea: 0 })
      this.getAnswer.value = ""
      console.log("ผิด")
    }
    else if (this.getAnswer.value === "") {
      this.setState({ statusModalFail: !this.state.statusModalFail, status_textarea: 0 })
      this.getAnswer.value = ""
      console.log("ผิด")
    }
  }
  addNumber() {
    this.randomNumber()
    console.log("ถูก")
  }
  closeModal(status) {
    this.setState({
      statusModalFail: status,
      statusModalSuccess: status
    })
  }
  render() {
    return (
      <div class="card-form">
        <Row>
          <Col xs={12} md={12} sm={12}>
            <Card>
              <CardBody>
                <CardTitle id="text">
                  {/* <Label> ข้อที่ {dataQust[0].no} </Label> */}
                  <Label id="text-no"> ข้อที่ {dataQust[this.state.number].no} </Label>

                </CardTitle>
                <CardBody>
                  <div className="form-body">
                    <div id="contai-quest">
                      <Row>
                        <Col sm={2} xs={2}>
                          <p id="text-sub"> <u>ถาม :</u> </p>
                        </Col>
                        <Col sm={10} xs={10}>
                          <p id="text-sub"> {dataQust[this.state.number].qust} </p>
                        </Col>
                      </Row>
                    </div>
                    <div>
                      <Form onSubmit={this.handleSubmit}>
                        <FormGroup row>
                          <Col sm={2} xs={2}>
                            <p id="text-sub"> <u>ตอบ :</u> </p>
                          </Col>
                          <Col sm={10} xs={10}>
                            {this.state.status_textarea === 0 ?
                              <div className="contai-textarea">
                                <Input
                                  invalid
                                  rows="7"
                                  type="textarea"
                                  name="text"
                                  id="exampleText"
                                  innerRef={(input) => this.getAnswer = input}
                                  placeholder="คำตอบ ............................... "
                                />
                                <FormFeedback>คำตอบไม่ถูกต้อง !</FormFeedback>
                              </div>
                              :
                              <div className="contai-textarea">
                                <Input
                                  type="textarea"
                                  rows="7"
                                  name="text"
                                  id="exampleText"
                                  innerRef={(input) => this.getAnswer = input}
                                  placeholder="คำตอบ ............................... "
                                />
                              </div>

                            }
                          </Col>
                        </FormGroup>
                        <Button
                          animated
                          fluid
                          inverted color='green'
                          size='large'
                          onClick={this.toggle.bind(this)}
                          type="submit"
                        >
                          <Button.Content visible>
                            <label id="btn-submit"> ยืนยันคำตอบ </label>
                          </Button.Content>
                          <Button.Content hidden>
                            <Icon name='arrow right' />
                            <label id="btn-submit">  ส่งคำตอบ </label>
                          </Button.Content>
                        </Button>
                      </Form>
                    </div>
                  </div>
                </CardBody>
                <Alert color="warning">
                  <Row>
                    <Col sm={2} md={2} xs={2}>
                      <p id="detail-text">หมายเหตุ : </p>
                    </Col>
                    <Col sm={10} md={10} xs={10}>
                      <ul>
                        <li id="detail-text">กรุณากรอกคำตอบให้ถูกต้องมากที่สุด</li>
                        <li id="detail-text">ใช้ตัวเลขไทยเท่านั้น เช่น 1 = ๑ เป็นต้น</li>
                        <li id="detail-text">เว้นวรรคหรือเว้นบรรทัดให้ถูกต้อง</li>
                      </ul>
                    </Col>
                  </Row>
                </Alert>
              </CardBody>
            </Card>
            {
              this.state.statusModalSuccess &&
              <ModalSuccess
                closemodal={this.closeModal.bind(this)}
                addNumber={this.addNumber.bind(this)}
                answer={dataQust[this.state.number].answer}
              />
            }
            {/* {
              this.state.statusModalFail &&
              <ModalFaild
                closemodal={this.closeModal.bind(this)}
                answer={dataQust[this.state.number].answer}
              />
            } */}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      score : state.score
  }
}

const mapDispatchToProps = dispatch => {
  return {
      setPoint: (point) => {
          dispatch({
              type: "setPoint",
              payload: point
          })
      }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CardForm);
