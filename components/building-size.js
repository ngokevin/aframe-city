AFRAME.registerComponent('building-size', {
  schema: {
    type: 'vec3',
    default: {x: 50, y: 200, z: 50}
  },

  init: function () {
    var data = this.data;
    var el = this.el;
    el.addEventListener('loaded', function () {
      el.setAttribute('geometry', 'depth', Math.random() * data.x);
      el.setAttribute('geometry', 'height', Math.random() * data.y);
      el.setAttribute('geometry', 'width', Math.random() * data.z);
    });
  }
});
