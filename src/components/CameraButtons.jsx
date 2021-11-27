import state from '../state'

const style = {
    zIndex: 1,
    position: 'absolute',
    bottom: '10vh',
    height: '30px',
    width: '30px',
    background: 'white',
    textAlign: 'center',
    borderRadius: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.7,
    border: '1px solid black',
    cursor: 'pointer'
}

const CameraButtons = ({}) => {

    const sets = {
        //audi
        1: {
            cameraPos: [-2,2,0],
            target: [2,1,0],
            name: 'messe'
        },
        2: {
            cameraPos: [-4,2,-6],
            target: [2,1,0],
            name: 'messe'
        },
    }
    const handleClick = num => {
        state.cameraPos.set(...sets[num].cameraPos)
        state.target.set(...sets[num].target)
        state.activeMeshName = sets[num].name
        state.shouldUpdate = true
    }

    return(
        //Fragment
        <> 
            <button
                onClick={ e => handleClick(2) }
                style={{
                    ...style,
                    left: '40vw',
                  
                }}
            >
                {'<'}
            </button>
            <button
                onClick={ e => handleClick(1) }
                style={{
                    ...style,
                    right: '40vw',
                 
                }}
            >
                {'>'}
            </button>
        </>
    )
}

export default CameraButtons;