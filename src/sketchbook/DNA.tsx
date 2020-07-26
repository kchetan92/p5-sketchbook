import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

const DNA = () => {
  const speed = 0.01;
  const numLines = 20;
  const width = 500;
  const height = 500;

  const setup = (p5: p5Types, parentRef: Element) => {
    p5.createCanvas(width, height).parent(parentRef);
  };

  const draw = (p5: p5Types) => {
    p5.background(240);
    p5.noStroke();
    p5.fill("white");
    const phase = p5.frameCount * speed;

    let centre = width / 2;
    let amplitude = (width / 2) * 0.5;

    for (let thisLine = 0; thisLine < 20; thisLine++) {
      let y = 40 + thisLine * 22;

      let thisPhase = p5.map(thisLine, 0, 19, 0, p5.TWO_PI);

      let x1 = centre + amplitude * p5.sin(phase + thisPhase);
      let x2 = centre + amplitude * p5.sin(phase + thisPhase + p5.PI);

      p5.push();
      p5.strokeWeight(2);
      p5.stroke("white");
      p5.line(x1, y, x2, y);
      p5.pop();

      let ph1 = p5.cos(thisPhase + phase);
      let ph2 = p5.cos(thisPhase + phase + p5.PI);

      if (ph1 < ph2) {
        p5.fill("#ffcf78");
        p5.circle(x1, y, 15 * (1 + 0.2 * ph1));

        p5.fill("#78adff");
        p5.circle(x2, y, 15 * (1 + 0.2 * ph2));
      } else {
        p5.fill("#78adff");
        p5.circle(x2, y, 15 * (1 + 0.2 * ph2));

        p5.fill("#ffcf78");
        p5.circle(x1, y, 15 * (1 + 0.2 * ph1));
      }
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default DNA;
