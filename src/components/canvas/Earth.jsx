import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, useGLTF } from "@react-three/drei";
import {  Html,PresentationControls, Float, } from '@react-three/drei'
import "./style.css"
import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf');
    

  return (
    <primitive
    object={ earth.scene }
    position-y={ - 1.2 }
    // rotation-x={ 0.13 }
>
    <Html
        transform
        wrapperClass="htmlScreen"
        distanceFactor={ 1.17 }
        position={ [ 0, 1.56, - 1.4 ] }
        rotation-x={ - 0.256 }
    >
        <iframe src="https://bruno-simon.com/html/" />
    </Html>
</primitive>

  );
};

const EarthCanvas = () => {
  return (
    <Canvas className="KRISHNA"
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 35,
        near: 0.1,
        far: 10,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
       
        
        <PresentationControls
    global
    rotation={ [ 0.13, 0, 0] }
    polar={ [ - 0.4, 2.2 ] }
    azimuth={ [ - 1, 0.75 ] }
    config={ { mass: 2, tension: 400 } }
    snap={ { mass: 4, tension: 400 } }
>
    <Float rotationIntensity={ 0.4 } >  
        <rectAreaLight
            width={ 2.5 }
            height={ 1.65 }
            intensity={ 65 }
            color={ '#ff6900' }
            rotation={ [ - 0.1, Math.PI, 0 ] }
            position={ [ 0, 0.55, - 1.15 ] }
        />

       <Earth />
           

    </Float>
</PresentationControls>
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
