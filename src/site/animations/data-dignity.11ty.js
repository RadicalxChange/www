const { makeWebComponent } = require("./make-wc");

class Thing {
  data() {
    return {
      permalink: "animations/data-dignity.js",
    };
  }

  render() {
    const radius = 10;
    const scale = 50 - radius;
    const numberOfCircles = 7;
    const radianInterval = (Math.PI * 2) / numberOfCircles;

    return makeWebComponent(
      "DataDignityAnimation",
      "data-dignity-animation",
      `
    <svg id="data-dignity" width="100%" viewBox="0 0 100 128" xmlns="http://www.w3.org/2000/svg">
    <g id="data-dignity-rotate">
    ${[6, 5, 4, 3, 2, 1, 0]
      .map(
        (index) => `<circle
  id="circle-${index}"
  cx="${Math.sin(index * radianInterval) * scale + 50}"
  cy="${Math.cos(index * radianInterval) * scale * -1 + 64}"
  r="${radius}"
  fill="#FAFFC3"
  stroke="black"
  vector-effect="non-scaling-stroke"
/>`
      )
      .join("\n")}
    </g>
    <style>
    #data-dignity #data-dignity-rotate {
      transform-origin: center center;
      transform: rotateZ(0);
      transition: transform 1s;
    }
    
    #data-dignity:hover #data-dignity-rotate {
      transform: rotateZ(51.43deg);
    }
    ${[6, 5, 4, 3, 2, 1, 0]
      .map(
        (index) => `
#data-dignity #circle-${index} {
  transform: translate(0, 0);
  transition: transform 1s;
}
#data-dignity:hover #circle-${index} {
  transform: translate(${
    Math.sin(index * radianInterval) * -1 * (scale * 0.7)
  }%, ${Math.cos(index * radianInterval) * (scale * 0.7) * (100 / 128)}%);
}`
      )
      .join("\n")}
    </style>
    </svg>
    `
    );
  }
}

module.exports = Thing;
