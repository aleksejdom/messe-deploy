import './App.css';
import { Canvas } from 'react-three-fiber'
import { Suspense } from 'react'
import { Physics } from 'use-cannon'

import Orbit from './components/Orbit';

import Light from './components/Light';
import Floor from './components/Floor';

import Objects from './components/Object';
import CameraControls from './components/CameraControls';
import Effects from './components/Effects';


function App() {  
 
  
  return (
    <div style={{height: '100vh', width: '100vw'}}>
      
      <Canvas 
        gl={{
          powerPreference: "high-performance",
          antialias: false,
          stencil: false,
          depth: false
        }}
        shadowMap 
        style={{background: '#000'}}
        frameloop={'demand'}
        
      >,
        <CameraControls />
        <Orbit />
        <Light />
        <Physics>
          <Objects />
          <Floor position={[0, 0, 0]} />
        </Physics> 
        <Effects />
      </Canvas>

      <div className='icon-web'><a href="http://messestand.3d-website.de/" target="_self">
        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4xLjIsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iRWJlbmVfMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxNjUuNiAzMDMuOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTY1LjYgMzAzLjg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxnPg0KCTxnPg0KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzUuNywzMDMuOGMtNS45LDAtMTEtMC43LTE1LjQtMi4yYy00LjQtMS40LTguMS0zLjQtMTEuMS01LjhjLTMtMi40LTUuMi01LjEtNi44LThjLTEuNS0yLjktMi40LTUuOS0yLjQtOQ0KCQkJYzAtMC44LDAuMy0xLjUsMC44LTJjMC42LTAuNSwxLjMtMC43LDIuMS0wLjdoNi45YzAuOCwwLDEuNiwwLjIsMi4yLDAuNmMwLjcsMC40LDEuMiwxLjIsMS43LDIuNGMwLjksMy40LDIuNSw2LDQuOCw3LjgNCgkJCWMyLjMsMS45LDQuOSwzLjEsOCwzLjhjMywwLjcsNi4xLDEsOS4yLDFjNi40LDAsMTEuNy0xLjUsMTUuNy00LjZjNC0zLjEsNi03LjYsNi0xMy42YzAtNi4xLTEuOC0xMC40LTUuNS0xMw0KCQkJYy0zLjYtMi42LTguNy0zLjktMTUuMS0zLjlIMjMuNWMtMC45LDAtMS43LTAuMy0yLjMtMC44Yy0wLjYtMC42LTAuOS0xLjQtMC45LTIuNHYtMy44YzAtMC44LDAuMi0xLjYsMC41LTIuMg0KCQkJYzAuMy0wLjYsMC43LTEuMSwxLTEuNkw0OSwyMTYuNEg3LjdjLTAuOSwwLTEuNy0wLjMtMi4zLTAuOGMtMC42LTAuNi0wLjktMS40LTAuOS0yLjR2LTUuM2MwLTEsMC4zLTEuOCwwLjktMi40DQoJCQljMC42LTAuNiwxLjQtMC45LDIuMy0wLjloNTUuOGMxLDAsMS44LDAuMywyLjQsMC45YzAuNiwwLjYsMC45LDEuNCwwLjksMi40djVjMCwwLjctMC4yLDEuMi0wLjUsMS43Yy0wLjMsMC41LTAuNywxLTEsMS41DQoJCQlsLTI3LDMwLjFsMi4yLDAuMWM2LjIsMC4yLDExLjUsMS4zLDE2LjIsMy40YzQuNiwyLjEsOC4yLDUuMSwxMC44LDkuMmMyLjYsNC4xLDMuOCw5LjIsMy44LDE1LjNjMCw2LjMtMS41LDExLjYtNC42LDE2DQoJCQljLTMuMSw0LjQtNy4zLDcuOC0xMi43LDEwLjFDNDguNiwzMDIuNiw0Mi41LDMwMy44LDM1LjcsMzAzLjh6Ii8+DQoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik05My41LDMwMi40Yy0xLDAtMS44LTAuMy0yLjQtMC45Yy0wLjYtMC42LTAuOC0xLjQtMC44LTIuM3YtOTEuNGMwLTEsMC4zLTEuOCwwLjgtMi40DQoJCQljMC42LTAuNiwxLjQtMC45LDIuNC0wLjloMzEuOGM5LjYsMCwxNy4zLDEuNCwyMy4yLDQuM2M1LjksMi45LDEwLjIsNy4yLDEyLjksMTIuOGMyLjcsNS42LDQuMSwxMi42LDQuMiwyMC44DQoJCQljMC4xLDQuMiwwLjEsNy45LDAuMSwxMS4xYzAsMy4yLDAsNi44LTAuMSwxMC45Yy0wLjIsOC42LTEuNiwxNS43LTQuMywyMS4zYy0yLjcsNS42LTYuOSw5LjgtMTIuNiwxMi42DQoJCQljLTUuNywyLjgtMTMuMyw0LjEtMjIuNyw0LjFIOTMuNXogTTEwMy45LDI5MC41aDIxLjNjNi40LDAsMTEuNi0wLjksMTUuNC0yLjdjMy44LTEuOCw2LjYtNC42LDguMy04LjVjMS43LTMuOSwyLjYtOS4xLDIuNy0xNS41DQoJCQljMC4yLTIuOCwwLjMtNS4yLDAuMy03LjNzMC00LjIsMC02LjNzLTAuMS00LjUtMC4zLTcuMmMtMC4yLTktMi4zLTE1LjctNi40LTIwLjFjLTQuMS00LjMtMTEtNi41LTIwLjctNi41aC0yMC42VjI5MC41eiIvPg0KCTwvZz4NCgk8Zz4NCgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTEyMS44LDUyLjl2NjcuN2MwLDEuOC0xLjQsMy4yLTMuMiwzLjJIMTE0Yy0xLjYsMC0yLjktMS4zLTIuOS0yLjlWNzUuNGMwLTAuOS0wLjgtMS43LTEuNy0xLjdoLTIuOQ0KCQkJYy0wLjksMC0xLjcsMC44LTEuNywxLjd2MTAyLjhjMCwzLjQtMi44LDYuMi02LjIsNi4yaC01Yy0zLjQsMC02LjItMi44LTYuMi02LjJ2LTU0LjNoLTkuM3Y1NC4zYzAsMy40LTIuOCw2LjItNi4yLDYuMmgtNQ0KCQkJYy0zLjQsMC02LjItMi44LTYuMi02LjJWNzUuNGMwLTAuOS0wLjgtMS43LTEuNy0xLjdoLTIuOWMtMC45LDAtMS43LDAuOC0xLjcsMS43djQ1LjVjMCwxLjYtMS4zLDIuOS0yLjksMi45SDQ3DQoJCQljLTEuOCwwLTMuMi0xLjQtMy4yLTMuMlY1Mi45YzAtNC44LDMuOS04LjgsOC44LTguOGg2MC41QzExNy45LDQ0LjIsMTIxLjgsNDguMSwxMjEuOCw1Mi45eiIvPg0KCQk8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSI4Mi44IiBjeT0iMTkuOSIgcj0iMTkuOSIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K
" width="45" alt="logo" /> </a>
      </div>

      <div className="intro">
        <h1>Interaktiver Messestand</h1>
        <p>
          Erfahren Sie mehr unter <a href="mailto:aleksej.3dweb@gmail.com">aleksej.3dweb@gmail.com</a>
        </p>
      </div>
      <div className="info_start">
        <h1>Bitte klicken Sie auf die "Info-Buttons"<br/> um die Information ein- und auszublenden.</h1>
      </div>
      <div className="cta_block">
        <div>
          <h1>
            Produktinformation.
          </h1>
          <p>
            Durch die Info-Buttons lässt sich der Inhalt ein- und ausblenden.
            So können wir dem Nutzer durch die Interaktivität ein tolles 3D-Erlebniss bieten.<br/><br/>
            Möchten Sie den Nutzer direkt in die Messe eintauchen lassen? Dann schauen Sie sich <a href="http://messestand.3d-website.de/" target="_self">diese Referenz</a> an. 
          </p>
        </div>
        <div>
          <h1>
            Animiertes 3D Produkt.
          </h1>
          <p>
            Gerne kann ich Ihr Produk als ein 3D-Modell visualisieren und animieren.
            Das Modell kann dann in den Messestand integriert werden und durch
            die Interaktionen mit der Szene, werden die Animationsabläufe gesteuert 
            und abgespielt.
          </p>
        </div>
      </div>
    </div>
   
  );
}

export default App;