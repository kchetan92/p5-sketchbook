import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

const BeginShape = () => {
  const setup = (p5: p5Types, parentRef: Element) => {
    p5.createCanvas(500, 500).parent(parentRef);
    p5.background(170);

    p5.beginShape(p5.LINES);
    p5.vertex(30, 20);
    p5.vertex(85, 20);

    p5.vertex(85, 20);
    p5.vertex(85, 75);

    p5.vertex(85, 75);
    p5.vertex(30, 75);

    p5.vertex(30, 75);
    p5.vertex(30, 20);

    p5.endShape(p5.CLOSE);
  };

  return <Sketch setup={setup} />;
};

export default BeginShape;
