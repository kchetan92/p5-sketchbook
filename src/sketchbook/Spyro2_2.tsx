import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

interface Spiro {
  p5: p5Types;
  rotateSpeed?: number;
  density?: number;
  D?: number;
  d?: number;
  offset?: number;
  stroke?: p5Types.Color;
  centerX?: number;
  centerY?: number;
  weight?: number;
}

const Spiro = ({
  p5,
  rotateSpeed = 5,
  density = 2,
  D = 100,
  d = 900,
  offset = 0,
  stroke = p5.color(99, 99, 99),
  centerX = 400,
  centerY = 400,
  weight = 2,
}: Spiro) => {
  const rotateAngle = (p5.frameCount * p5.TAU * rotateSpeed) / 10000;
  p5.push();
  p5.stroke(stroke);
  p5.strokeWeight(weight);
  for (
    let i = 0, angle = 0;
    angle <= p5.TAU;
    i++, angle = (i * p5.TAU * density) / 100
  ) {
    const smallX = ((D - d) / 2) * p5.cos(angle + rotateAngle + offset);
    const smallY = ((D - d) / 2) * p5.sin(angle + rotateAngle + offset);

    p5.ellipse(centerX + smallX, centerY + smallY, d);
  }

  p5.pop();
};

const Spiro2 = () => {
  const setup = (p5: p5Types, parentRef: Element) => {
    p5.createCanvas(800, 800).parent(parentRef);

    p5.noFill();
    p5.stroke(100);
  };

  const draw = (p5: p5Types) => {
    p5.clear();
    p5.background(p5.color("#EDF2F0"));
    // p5.blendMode(p5.MULTIPLY);
    p5.strokeWeight(2);

    Spiro({
      p5,
      stroke: p5.color("#B2C3C1"),
      weight: 2,
    });

    Spiro({
      p5,
      stroke: p5.color("#FFD621"),
      d: 300,
      D: 200,
      density: 2,
      rotateSpeed: 0,
      centerX: 400 + 50 * p5.cos((p5.frameCount * p5.TAU * 2) / 1000),
      centerY: 400 + 50 * p5.sin((p5.frameCount * p5.TAU * 5) / 1000),
    });
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Spiro2;
