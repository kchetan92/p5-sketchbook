import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

// Not original
// Src: https://www.openprocessing.org/sketch/611317

const Waves = () => {
  const width = 500;
  const height = 500;
  const numWaves = 150;

  const setup = (p5: p5Types, parentRef: Element) => {
    p5.createCanvas(width, height).parent(parentRef);
    p5.noFill();
    p5.strokeWeight(2);
  };

  const draw = (p5: p5Types) => {
    const from = p5.color(34, 86, 171);
    const to = p5.color(56, 217, 242);
    p5.background(from);

    for (let i = 0; i < numWaves; i++) {
      const paint = p5.map(i, 0, numWaves, 0, 1);
      p5.stroke(p5.lerpColor(from, to, paint));

      p5.beginShape();

      for (let x = -10; x < width + 10; x += 3) {
        const noise = p5.noise(x * 0.005, i * 0.01, p5.frameCount * 0.012);
        const y = p5.map(noise, 0, 1, 0, height);
        p5.vertex(x, y);
      }

      p5.endShape();
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Waves;
