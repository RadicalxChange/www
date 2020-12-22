function makeWebComponent(className, elementName, innerHtml) {
  return `'use strict';
(function() {
  class ${className} extends HTMLElement {
    constructor() {
      super();

      this.onMouseEnter = this._onMouseEnter.bind(this);
      this.onMouseLeave = this._onMouseLeave.bind(this);
      this.onIntersect = this._onIntersect.bind(this);

      this.container = document.createElement('div');
      this.container.innerHTML = \`${innerHtml}      \`;
      
      this.observer = new IntersectionObserver(this.onIntersect, { threshold: [0.5, 1] });
      this.observer.observe(this.container);

      const shadowRoot = this.attachShadow({mode: 'closed'});
      shadowRoot.appendChild(this.container);
    }

    connectedCallback() {
      this.addEventListener('mouseenter', this.onMouseEnter);
      this.addEventListener('mouseleave', this.onMouseLeave);
    }

    disconnectedCallback() {
      this.removeEventListener('mouseenter', this.onMouseEnter);
      this.removeEventListener('mouseleave', this.onMouseLeave);
    }

    _onIntersect(entries) {
      if (window.innerWidth >= 768) {
        return;
      }
      entries.forEach((entry) => {
        if (entry.intersectionRatio <= 0.5) {
          this.container.classList.remove("animation-on");
        } else if (entry.intersectionRatio === 1) {
          this.container.classList.add("animation-on");
        }
      });
    }

    _onMouseEnter() {
      if (window.innerWidth < 768) {
        return;
      }
      this.container.classList.add("animation-on");
    }

    _onMouseLeave() {
      if (window.innerWidth < 768) {
        return;
      }
      this.container.classList.remove("animation-on");
    }
  }
  customElements.define('${elementName}', ${className});
})();`;
}

module.exports = { makeWebComponent };
