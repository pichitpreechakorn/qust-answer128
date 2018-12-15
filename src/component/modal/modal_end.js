import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Badge } from 'reactstrap';
import { Header, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import '../../App.css'

class ModalStart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

        return (
            <div>
                <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle} close={closeBtn}> <h2 id="head-title">การทดสอบเสร็จสิ้น</h2></ModalHeader>
                    <ModalBody>
                        <div className="modal-start-body">
                            <Header as="h1" color="green" id="head-title">คะแนนที่ได้ <Badge color="success" pill> {this.props.score.point} </Badge></Header>
                            <h3 id="head-title">หมายเลขความสูง : {this.props.username.higthNumber}</h3>
                            <h2 id="head-title">ชื่อ-นามสกุล : {this.props.username.name}  {this.props.username.lastname}</h2>
                            <h4 id="head-title">เลขที่ : {this.props.username.ground}{this.props.username.number}</h4>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            fluid
                            inverted color='blue'
                            size='large'
                            onClick={this.toggle}>
                            <span>ปิด</span>
                        </Button>
                        {/* <Button color="secondary" onClick={this.toggle}>Cancel</Button> */}
                    </ModalFooter>
                </Modal>
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

export default connect(mapStateToProps)(ModalStart);