import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Achievement from "./Achievement";
import Experience from "./Experience";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);

  return (
    <section
      id="resume"
      className="w-full py-20 border-b-[1px] border-b-black bg-white bg-opacity-30 shadow-xl rounded-3xl backdrop-filter backdrop-blur-lg"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Fresher with Academic skill" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              educationData
                ? "bg-gray-100 text-blue-500"
                : "bg-transparent text-white"
            } p-4 text-lg font-bold rounded-md cursor-pointer transition-all duration-300`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              skillData
                ? "bg-gray-100 text-blue-500"
                : "bg-transparent text-white"
            } p-4 text-lg font-bold rounded-md cursor-pointer transition-all duration-300`}
          >
            Professional Skills
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true) &
              setAchievementData(false)
            }
            className={`${
              experienceData
                ? "bg-gray-100 text-blue-500"
                : "bg-transparent text-white"
            } p-4 text-lg font-bold rounded-md cursor-pointer transition-all duration-300`}
          >
            Experience
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(true)
            }
            className={`${
              achievementData
                ? "bg-gray-100 text-blue-500"
                : "bg-transparent text-white"
            } p-4 text-lg font-bold rounded-md cursor-pointer transition-all duration-300`}
          >
            Achievements
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {achievementData && <Achievement />}
      {experienceData && <Experience />}
    </section>
  );
};

export default Resume;
