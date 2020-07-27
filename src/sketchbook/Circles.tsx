import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

const Hello = () => {
  const width = 800;
  const height = 800;

  const individualSize = 80;
  const circleDiameter = 60;

  const sketchBackground = "#bee3db";
  const circleColor = "#a6d9ce";
  const wedgeCoolor = "#555b6e";

  const setup = (p5: p5Types, parentRef: Element) => {
    p5.createCanvas(width, height).parent(parentRef);
    p5.noStroke();
  };

  const draw = (p5: p5Types) => {
    p5.background(sketchBackground);

    for (let x = 0; x < width; x += individualSize) {
      const xPhase = x * (p5.PI / 32) * 0.05;

      for (let y = 0; y < height; y += individualSize) {
        const X = x + individualSize / 2;
        const Y = y + individualSize / 2;
        const yPhase = y * (p5.PI / 32) * 0.05;

        p5.fill(circleColor);
        p5.ellipse(X, Y, circleDiameter, circleDiameter);

        const rotate = p5.frameCount * p5.PI * 0.01;

        const netPhase = xPhase + yPhase + rotate;
        p5.fill(wedgeCoolor);
        p5.arc(
          X,
          Y,
          circleDiameter * 1.3,
          circleDiameter * 1.3,
          0 + netPhase,
          p5.PI / 5 + netPhase,
          p5.PIE
        );
      }
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Hello;
