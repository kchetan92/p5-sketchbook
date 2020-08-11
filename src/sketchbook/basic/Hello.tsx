import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

const Hello = () => {
  const setup = (p5: p5Types, parentRef: Element) => {
    p5.createCanvas(800, 800).parent(parentRef);
    p5.background(200);
  };

  const draw = (p5: p5Types) => {
    p5.circle(400, 400, 400);
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Hello;
