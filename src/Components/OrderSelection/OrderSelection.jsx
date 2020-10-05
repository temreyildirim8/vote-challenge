import React from "react";
import "./OrderSelection.css";
import { useDispatch } from "react-redux";
import { SetSortOptions } from "../../Reducers/LinksSlice";

function OrderSelection(props) {
  const dispatch = useDispatch();
  return (
    <select
      defaultValue=""
      value=""
      className="order-selection"
      name="order"
      onChange={(e) =>
        dispatch(
          SetSortOptions({
            sortProperty: "vote",
            reverseSort: e.target.value === "true",
          })
        )
      }
    >
      <option value="" disabled hidden selected>
        Order by
      </option>
      <option value="false" selected="false">
        Most Voted (Z → A)
      </option>
      <option value="true" selected="false">
        Less Voted (A → Z)
      </option>
    </select>
  );
}

export default OrderSelection;
