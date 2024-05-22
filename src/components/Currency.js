import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { dispatch, currency } = useContext(AppContext);

  const [newCurrency, setNewCurrency] = useState(currency);

  const changeCurrency = (val) => {
    setNewCurrency(val);

    dispatch({
      type: "CHG_CURRENCY",
      payload: val,
    });
  };

  return (
    <div className="alert alert-secondary">
      {" "}
      Currency{` ${newCurrency}`}
      {
        <select
          name="Currency"
          id="Currency"
          defaultValue={currency}
          onChange={(event) => changeCurrency(event.target.value)}
        >
          <option value="$">$ Dollar</option>
          <option value="£">£ Pound</option>
          <option value="€">€ Euro</option>
          <option value="₹">₹ Ruppee</option>
        </select>
      }
    </div>
  );
};

export default Currency;
