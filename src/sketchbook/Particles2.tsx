import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

interface pointDetail {
  x: number;
  y: number;
  ownRadius: number;
  sector: number;
}

const colors = {
  bg: "rgb(242, 232, 207)",
  from: "rgb(229, 90, 52)",
  to: "rgb(250, 120, 33)",
};

const centerX = 400;
const centerY = 400;

const gaussianRandom = () =>
  (Math.random() + Math.random() + Math.random()) / 3;

class Ring {
  radius: number;
  numPoints: number;
  allPoints: pointDetail[];
  spreadRange: number;
  oscillateRadius: number;

  constructor(
    p5: p5Types,
    radius: number,
    numPoints: number,
    spreadRange: number,
    oscillateRadius: number
  ) {
    this.radius = radius;
    this.numPoints = numPoints;
    this.spreadRange = spreadRange;
    this.oscillateRadius = oscillateRadius;
    this.allPoints = [];

    for (let i = 0; i < numPoints; i++) {
      const sector = p5.random(p5.TAU);
      const spread = gaussianRandom() * spreadRange;
      const x = centerX + (radius + spread) * p5.sin(sector);
      const y = centerY + (radius + spread) * p5.cos(sector);
      const ownRadius = p5.random(oscillateRadius);
      this.allPoints.push({ x, y, ownRadius, sector });
    }
  }

  draw(p5: p5Types) {
    for (let i = 0; i < this.numPoints; i++) {
      const c = this.allPoints[i];

      const commotionAngle = ((p5.frameCount / 200) * p5.TAU) % p5.TAU;
      const difference = c.sector - commotionAngle;

      let amplitude = c.ownRadius;

      if (p5.sin(difference) > 0) {
        amplitude = c.ownRadius + 20 * p5.sin(difference * 2);
      }

      const from = p5.color(colors.from);
      const to = p5.color(colors.to);

      const color = p5.lerpColor(to, from, p5.sin(difference));
      p5.fill(color);

      const thisAngle = ((p5.frameCount / 30) * p5.TAU) % p5.TAU;
      const thisX = c.x + amplitude * p5.sin(thisAngle);
      const thisY = c.y + amplitude * p5.cos(thisAngle);

      p5.circle(thisX, thisY, 4);
    }
  }
}

const Particles2 = () => {
  const rings: Ring[] = [];

  const setup = (p5: p5Types, parentRef: Element) => {
    p5.createCanvas(800, 800).parent(parentRef);

    p5.noStroke();
    p5.fill(0);
    p5.frameRate(60);
    rings.push(new Ring(p5, 300, 2800, 300, 20));
    rings.push(new Ring(p5, 200, 1000, 70, 10));
    rings.push(new Ring(p5, 100, 200, 20, 10));
  };

  const draw = (p5: p5Types) => {
    p5.background(colors.bg);
    p5.frameRate(30);
    rings.forEach((el) => el.draw(p5));
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Particles2;
