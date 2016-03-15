AFRAME.registerShader('street', {
  schema: { x: {} },

  vertexShader: [
    'varying vec3 pos;',
    'void main() {',
      'pos = position;',
      'gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);',
    '}'
  ].join('\n'),

  fragmentShader: [
    'varying vec3 pos;',
    'void main() {',
      'vec3 color;',
      // Starts from center.
      'if (pos.x > -0.15 && pos.x < 0.15) {',
        // Yellow stripe.
        'color = vec3(1.0, 0.8, 0.0);',
      '} else {',
        // Asphalt.
        'color = vec3(0.3, 0.3, 0.3);',
      '}',
      'gl_FragColor = vec4(color, 1.0);',
    '}'
  ].join('\n')
});
