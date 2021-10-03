import { Suspense } from 'react'
import DragControl from './DragControl';
import Model from './Model';
import BoundingBox from './BoundingBox';

const Cars = () => {
    
    return (
        <Suspense fallback={null}>
            <DragControl transformGroup> 
              {/* Async Section */}
              <BoundingBox 
                /* visible */
                position={[2,2,0]}
                dims={[2,1.3,4]}
                offset={[0,0,0.3]}
              >
              <Model 
                path='/audi/scene.gltf' 
                scale={new Array(3).fill(0.2)}
               /*  position={[2,0.72,0]} */
              />
              </BoundingBox>
            </DragControl>

            <DragControl transformGroup> 
              <BoundingBox 
                /* visible */
                position={[-2,1,0]}
                dims={[2,1,4]}
                offset={[0,-0.4,0]}
              >
              <Model 
                  path='/tesla/scene.gltf' 
                  scale={new Array(3).fill(0.007)}
                 /*  position={[-2,0.23,0]} */
              />
              </BoundingBox>
            </DragControl>
        </Suspense>
    )
}

export default Cars;