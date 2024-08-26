import { motion } from "framer-motion";

import { styles } from "../styles";

const Hero = () => {
  const cursiveStyle = {
    fontFamily: 'Georgia, serif',
  };
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Welcome to the <span className='text-[#915EFF]' style={cursiveStyle}>Smart Park</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
         
          </p>
        </div>
      </div>

      {/* Replace ComputersCanvas with the PNG image */}
      <img src="car.png" alt="Smart Park" className="absolute w-[800px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-[100px]" />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#work'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
