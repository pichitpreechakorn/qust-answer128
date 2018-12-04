import React, { Component } from 'react';
import {
    Card, CardText, CardBody, CardImg,
    CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input, Col, Row, Alert, Container
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
            number: this.props.number
        };
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
            this.setState({ statusModalSuccess: !this.state.statusModalSuccess })
            // this.addNumber()
            console.log("ถูก")
        }
        else if (this.getAnswer.value !== dataQust[this.state.number].answer) {
            this.setState({ statusModalFail: !this.state.statusModalFail })
            console.log("ผิด")
        }
        else if (this.getAnswer.value === "") {
            this.setState({ statusModalFail: !this.state.statusModalFail })
            console.log("ผิด")
        }
    }
    addNumber() {
        this.getAnswer.value = ""
        console.log(this.state.number + 1)
        this.setState({ number: this.state.number + 1 })
    }
    closeModal(status) {
        this.setState({
            statusModalFail: status,
            statusModalSuccess: status
        })
    }
    render() {
        let numbers = this.state
        return (
            <div class="card-form">

                <Card>
                    <CardBody>
                        <CardTitle id="text">
                            <Label> ข้อที่ {dataQust[this.state.number].no} </Label>
                            {/* <Label> ข้อที่ {this.state.number + 1} </Label> */}

                        </CardTitle>
                        <CardBody>
                            <div className="form-body">
                                <Row>
                                    <Col sm="2" xs="2">
                                        <p id="text-sub"> <u>ถาม :</u> </p>
                                    </Col>
                                    <Col sm="10" xs="10">
                                        <p id="text-sub"> {dataQust[this.state.number].qust} </p>
                                    </Col>
                                </Row>
                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup row>
                                        <Col sm="2" xs="2">
                                            <p id="text-sub"> <u>ตอบ :</u> </p>
                                        </Col>
                                        <Col sm="10" xs="10">
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

                        <Alert color="warning">
                            <p id="detail-text">หมายเหตุ : กรุณากรอกคำตอบให้ถูกต้องมากที่สุดและใช้ตัวเลขเป็นตัวเลขไทยทั้งหมดเช่น 1 = ๑ เป็นต้น</p>
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
                {
                    this.state.statusModalFail &&
                    <ModalFaild
                        closemodal={this.closeModal.bind(this)}
                        answer={dataQust[this.state.number].answer}
                    />
                }

            </div>
        );
    }
}

export default CardForm;
