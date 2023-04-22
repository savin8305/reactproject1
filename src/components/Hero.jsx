
import { Text, Html,PresentationControls, Float, Environment, useGLTF } from '@react-three/drei'

import "./style1.css";
const Hero = () => {
  return <>
              
        <color args={ [ '#695b5b' ] } attach="background" />

        <Environment preset="city" />
        
        <PresentationControls
            global
          
            polar={ [ - 0.4, 0.2 ] }
            azimuth={ [ - 1, 0.75 ] }
            config={ { mass: 2, tension: 400 } }
            snap={ { mass: 4, tension: 400 } }
        >
            <Float rotationIntensity={ 0.4 } >  
                <rectAreaLight
                    width={ 9.5 }
                    height={ 12.65 }
                    intensity={ 65 }
                    color={ '#ff6900' }
                  
                    position={ [ 0, 0.55, - 1.15 ] }
                />


                    <Html
                        transform
                        wrapperClass="htmlScreen2"
                        distanceFactor={ 1.17 }
                        position={ [ 0, 1.56, - 1.4 ] }
                        rotation-x={ - 0.256 }
                    >
                        <iframe src="https://monumental-banoffee-d161ec.netlify.app" />
                    </Html>
              

            </Float>
        </PresentationControls>


    </>
};

export default Hero;
