import * as THREE from 'three'

//audi: "Object_21", "Object_20"
//tesla: ""object005_bod_0""
const state = {
   
    activeMesh: {},
    activeMeshName: 'messe',
    cameraPos: new THREE.Vector3(-3,1,-3),
    target: new THREE.Vector3(0,0.9,0),
    meshPosition: {x: 0, y: 0, z:0},
    shouldUpdate: true
}

export default state;