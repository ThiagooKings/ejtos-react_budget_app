import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { FaMinusCircle } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);

  const handleReduceExpense = () => {
    dispatch({
      type: "REDUCE_10_EXPENSE",
      payload: props.id,
    });
  };
  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };
  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency}
        {props.cost}
      </td>
      <td>
        <FaPlusCircle
          color="green"
          size="2em"
          onClick={(event) => increaseAllocation(props.name)}
        ></FaPlusCircle>
      </td>
      <td>
        <FaMinusCircle
          color="red"
          size="2em"
          onClick={handleReduceExpense}
        ></FaMinusCircle>
      </td>
    </tr>
  );
};
export default ExpenseItem;
