// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import ResumeCard from "./ResumeCard";

// const Achievement = () => {
//   const [ref1, inView1] = useInView({ threshold: 0.5 });
//   const [ref2, inView2] = useInView({ threshold: 0.5 });

//   return (
//     <div className="py-12 font-titleFont flex flex-col md:flex-row gap-20">
//       <motion.div
//         className="md:w-1/2"
//         initial={{ x: "-100vw" }}
//         animate={
//           inView1 ? { x: 0, transition: { type: "spring", duration: 1 } } : {}
//         }
//       >
//         <div className="py-12 font-titleFont flex flex-col gap-4">
//           <p className="text-sm text-designColor tracking-[4px]">2018-2024</p>
//           <h2 className="text-xl md:text-4xl font-bold">Company Achievement</h2>
//         </div>
//         <div
//           ref={ref1}
//           className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 overflow-x-auto"
//         >
//           {inView1 && (
//             <>
//               <motion.div
//                 initial={{ x: "-100vw" }}
//                 animate={{
//                   x: 0,
//                   transition: { type: "spring", stiffness: 50, duration: 0.5 },
//                 }}
//               >
//                 <ResumeCard
//                   title="Lorem ipsum dolor sit amet."
//                   subTitle="Lorem ipsum dolor sit amet alternative."
//                   result="Success"
//                   des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
//                   className="max-w-xs md:max-w-md"
//                 />
//               </motion.div>

//               <motion.div
//                 initial={{ x: "-100vw" }}
//                 animate={{
//                   x: 0,
//                   transition: { type: "spring", stiffness: 50, duration: 0.5, delay: 0.2 },
//                 }}
//               >
                // <ResumeCard
                //   title="Lorem ipsum dolor sit amet."
                //   subTitle="Lorem ipsum dolor sit amet alternative."
                //   result="Success"
                //   des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporisdolor debitis natus sapiente, voluptates possimus minima totam!"
                //   className="max-w-xs md:max-w-md"
                // />
//               </motion.div>

//               <motion.div
//                 initial={{ x: "-100vw" }}
//                 animate={{
//                   x: 0,
//                   transition: { type: "spring", stiffness: 50, duration: 0.5, delay: 0.4 },
//                 }}
//               >
                // <ResumeCard
                //   title="Lorem ipsum dolor sit amet."
                //   subTitle="Lorem ipsum dolor sit amet alternative."
                //   result="Success"
                //   des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
                //   className="max-w-xs md:max-w-md"
                // />
//               </motion.div>
//             </>
//           )}
//         </div>
//       </motion.div>

//       <motion.div
//         className="md:w-1/2"
//         initial={{ x: "100vw" }}
//         animate={
//           inView2 ? { x: 0, transition: { type: "spring", duration: 1 } } : {}
//         }
//       >
//         <div className="py-12 font-titleFont flex flex-col gap-4">
//           <p className="text-sm text-designColor tracking-[4px]">2018-2024</p>
//           <h2 className="text-xl md:text-4xl font-bold">Job Achievement</h2>
//         </div>
//         <div
//           ref={ref2}
//           className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 overflow-x-auto"
//           >
//           {inView2 && (
//           <>
//           <motion.div
//           initial={{ x: "100vw" }}
//           animate={{
//           x: 0,
//           transition: { type: "spring", stiffness: 50, duration: 0.5 },
//           }}
//           >
          // <ResumeCard
          // title="Lorem ipsum dolor sit amet."
          // subTitle="Lorem ipsum dolor sit amet alternative."
          // result="Success"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaqueaccusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          // className="max-w-xs md:max-w-md"
          // />
//           </motion.div>
          
//                     <motion.div
//                       initial={{ x: "100vw" }}
//                       animate={{
//                         x: 0,
//                         transition: { type: "spring", stiffness: 50, duration: 0.5, delay: 0.2 },
//                       }}
//                     >
                      // <ResumeCard
                      //   title="Lorem ipsum dolor sit amet."
                      //   subTitle="Lorem ipsum dolor sit amet alternative."
                      //   result="Success"
                      //   des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
                      //   className="max-w-xs md:max-w-md"
                      // />
//                     </motion.div>
          
//                     <motion.div
//                       initial={{ x: "100vw" }}
//                       animate={{
//                         x: 0,
//                         transition: { type: "spring", stiffness: 50, duration: 0.5, delay: 0.4 },
//                       }}
//                     >
                      // <ResumeCard
                      //   title="Lorem ipsum dolor sit amet."
                      //   subTitle="Lorem ipsum dolor sit amet alternative."
                      //   result="Success"
                      //   des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
                      //   className="max-w-xs md:max-w-md"
                      // />
//                     </motion.div>
//                   </>
//                 )}
//               </div>
//             </motion.div>
//           </div>
//           );
//           };
          
//           export default Achievement;
import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { useInView } from "react-intersection-observer";

const Achievement = () => {
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
                  title="Lorem ipsum dolor sit amet."
                  subTitle="Lorem ipsum dolor sit amet alternative."
                  result="Success"
                  des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporisdolor debitis natus sapiente, voluptates possimus minima totam!"
                  className="max-w-xs md:max-w-md"
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
                  title="Lorem ipsum dolor sit amet."
                  subTitle="Lorem ipsum dolor sit amet alternative."
                  result="Success"
                  des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporisdolor debitis natus sapiente, voluptates possimus minima totam!"
                  className="max-w-xs md:max-w-md"
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
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaqueaccusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
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
                
                export default Achievement;
                
                