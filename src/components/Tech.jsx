import React from 'react'
import {motion} from 'framer-motion';
import {BallCanvas} from "./canvas";
import {SectionWrapper} from '../hoc';
import {technologies} from '../constants';
import {styles } from '../styles';
import {textVariant } from "../utils/motion";
const Tech = () => {
  return (
    <>
     <motion.div variants={textVariant()} className='flex flex-col items-center justify-center mb-5'>
        <p className={`${styles.sectionSubText} `}>Technology I Know.</p>
        <h2 className={`${styles.sectionHeadText}`}> Technology Stacks.</h2>
      </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {
        technologies.map((technology)=>(
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon}/>
             </div>
        ))
      }
    </div>
    </>
  )
}

export default SectionWrapper(Tech,"");