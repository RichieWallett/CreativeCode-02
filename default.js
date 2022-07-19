const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [1080, 1080],
  fps: 60,
};

const sketch = () => {
  return ({ context, width, height }) => {
    
    /* Write my code here */

    context.fillStyle = '#dddddd'; // Grey Canvas
    context.fillRect(0, 0, width, height);
  };
};

canvasSketch(sketch, settings);
