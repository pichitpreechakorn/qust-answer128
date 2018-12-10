import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';
import { connect } from 'react-redux'
import { Icon } from 'semantic-ui-react'

import './modal.css'

class ModalRegis extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true,
            ground: ""
        };

    }
    nextStep() {
        this.setState({ modal: !this.state.modal })
        this.regisData()
        this.props.regis()
        // this.props.addNumber()
    }
    closeModal() {
        this.props.closemodal(false)
    }
    handleChang = (e) => {
        this.setState({ ground: e.target.value })
        console.log(e.target.value)
    }
    regisData() {
        const user = {
            higthNumber: this.getHigthNumber.value,
            name: this.getFirstname.value,
            lastname: this.getLastname.value,
            number: this.getNumber.value,
            ground: this.state.ground
        }
        console.log(user)
        this.props.setUsername(user)
    }
    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} >
                    <ModalHeader>
                        <p id="text">กรอกชื่อ - นามสกุล</p>
                    </ModalHeader>
                    <ModalBody>
                        <div>
                            <Form onSubmit={this.regisData}>
                                <FormGroup>
                                    <Label for="exampleSelect">เลขที่ตามลำดับความสูง : </Label>
                                    <Input
                                        type="number"
                                        name="higthNumber"
                                        id="higthNumber"
                                        placeholder="กรอกเลขที่ลำดับความสูง เช่น ๑๐๑"
                                        innerRef={(input) => this.getHigthNumber = input}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleEmail">ชื่อ : </Label>
                                    <Input
                                        type="text"
                                        name="firstname"
                                        id="firstname"
                                        placeholder="กรอกชื่อ ........"
                                        innerRef={(input) => this.getFirstname = input}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">นามสกุล : </Label>
                                    <Input
                                        type="text"
                                        name="lastname"
                                        id="lastname"
                                        placeholder="กรอกนามสกุล ......."
                                        innerRef={(input) => this.getLastname = input}
                                    />
                                </FormGroup>
                                <Row Form>
                                    <Col md={6} sm={6} xs={12}>
                                        <FormGroup>
                                            <Label for="exampleSelect">หมวด : </Label>
                                            <Input type="select" name="ground" id="ground" onChange={this.handleChang.bind(this)}>
                                                <option value="0">เลือกหมวด</option>
                                                <option value="A">1 (A)</option>
                                                <option value="B">2 (B)</option>
                                                <option value="C">3 (C)</option>
                                                <option value="D">4 (D)</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6} sm={6} xs={12}>
                                        <FormGroup>
                                            <Label for="exampleSelect">เลขที่ : </Label>
                                            <Input
                                                type="number"
                                                name="number"
                                                id="number"
                                                placeholder="กรอกเลขที่ ...."
                                                innerRef={(input) => this.getNumber = input}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={() => this.nextStep()}> ต่อไป </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        username: state.username
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setUsername: (dataUsername) => {
            dispatch({
                type: "setUsername",
                payload: dataUsername
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalRegis)