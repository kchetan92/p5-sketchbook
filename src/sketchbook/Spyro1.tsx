import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

const curve: number[][] = [];
let angle = 0;
let radius = 100;
let localAngle = 10;
let localRadius = 50;

const centerX = 400;
const centerY = 400;

const Spyro1 = () => {
  const setup = (p5: p5Types, parentRef: Element) => {
    p5.createCanvas(800, 800).parent(parentRef);
    p5.background(200);
  };

  const draw = (p5: p5Types) => {
    p5.noFill();
    p5.background(200);

    const localX = localRadius * p5.sin(localAngle);
    const localY = localRadius * p5.cos(localAngle);

    const pointX = centerX + localX + radius * p5.sin(angle);
    const pointY = centerY + localY + radius * p5.cos(angle);

    curve.push([pointX, pointY]);

    radius = radius * (1 - 0.01);

    p5.beginShape();
    curve.forEach((el) => p5.curveVertex(el[0], el[1]));
    p5.endShape();

    angle = p5.frameCount * p5.TAU * 0.005;
    // localAngle = p5.frameCount * p5.TAU * 0.12;
    localAngle = angle * 20;
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Spyro1;
