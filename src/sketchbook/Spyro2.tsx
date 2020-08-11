import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

const D = 600;
const d = 100;

const centerX = 400;
const centerY = 400;

const Spiro2 = () => {
  const setup = (p5: p5Types, parentRef: Element) => {
    p5.createCanvas(800, 800).parent(parentRef);
    p5.background(200);
    p5.noFill();
  };

  const draw = (p5: p5Types) => {
    // p5.circle(centerX, centerY, D);
    const angle = p5.frameCount * p5.TAU * 0.01;

    const smallX = ((D - d) / 2) * p5.cos(angle);
    const smallY = ((D - d) / 2) * p5.sin(angle);

    p5.circle(centerX + smallX, centerY + smallY, d);

    if (angle > p5.TAU) {
      p5.noLoop();
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Spiro2;
