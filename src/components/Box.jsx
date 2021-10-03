import { useRef } from 'react'
import { useLoader, useFrame } from 'react-three-fiber'
import * as THREE from 'three';
import { useBox } from 'use-cannon'


/* Box set props */
const Box = props => {
    // This reference will give us direct access to the mesh
    const [ref, api ] = useBox(()=> ({mass:1, ...props}))
    const raycaster = new THREE.Raycaster();

    const texture = useLoader(
      THREE.TextureLoader, 
      process.env.PUBLIC_urL + '/texture.png'
    );
    // Subscribe to the render-loop, rotate the mesh every frame similar AnimationFrame
/*     useFrame( state => {
      ref.current.rotation.y += 0.01;
      console.log(state)
    }) */
    
    const handlePointerDown = e => {
      console.log(e)
      e.object.active = true;
      if(window.activeMesh) {
        scaleDown(window.activeMesh)
        window.activeMesh.active = false;
      }
      window.activeMesh = e.object
    }
    const handlePointerEnter = e => {
      e.object.scale.x = 1.5
      e.object.scale.y = 1.5
      e.object.scale.z = 1.5
    }
    const handlePointerLeave = e => {
      if(!e.object.active){
        scaleDown(e.object)
      }
    }
  
    const scaleDown = object => {
     object.scale.x = 1
     object.scale.y = 1
     object.scale.z = 1
    }
    return(
      /* Box set props */
      <mesh 
        ref={ref}
        api={api} 
        {...props} 
        castShadow 
        /* receiveShadow */
        onPointerDown={handlePointerDown}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
      >
          <boxBufferGeometry args={[1, 1, 1]}/>
          <meshPhysicalMaterial 
           /*  opacity={0.7}
            transparent
            side={THREE.DoubleSide} */
            map={texture}
  
          />
      </mesh>
    )
  }

  export default Box;