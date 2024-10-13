import React from "react";
//import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants"; 
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
          </h3>

        </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-6xl leading-[30px]'
      >
        <b>Hi, I'm Raj Powell – a passionate AI & Full Stack Developer </b>
        with a background in Artificial Intelligence and Machine Learning,
        I specialize in developing and deploying machine learning
        models and building web applications using the MERN stack.
        My expertise includes Python, ReactJS, and Flask, with a 
        focus on creating scalable, data-driven solutions. I've 
        worked on various projects like an Alzheimer’s Prediction 
        System, a Malicious URL Detector, and several web applications, 
        all aimed at solving real-world problems through innovative
        technology. Whether it's developing AI models or creating full-stack applications,
        I'm driven by the challenge of turning ideas into impactful solutions.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")