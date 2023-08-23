import { createContext, useState } from "react";

const MainContext = createContext({
  nav: true,
  modal: false,
  scroll: false,
  showNav: function () {},
  hideNav: function () {},
  showModal: function () {},
  hideModal: function () {},
  showScroll: function () {},
  hideScroll: function () {},
});

export function MainContextProvider(props) {
  const [nav, setNav] = useState(false);
  const [modal, setModal] = useState(false);
  const [scroll, setScroll] = useState(false);

  function showNavHandler() {
    setNav(true);
  }
  function hideNavHandler() {
    setNav(false);
  }
  function showModalHandler() {
    setModal(true);
  }
  function hideModalHandler() {
    setModal(false);
  }
  function showScrollHandler() {
    setScroll(true);
  }
  function hideScrollHandler() {
    setScroll(false);
  }

  const context = {
    nav: nav,
    modal: modal,
    scroll: scroll,
    showNav: showNavHandler,
    hideNav: hideNavHandler,
    showModal: showModalHandler,
    hideModal: hideModalHandler,
    showScroll: showScrollHandler,
    hideScroll: hideScrollHandler,
  };

  return (
    <MainContext.Provider value={context}>
      {props.children}
    </MainContext.Provider>
  );
}

export default MainContext;
