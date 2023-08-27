import { createContext, useState } from "react";

const MainContext = createContext({
  nav: true,
  modal: false,
  scroll: false,
  discovery: false,
  deal: false,
  showNav: function () {},
  hideNav: function () {},
  showModal: function () {},
  hideModal: function () {},
  showScroll: function () {},
  hideScroll: function () {},
  showDiscovery: function () {},
  hideDiscovery: function () {},
  showDeal: function () {},
  hideDeal: function () {},
});

export function MainContextProvider(props) {
  const [nav, setNav] = useState(false);
  const [modal, setModal] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [discovery, setDiscovery] = useState(false);
  const [deal, setDeal] = useState(false);

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
  function showDiscoveryHandeler() {
    setDiscovery(true);
  }
  function hideDiscoveryHandeler() {
    setDiscovery(false);
  }
  function showDealHandeler() {
    setDeal(true);
  }
  function hideDealHandeler() {
    setDeal(false);
  }

  const context = {
    nav: nav,
    modal: modal,
    scroll: scroll,
    discovery: discovery,
    deal: deal,
    showNav: showNavHandler,
    hideNav: hideNavHandler,
    showModal: showModalHandler,
    hideModal: hideModalHandler,
    showScroll: showScrollHandler,
    hideScroll: hideScrollHandler,
    showDiscovery: showDiscoveryHandeler,
    hideDiscovery: hideDiscoveryHandeler,
    showDeal: showDealHandeler,
    hideDeal: hideDealHandeler,
  };

  return (
    <MainContext.Provider value={context}>
      {props.children}
    </MainContext.Provider>
  );
}

export default MainContext;
