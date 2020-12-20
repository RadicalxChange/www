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
    <svg id="quadratic-voting" width="100%" viewBox="0 0 100 128" xmlns="http://www.w3.org/2000/svg">
      <ellipse id="egg" cx="50" cy="64" rx="50" ry="64" fill="transparent" stroke="black" vector-effect="non-scaling-stroke"/>
      <style>
      #egg {
        background: linear-gradient(
          to bottom,
          theme("colors.light-gold"),
          transparent,
          theme("colors.light-gold")
        );
        background-size: auto 300%;
        animation: ease-in infinite gradient-rotation 2s paused;
      }

      @keyframes gradient-rotation {
        0% {
          background-position-y: 0%;
        }
        100% {
          background-position-y: 150%;
        }
      }

      #quadratic-voting:hover #egg {
        animation-play-state: running;
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
