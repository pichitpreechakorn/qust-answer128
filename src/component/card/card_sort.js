import React, { Component } from 'react';
import {
    Card, CardText, CardBody, CardImg,
    CardTitle, CardSubtitle, Form, FormGroup, Label, Input, Col, Row, Alert, FormFeedback
} from 'reactstrap';
import { connect } from 'react-redux'
import { Button, Icon, Header } from 'semantic-ui-react'
import ModalSuccess from '../modal/modal_success'
import ModalFaild from '../modal/modal_fail'
import ModalEnd from '../modal/modal_end'
import dataQust from '../../data/dataQuest'
import dataNumberFail from '../../data/dataNumber_fail'
import dataNumberSuscess from '../../data/dataNumber_suscess'

import './card.css'

class CardForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusModalSuccess: false,
            statusModalFail: false,
            status_textarea: 1,
            number: this.props.number,
            count: 0,
            modalEnd: false
        };
        // firebase.initializeApp(firebaseConfig)
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
        if ((this.getAnswer.value !== "" || null) && (this.getAnswer.value === dataQust[this.state.number].answer || this.getAnswer.value === dataQust[this.state.number].answer2 || this.getAnswer.value === dataQust[this.state.number].answer3 || this.getAnswer.value === dataQust[this.state.number].answer4)) {
            this.setState({ statusModalSuccess: true, status_textarea: 1, number: this.props.number + 1 })
            this.checkEndQust()
            this.pushDataSuccess()
            this.addNumber()
            // this.props.addSuscess(dataNumberSuscess)
            this.checkErrorSuscess()
            this.props.firebase()
            console.log("ถูก")
        }
        else if (this.getAnswer.value !== dataQust[this.state.number].answer) {
            this.setState({ status_textarea: 0, count: this.state.count + 1 })

            this.checkCountFail(this.getAnswer.value)
            this.props.firebase()
            console.log("ผิด")
        }
        else if (this.getAnswer.value === "") {
            this.setState({ status_textarea: 0, count: this.state.count + 1 })
            this.checkCountFail(this.getAnswer.value)
            this.props.firebase()
            console.log("ผิด")
        }
    }
    checkErrorSuscess() {
        if (this.props.score.point !== (this.state.number + 1)) {
            this.props.setPoint(this.props.score.point + 1)
            this.getAnswer.value = ""
            this.props.getScore(true)
            console.log("checkErrorSuscess")
        }
    }
    checkEndQust() {
        console.log(this.props.number)
        if (this.props.number + 1 === 3) {
            // if (this.props.number + 1 === 1) {
            console.log("จบ")
            this.setState({ modalEnd: true })
        }
    }
    checkCountFail(answer) {
        if (this.state.count === 1) {
            this.pushDataFail()
            this.getAnswer.value = ""
            this.setState({ count: 0, statusModalFail: !this.state.statusModalFail })
            this.addNumber()
            this.props.addFail(dataNumberFail)
            console.log(dataNumberFail)
        }
    }
    checkIndexNumber() {
        if (this.state.number !== this.state.number) {

        }
    }
    pushDataSuccess() {
        const number = this.state.number + 1
        const dataStr = "ข้อที่ :" + number + "\n ถาม :" + dataQust[number].qust + "\n ตอบ :" + this.getAnswer.value
        dataNumberSuscess.push(dataStr)
    }
    pushDataFail() {
        const number = this.state.number + 1
        const dataStr = "ข้อที่ :" + number + "\n ถาม :" + dataQust[number].qust + "\n ตอบ :" + this.getAnswer.value
        dataNumberFail.push(dataStr)

    }
    addNumber() {
        this.getAnswer.value = ""
        console.log(this.state.number + 1)
        this.setState({ number: this.state.number + 1, status_textarea: 1 })
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
                            <Header size='medium' id="text-no"> ข้อที่ {dataQust[this.state.number].no} </Header>
                            {/* <Label> ข้อที่ {this.state.number + 1} </Label> */}

                        </CardTitle>
                        <CardBody>
                            <div className="form-body">
                                <div id="contai-quest">
                                    <Row>
                                        <Col sm="2" xs="2">
                                            <p id="text-sub"> <b>ถาม :</b> </p>
                                        </Col>
                                        <Col sm="10" xs="10">
                                            <p id="text-sub"> {dataQust[this.state.number].qust} </p>
                                        </Col>
                                    </Row>
                                </div>
                                <div>
                                    <Form onSubmit={this.handleSubmit}>
                                        <FormGroup row>
                                            <Col sm="2" xs="2">
                                                <p id="text-sub"> <b>ตอบ :</b> </p>
                                            </Col>
                                            <Col sm="10" xs="10">
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
                                                        <FormFeedback>คำตอบไม่ถูกต้อง ! สามารถตอบได้อีก 1 ครั้ง</FormFeedback>
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
                                        {/* <Button color="success" block outline onClick={this.toggle.bind(this)} type="submit">
                                            <Label id="btn-submit"> ยืนยันคำตอบ </Label>
                                        </Button> */}
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
                {
                    this.state.modalEnd &&
                    <ModalEnd />
                }
                {
                    this.state.statusModalFail &&
                    <ModalFaild
                        closemodal={this.closeModal.bind(this)}
                        answer={dataQust[this.state.number - 1].answer}
                    />
                }

            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        score: state.score,
        username: state.username
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPoint: (point) => {
            dispatch({
                type: "setPoint",
                payload: point
            })
        },
        addSuscess: (suscess) => {
            dispatch({
                type: "addSuscess",
                payload: suscess
            })
        },
        addFail: (fail) => {
            dispatch({
                type: "addFail",
                payload: fail
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardForm);
