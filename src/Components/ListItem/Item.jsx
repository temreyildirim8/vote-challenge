import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Item.css";
import BoxView from "../BoxView/BoxView";
import { useDispatch, useSelector } from "react-redux";
import {
  UpVote,
  DownVote,
  selectHoveredLinkId,
  SetHoveredLinkId,
  selectLinkInfos,
} from "../../Reducers/LinksSlice";
import { setModalLink } from "../../Reducers/ModalSlice";

function Item(props) {
  const dispatch = useDispatch();
  const hovered = props.id === useSelector(selectHoveredLinkId);
  const link = useSelector(selectLinkInfos).find(
    (link) => link.id === props.id
  );

  return (
    <li
      className="item"
      onMouseEnter={() => dispatch(SetHoveredLinkId(link.id))}
      onMouseLeave={() => dispatch(SetHoveredLinkId(-1))}
    >
      {hovered && (
        <i
          className="material-icons item-removeButton"
          onClick={() =>
            dispatch(setModalLink({ id: link.id, linkName: link.linkName }))
          }
        >
          remove_circle_outline
        </i>
      )}
      <Container className="item-container">
        <Row>
          <Col md="auto">
            <BoxView text={link.vote} subText="POINTS" />
          </Col>
          <Col>
            <Row className="linkName">{link.linkName}</Row>
            <Row className="linkURL">{"(" + link.linkURL + "/)"}</Row>
            <Row>
              <Col md="auto">
                <button
                  className="voteButton"
                  onClick={() => dispatch(UpVote(link.id))}
                >
                  <i className="material-icons ">arrow_upward</i> Up Vote
                </button>
              </Col>
              <Col></Col>
              <Col md="auto">
                <button
                  className="voteButton"
                  onClick={() => dispatch(DownVote(link.id))}
                >
                  <i className="material-icons">arrow_downward</i> Down Vote
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </li>
  );
}

export default React.memo(Item);
