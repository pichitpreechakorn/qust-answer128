import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Image, Button } from 'semantic-ui-react'
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
          <ModalHeader toggle={this.toggle} close={closeBtn}>กองพันทหารราบที่ 2 กรมทหารราบที่ 7</ModalHeader>
          <ModalBody>
            <Image src="../../img/download.jpg" />
          </ModalBody>
          <ModalFooter>
            <Button
              fluid
              inverted color='blue'
              size='large'
              onClick={this.toggle}>
              <span>เริ่มการทดสอบ</span>
            </Button>{' '}
            {/* <Button color="secondary" onClick={this.toggle}>Cancel</Button> */}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalStart;