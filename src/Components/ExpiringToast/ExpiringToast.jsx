import React from "react";
import { Toast, ToastBody } from "reactstrap";
import { useSelector } from "react-redux";
import "./ExpiringToast.css";
import { selectToastState } from "../../Reducers/ToastSlice";

function ExpiringToast(props) {
  const toastInfo = useSelector(selectToastState);
  if (toastInfo.linkName.length > 0) {
    return (
      <div className="expiring-toast ">
        <Toast>
          <ToastBody>
            {toastInfo.linkName +
              " " +
              (toastInfo.removedOrAdded ? "removed" : "added") +
              "."}
          </ToastBody>
        </Toast>
      </div>
    );
  } else {
    return null;
  }
}

export default React.memo(ExpiringToast);
