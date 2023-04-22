import React from "react";
import { SectionWrapper } from "../hoc";
import "./tech.css"

const Tech = () => {
  return (
    <div className='flex mt-20 flex-row flex-wrap justify-center gap-10'>
    
    <div className="homeSkills">
    <h1 style={{

           height:'20 rem',
           width:'15rem',
  backdropFilter: 'blur(3px) saturate(124%)',
  WebkitBackdropFilter: 'blur(3px) saturate(124%)',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  backgroundImage: 'url("        https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fcolourful%2F&psig=AOvVaw1C7aEwYwBGhyIKba0Yx14_&ust=1682245149626000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMD01dehvf4CFQAAAAAdAAAAABAE")',
      borderRadius: '32px',
  border: '1px solid rgba(209, 213, 219, 0.3)',
  textAlign: 'center',
  fontSize: '1.2rem', // adjust as needed
  padding: '0.5rem 1rem' ,// adjust as needed
 
}}>SKILLS</h1>

        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img src="        https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fcolourful%2F&psig=AOvVaw1C7aEwYwBGhyIKba0Yx14_&ust=1682245149626000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMD01dehvf4CFQAAAAAdAAAAABAE" alt="Face1" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img src="        https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fcolourful%2F&psig=AOvVaw1C7aEwYwBGhyIKba0Yx14_&ust=1682245149626000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMD01dehvf4CFQAAAAAdAAAAABAE" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img src="        https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fcolourful%2F&psig=AOvVaw1C7aEwYwBGhyIKba0Yx14_&ust=1682245149626000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMD01dehvf4CFQAAAAAdAAAAABAE" alt="Face3" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img src="        https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fcolourful%2F&psig=AOvVaw1C7aEwYwBGhyIKba0Yx14_&ust=1682245149626000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMD01dehvf4CFQAAAAAdAAAAABAE" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img src="        https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fcolourful%2F&psig=AOvVaw1C7aEwYwBGhyIKba0Yx14_&ust=1682245149626000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMD01dehvf4CFQAAAAAdAAAAABAE" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img src="        https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fcolourful%2F&psig=AOvVaw1C7aEwYwBGhyIKba0Yx14_&ust=1682245149626000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMD01dehvf4CFQAAAAAdAAAAABAE" />
          </div>
        </div>


        <div className="cubeShadow"></div>

       
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
