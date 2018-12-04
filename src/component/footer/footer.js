import React, { Component } from 'react'
import { Container, Row, Col } from "reactstrap";
import { Icon, Image } from 'semantic-ui-react'
import './footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="footer-bg">
                <Container>
                    <Row>
                        <Col className="copyright" xs="12" sm="12">
                            <p className="text-copyrigth">©PichitreeChakorn 7002 2018 v1.0.0</p>
                        </Col>

                    </Row>
                </Container>
            </div>
        )
    }
}

export default Footer