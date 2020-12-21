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

    const initialFills = [0, 4, 8, 9, 12, 13, 14, 15];
    const squares = [];
    let index = 0;
    // let yOffset = (100 - innerPadding * 3 - size * 4) / 2;
    let yOffset = 1;
    for (let r = 0; r < 4; r++) {
      let xOffset = 1;
      // let xOffset = (100 - innerPadding * 3 - size * 4) / 2;
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
  <div style="padding: 0 7%">
    <svg id="quadratic-financing" width="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      ${squares.join("\n")}
      <style>
      #rect-1,
      #rect-2,
      #rect-3 {
        fill: #EDFF38;
        transition: fill ${timeStep}ms;
      }

      #rect-5,
      #rect-6,
      #rect-7 {
        fill: #EDFF38;
        transition: fill ${timeStep * 2}ms;
      }

      #rect-10,
      #rect-11 {
        fill: #EDFF38;
        transition: fill ${timeStep * 3}ms;
      }

      #quadratic-financing:hover #rect-1,
      #quadratic-financing:hover #rect-2,
      #quadratic-financing:hover #rect-3 {
        fill: #FAFFC3;
        transition-duration: ${timeStep * 3}ms;
      }

      #quadratic-financing:hover #rect-5,
      #quadratic-financing:hover #rect-6,
      #quadratic-financing:hover #rect-7 {
        fill: #FAFFC3;
        transition-duration: ${timeStep * 2}ms;
      }

      #quadratic-financing:hover #rect-10,
      #quadratic-financing:hover #rect-11 {
        fill: #FAFFC3;
        transition-duration: ${timeStep}ms;
      }
      </style>
    </svg>
  </div>
    `
    );
  }
}

module.exports = Thing;
