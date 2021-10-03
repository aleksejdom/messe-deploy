const Light = () => {
    return (
      <>
        <ambientLight intensity={0.3} 
          
        />
        <directionalLight
          shadow-mapSize-height={2**25}
          shadow-mapSize-width={2**25}
          shadow-radius={25} 
          position={[-7,7,0]}
          intensity={0.5}
          castShadow
        />
        <directionalLight 
          position={[-3,13,-4]}
          intensity={0.9}
          shadow-mapSize-height={2**25}
          shadow-mapSize-width={2**25}
          shadow-radius={25} 
          castShadow
        />
      </>
    )
}

export default Light;