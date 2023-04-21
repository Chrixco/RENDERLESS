// initialize Pixi.js
let app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    transparent: true,
    antialias: true,
    resolution: 1
  });
  
  // add the canvas to the DOM
  document.body.appendChild(app.view);
  
  // load the image
  PIXI.Loader.shared.add('logo', 'img/Artboard 1.png').load(setup);
  
  // setup function
  function setup() {
    // create the sprite
    let sprite = new PIXI.Sprite(PIXI.Loader.shared.resources.logo.texture);
    sprite.anchor.set(0.5);
  
    // add the sprite to the stage
    app.stage.addChild(sprite);
  
    // animate the sprite
    app.ticker.add((delta) => {
      sprite.rotation += 0.01 * delta;
    });
  }

let canvas = document.getElementById('canvas');
let mouse = { x: 0, y: 0 };

canvas.addEventListener('mousemove', (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

canvas.addEventListener('mouseleave', (event) => {
  mouse.x = -9999;
  mouse.y = -9999;
});

app.ticker.add((delta) => {
    // get the pixels from the canvas
    let pixels = app.renderer.extract.pixels();
  
    // iterate over each pixel
    for (let i = 0; i < pixels.length; i += 4) {
      let x = (i / 4) % window.innerWidth;
      let y = Math.floor((i / 4) / window.innerWidth);
  
      // calculate the distance between the mouse and the pixel
      let dx = x - mouse.x;
      let dy = y - mouse.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
  
      // apply the liquify effect if the pixel is within a certain distance from the mouse
      if (distance < 100) {
        let offset = 10 * Math.sin(distance * 0.1);
  
        pixels[i] = pixels[i + Math.floor(offset * 4)] || 0;
        pixels[i + 1] = pixels[i + Math.floor(offset * 4) + 1] || 0;
        pixels[i + 2] = pixels[i + Math.floor(offset * 4) + 2] || 0;
      }
    }
  
    // update the canvas with the modified pixels
    app.renderer.extract.pixels(pixels);
  });
  