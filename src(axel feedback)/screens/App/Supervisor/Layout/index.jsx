import React, { useState } from "react";
import Header from "./Header";
import { LayoutStyles } from "./styles";
import { Drawer, SecondDrawer } from "./Drawer";
import PageWrapper from "./pageWrapper";
import CreateEvent from "../../AddEvent";

const Layout = (props) => {
  const [SecondaryDrawer, setSecondaryDrawer] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const handleSecondaryDrawer = () => setSecondaryDrawer(!SecondaryDrawer);

  const OpenModal = () => {
    setOpenModal(true);
  };

  return (
    <LayoutStyles>
      <Header />
      <div className="layoutContainer">
        <Drawer
          handleSecondaryDrawer={handleSecondaryDrawer}
          OpenModal={OpenModal}
          SecondaryDrawer={SecondaryDrawer}
        />
        <SecondDrawer SecondaryDrawer={SecondaryDrawer} />

        <main>
          <div className="container">
            <PageWrapper>{props.children}</PageWrapper>
            {openModal && (
              <CreateEvent closeModal={() => setOpenModal(false)} />
            )}
          </div>
        </main>
      </div>
    </LayoutStyles>
  );
};
export default Layout;
