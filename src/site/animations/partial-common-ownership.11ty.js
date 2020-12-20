const { makeWebComponent } = require("./make-wc");

class Thing {
  data() {
    return {
      permalink: "animations/partial-common-ownership.js",
    };
  }

  render() {
    const radius = 10;

    const xPercent = 20;
    const yPercent = 15.625;

    const steps = 12;
    const seconds = 10;
    const stepInt = 100 / steps;

    const circles = [];
    let index = 0;
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        if (index === 8) {
          continue;
        }

        circles.push(
          `<circle id="circle-${index}" cx="${radius * 2 * c + 30}" cy="${
            radius * 2 * r + 44
          }" r="${radius}" fill="#FAFFC3" stroke="black" vector-effect="non-scaling-stroke"/>`
        );

        index++;
      }
    }

    return makeWebComponent(
      "PartialCommonOwnershipAnimation",
      "partial-common-ownership-animation",
      `
    <svg id="partial-common-ownership" width="100%" viewBox="0 0 100 128" xmlns="http://www.w3.org/2000/svg">
      ${circles.join("\n")}
      <style>
      #partial-common-ownership:hover #circle-7 {
        animation: linear infinite circle-7 ${seconds}s backwards;
      }
      @keyframes circle-7 {
        0% {
          transform: translateX(0);
        }
        ${stepInt * 1}% {
          transform: translateX(${xPercent}%);
        }
        ${stepInt * 10}% {
          transform: translateX(${xPercent}%);
        }
        ${stepInt * 11}% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(0);
        }
      }

      #partial-common-ownership:hover #circle-4 {
        animation: linear infinite circle-4 ${seconds}s backwards;
      }
      @keyframes circle-4 {
        ${stepInt * 2}% {
          transform: translateX(0);
        }
        ${stepInt * 3}% {
          transform: translateY(${yPercent}%);
        }
        ${stepInt * 8}% {
          transform: translateY(${yPercent}%);
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
          transform: translateX(0);
        }
        ${stepInt * 5}% {
          transform: translateX(${xPercent}%);
        }
        100% {
          transform: translateX(${xPercent}%);
        }
      }

      #partial-common-ownership:hover #circle-6 {
        animation: linear infinite circle-6 ${seconds}s backwards;
      }
      @keyframes circle-6 {
        ${stepInt * 6}% {
          transform: translateX(0);
        }
        ${stepInt * 7}% {
          transform: translateY(-${yPercent}%);
        }
        100% {
          transform: translateY(-${yPercent}%);
        }
      }
      </style>
    </svg>
    `
    );
  }
}

module.exports = Thing;
