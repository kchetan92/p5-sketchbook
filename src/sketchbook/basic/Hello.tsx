import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

const Hello = () => {
  const setup = (p5: p5Types, parentRef: Element) => {
    p5.createCanvas(500, 500).parent(parentRef);
    p5.background(0);
    p5.ellipse(20, 20, 70, 70);
  };

  return <Sketch setup={setup} />;
};

export default Hello;
