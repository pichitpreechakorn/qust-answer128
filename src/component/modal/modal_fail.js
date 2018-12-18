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
    closeModal() {
        this.props.closemodal(false)
    }
    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} >
                    <ModalHeader>
                        <h2 id="text">คำตอบผิด</h2>
                    </ModalHeader>
                    <ModalBody>
                        <div>
                            <Label id="textAnswer">
                                เฉลย : {this.props.answer}
                            </Label>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        {/* <Button color="primary" onClick={() => this.setState({ modal: !this.state.modal })}>Do Something</Button> */}
                        <Button
                            fluid
                            animated
                            color='grey'
                            size='large'
                            onClick={() => this.closeModal()} >
                            <Button.Content
                                visible
                                icon labelPosition='left'
                            >
                                <span id="next-btn">ปิด</span>
                            </Button.Content>
                            <Button.Content hidden>
                                <Icon name='delete' />
                            </Button.Content>
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
export default ModalSuccess