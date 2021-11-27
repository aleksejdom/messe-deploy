import {DragControls} from 'three/examples/jsm/controls/DragControls.js'
import { useRef, useEffect, useState } from 'react'
import { extend, useThree } from 'react-three-fiber'

//Components added this way can then be referenced in the scene
extend({ DragControls })

const DragControl = props => {
    const [children, setChildren] = useState([])
    const groupRef = useRef()
    const controlsRef = useRef()
    const { camera, gl, scene } = useThree();

    useEffect(() => {
        setChildren(groupRef.current.children)
    }, [])

    useEffect(() => {
        controlsRef.current.addEventListener(
            'hoveron', 
            e => scene.orbitControls.enabled = false
        )
        controlsRef.current.addEventListener(
            'hoveroff', 
            e => scene.orbitControls.enabled = true
        )
        controlsRef.current.addEventListener(
            'dragstart', 
            e => {
                e.object.api?.mass.set(0)
                console.log(e.object)
            } 
            
        )
        controlsRef.current.addEventListener(
            'dragend', 
            e => e.object.api?.mass.set(1)
        )
        controlsRef.current.addEventListener(
            'drag', 
            e => {
                e.object.api?.position.copy(e.object.position)
                e.object.api?.velocity.set(0,0,0)
            } 
        )
    //listen for children
    }, [children])

    return(
        //to have the acces to the 3d objects
       <group ref={groupRef}>
           {/* dragControls is from jsm EventDispatcher*/}
           <dragControls 
           transformGroup={props.transformGroup}
           ref={controlsRef}
           args={
               [children, camera, gl.domElement]
           }/>
           {props.children}
       </group>
    )
}

export default DragControl;