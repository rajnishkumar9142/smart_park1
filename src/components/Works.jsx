import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import { github } from "../components/assets"; // Assuming github icon is used in ProjectCard
import { styles } from "../styles";

const Works = () => {
  const [emptySlotsCount, setEmptySlotsCount] = useState('');

  // Function to fetch data from ThingSpeak
  const fetchData = () => {
    fetch('https://api.thingspeak.com/channels/2464834/feeds.json?results=1')
      .then(response => response.json())
      .then(data => {
        // Assuming you have a field in ThingSpeak channel for empty slots count
        setEmptySlotsCount(data.feeds[0].field1); // Adjust field index according to your channel setup
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures it runs only once on mount

  // Define the ProjectCard contents directly within Works component
  const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
    return (
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
          <div className='relative w-full h-[230px]'>
            <img src={image} alt='project_image' className='w-full h-full object-cover rounded-2xl' />
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div onClick={() => window.open(source_code_link, "_blank")} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                <img src={github} alt='source code' className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
          </div>
          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}> The facilities available in the parking lot.</p>
        <h2 className={`${styles.sectionHeadText}`}>Chandni Chowk</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Chandni Chowk Car Parking
        </motion.p>
      </div>
      <div className='w-full flex justify-center'>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-white text-[30px] max-w-3xl leading-[40px] text-center'>
          Slots Available in Parking Lots.
        </motion.p>
      </div>
      <div className='w-full flex justify-center mt-4'>
        <div className='flex flex-col items-center'>
          <p className='text-secondary text-[14px]'>Total Slots Empty</p>
          <p className='text-black font-semibold text-[20px] border border-solid border-gray-300 mt-5 p-[10px] h-[50px] w-[100px] bg-white rounded'>{emptySlotsCount}</p>
        </div>
        {/* Optionally, you can display the total slots count if available */}
        <div className='flex flex-col items-center ml-8'>
          <p className='text-secondary text-[14px]'>Total Slots</p>
          <p className='text-black font-semibold text-[20px] border border-solid border-gray-300 mt-5 p-[10px] h-[50px] w-[100px] bg-white rounded'>4</p>
        </div>
      </div>
      <hr className="mt-10 h-[10px] "/>
      <div className='mt-20 flex flex-wrap gap-5'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
