const Light = () => {
    return (
      <>
        <ambientLight intensity={0.5} 
          
        />
        <directionalLight
          shadow-mapSize-height={2**25}
          shadow-mapSize-width={2**25}
          shadow-radius={25} 
          position={[-7,7,0]}
          intensity={2.5}
          castShadow
        />
        <directionalLight 
          position={[17,6,-5]}
          intensity={1.2}
          shadow-mapSize-height={2**25}
          shadow-mapSize-width={2**25}
          shadow-radius={25} 
          castShadow
        />
      </>
    )
}

export default Light;