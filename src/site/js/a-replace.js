class AReplace extends HTMLAnchorElement {
  connectedCallback() {
    this.addEventListener("click", this.onClick);
  }

  disconnectedCallback() {
    this.removeEventListener("click", this.onClick);
  }

  onClick = (event) => {
    event.preventDefault();
    location.replace(this.href);
  };
}

customElements.define("a-replace", AReplace, { extends: "a" });
