import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { useInView } from "react-intersection-observer";

const Education = () => {
  const [ref1, inView1] = useInView({ threshold: 0.3 });
  const [ref2, inView2] = useInView({ threshold: 0.3 });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont grid grid-cols-1 md:grid-cols-2 gap-10"
    >
      <div>
        <div className="flex flex-col px-9 gap-4">
          <p className="text-sm px-10 text text-designColor tracking-[4px]">2018-2024</p>
          <h2 className="text-4xl px-10 font-bold">Minor Projects</h2>
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
                  title="Higher Secondary"
                  subTitle="SARDAR PATEL HS SCHOOL"
                  result="4/5"
                  des="Sardar Patel Higher Secondary School in Jaypee Nagar, Rewa is a reputed educational institution that offers quality education to students, with a focus on academic excellence and overall personality development."
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
                  title="Class XII"
                  subTitle="SARDAR PATEL HS SCHOOL"
                  result="85.68%"
                  des="Sardar Patel Higher Secondary School in Jaypee Nagar, Rewa is a reputed educational institution that offers quality education to students, with a focus on academic excellence and overall personality development."
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
                  title="Class X"
                  subTitle="SARDAR PATEL HS SCHOOL"
                  result="93.45%"
                  des="Sardar Patel Higher Secondary School in Jaypee Nagar, Rewa is a reputed educational institution that offers quality education to students, with a focus on academic excellence and overall personality development."
                />
            </div>
          </motion.div>
        </div>
      </div>
      <div>
        <div className="flex px-10 flex-col gap-4">
          <p className="text-sm px-9 text-designColor tracking-[4px]">2018-2024</p>
          <h2 className="text-4xl px-9 font-bold">Personal Projects</h2>
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
                  title="Lorem ipsum dolor sit amet."
                  subTitle="Lorem ipsum dolor sit amet alternative."
                  result="Success"
                  des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
                  className="max-w-xs md:max-w-md"
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
                        title="Lorem ipsum dolor sit amet."
                        subTitle="Lorem ipsum dolor sit amet alternative."
                        result="Success"
                        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
                        className="max-w-xs md:max-w-md"
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
                        title="Lorem ipsum dolor sit amet."
                        subTitle="Lorem ipsum dolor sit amet alternative."
                        result="Success"
                        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
                        className="max-w-xs md:max-w-md"
                      />
                </div>
                </motion.div>
                </div>
                </div>
                </motion.div>
                );
                };
                
                export default Education;
                
                