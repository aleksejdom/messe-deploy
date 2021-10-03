import * as THREE from 'three'

//audi: "Object_21", "Object_20"
//tesla: ""object005_bod_0""
const state = {
    activeMesh: {},
    activeMeshName: 'body',
    cameraPos: new THREE.Vector3(-2,1,0),
    target: new THREE.Vector3(2,0.9,0),
    meshPosition: {x: 0, y: -95, z:0},
    shouldUpdate: true
}

export default state;