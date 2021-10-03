import { 
    EffectComposer,
    DepthOfField,
    Bloom,
    Noise,
    Vignette
  } from 'react-postprocessing'

  
const Effects = () => {
    return(
        <EffectComposer>
        <DepthOfField 
           focusDistance={0.01}
           focalLength={0.02}
           bokehScale={0.6}
           height={480}
        />
         <Bloom luminanceThreshold={4} luminanceSmoothing={0.9} height={300} opacity={3}/> 
         <Noise opacity={0.025} />
         <Vignette eskil={false} offset={0.1} darkness={0.5} />
      </EffectComposer>
    )
}

export default Effects;