import React, { useState } from "react";
import { DropdownBox, DropdownModalBox } from "./Style";
import {
  RiArrowDownSLine as UpArrow,
  RiArrowUpSLine as DownArrow,
  RiCheckLine as Tick,
} from "react-icons/ri";
import { FiMoreVertical as OptionIcon } from "react-icons/fi";
import { generateID } from "../../lib/generateID";
import { truncate } from "../../lib/factory.lib";

// export const Dropdown = ({ fullwidth, fontSize, items, ...otherProps }) => {
//   const defaultValue = "Sort By";

//   const [state, setState] = useState({
//     items: items || [],
//     showItems: false,
//     selectedItem: items && items[0],
//   });

//   const HandleDropdown = () => {
//     setState({ ...state, showItems: !state.showItems });
//   };
//   const HandleSelection = (item) =>
//     setState({
//       ...state,
//       selectedItem: item,
//       showItems: false,
//     });
//   return (
//     <DropdownBox {...otherProps}>
//       <div className="button" onClick={HandleDropdown}>

//         <div className="selectedItem">{state.selectedItem.value}</div>
//         {state.showItems ? (
//           <DownArrow className="icon" />
//         ) : (
//           <UpArrow className="icon" />
//         )}
//       </div>

//       <div className="Blanket">
//         <div
//           className="itemCollection"
//           style={{ display: state.showItems ? "block" : "none" }}
//         >
//           {state.items.map((item) => (
//             <div
//               key={generateID(12)}
//               onClick={() => HandleSelection(item)}
//               className={`${
//                 state.selectedItem === item ? "selected" : ""
//               } options`}
//             >
//               {state.selectedItem === item ? <Tick /> : null}

//               {item.value}
//             </div>
//           ))}
//         </div>
//       </div>
//     </DropdownBox>
//   );
// };

export const DropdownModal = ({
  dropDownData,
  dropBk,
  dropHovBk,
  dropCol,
  click,
  initial,
  left,
  right,
  maxHeight,
  canClick = true,
  selectedSize,
  selectedWeight,
  selectedColor,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [selected, setSelected] = useState(initial || "Select");

  const handleSelectOption = (value) => {
    setSelected(value);
    setOpenModal(!openModal);
    click(value);
  };

  return (
    <DropdownModalBox
      dropBk={dropBk}
      dropHovBk={dropHovBk}
      dropCol={dropCol}
      left={left}
      right={right}
      maxHeight={maxHeight}
      selectedSize={selectedSize}
      selectedWeight={selectedWeight}
      selectedColor={selectedColor}
      canClick={canClick}
      className="dropdownModalBox"
    >
      <div
        className="click"
        onClick={() => canClick && setOpenModal(!openModal)}
      >
        <span className="selectedText">
          {truncate(selected, 20) || "Select"}
        </span>
        <UpArrow />
      </div>

      {openModal && (
        <div
          className="overlay"
          onClick={() => canClick && setOpenModal(!openModal)}
        />
      )}

      {openModal && (
        <section>
          <ul>
            {dropDownData.map((item) => (
              <li
                onClick={() => canClick && handleSelectOption(`${item.list}`)}
                key={generateID(15)}
              >
                <span className="modalText">{item.list}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </DropdownModalBox>
  );
};

export const DropdownShowMoreModal = ({
  showMoreData,
  dropBk,
  dropHovBk,
  dropCol,
  listCol,
  icon,
  click,
  right,
}) => {
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = (value) => {
    setOpenModal(!openModal);
    click(value);
  };

  return (
    <DropdownModalBox
      dropBk={dropBk}
      dropHovBk={dropHovBk}
      dropCol={dropCol}
      listCol={listCol}
      right={right}
    >
      <div className="click" onClick={() => setOpenModal(!openModal)}>
        {icon ? icon : <OptionIcon />}
      </div>

      {openModal && (
        <div className="overlay" onClick={() => setOpenModal(!openModal)} />
      )}

      {openModal && (
        <section className="showMoreModal">
          <ul>
            {showMoreData.map((item) => (
              <li
                onClick={() => handleCloseModal(`${item.list}`)}
                key={generateID(15)}
              >
                {/* <span className='modalIcon'>I</span> */}
                <span className="modalText">{item.list}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </DropdownModalBox>
  );
};
