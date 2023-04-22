import { BrowserRouter } from "react-router-dom";
import { Canvas } from '@react-three/fiber'
import { Contact,Hero,Works,Work1,Work2,Work3, Navbar, Tech,StarsCanvas } from "./components";
import "../src/components/style1.css"
import { useRef, useEffect } from 'react'
import Resume from "./components/resume/Resume"
import "../src/components/style1.css"
const App = () => {
  const workCanvas1Mesh = useRef()
const workCanvas1Group = useRef()

const workCanvas2Mesh = useRef()
const workCanvas2Group = useRef()
const handleMouseMove = (event, meshRef, groupRef) => {
  const mouseX = event.clientX / window.innerWidth
  const mouseY = event.clientY / window.innerHeight

  const rotationX = -(mouseY - 0.5) * Math.PI
  const rotationY = (mouseX - 0.5) * Math.PI

  if (meshRef.current && groupRef.current) {
    meshRef.current.rotation.x = rotationX
    meshRef.current.rotation.y = rotationY
    groupRef.current.rotation.x = rotationX
    groupRef.current.rotation.y = rotationY
  }
}
useEffect(() => {
  const handleCanvasMouseMove = (event) => {
    handleMouseMove(event, workCanvas1Mesh, workCanvas1Group)
  }

  const workCanvas1 = document.querySelector('#work-canvas-1')
  workCanvas1.addEventListener('mousemove', handleCanvasMouseMove)

  return () => {
    workCanvas1.removeEventListener('mousemove', handleCanvasMouseMove)
  }
}, [])

useEffect(() => {
  const handleCanvasMouseMove = (event) => {
    handleMouseMove(event, workCanvas2Mesh, workCanvas2Group)
  }

  const workCanvas2 = document.querySelector('#work-canvas-2')
  workCanvas2.addEventListener('mousemove', handleCanvasMouseMove)

  return () => {
    workCanvas2.removeEventListener('mousemove', handleCanvasMouseMove)
  }
}, [])
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
         <Navbar />
   
       <Canvas className="canva1" id="work-canvas-2"
        camera={{
        position: [0, 0, 5],
        fov: 45,
        near: 2.1,
        far: 200,
        
        }}
    style={{ 
      position: 'relative', 
      width: '100%', 
      height: '100vh', 
      marginLeft: 'auto', 
      marginRight: 'auto'
    }}
     >
   <Hero />
  </Canvas>
        </div>
        <Tech />
        {/* <About /> */}
     
           <Resume/>
           <br/>
           <h1>Projects</h1>
           <br/>
        <div className="flex flex-wrap">
         
  <div className="akash w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2">
    <Canvas className="canva1"
      id="work-canvas-1"
      camera={{
        position: [0, 0, 5],
        fov: 45,
        near: 0.1,
        far: 200,
      }}
      style={{
        backgroundImage: 'url("data:image/svg+xml,%3csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3crect width=\'100%25\' height=\'100%25\' fill=\'none\' rx=\'32\' ry=\'32\' stroke=\'%23EC3463\' stroke-width=\'7\' stroke-dasharray=\'24%2c 14\' stroke-dashoffset=\'58\' stroke-linecap=\'round\'/%3e%3c/svg%3e")',
        borderRadius: '32px',
        width: '100%',
        height: '400px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Works meshRef={workCanvas1Mesh} groupRef={workCanvas1Group} />
    </Canvas>
  </div>

  <div className="akash w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2">
    <Canvas className="canva1"
      id="work-canvas-2"
      camera={{
        position: [0, 0, 5],
        fov: 45,
        near: 0.1,
        far: 200,
      }}
      style={{
        backgroundImage: 'url("data:image/svg+xml,%3csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3crect width=\'100%25\' height=\'100%25\' fill=\'none\' rx=\'32\' ry=\'32\' stroke=\'%23EC3463\' stroke-width=\'7\' stroke-dasharray=\'24%2c 14\' stroke-dashoffset=\'58\' stroke-linecap=\'round\'/%3e%3c/svg%3e")',
        borderRadius: '32px',
        width: '100%',
        height: '400px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Work1 meshRef={workCanvas2Mesh} groupRef={workCanvas2Group} />
    </Canvas>
  </div>

  <div className="akash py-11 w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2">
    <Canvas className="canva1"
      id="work-canvas-3"
      camera={{
        position: [0, 0, 5],
        fov: 45,
        near: 0.1,
        far: 200,
      }}
      style={{
        backgroundImage: 'url("data:image/svg+xml,%3csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3crect width=\'100%25\' height=\'100%25\' fill=\'none\' rx=\'32\' ry=\'32\' stroke=\'%23EC3463\' stroke-width=\'7\' stroke-dasharray=\'24%2c 14\' stroke-dashoffset=\'58\' stroke-linecap=\'round\'/%3e%3c/svg%3e")',
        borderRadius: '32px',
        width: '100%',
        height: '400px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Work2 meshRef={workCanvas2Mesh} groupRef={workCanvas2Group} />
    </Canvas>
  </div>
  <div className="akash py-11 w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2">
    <Canvas className="canva1"
      id="work-canvas-3"
      camera={{
        position: [0, 0, 5],
        fov: 45,
        near: 0.1,
        far: 200,
      }}
      style={{
        backgroundImage: 'url("data:image/svg+xml,%3csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3crect width=\'100%25\' height=\'100%25\' fill=\'none\' rx=\'32\' ry=\'32\' stroke=\'%23EC3463\' stroke-width=\'7\' stroke-dasharray=\'24%2c 14\' stroke-dashoffset=\'58\' stroke-linecap=\'round\'/%3e%3c/svg%3e")',
        borderRadius: '32px',
        width: '100%',
        height: '400px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Work3 meshRef={workCanvas2Mesh} groupRef={workCanvas2Group} />
    </Canvas>
  </div>
</div>
 
 
  <br/><br/>
        <div className='relative z-0'>
          <Contact/>
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
