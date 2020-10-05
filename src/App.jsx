import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddNewLinkPage from "./Pages/AddNewLinkPage";
import { Container, Col, Row } from "reactstrap";
import Header from "./Components/Header/Header";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <Router>
      <Container>
        <Row>
          <Header />
        </Row>
        <Row className="ListRow">
          <Col md={4}></Col>
          <Col md={4}>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route path="/add" component={AddNewLinkPage} />
            </Switch>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
