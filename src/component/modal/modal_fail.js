import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap';
import './modal.css'

class ModalSuccess extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true
        };

    }
    closeModal(){
        this.props.closemodal(false)
    }  
    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} >
                    <ModalHeader>
                        <p id="text">คำตอบผิด</p>
                    </ModalHeader>
                    <ModalBody>
                        <div>
                            <p id="textAnswer">
                                <b>เฉลย : </b>{this.props.answer}
                            </p>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        {/* <Button color="primary" onClick={() => this.setState({ modal: !this.state.modal })}>Do Something</Button> */}
                        <Button color="secondary" onClick={() => this.closeModal()}>ปิด</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
export default ModalSuccess