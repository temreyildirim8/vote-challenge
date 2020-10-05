import React from "react";
import Pagination from "../Components/Pagination/Pagination";
import OrderSelection from "../Components/OrderSelection/OrderSelection";
import SubmitLink from "../Components/SubmitLink/SubmitLink";
import RemoveLinkModal from "../Components/RemoveLink/RemoveLinkModal";
import ExpiringToast from "../Components/ExpiringToast/ExpiringToast";
import ListView from "../Components/ListView/ListView";

function MainPage(props) {
  return (
    <div>
      <ExpiringToast />
      <RemoveLinkModal />
      <SubmitLink />
      <hr />
      <OrderSelection />
      <ListView />
      <Pagination />
    </div>
  );
}

export default MainPage;
