import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

interface pointDetail {
  x: number;
  y: number;
  ownRadius: number;
  ptAngle: number;
  sector: number;
}

let points: pointDetail[] = [];

const Particles = () => {
  const numParticles = 1500;
  const circleRadius = 300;
  const spreadRange = 50;

  const centerX = 0;
  const centerY = 0;

  const oscillateRadius = 10;

  const gaussianRandom = () =>
    (Math.random() + Math.random() + Math.random()) / 3;

  const setup = (p5: p5Types, parentRef: Element) => {
    p5.createCanvas(800, 800, p5.WEBGL).parent(parentRef);
    p5.background(200);
    p5.noStroke();
    p5.fill(0);
    p5.frameRate(60);
    for (let i = 0; i < numParticles; i++) {
      const sector = p5.random(p5.TAU);
      const spread = gaussianRandom() * spreadRange;
      const x = centerX + (circleRadius + spread) * p5.sin(sector);
      const y = centerY + (circleRadius + spread) * p5.cos(sector);
      const ownRadius = p5.random(oscillateRadius);
      const ptAngle = p5.random(p5.TAU);
      points.push({ x, y, ownRadius, ptAngle, sector });
    }
  };

  const draw = (p5: p5Types) => {
    p5.background(200);

    for (let i = 0; i < numParticles; i++) {
      const c = points[i];

      const commotionAngle = ((p5.frameCount / 200) * p5.TAU) % p5.TAU;
      const difference = c.sector - commotionAngle;

      let amplitude = c.ownRadius;

      if (p5.sin(difference * 2) > 0) {
        amplitude = c.ownRadius + 20 * p5.sin(difference * 2);
      }

      const thisAngle = (p5.frameCount / 30) * p5.TAU + c.ptAngle;
      const thisX = c.x + amplitude * p5.sin(thisAngle);
      const thisY = c.y + amplitude * p5.cos(thisAngle);

      p5.circle(thisX, thisY, 4);
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Particles;
