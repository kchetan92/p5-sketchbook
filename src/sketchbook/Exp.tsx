import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

const colors = {
  land: {
    dark: "rgb(112, 70, 46)",
    light: "rgb(219, 159, 86)",
  },
  water: {
    dark: "rgb(74, 96, 156)",
    light: "rgb(73, 212, 227)",
  },
};

const Hello = () => {
  const setup = (p5: p5Types, parentRef: Element) => {
    p5.createCanvas(800, 800).parent(parentRef);
    p5.background(220);
  };

  const density = 40;

  const draw = (p5: p5Types) => {
    p5.background(255);
    const blockWidth = p5.width / density;
    const blockHeight = p5.height / density;

    p5.fill(100);
    p5.noStroke();
    for (let i = 0; (i + 1) * blockWidth < p5.width; i++) {
      for (let j = 0; (j + 1) * blockHeight < p5.height; j++) {
        const thisNoise = p5.noise(
          (i * blockWidth) / 200 + p5.frameCount / 50,
          (j * blockHeight) / 200,
          2
        );
        p5.push();
        p5.translate(i * blockWidth, j * blockHeight);

        // Iteration 1 : rotate ellipse
        // p5.rotate(thisNoise * p5.PI);
        // p5.ellipse(0, 0, blockWidth / 8, blockHeight * 0.7);

        const diameter = p5.map(thisNoise, 0, 1, 0, blockHeight);

        if (thisNoise > 0.5) {
          const dark = p5.color(colors.land.dark);
          const light = p5.color(colors.land.light);
          p5.fill(p5.lerpColor(light, dark, thisNoise * 2));
        } else {
          const dark = p5.color(colors.water.dark);
          const light = p5.color(colors.water.light);
          p5.fill(p5.lerpColor(light, dark, (thisNoise - 0.5) * 2));
        }

        p5.rect(blockWidth, blockHeight, blockWidth, blockHeight);

        p5.pop();
      }
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Hello;
