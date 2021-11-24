import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import * as THREE from 'three';
import Optimer from "three/examples/fonts/optimer_regular.typeface.json";

import AddActiveBlock from "./AddActiveBlock"

const CtaFirst = () => {
    
    const ref = useRef()
   

    useFrame(() => {
        if (ref.current) {
         ref.current.rotation.y += 0.1
        ref.current.geometry.center()
        ref.current.updateMatrix()
        
        }
       
    })

    const font = new THREE.FontLoader().parse(Optimer);

    // configure font geometry
    const textOptions = {
        font,
        size: 0.1,
        height: 0.03
    };

    const textMaterial = {
        vertexColors: false, 
        color: 0x775b33,
        roughness: 0.9,
        metalness: 0.1,
    }

    return(
    
        <mesh position={[0.85, 0.6, -0.99]} ref={ref} castShadow receiveShadow 
        onClick={(e) => {
            e.stopPropagation()    
            AddActiveBlock(1)
        }}
        >
            <textGeometry attach='geometry' args={['INFO', textOptions]} />
            <meshStandardMaterial attach='material' args={ [textMaterial] } />
        </mesh>
        
    )
} 

export default CtaFirst