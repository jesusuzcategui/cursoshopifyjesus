class HeaderCustom extends HTMLElement {
  constructor(){
    super();
  }

  connectedCallback() {
    console.log("header");
  }
}

export default HeaderCustom;