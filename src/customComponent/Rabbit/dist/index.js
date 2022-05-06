'use strict';
exports.__esModule = true;
var react_1 = require('react');
var fiber_1 = require('@react-three/fiber');
var GLTFLoader_1 = require('three/examples/jsm/loaders/GLTFLoader');
var Model = function () {
  console.log('loading~');
  var gltf = fiber_1.useLoader(GLTFLoader_1.GLTFLoader, './Poimandres.gltf');
  console.log('gltf', gltf);
  return react_1['default'].createElement(
    react_1['default'].Fragment,
    null,
    react_1['default'].createElement('primitive', { object: gltf.scene, scale: 0.4 }),
  );
};
exports['default'] = function (props) {
  return react_1['default'].createElement(Model, null);
};
