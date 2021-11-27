import { Suspense } from 'react'
import DragControl from './DragControl';
import Model from './Model';

import BoundingBox from './BoundingBox';
import CtaGeometry from './CtaGeometry';
import CtaFirst from './CtaFirst';
const Objects = () => {
    
    return (
        <Suspense fallback={null}>
             <BoundingBox 
                /* visible */
                position={[0,1,0]}
                dims={[2.8,1.9,2.8]}
                offset={[0,-0.9,0]}
              >
              <Model 
                path='/model/messestand.gltf' 
                scale={new Array(3).fill(1.3)}
                
              />
              <CtaGeometry />
              <CtaFirst />
              </BoundingBox>
          {/*   <DragControl transformGroup> 
             
             
            </DragControl> */}

        </Suspense>
    )
}

export default Objects;