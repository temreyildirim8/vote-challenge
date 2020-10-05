import React from "react";
import BoxView from "../BoxView/BoxView";
import "./SubmitLink.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

function SubmitLink(props) {
  return (
    <div className="SubmitLink">
      <Link to="/add" className="Link">
        <Container>
          <Row>
            <Col md="auto" className="column">
              <BoxView text="+" />
            </Col>
            <Col className="SubmitLink-text">SUBMIT A LINK</Col>
          </Row>
        </Container>
      </Link>
    </div>
  );
}
export default SubmitLink;
