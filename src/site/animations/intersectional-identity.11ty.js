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
<style>
  #shape-1 {
    transform: translate(-10%, 10%);
    transition: transform 1s;
  }

  #shape-2 {
    transform: translate(5%, -9%);
    transition: transform 1s;
  }

  #shape-3 {
    transform: translate(10%, 5%);
    transition: transform 1s;
  }

  .animation-on #shape-1,
  .animation-on #shape-2,
  .animation-on #shape-3 {
    transform: translate(0, 0);
  }
</style>
<div style="display: flex; align-items: center; padding: 0 7%">
  <svg id="intersectional-identity" width="100%" viewBox="0 0 80 90" xmlns="http://www.w3.org/2000/svg">
    <path id="shape-1" d="M 10,9 h 20 v 50 h 20 v 20 h -40 v -70" fill="#FAFFC3" stroke="black" vector-effect="non-scaling-stroke"/>
    <path id="shape-2" d="M 30,9 h 40 v 25 h -40 v -25" fill="#FAFFC3" stroke="black" vector-effect="non-scaling-stroke"/>
    <path id="shape-3" d="M 30,34 h 40 v 45 h -20 v -20 h -20 v -25" fill="#FAFFC3" stroke="black" vector-effect="non-scaling-stroke"/>
  </svg>
</div>`
    );
  }
}

module.exports = Thing;
