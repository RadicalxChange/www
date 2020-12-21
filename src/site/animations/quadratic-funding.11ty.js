const { makeWebComponent } = require("./make-wc");

class Thing {
  data() {
    return {
      permalink: "animations/quadratic-funding.js",
    };
  }

  render() {
    const size = 18;
    const innerPadding = 2;
    const timeStep = 500;

    const initialFills = [0, 4, 8, 9, 12, 13, 14, 15];
    const squares = [];
    let index = 0;
    let yOffset = (128 - innerPadding * 3 - size * 4) / 2;
    for (let r = 0; r < 4; r++) {
      let xOffset = (100 - innerPadding * 3 - size * 4) / 2;
      for (let c = 0; c < 4; c++) {
        squares.push(
          `<rect id="rect-${index}" x="${xOffset}" y="${yOffset}" width="${size}" height="${size}" fill="${
            initialFills.includes(index) ? "#FAFFC3" : "transparent"
          }" stroke="black" vector-effect="non-scaling-stroke"/>`
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
    <svg id="quadratic-financing" width="100%" viewBox="0 0 100 128" xmlns="http://www.w3.org/2000/svg">
      ${squares.join("\n")}
      <style>
      #rect-1,
      #rect-2,
      #rect-3 {
        transition: fill ${timeStep}ms;
      }

      #rect-5,
      #rect-6,
      #rect-7 {
        transition: fill ${timeStep * 2}ms;
      }

      #rect-10,
      #rect-11 {
        transition: fill ${timeStep * 3}ms;
      }

      #quadratic-financing:hover #rect-1,
      #quadratic-financing:hover #rect-2,
      #quadratic-financing:hover #rect-3 {
        fill: #FAFFC3;
        transition: fill ${timeStep * 3}ms;
      }

      #quadratic-financing:hover #rect-5,
      #quadratic-financing:hover #rect-6,
      #quadratic-financing:hover #rect-7 {
        fill: #FAFFC3;
        transition: fill ${timeStep * 2}ms;
      }

      #quadratic-financing:hover #rect-10,
      #quadratic-financing:hover #rect-11 {
        fill: #FAFFC3;
        transition: fill ${timeStep}ms;
      }
      </style>
    </svg>
    `
    );
  }
}

module.exports = Thing;
