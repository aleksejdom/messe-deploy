import { Suspense } from 'react'
import DragControl from './DragControl';
import Model from './Model';
import BoundingBox from './BoundingBox';

const Objects = () => {
    
    return (
        <Suspense fallback={null}>
             <BoundingBox 
                /* visible */
                position={[2,1,0]}
                dims={[3,2,3]}
                offset={[-0.3,0,-0.15]}
              >
              <Model 
                path='/model/3dmesse.gltf' 
                scale={new Array(3).fill(0.01)}
               /*  position={[2,0.72,0]} */
              />
              </BoundingBox>
          {/*   <DragControl transformGroup> 
             
             
            </DragControl> */}

        </Suspense>
    )
}

export default Objects;