
'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

import styles from '../../styles';
import { newFeatures } from '../../constants';
import { Navbar, NewFeatures, TitleText, TypingText } from '../../components';
import { planetVariants, staggerContainer, fadeIn } from '../../utils/motion';

const page = () => {
  return (
    <>
    <Navbar />
    <section className={`${styles.paddings}    relative `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95]  flex justify-center flex-col"
      >
        {/* <TypingText title="| Whats new?" /> */}
        <TitleText title={<>India's most active student community with 10K+ members.</>} />

        <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] leading-relaxed text-black"
      >
        Make smart friends, learn from experts, and network like you’ve never done before. It’s a place to have fun and get amazing opportunities!
      </motion.p>

      <div className="flex ">

                  <Link
										activeClass="Download app"
										to="Download app"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer mr-2 bg-[#5169F6] mt-4 text-white px-6 py-4 text-center md:w-1/2 rounded-full  text-[22.5px] leading-relaxed hover:bg-black font-semibold"
									>
										Download the app
									</Link>

                  <Link
										activeClass="Download app"
										to="Download app"
										smooth={true}
										offset={50}
										duration={500}
										className="hidden md:block cursor-pointer border-grey-50 border-2 mt-4 text-[#5169F6] px-6 py-4 text-center w-1/2 rounded-full  text-[22.5px] leading-relaxed hover:bg-black font-semibold"
									>
										Recruiter Login
									</Link>
      </div>
     

      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/img-removebg.png"
          alt="get-started"
          className="w-[85%] h-[85%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
  </>
  )
}

export default page
