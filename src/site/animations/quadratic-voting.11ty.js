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
    <div id="canvas">
      <div id="canvas__inner">
        <div id="quadratic-voting"></div>
      </div>
    </div>
    <style>
    #canvas {
      position: relative;
      padding-top: 128%;
    }

    #canvas__inner {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    #quadratic-voting {
      width: 100%;
      height: 100%;
      border: 1px solid black;
      border-radius: 50%;
      background: linear-gradient(
        to bottom,
        #FAFFC3,
        transparent,
        #FAFFC3
      );
      background-size: auto 300%;
    }

    #quadratic-voting:hover {
      animation: linear infinite gradient-rotation 4s running;
    }
    
    @keyframes gradient-rotation {
      0% {
        background-position-y: 0%;
      }
      100% {
        background-position-y: 150%;
      }
    }
    </style>
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
