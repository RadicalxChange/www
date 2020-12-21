const { makeWebComponent } = require("./make-wc");

class Thing {
  data() {
    return {
      permalink: "animations/partial-common-ownership.js",
    };
  }

  render() {
    const radius = 16.6;

    const xPercent = radius * 2;
    const yPercent = radius * 2;

    const steps = 12;
    const seconds = 5;
    const stepInt = 100 / steps;

    const circles = [];
    let index = 0;
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        if (index === 8) {
          continue;
        }

        circles.push(
          `<circle id="circle-${index}" cx="${
            radius * 2 * c + radius + 0.1
          }" cy="${
            radius * 2 * r + radius + 0.1
          }" r="${radius}" fill="#FAFFC3" stroke="black" vector-effect="non-scaling-stroke"/>`
        );

        index++;
      }
    }

    return makeWebComponent(
      "PartialCommonOwnershipAnimation",
      "partial-common-ownership-animation",
      `
      <div style="padding: 0 7%">
    <svg id="partial-common-ownership" width="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      ${circles.join("\n")}
      <style>
      #circle-7,
      #circle-4,
      #circle-3,
      #circle-6 {
        transform: translate(0, 0);
      }

      #partial-common-ownership:hover #circle-7 {
        animation: linear infinite circle-7 ${seconds}s backwards;
      }
      @keyframes circle-7 {
        0% {
          transform: translate(0, 0);
        }
        ${stepInt * 1}% {
          transform: translate(${xPercent}%, 0);
        }
        ${stepInt * 10}% {
          transform: translate(${xPercent}%, 0);
        }
        ${stepInt * 11}% {
          transform: translate(0, 0);
        }
        100% {
          transform: translate(0, 0);
        }
      }

      #partial-common-ownership:hover #circle-4 {
        animation: linear infinite circle-4 ${seconds}s backwards;
      }
      @keyframes circle-4 {
        ${stepInt * 2}% {
          transform: translate(0, 0);
        }
        ${stepInt * 3}% {
          transform: translate(0, ${yPercent}%);
        }
        ${stepInt * 8}% {
          transform: translate(0, ${yPercent}%);
        }
        ${stepInt * 9}% {
          transform: translate(-${xPercent}%, ${yPercent}%);
        }
        100% {
          transform: translate(-${xPercent}%, ${yPercent}%);
        }
      }

      #partial-common-ownership:hover #circle-3 {
        animation: linear infinite circle-3 ${seconds}s backwards;
      }
      @keyframes circle-3 {
        ${stepInt * 4}% {
          transform: translate(0, 0);
        }
        ${stepInt * 5}% {
          transform: translate(${xPercent}%, 0);
        }
        100% {
          transform: translate(${xPercent}%, 0);
        }
      }

      #partial-common-ownership:hover #circle-6 {
        animation: linear infinite circle-6 ${seconds}s backwards;
      }
      @keyframes circle-6 {
        ${stepInt * 6}% {
          transform: translate(0, 0);
        }
        ${stepInt * 7}% {
          transform: translate(0, -${yPercent}%);
        }
        100% {
          transform: translate(0, -${yPercent}%);
        }
      }
      </style>
    </svg>
    </div>
    `
    );
  }
}

module.exports = Thing;
