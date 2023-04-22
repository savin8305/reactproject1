import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const [ref1, inView1] = useInView({ threshold: 0.3 });
  const [ref2, inView2] = useInView({ threshold: 0.3 });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont grid grid-cols-1 md:grid-cols-2 gap-10"
    >
      <div>
        <div className="px-10 flex flex-col gap-4">
          <p className="px-10 text-sm text text-designColor tracking-[4px]">2018-2024</p>
          <h2 className="px-10 text-4xl font-bold">Minor Projects</h2>
        </div>
        <div
          ref={ref1}
          className="mt-14 h-full border-l-[6px] border-l-black border-opacity-30 overflow-y-auto"
        >
          <motion.div
            initial={{ x: "-100vw", opacity: 0 }}
            animate={
              inView1
                ? { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 } }
                : { x: "-100vw", opacity: 0 }
            }
          >
            <div className="p-4">
              <ResumeCard
                title="REACT.JS"
                subTitle="Let's Build "
                result="Web Based application"
                des="COVID-19 has made finding local employment difficult, but the digital age has created new opportunities. A cheaper and accessible platform for skill matching could empower workers and create more employment opportunities.."
                link="https://cozy-pavlova-8dd52f.netlify.app"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ x: "-100vw", opacity: 0 }}
            animate={
              inView1
                ? { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.4 } }
                : { x: "-100vw", opacity: 0 }
            }
          >
            <div className="p-4">
              <ResumeCard
                title="MERN STACK"
                subTitle="SkillBuilder"
                result="Web Based application"
                des="It is becoming more common for teachers to provide their own platform for teaching and content delivery Instead of relying on third-party platforms, these teachers create their own platforms, where they can tailor their content to their students' needs and preferences ."
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ x: "-100vw", opacity: 0 }}
            animate={
              inView1
                ? { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.6 } }
                : { x: "-100vw", opacity: 0 }
            }
          >
            <div className="p-4">
              <ResumeCard
                title="Web Developer & Trainer"
                subTitle="subtitle should be short and clear "
                result="MALAYSIA"
                des=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque rem perspiciatis corrupti quasi libero, a debitis vero tenetur eaque dolore quia officiis expedita? Consequatur explicabo a ipsum, vero tempore optio."
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div>
        <div className="px-10 flex flex-col gap-4">
          <p className="px-10 text-sm text-designColor tracking-[4px]">2018-2024</p>
          <h2 className="px-10 text-4xl font-bold">Personal Projects</h2>
        </div>
        <div
          ref={ref2}
          className="mt-14 h-full border-l-[6px] border-l-black border-opacity-30 overflow-y-auto"
        >
          <motion.div
            initial={{ x: "100vw", opacity: 0 }}
            animate={
              inView2
                ? { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 } }
                : { x:"100vw", opacity: 0 }
                }
                >
                <div className="p-4">
                <ResumeCard
                title="THREE.JS AND REACT"
                subTitle="PERSONAL PORTFOLIO"
                result="WEB BASED"
                des=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque rem perspiciatis corrupti quasi libero, a debitis vero tenetur eaque dolore quia officiis expedita? Consequatur explicabo a ipsum, vero tempore optio."
                link="https://lighthearted-puffpuff-776537.netlify.app/"
                />
                </div>
                </motion.div>
                <motion.div
                initial={{ x: "100vw", opacity: 0 }}
                animate={
                inView2
                ? { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.4 } }
                : { x: "100vw", opacity: 0 }
                }
                >
                <div className="p-4">
                <ResumeCard
                title="FILE ORGANIZER"
                subTitle="Command Line based "
                result="Node.js"
                des="We already have cmd based command . In this application I will implement three command 'ORGANIZE','TREE' & 'HELP'.1st command will create Organize folder in same directory and organize all the disorganize directory based on extension .Tree command will display all the content in tree format"
                link="https://github.com/savin8305/File_Organizer"
                />
                </div>
                </motion.div>
                <motion.div
                initial={{ x: "100vw", opacity: 0 }}
                animate={
                inView2
                ? { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.6 } }
                : { x: "100vw", opacity: 0 }
                }
                >
                <div className="p-4">
                <ResumeCard
                title="Web Developer & Trainer"
                subTitle="subtitle should be short and clear "
                result="MALAYSIA"
                des=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque rem perspiciatis corrupti quasi libero, a debitis vero tenetur eaque dolore quia officiis expedita? Consequatur explicabo a ipsum, vero tempore optio."
                />
                </div>
                </motion.div>
                </div>
                </div>
                </motion.div>
                );
                };
                
                export default Experience;
                
                