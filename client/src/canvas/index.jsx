import {Canvas} from '@react-three/fiber';
import {Environment, Center} from '@react-three/drei';
import Shirt from './Shirt';
import backdrop from './backdrop';
import CameraRig from './CameraRig';


const CanvasModel = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5}/>
      <Environment preset='city'/>
      
      {/*<CameraRig>*/}
        {/*<backdrop />*/}
        <center>
          <Shirt/>
        </center>
      {/*<CameraRig>*/}
    </Canvas>
  )
}

export default Canvas