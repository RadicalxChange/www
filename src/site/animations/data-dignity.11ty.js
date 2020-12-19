class Thing {
  data() {
    return {
      layout: "layouts/_base.njk",
    };
  }

  render() {
    const radius = 10;
    const scale = 50 - radius;
    const numberOfCircles = 7;
    const radianInterval = (Math.PI * 2) / numberOfCircles;

    return `
    <div style="width: 512px" class="border mx-auto bg-golden-fizz">
    <svg width="100%" viewBox="0 0 100 128" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(50, 50)">
    ${[0, 1, 2, 3, 4, 5, 6, 7]
      .map(
        (_, index) => `<circle
  cx="${Math.sin(index * radianInterval) * scale}"
  cy="${Math.cos(index * radianInterval) * scale}"
  r="${radius}"
  fill="#FAFFC3"
  stroke="black"
  vector-effect="non-scaling-stroke"
/>`
      )
      .join("\n")}
    </g>
    </svg>
  </div>
    `;
  }
}

module.exports = Thing;
