class Thing {
  data() {
    return {
      layout: "layouts/_base.njk",
    };
  }

  render() {
    const radius = 10;
    const spacing = 10;
    const scale = 50 - radius;
    const numberOfCircles = 7;
    const radianInterval = (Math.PI * 2) / numberOfCircles;

    const xPercent = 100 / 10;
    const yPercent = 100 / 12.8;

    const grid = [
      [0, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 2, 0, 0, 2, 0],
      [0, 0, 0, 0, 20, 0, 0, 40, 0],
      [0, 0, 0, 0, 4, 0, 0, 4, 0],
      [1, 5, 50, 3, 1, 5, 5, 1, 0],
      [2, 0, 0, 0, 0, 0, 2, 0, 0],
      [20, 0, 0, 0, 0, 0, 20, 0, 0],
      [20, 0, 0, 0, 0, 0, 200, 0, 0],
      [200, 5, 50, 30, 3, 4, 5, 3, 4],
      [1, 0, 0, 0, 0, 4, 0, 0, 4],
      [1, 0, 0, 0, 0, 4, 0, 0, 1],
      [1, 0, 0, 0, 0, 1, 0, 0, 1],
    ];

    return `
    <div style="width: 512px" class="border mx-auto bg-golden-fizz">
    <svg id="radical-antitrust" width="100%" viewBox="0 0 100 128" xmlns="http://www.w3.org/2000/svg">
    ${grid
      .map((rowArray, r) =>
        rowArray
          .map((entry, c) => {
            if (entry === 0) {
              return "";
            }

            let firstDigit = entry;
            let numZeros = 0;
            while (firstDigit >= 10) {
              firstDigit /= 10;
              numZeros++;
            }

            let classList = "";
            if (firstDigit == 2) {
              classList = `move move-up${numZeros + 1}`;
            } else if (firstDigit == 3) {
              classList = `move move-right${numZeros + 1}`;
            } else if (firstDigit == 4) {
              classList = `move move-down${numZeros + 1}`;
            } else if (firstDigit == 5) {
              classList = `move move-left${numZeros + 1}`;
            }
            return `<circle cx="${c * spacing + 10}" cy="${
              r * spacing + 10
            }" r="${radius}" fill="#FAFFC3" stroke="black" vector-effect="non-scaling-stroke" class="${classList}"/>`;
          })
          .join("\n")
      )
      .join("\n")}
      <style>
      .move {
        transition: transform 1s;
      }
      #radical-antitrust:hover .move-up1 {
        transform: translate(0, -${yPercent}%);
      }
      #radical-antitrust:hover .move-right1 {
        transform: translate(${xPercent}%, 0);
      }
      #radical-antitrust:hover .move-down1 {
        transform: translate(0, ${yPercent}%);
      }
      #radical-antitrust:hover .move-left1 {
        transform: translate(-${xPercent}%, 0);
      }
      #radical-antitrust:hover .move-up2 {
        transform: translate(0, -${yPercent * 2}%);
      }
      #radical-antitrust:hover .move-right2 {
        transform: translate(${xPercent * 2}%, 0);
      }
      #radical-antitrust:hover .move-down2 {
        transform: translate(0, ${yPercent * 2}%);
      }
      #radical-antitrust:hover .move-left2 {
        transform: translate(-${xPercent * 2}%, 0);
      }
      #radical-antitrust:hover .move-up3 {
        transform: translate(0, -${yPercent * 3}%);
      }
      #radical-antitrust:hover .move-right3 {
        transform: translate(${xPercent * 3}%, 0);
      }
      #radical-antitrust:hover .move-down3 {
        transform: translate(0, ${yPercent * 3}%);
      }
      #radical-antitrust:hover .move-left3 {
        transform: translate(-${xPercent * 3}%, 0);
      }
      </style>
    </svg>
  </div>
    `;
  }
}

module.exports = Thing;
