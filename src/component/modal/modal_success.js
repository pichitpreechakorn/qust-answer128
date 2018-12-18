import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap';
import { Icon, Button } from 'semantic-ui-react'

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
                        <h2 id="text">คำตอบถูกต้อง</h2>
                    </ModalHeader>
                    <ModalBody>
                        <div>
                            <Label id="text">
                                เฉลย : {this.props.answer}
                            </Label>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            fluid
                            animated
                            inverted
                            color='green'
                            size='large'
                            onClick={() => this.nextStep()} >
                            <Button.Content
                                visible
                                icon labelPosition='left'
                            >
                                <span id="next-btn">ต่อไป</span>
                            </Button.Content>
                            <Button.Content hidden>
                                <Icon name='arrow right' />
                            </Button.Content>
                        </Button>
                        {/* <Button color="secondary" onClick={() => this.closeModal()}> ปิด </Button> */}
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
export default ModalSuccess