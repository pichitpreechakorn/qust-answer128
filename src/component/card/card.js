import React, { Component } from 'react';
import {
  Card, CardText, CardBody, CardImg,
  CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input, Col, Row, Container
} from 'reactstrap';
import ModalSuccess from '../modal/modal_success'
import ModalFaild from '../modal/modal_fail'
import dataQust from '../../data/dataQuest'
import './card.css'

class CardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusModalSuccess: false,
      statusModalFail: false,
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
    const max = 127;
    const rand = min + Math.random() * (max - min);
    this.setState({ number: parseInt(this.state.number + rand) });
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
    if ((this.getAnswer.value !== "" || null) && (this.getAnswer.value === dataQust[0].answer)) {
      this.setState({ statusModalSuccess: true })
      console.log("ถูก")
    }
    else if (this.getAnswer.value === "") {
      this.setState({ statusModalFail: true })
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
            <Col xs={6} md={6} sm={6}>
              <Card>
                <CardBody>
                  <CardTitle id="text">
                    {/* <Label> ข้อที่ {dataQust[0].no} </Label> */}
                    <Label> ข้อที่ {dataQust[this.state.number].no} </Label>

                  </CardTitle>
                  <CardBody>
                    <div className="form-body">
                      <Row>
                        <Col sm={2} xs={6}>
                          <p id="text-sub"> <u>ถาม :</u> </p>
                        </Col>
                        <Col sm={10} xs={6}>
                          <p id="text-sub"> {dataQust[0].qust} </p>
                        </Col>
                      </Row>
                      <Form onSubmit={this.handleSubmit}>
                        <FormGroup row>
                          <Col sm={2} xs={6}>
                            <p id="text-sub"> <u>ตอบ :</u> </p>
                          </Col>
                          <Col sm={10} xs={6}>
                            <Input
                              type="textarea"
                              name="text"
                              id="exampleText"
                              innerRef={(input) => this.getAnswer = input}
                            />
                          </Col>
                        </FormGroup>
                        <Button color="success" block outline onClick={this.toggle.bind(this)} type="submit">
                          <Label id="btn-submit"> ยืนยันคำตอบ </Label>
                        </Button>
                      </Form>
                    </div>
                  </CardBody>

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
              {
                this.state.statusModalFail &&
                <ModalFaild
                  closemodal={this.closeModal.bind(this)}
                  answer={dataQust[0].answer}
                />
              }
            </Col>
          </Row>
      </div>
    );
  }
}

export default CardForm;
