import React from "react";
import "./RemoveLinkModal.css";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectModalLink, setModalLink } from "../../Reducers/ModalSlice";
import { RemoveLink } from "../../Reducers/LinksSlice";
import { setToastStateAsync } from "../../Reducers/ToastSlice";

function RemoveLinkModal(props) {
  const dispatch = useDispatch();

  const toggle = () => dispatch(setModalLink({}));
  let modalLink = useSelector(selectModalLink);
  const removeItem = () => {
    dispatch(RemoveLink(modalLink.id));
    toggle();
    dispatch(
      setToastStateAsync({
        linkName: modalLink.linkName,
        removedOrAdded: true,
        duration: 1500,
      })
    );
  };
  return (
    <div>
      <Modal isOpen={modalLink.hasOwnProperty("id")} toggle={toggle}>
        <ModalHeader toggle={toggle}>Remove Link</ModalHeader>
        <div className="RemoveLinkModal">
          <ModalBody>Do you want to remove:</ModalBody>
          <ModalBody className="LinkName">{modalLink.linkName}</ModalBody>
          <ModalFooter>
            <button onClick={removeItem}>OK</button>
            <button onClick={toggle}>Cancel</button>
          </ModalFooter>
        </div>
      </Modal>
    </div>
  );
}
export default React.memo(RemoveLinkModal);
