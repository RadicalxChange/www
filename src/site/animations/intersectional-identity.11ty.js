class Thing {
  data() {
    return {
      layout: "layouts/_base.njk",
    };
  }

  render() {
    return `
    <div id="thing" style="width: 512px" class="border mx-auto bg-golden-fizz">
    <svg-container>
    <svg id="intersectional-identity" width="100%" viewBox="0 0 100 128" xmlns="http://www.w3.org/2000/svg">
      <path id="shape-1" d="M 20,29 h 20 v 50 h 20 v 20 h -40 v -70" fill="#FAFFC3" stroke="black" vector-effect="non-scaling-stroke"/>
      <path id="shape-2" d="M 40,29 h 40 v 25 h -40 v -25" fill="#FAFFC3" stroke="black" vector-effect="non-scaling-stroke"/>
      <path id="shape-3" d="M 40,54 h 40 v 45 h -20 v -20 h -20 v -25" fill="#FAFFC3" stroke="black" vector-effect="non-scaling-stroke"/>
      <style>
      #shape-1 {
        transform: translate(-10%, 10%) rotate(-2deg);
        transition: transform 1s;
      }

      #shape-2 {
        transform: translate(5%, -15%) rotate(4deg) ;
        transition: transform 1s;
      }

      #shape-3 {
        transform: translate(10%, 5%) rotate(1deg);
        transition: transform 1s;
      }

      #intersectional-identity:hover #shape-1,
      #intersectional-identity:hover #shape-2,
      #intersectional-identity:hover #shape-3 {
        transform: translate(0, 0) rotate(0);
      }
      </style>
    </svg>
    </svg-container>
  </div>
  <script>
  class SVGContainer extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({mode: 'closed'});
      shadowRoot.append(...this.childNodes);
    }
  }
  customElements.define('svg-container', SVGContainer);
  </script>
    `;
  }
}

module.exports = Thing;
