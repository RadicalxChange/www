const { makeWebComponent } = require("./make-wc");

class Thing {
  data() {
    return {
      permalink: "animations/quadratic-funding.js",
    };
  }

  render() {
    const size = 23;
    const innerPadding = 2;
    const timeStep = 500;

    const numSteps = 5; // hold, bottom, mid, top, hold

    const initialFills = [0, 4, 8, 9, 12, 13, 14, 15];
    const squares = [];
    let index = 0;
    let yOffset = 1;
    for (let r = 0; r < 4; r++) {
      let xOffset = 1;
      for (let c = 0; c < 4; c++) {
        squares.push(
          `<rect id="rect-${index}" x="${xOffset}" y="${yOffset}" width="${size}" height="${size}" ${
            initialFills.includes(index) ? `fill="#FAFFC3"` : ""
          } stroke="black" vector-effect="non-scaling-stroke"/>`
        );
        index++;
        xOffset += size + innerPadding;
      }
      yOffset += size + innerPadding;
    }

    return makeWebComponent(
      "QuadraticFundingAnimation",
      "quadratic-funding-animation",
      `
<style>
  #rect-1,
  #rect-2,
  #rect-3 {
    animation: linear infinite top-row 1s backwards alternate paused;
  }

  @keyframes top-row {
    0% {
      fill: #EDFF38;
    }
    40% {
      fill: #EDFF38;
    }
    80% {
      fill: #FAFFC3;
    }
    100% {
      fill: #FAFFC3;
    }
  }

  #rect-5,
  #rect-6,
  #rect-7 {
    animation: linear infinite middle-row 1s backwards alternate paused;
  }

  @keyframes middle-row {
    0% {
      fill: #EDFF38;
    }
    20% {
      fill: #EDFF38;
    }
    60% {
      fill: #FAFFC3;
    }
    100% {
      fill: #FAFFC3;
    }
  }

  #rect-10,
  #rect-11 {
    animation: linear infinite bottom-row 1s backwards alternate paused;
  }

  @keyframes bottom-row {
    0% {
      fill: #EDFF38;
    }
    10% {
      fill: #EDFF38;
    }
    40% {
      fill: #FAFFC3;
    }
    100% {
      fill: #FAFFC3;
    }
  }

  .animation-on #rect-1,
  .animation-on #rect-2,
  .animation-on #rect-3 {
    animation-play-state: running;
  }

  .animation-on #rect-5,
  .animation-on #rect-6,
  .animation-on #rect-7 {
    animation-play-state: running;
  }

  .animation-on #rect-10,
  .animation-on #rect-11 {
    animation-play-state: running;
  }
</style>
<div style="display: flex; align-items: center; padding: 0 7%">
  <svg id="quadratic-financing" width="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    ${squares.join("\n")}
  </svg>
</div>`
    );
  }
}

module.exports = Thing;
