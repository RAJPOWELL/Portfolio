import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certifications } from "../constants";  // Importing certifications

const CertificationCard = ({ index, title, provider, link, image }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{title}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            {provider}
          </p>
        </div>

        <img
          src={image}
          alt={`certification-${title}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>

      <div className='mt-4'>
        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 underline'
        >
          View Certificate
        </a>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Certifications and Courses</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {certifications.map((certification, index) => (
          <CertificationCard key={certification.title} index={index} {...certification} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
