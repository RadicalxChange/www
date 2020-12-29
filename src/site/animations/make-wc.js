function makeWebComponent(className, elementName, innerHtml) {
  return `'use strict';
(function() {
  class ${className} extends HTMLElement {
    static get observedAttributes() {
      return [
        "on"
      ];
    }

    constructor() {
      super();

      this.container = document.createElement('div');
      this.container.innerHTML = \`${innerHtml}      \`;

      const shadowRoot = this.attachShadow({mode: 'closed'});
      shadowRoot.appendChild(this.container);
    }

    connectedCallback() {
      this.updateAnimationState();
    }

    attributeChangedCallback(name, oldValue, newValue) {
      this.updateAnimationState();
    }

    updateAnimationState = () => {
      if (this.getAttribute("on")) {
        this.container.classList.add("animation-on");
      } else {
        this.container.classList.remove("animation-on");
      }
    }
  }
  customElements.define('${elementName}', ${className});
})();`;
}

module.exports = { makeWebComponent };
