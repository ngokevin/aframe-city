/* Provides global scope for keeping track of layers of merged geometries. */
AFRAME.registerSystem('geometry-merge', {
  init: function () {
    this.layers = {};
  },

  getOrCreateLayer: function (layerName) {
    var layers = this.layers;

    // Return existing geometry.
    if (layers[layerName]) {
      return layers[layerName];
    }

    // Create base geometry.
    layers[layerName] = new THREE.Geometry();
    return layers[layerName];
  }
});

/* Merge geometries by specified layers. */
AFRAME.registerComponent('geometry-merge', {
  dependencies: ['geometry'],

  schema: {
    default: ''
  },

  init: function () {
    var layerName = this.data;
    var geo1 = this.system.getOrCreateLayer(layerName);
    var geo2 = this.el.getObject3D('mesh').geometry;
    geo1.merge(geo2);
  }
});
