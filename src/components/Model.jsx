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

    const model = useLoader(GLTFLoader, 'https://aleksejdom.github.io/messe-deploy/model/messestand.gltf', loader => {
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('/model/');
        loader.setDRACOLoader(dracoLoader);
    })

    const mesh = model.scene.children[0]
    mesh.position.x = state.meshPosition.x
    mesh.position.y = state.meshPosition.y
    mesh.position.z = state.meshPosition.z
    console.log('mesh: ', mesh)
    
    model.scene.traverse(child => {
        if(child.isMesh) {
            child.castShadow = true
            child.receiveShadow = true
            /* child.material.reflectivity = 0.99 */
            /* child.material.side = THREE.FrontSide */
        }
    })

   /*  const bodyMesh = mesh.getObjectByName('body').children[1]
    bodyMesh.material.normalScale = new THREE.Vector2(0.8,0.8) */
   
    return(
        <primitive
            object={model.scene}
            scale={props.scale}
           /*  position={props.position} */
        />
    )
}

export default Model;