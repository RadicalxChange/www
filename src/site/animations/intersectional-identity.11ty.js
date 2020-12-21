const { makeWebComponent } = require("./make-wc");

class Thing {
  data() {
    return {
      permalink: "animations/intersectional-identity.js",
    };
  }

  render() {
    return makeWebComponent(
      "IntersectionalIdentityAnimation",
      "intersectional-identity-animation",
      `
  <div style="display: flex; align-items: center; padding: 0 7%">
    <svg id="intersectional-identity" width="100%" viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg">
      <path id="shape-1" d="M 10,19 h 20 v 50 h 20 v 20 h -40 v -70" fill="#FAFFC3" stroke="black" vector-effect="non-scaling-stroke"/>
      <path id="shape-2" d="M 30,19 h 40 v 25 h -40 v -25" fill="#FAFFC3" stroke="black" vector-effect="non-scaling-stroke"/>
      <path id="shape-3" d="M 30,44 h 40 v 45 h -20 v -20 h -20 v -25" fill="#FAFFC3" stroke="black" vector-effect="non-scaling-stroke"/>
      <style>
      #shape-1 {
        transform: translate(-10%, 10%) rotate(-2deg);
        transition: transform 1s;
      }

      #shape-2 {
        transform: translate(5%, -15%) rotate(4deg) ;
        transition: transform 1s;
      }

      #shape-3 {
        transform: translate(10%, 5%) rotate(1deg);
        transition: transform 1s;
      }

      #intersectional-identity:hover #shape-1,
      #intersectional-identity:hover #shape-2,
      #intersectional-identity:hover #shape-3 {
        transform: translate(0, 0) rotate(0);
      }
      </style>
    </svg>
  </div>
    `
    );
  }
}

module.exports = Thing;
