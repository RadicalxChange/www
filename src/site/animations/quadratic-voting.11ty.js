const { makeWebComponent } = require("./make-wc");

class Thing {
  data() {
    return {
      permalink: "animations/quadratic-voting.js",
    };
  }

  render() {
    return makeWebComponent(
      "QuadraticVotingAnimation",
      "quadratic-voting-animation",
      `
<style>
  #canvas {
    position: relative;
    padding-top: 128%;
  }

  #canvas__inner {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* https://mycolor.space/gradient?ori=to+bottom&hex=%23EDFF38&hex2=%23FAFFC3&sub=1 */
  #quadratic-voting {
    width: 80%;
    height: 80%;
    border: 1px solid black;
    border-radius: 50%;
    background-image: linear-gradient(to bottom, #edff38, #f1ff64, #f4ff86, #f7ffa5, #faffc3, #f7ffa5, #f4ff86, #f1ff64, #edff38);
    background-size: auto 300%;
  }

  #quadratic-voting:hover {
    animation: linear infinite gradient-rotation 2.5s running;
  }

  @keyframes gradient-rotation {
    0% {
      background-position-y: 0%;
    }
    100% {
      background-position-y: 150%;
    }
  }
</style>
<div id="canvas">
  <div id="canvas__inner">
    <div id="quadratic-voting"></div>
  </div>
</div>
`
    );
  }
}

module.exports = Thing;
