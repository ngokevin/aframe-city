(function () {
  var canvas = document.createElement('canvas');
  var canvas2 = document.createElement('canvas');
  var context;
  var texture;
  var x;
  var y;
  var value;

  canvas.width = 32;
  canvas.height = 64;
  context = canvas.getContext('2d');

  // White background.
  context.fillStyle = '#FFF';
  context.fillRect(0, 0, 32, 64);

  // Window rows.
  for (y = 2; y < 64; y += 2) {
    for (x = 0; x < 32; x +=2) {
      value = Math.floor(Math.random() * 64);
      context.fillStyle = 'rgb(' + [value, value, value].join(',') + ')';
      context.fillRect(x, y, 2, 1);
    }
  }

  // Upscale without filtering.
  canvas2.width = 512;
  canvas2.height = 1024;
  context = canvas2.getContext('2d');

  // Disable smoothing.
  context.imageSmoothingEnabled = false;
  context.webkitImageSmoothingEnabled = false;
  context.mozImageSmoothingEnabled = false;

  // Draw.
  context.drawImage(canvas, 0, 0, canvas2.width, canvas2.height);

  // Create texture.
  texture = new THREE.Texture(canvas);

  AFRAME.registerComponent('building-texture', {
    dependencies: ['material'],

    init: function () {
      var material = this.el.components.material.material
      material.map = texture;
      material.needsUpdate = true;
    }
  });
})();
