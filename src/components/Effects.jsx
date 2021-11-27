import { 
    EffectComposer,
    DepthOfField,
  } from 'react-postprocessing'

  
const Effects = () => {
    return(
        <EffectComposer>
        <DepthOfField 
           focusDistance={0.01}
           focalLength={0.02}
           bokehScale={0.6}
           height={1024}
        />
        
 
      </EffectComposer>
    )
}

export default Effects;