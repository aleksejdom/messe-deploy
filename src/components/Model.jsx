import { useLoader } from 'react-three-fiber';
import { 
    GLTFLoader 
} from 'three/examples/jsm/loaders/GLTFLoader';
import {
    DRACOLoader
  } from 'three/examples/jsm/loaders/DRACOLoader';
import * as THREE from 'three'
import state from '../state'

const Model = props => {

    const model = useLoader(GLTFLoader, 'https://aleksejdom.github.io/threejs-messe-deploy/model/3dmesse.gltf', loader => {
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('/model/');
        loader.setDRACOLoader(dracoLoader);
       })

    const mesh = model.scene.children[0]
    mesh.position.x = state.meshPosition.x
    mesh.position.y = state.meshPosition.y
    mesh.position.z = state.meshPosition.z
    console.log('mesh: ', mesh)

    const tableFuss = []
    const table = mesh.getObjectByName('table')
    const table1 = mesh.getObjectByName('table1')
    const table2 = mesh.getObjectByName('table2')
    const table3 = mesh.getObjectByName('table3')
    const table4 = mesh.getObjectByName('table4')

    tableFuss.push(table.children[1], table1.children[1], table2.children[1], table3.children[1], table4.children[1])
    const tableMaterial = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(0xffffff),
        roughness: 0,
        metalness: 0.9,
        transparent: true,
        opacity: 0.4,
        depthWrite: true,
    })

    tableFuss.forEach(item => {
        item.material = tableMaterial
    })

   
    console.log(mesh)
    
    model.scene.traverse(child => {
        if(child.isMesh) {
            child.castShadow = true
            child.receiveShadow = true
            /* child.material.reflectivity = 0.99 */
            /* child.material.side = THREE.FrontSide */
        }
    })

    const bodyMesh = mesh.getObjectByName('body').children[1]
    bodyMesh.material.normalScale = new THREE.Vector2(0.8,0.8)
   

    return(
        <primitive 
            object={model.scene}
            scale={props.scale}
           /*  position={props.position} */
        />
        
    )
}

export default Model;