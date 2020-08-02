import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

export interface IBezier {
  theme?: "dark" | "light";
}

const Bezier = (prop: IBezier) => {
  const colors = {
    dark: {
      bg: "rgb(66,7,3)",
      mother: "rgb(121, 15, 8)",
      motherAura: "rgb(188,19,8)",
      child: "rgb(244, 179, 10)",
    },
    light: {
      bg: "rgb(216,225,233)",
      mother: "rgb(0, 168, 150)",
      motherAura: "rgb(115,208,188)",
      child: "rgb(244, 179, 10)",
    },
  };

  let theme = colors.dark;

  if (prop.theme && prop.theme === "light") {
    theme = colors.light;
  }

  const setup = (p5: p5Types, parentRef: Element) => {
    p5.createCanvas(800, 800).parent(parentRef);
    p5.frameRate(60);
  };

  const draw = (p5: p5Types) => {
    p5.background(theme.bg);
    p5.noFill();

    const centreX = 400;
    const centreY = 400;

    //Circle at center
    p5.noStroke();

    //Reference points
    for (let i = 0; i < 18; i++) {
      const phaseDirection = prop.theme === "light" ? 1 : -1;
      const phase =
        p5.frameCount * 0.05 + (phaseDirection * (p5.TWO_PI * i)) / 18;
      // const phase = p5.TWO_PI * p5.noise(p5.frameCount * 0.01);

      const anchorNearX = p5.sin((p5.TWO_PI * i) / 18) * 30 + centreX;
      const anchorNearY = p5.cos((p5.TWO_PI * i) / 18) * 30 + centreY;

      const anchorFarX = p5.sin((p5.TWO_PI * i) / 18) * 300 + centreX;
      const anchorFarY = p5.cos((p5.TWO_PI * i) / 18) * 300 + centreY;

      const farAmplitude = 200;
      const handleFarX = anchorFarX + p5.sin(phase) * farAmplitude;
      const handleFarY = anchorFarY + p5.cos(phase) * farAmplitude;

      p5.noFill();
      p5.bezier(
        anchorNearX,
        anchorNearY,
        anchorNearX,
        anchorNearY,
        handleFarX,
        handleFarY,
        anchorFarX,
        anchorFarY
      );

      const ballsOnRope = 15;
      const ballSpeed = 12;

      for (let i = 0; i < ballsOnRope; i++) {
        const path = ((p5.frameCount * ballSpeed) % 60) / 60;
        const progress = i / ballsOnRope + (1 / ballsOnRope) * path;

        const x = p5.bezierPoint(
          anchorNearX,
          anchorNearX,
          handleFarX,
          anchorFarX,
          progress
        );
        const y = p5.bezierPoint(
          anchorNearY,
          anchorNearY,
          handleFarY,
          anchorFarY,
          progress
        );

        // const from = p5.color(121, 15, 8);
        // const to = p5.color(66, 7, 3);
        // p5.fill(p5.lerpColor(from, to, progress));
        if (prop.theme === "light") {
          p5.fill(progress < 0.5 ? theme.mother : theme.motherAura);
        } else {
          p5.fill(progress < 0.5 ? theme.motherAura : theme.mother);
        }

        p5.circle(x, y, 10);
      }

      p5.fill(theme.motherAura);
      p5.circle(centreX, centreY, 90);

      p5.fill(theme.mother);
      p5.circle(centreX, centreY, 60);
    }

    // const phase = p5.frameCount * 0.05;

    // const cp1 = { x: 400, y: 100 };
    // const cp2 = {
    //   x: cp1.x + 100 * p5.sin(phase),
    //   y: cp1.y - 100 * p5.cos(phase),
    // };
    // const cp3 = { x: 600, y: 150 };
    // const cp4 = { x: 650, y: 100 };

    // p5.stroke(0);

    // p5.bezier(cp1.x, cp1.y, cp2.x, cp2.y, cp3.x, cp3.y, cp4.x, cp4.y);
    // p5.fill(255);
    // p5.noStroke();

    // for (let i = 0; i < 3; i++) {
    //   const path = (p5.frameCount % 60) / 60;

    //   const x = p5.bezierPoint(
    //     cp1.x,
    //     cp2.x,
    //     cp3.x,
    //     cp4.x,
    //     i / 3 + (1 / 3) * path
    //   );
    //   const y = p5.bezierPoint(
    //     cp1.y,
    //     cp2.y,
    //     cp3.y,
    //     cp4.y,
    //     i / 3 + (1 / 3) * path
    //   );

    //   p5.circle(x, y, 6);
    // }
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Bezier;
