function makeWebComponent(className, elementName, innerHtml) {
  return `'use strict';
(function() {
  class ${className} extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({mode: 'closed'});

      const container = document.createElement('div');
      container.innerHTML = \`${innerHtml}      \`;

      shadowRoot.appendChild(container);
    }
  }
  customElements.define('${elementName}', ${className});
})();`;
}

module.exports = { makeWebComponent };
