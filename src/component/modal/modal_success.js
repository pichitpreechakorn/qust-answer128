import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Icon } from 'semantic-ui-react'

import './modal.css'

class ModalSuccess extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true
        };

    }
    nextStep() {
        this.setState({ modal: !this.state.modal })
        this.props.addNumber()
    }
    closeModal() {
        this.props.closemodal(false)
    }
    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} >
                    <ModalHeader>
                        <p id="text">คำตอบถูกต้อง</p>
                    </ModalHeader>
                    <ModalBody>
                        <div>
                            <p id="textAnswer">
                                <b>เฉลย : </b>{this.props.answer}
                            </p>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={() => this.nextStep()}> ต่อไป </Button>
                        <Button color="secondary" onClick={() => this.closeModal()}> ปิด </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
export default ModalSuccess