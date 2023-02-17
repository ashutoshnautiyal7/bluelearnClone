'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

import styles from '../../styles';
import { newFeatures } from '../../constants';
import { NewFeatures, TitleText, TypingText } from '../../components';
import { planetVariants, staggerContainer, fadeIn } from '../../utils/motion';
import Carousel from '../../components/Carousel';
import FindWorkCarousel from '../../components/FindWorkCarousel';

const page = () => {
  return (
    <div className='overflow-hidden'>
    <section className={`${styles.paddings} mt-20  relative `}>
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
        <TitleText  title={<>Find the best opportunities through proof of work</>} />

        <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[28px] text-[20px] leading-relaxed text-black"
      >
Find your edge—discover long and short-term gigs from across 50+ niches.     </motion.p>

      <div className="flex ">

                  <Link
										activeClass="Download app"
										to="Download app"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer mr-2 bg-[#5169F6] mt-4 text-white px-6 py-4 text-center  md:w-1/3 rounded-full  text-[22.5px] leading-relaxed hover:bg-black font-semibold"
									>
										Find now
									</Link>
      </div>
     

      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/findwork.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>


  {/* company tags  */}
  <FindWorkCarousel />

  {/* 3rd */}

  <section className={`${styles.paddings} lg:pt-14     relative `}>
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
        <h1 className='font-bold text-2xl md:text-4xl '>Life is too short to work on boring stuff </h1>

        <div className="flex flex-col gap-6 py-4 text-lg">
          <div className='flex gap-4 items-center '> 

          <svg width="29" height="21" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.7503 20.0422C11.4732 21.3193 9.40106 21.3193 8.12462 20.0422L0.957795 12.8754C-0.319265 11.5989 -0.319265 9.5268 0.957795 8.25035C2.23424 6.97329 4.30638 6.97329 5.58344 8.25035L9.85346 12.5198C10.1758 12.8415 10.6991 12.8415 11.022 12.5198L22.584 0.957795C23.8604 -0.319265 25.9326 -0.319265 27.2096 0.957795C27.8229 1.57106 28.1674 2.40312 28.1674 3.27031C28.1674 4.1375 27.8229 4.96956 27.2096 5.58282L12.7503 20.0422Z" fill="#4459F4"></path></svg>


          <h1>Find projects you’re passionate about</h1>
          </div>
          
          <div className='flex gap-4 items-center '> 

          <svg width="29" height="21" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.7503 20.0422C11.4732 21.3193 9.40106 21.3193 8.12462 20.0422L0.957795 12.8754C-0.319265 11.5989 -0.319265 9.5268 0.957795 8.25035C2.23424 6.97329 4.30638 6.97329 5.58344 8.25035L9.85346 12.5198C10.1758 12.8415 10.6991 12.8415 11.022 12.5198L22.584 0.957795C23.8604 -0.319265 25.9326 -0.319265 27.2096 0.957795C27.8229 1.57106 28.1674 2.40312 28.1674 3.27031C28.1674 4.1375 27.8229 4.96956 27.2096 5.58282L12.7503 20.0422Z" fill="#4459F4"></path></svg>


          <h1>Earn your way - YOU decide how you work</h1>
          </div>
          
          <div className='flex gap-4 items-center '> 

          <svg width="29" height="21" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.7503 20.0422C11.4732 21.3193 9.40106 21.3193 8.12462 20.0422L0.957795 12.8754C-0.319265 11.5989 -0.319265 9.5268 0.957795 8.25035C2.23424 6.97329 4.30638 6.97329 5.58344 8.25035L9.85346 12.5198C10.1758 12.8415 10.6991 12.8415 11.022 12.5198L22.584 0.957795C23.8604 -0.319265 25.9326 -0.319265 27.2096 0.957795C27.8229 1.57106 28.1674 2.40312 28.1674 3.27031C28.1674 4.1375 27.8229 4.96956 27.2096 5.58282L12.7503 20.0422Z" fill="#4459F4"></path></svg>


          <h1>Talk directly to recruiters for vibe check</h1>
          </div>
          
          <div className='flex gap-4 items-center '> 

          <svg width="29" height="21" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.7503 20.0422C11.4732 21.3193 9.40106 21.3193 8.12462 20.0422L0.957795 12.8754C-0.319265 11.5989 -0.319265 9.5268 0.957795 8.25035C2.23424 6.97329 4.30638 6.97329 5.58344 8.25035L9.85346 12.5198C10.1758 12.8415 10.6991 12.8415 11.022 12.5198L22.584 0.957795C23.8604 -0.319265 25.9326 -0.319265 27.2096 0.957795C27.8229 1.57106 28.1674 2.40312 28.1674 3.27031C28.1674 4.1375 27.8229 4.96956 27.2096 5.58282L12.7503 20.0422Z" fill="#4459F4"></path></svg>


          <h1>Discuss ideas and build cool things</h1>
          </div>
          
        </div>

      
     

      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/gw.webp"
          alt="get-started"
          className="w-[95%] h-[95%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>  


  <div className={`${styles.paddings}   relative `}>

    <section className={`${styles.xpaddings}  mt-16  relative `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >

<motion.div
                variants={fadeIn('up', 'tween', 0.2, 1)}
        className={`flex-1 ${styles.flexCenter}`}
      >

        <div className='flex flex-col '>

          <img src="/findwork1.png" alt="" />



         
          
        </div>
      </motion.div>

      <motion.div
        // variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95]  flex justify-center flex-col"
      >
        {/* <TypingText title="| Whats new?" /> */}
        <h1 className='font-bold text-3xl md:text-[48px] leading-relaxed'>Talent 🤝 Opportunity</h1>

        <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[24px] text-[20px] leading-normal tracking-wide text-black"
      >
Fuel your ambition by building cool stuff with creators, entrepreneurs, and leaders.    </motion.p>

      </motion.div>

     
    </motion.div>
  </section>

    </div>

    {/* blue section  */}


    <section className={`${styles.paddings} lg:pt-14     relative `}>
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
        <h1 className='font-bold text-2xl py-2 md:text-4xl '>Skills &#62; Degree </h1>
        <h1 className='font-normal text-md py-2 md:text-lg '>Show your work and get access to the best opportunities in the start-up world. </h1>

        <div className="flex flex-col gap-6 py-4 text-lg">
          <div className='flex gap-4 items-center '> 

          <svg width="29" height="21" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.7503 20.0422C11.4732 21.3193 9.40106 21.3193 8.12462 20.0422L0.957795 12.8754C-0.319265 11.5989 -0.319265 9.5268 0.957795 8.25035C2.23424 6.97329 4.30638 6.97329 5.58344 8.25035L9.85346 12.5198C10.1758 12.8415 10.6991 12.8415 11.022 12.5198L22.584 0.957795C23.8604 -0.319265 25.9326 -0.319265 27.2096 0.957795C27.8229 1.57106 28.1674 2.40312 28.1674 3.27031C28.1674 4.1375 27.8229 4.96956 27.2096 5.58282L12.7503 20.0422Z" fill="#4459F4"></path></svg>


          <h1>Flaunt your confidence level in different skills.</h1>
          </div>
          
          <div className='flex gap-4 items-center '> 

          <svg width="29" height="21" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.7503 20.0422C11.4732 21.3193 9.40106 21.3193 8.12462 20.0422L0.957795 12.8754C-0.319265 11.5989 -0.319265 9.5268 0.957795 8.25035C2.23424 6.97329 4.30638 6.97329 5.58344 8.25035L9.85346 12.5198C10.1758 12.8415 10.6991 12.8415 11.022 12.5198L22.584 0.957795C23.8604 -0.319265 25.9326 -0.319265 27.2096 0.957795C27.8229 1.57106 28.1674 2.40312 28.1674 3.27031C28.1674 4.1375 27.8229 4.96956 27.2096 5.58282L12.7503 20.0422Z" fill="#4459F4"></path></svg>


          <h1>Show recruiters projects you’ve worked on.</h1>
          </div>
          
          <div className='flex gap-4 items-center '> 

          <svg width="29" height="21" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.7503 20.0422C11.4732 21.3193 9.40106 21.3193 8.12462 20.0422L0.957795 12.8754C-0.319265 11.5989 -0.319265 9.5268 0.957795 8.25035C2.23424 6.97329 4.30638 6.97329 5.58344 8.25035L9.85346 12.5198C10.1758 12.8415 10.6991 12.8415 11.022 12.5198L22.584 0.957795C23.8604 -0.319265 25.9326 -0.319265 27.2096 0.957795C27.8229 1.57106 28.1674 2.40312 28.1674 3.27031C28.1674 4.1375 27.8229 4.96956 27.2096 5.58282L12.7503 20.0422Z" fill="#4459F4"></path></svg>


          <h1>Add links to your portfolio and social channels.</h1>
          </div>

          
        </div>

      
     

      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/hiretalent1.png"
          alt="get-started"
          className="w-[95%] h-[95%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>  


  {/* blue section  */}


  <section className={`${styles.paddings} lg:pt-14  bg-[#4459f4] text-white   relative `}>

<div className='flex flex-row items-center justify-center text-3xl font-semibold md:text-4xl' >Here’s how the top 2% earn</div>
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
  {/* <TitleText  title={<>An easier way to hire - Post a gig in 60 seconds</>} /> */}

  <div className="flex flex-col gap-6 md:gap-16 py-4 text-xl">
    <div className='flex gap-4 items-center '> 
      <h1 className='bg-yellow-400 text-center flex items-center justify-center rounded-full text-black h-14 w-14'>1</h1>



    <h1>Build your profile
</h1>
    </div>
    
    <div className='flex gap-4 items-center '> 

    <h1 className='bg-yellow-400 flex items-center justify-center  rounded-full text-black h-14 w-14'>2</h1>


    <h1>Add your proof of work</h1>
    </div>
    
    <div className='flex gap-4 items-center '> 

    <h1 className='bg-yellow-400 flex items-center justify-center  rounded-full text-black h-14 w-14'>3</h1>


    <h1>Find a gig you love</h1>
    </div>
    
    
    
  </div>




</motion.div>

<motion.div
  variants={planetVariants('right')}
  className={`flex-1 ${styles.flexCenter}`}
>
  <img
    src="/findwork2.png"
    alt="get-started"
    className="w-[80%] h-[80%] object-contain"
  />
</motion.div>
</motion.div>
</section>  



  {/* autoplay  */}
  <Carousel />


  <div className={`${styles.paddings}  bg-[#E1E5FE]  relative `}>

    <section className={`${styles.xpaddings}  mt-16  relative `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.95]  flex justify-center flex-col md:flex-row"
      >
        {/* <TypingText title="| Whats new?" /> */}
        <h1 className='font-semibold xl:w-[80%] text-3xl md:text-4xl leading-relaxed md:mr-3'>No bids. No scams. No cheapskates. Ever.
</h1>

        {/* <div className="flex flex-col md:flex-row w-[30%]"> */}

                  <Link
										activeClass="Download app"
										to="Download app"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer  flex flex-row  items-center justify-center  bg-[#5169F6] text-white w-1/2 md:w-auto  px-6 py-4 text-center  items-center justify-center rounded-full  text-[22.5px] leading-relaxed hover:bg-black font-semibold"
									>
										Join now
									</Link>
      {/* </div> */}

      </motion.div>

      
    </motion.div>
  </section>

    </div>


  </div>
  )
}

export default page
