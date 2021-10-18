import React, { useState, useEffect } from "react";
import { SelectionBox } from "./Selection.style";
import {
  AiOutlinePlus as AddIcon,
  AiOutlineMinus as SubtractIcon,
  AiOutlineClose as CancelIcon
} from "react-icons/ai";

const Selection = ({ placeholder_on_Open,placeholder,SelectionOptions, ...otherProps }) => {
  const [state, setState] = useState({
    Active: false,
    selected: [],
    SelectionOptions: SelectionOptions
  });

  const handleActive = () => {
    setState({ ...state, Active: !state.Active });
  };
  const handleSelected = item => {
    setState({
      ...state,
      selected: state.selected.concat(
        state.selected.includes(item.label) ? null : item.label
      )
    }),
      console.log(state.selected);
  };
  const handleDelete = select => {
    const newSelection = state.selected.filter(item => item != select);
    return setState({ ...state, selected: newSelection });
  };

  return (
    <SelectionBox {...otherProps}>
      <div className="topContainer">
        {state.selected[0] == null ? (
         (state.Active)?<p>{placeholder_on_Open}</p>: <p>{placeholder}</p>
        ) : (
          <div className="SelectedItems">
            {state.selected.map(select =>
              select ? (
                <div className="SelectedItem">
                  {select}
                  <CancelIcon
                    onClick={() => handleDelete(select)}
                    className="cancelIcon"
                  />
                </div>
              ) : null
            )}
          </div>
        )}

        <div className="SelectIcon" onClick={handleActive}>
          {state.Active ? <SubtractIcon /> : <AddIcon />}
        </div>
      </div>
      <div
        className="OptionsContainer"
        style={{ display: state.Active ? "flex" : "none" }}
      >
        {state.SelectionOptions.map(item => (
          <p
            key={item.id}
            className="OptionItem"
            onClick={() => handleSelected(item)}
          >
            {item.label}
          </p>
        ))}
      </div>
    </SelectionBox>
  );
};

export default Selection;
