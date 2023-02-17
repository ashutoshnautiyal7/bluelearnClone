'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

import styles from '../styles';
import { newFeatures } from '../constants';
import { NewFeatures, TitleText, TypingText } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

const LandingHero = () => (

  <>
  <section className={`${styles.paddings}  mt-20   relative `}>
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

  {/* company tags  */}
  <div className={`${styles.xpaddings} bg-[#E1E5FE] py-4 mt-20   relative `}>
  <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex-col gap-8`}
    >
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] leading-relaxed text-black"
      >
        OUR COMMUNITY MEMBERS COME FROM
      </motion.p>


      <div className='grid grid-cols-2   w-full items-center'>
     
        <img
          src="/amazon.svg"
          alt="get-started"
          className="w-1/2 h-1/2  "
        />
        <img
          src="/microsoft.svg"
          alt="get-started"
          className="w-1/2 h-1/2  "
        />
        <img
          src="/goldman.svg"
          alt="get-started"
          className="w-1/2 h-1/2 "
        />
        <img
          src="/google.svg"
          alt="get-started"
          className="w-1/2 h-1/2  "
        />
        <div className='mx-auto'>

        <TypingText className='text-center' title="+many more"/>
        </div>
        
      </div>

      
      </motion.div>
  </div>



  {/* 3rd section */}
  

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
        // variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95]  flex justify-center flex-col"
      >
        {/* <TypingText title="| Whats new?" /> */}
        <h1 className='font-bold text-3xl md:text-[48px] leading-relaxed'>Find a circle to learn, earn, and network</h1>

        <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[28px] text-[20px] leading-relaxed tracking-wide text-black"
      >
       Talk about freelancing, finance, philosophy, design, and more. Meet friends, study partners, mentors, and find work. 
      </motion.p>

     
     

      </motion.div>

      <motion.div
        // variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/bl-removebg.png"
          alt="get-started"
          className="w-[82%] h-[82%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>

    </div>

    {/* 4th section */}

    
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
        <img
          src="/chats-removebg.png"
          alt="get-started"
          className="w-[100%] h-[100%] -mx-14 object-contain"
        />
      </motion.div>

      <motion.div
        // variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95]  flex justify-center flex-col"
      >
        {/* <TypingText title="| Whats new?" /> */}
        <h1 className='font-bold text-3xl md:text-[48px] leading-relaxed'>Are you looking for a cofounder? First gig? or your first internship?</h1>

        <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[28px] text-[20px] leading-normal tracking-wide text-black"
      >
       Connect with entrepreneurs, alumni, and industry leaders. Find work and expand your professional circle.
      </motion.p>

      </motion.div>

     
    </motion.div>
  </section>

    </div>


    {/* 5th section */}

  <div className={`${styles.xpaddings} bg-[#E1E5FE] py-4 mt-20   relative `}>
  <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex-col gap-8`}
    >
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px]  sm:text-[32px] text-[28px] font-bold text-center leading-relaxed text-black"
      >
       Some numbers that matter
      </motion.p>

      <div className="container mx-auto items-center justify-center mb-8 ">

        <div className='flex flex-col  md:flex-row  w-full items-center md:space-x-6  items-center justify-center mx-auto p-4 md:p-12'>

          <div className='card-1 w-full mb-4 md:mb-0 md:w-1/2  lg:w-1/3 h-full  py-24 flex flex-col  items-center  bg-white space-y-2 rounded-xl '>

              <svg width="66" height="78" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33 .25A32.538 32.538 0 0 0 .5 32.75 32.168 32.168 0 0 0 6.833 52l2.01-1.485A29.649 29.649 0 0 1 3.049 34h12.076c.07 4.827.776 9.623 2.096 14.266l2.398-.707A52.57 52.57 0 0 1 17.625 34H31.75v11.25h2.5V34h14.125a52.568 52.568 0 0 1-2 13.559l2.398.707A55.087 55.087 0 0 0 50.875 34h12.081a29.65 29.65 0 0 1-5.793 16.52L59.168 52A32.167 32.167 0 0 0 65.5 32.75 32.537 32.537 0 0 0 33 .25ZM15.104 31.5H3.03a29.825 29.825 0 0 1 5.2-15.654 53.077 53.077 0 0 0 8.7 2.326A55.569 55.569 0 0 0 15.103 31.5ZM9.796 13.758a30.086 30.086 0 0 1 14.762-9.79 28.686 28.686 0 0 0-6.91 11.797 52.705 52.705 0 0 1-7.852-2.008ZM31.75 31.5H17.604c.071-4.362.68-8.7 1.814-12.913 4.084.603 8.204.925 12.332.962V31.5Zm0-14.451a87.999 87.999 0 0 1-11.586-.875C22.71 8.724 26.919 3.616 31.75 2.858v14.19Zm2.5-14.191c4.833.758 9.043 5.874 11.589 13.318-3.84.543-7.711.835-11.589.875V2.858Zm0 28.642V19.55c4.128-.04 8.249-.36 12.334-.957A53.071 53.071 0 0 1 48.396 31.5H34.25Zm14.101-15.736a28.69 28.69 0 0 0-6.908-11.796A30.075 30.075 0 0 1 56.2 13.75a51.615 51.615 0 0 1-7.85 2.014ZM50.896 31.5a55.529 55.529 0 0 0-1.827-13.33 52.253 52.253 0 0 0 8.699-2.325 29.815 29.815 0 0 1 5.2 15.655H50.897Z" fill="#1629E6"></path><path d="M55.5 75.253h8.75a1.25 1.25 0 0 0 1.25-1.25v-7a4.25 4.25 0 0 0-3.328-4.142 4.375 4.375 0 1 0-5.844 0 4.212 4.212 0 0 0-1.702.825 4.988 4.988 0 0 0-3.438-2.113 5 5 0 1 0-6.376 0 4.95 4.95 0 0 0-2.066.764 6.243 6.243 0 0 0-5.996-4.584h-.258a5.626 5.626 0 1 0-6.984 0h-.258a6.243 6.243 0 0 0-6 4.584 4.95 4.95 0 0 0-2.066-.764 5 5 0 1 0-6.375 0 4.989 4.989 0 0 0-3.439 2.113 4.211 4.211 0 0 0-1.701-.825 4.376 4.376 0 1 0-5.845 0A4.25 4.25 0 0 0 .5 67.003v7a1.25 1.25 0 0 0 1.25 1.25h8.75a1.25 1.25 0 0 0 1.25 1.25H23a1.25 1.25 0 0 0 1.25 1.25h17.5a1.25 1.25 0 0 0 1.25-1.25h11.25a1.25 1.25 0 0 0 1.25-1.25Zm3.75-17.5a1.874 1.874 0 1 1 0 3.75 1.874 1.874 0 0 1 0-3.75Zm-3.75 9.25a1.75 1.75 0 0 1 1.75-1.75h4a1.75 1.75 0 0 1 1.75 1.75v5.75h-7.5v-5.75Zm-48.75-9.25a1.874 1.874 0 1 1 0 3.749 1.874 1.874 0 0 1 0-3.749Zm3.75 15H3v-5.75a1.75 1.75 0 0 1 1.75-1.75h4a1.75 1.75 0 0 1 1.75 1.75v5.75Zm7.5-17.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm5 18.75H13v-7.5a2.5 2.5 0 0 1 2.5-2.5h5a2.5 2.5 0 0 1 2.5 2.5v7.5Zm10-23.75a3.126 3.126 0 1 1 0 6.251 3.126 3.126 0 0 1 0-6.25Zm7.5 25h-15v-11.25a3.75 3.75 0 0 1 3.75-3.75h7.5a3.75 3.75 0 0 1 3.75 3.75v11.25Zm7.5-20a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm5 18.75H43v-7.5a2.5 2.5 0 0 1 2.5-2.5h5a2.5 2.5 0 0 1 2.5 2.5v7.5Z" fill="#1629E6"></path></svg>
              <h1 className='text-5xl font-extrabold '>100,000+</h1>
              <h2 className='font-medium'>members</h2>
          </div>
          <div className='card-1 w-full mb-4 md:mb-0 md:w-1/2  lg:w-1/3 h-full  py-24 flex flex-col  items-center  bg-white space-y-2 rounded-xl '>
          <svg width="78" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M70.721 8.678a7.14 7.14 0 0 0-.49-.003h-6.17V3.374C64.062 1.253 62.039 0 59.918 0H54.23c-2.12 0-3.662 1.253-3.662 3.374v5.3H27.435v-5.3C27.435 1.253 25.893 0 23.773 0h-5.687c-2.12 0-4.145 1.253-4.145 3.374v5.3H7.773a7.133 7.133 0 0 0-7.326 7.422v55.711C.447 76.048 3.532 80 7.773 80H70.23c4.24 0 7.325-3.952 7.325-8.193v-55.71a7.133 7.133 0 0 0-6.835-7.42Zm-16.49-4.823h5.975v10.603H54.23V3.855Zm-36.145 0h5.494v10.603h-5.494V3.855Zm55.615 67.952c0 2.12-1.35 4.337-3.47 4.337H7.773c-2.12 0-3.47-2.216-3.47-4.337V30.843h69.398v40.964Zm0-55.71v10.891H4.303V16.096a3.277 3.277 0 0 1 3.47-3.566h6.168v2.12c0 2.121 2.024 3.663 4.145 3.663h5.687a3.566 3.566 0 0 0 3.662-3.662V12.53h23.133v2.12a3.566 3.566 0 0 0 3.663 3.663h5.686c2.12 0 4.145-1.542 4.145-3.662V12.53h6.169a3.277 3.277 0 0 1 3.47 3.566Z" fill="#1629E6"></path><path d="m28.303 57.157-1.735 9.639a1.928 1.928 0 0 0 2.795 2.023l8.675-4.53 8.675 4.53.867.193c.419.008.827-.129 1.157-.385.576-.421.872-1.125.77-1.832l-1.734-9.638 7.036-6.747a2.12 2.12 0 0 0 .482-2.024 2.024 2.024 0 0 0-1.542-1.253l-9.639-1.446-4.337-8.771a1.927 1.927 0 0 0-3.47 0l-4.337 8.771-9.639 1.446a2.024 2.024 0 0 0-1.542 1.253 2.12 2.12 0 0 0 .482 2.024l7.036 6.747Zm5.302-7.807a1.735 1.735 0 0 0 1.349-1.06l3.084-6.17 3.084 6.17c.232.566.744.97 1.35 1.06l6.843.964-4.915 4.722a2.025 2.025 0 0 0-.579 1.735l1.157 6.844-6.073-3.277-.867-.193-.867.193-6.073 3.277 1.157-6.844a2.024 2.024 0 0 0-.579-1.735l-4.915-4.722 6.844-.964Z" fill="#1629E6"></path></svg>
              <h1 className='text-5xl font-extrabold '>800+</h1>
              <h2 className='font-medium'>Free Events Organized</h2>
          </div>

        </div>

        <div className='card-1 w-[93%] container md:mb-0 md:w-1/2 lg:w-1/3 h-full  py-24 flex flex-col mx-auto items-center  bg-white space-y-2 rounded-xl '>
              <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M78.667 71.037V39.999a1.304 1.304 0 0 0-.154-.59h.014l-3.264-6.527a3.977 3.977 0 0 0-3.578-2.216h-9.018v-1.333c0-.354-.14-.693-.391-.943l-7.219-7.219a3.946 3.946 0 0 0-1.724-.998v-8.994L56 10.463v3.239a4.087 4.087 0 0 0 1.823 3.407 1.333 1.333 0 0 0 1.48-2.219 1.424 1.424 0 0 1-.636-1.188V9.63a2.667 2.667 0 0 0-.64-4.884L40.685.09a2.654 2.654 0 0 0-1.37 0L21.973 4.746a2.681 2.681 0 0 0 0 5.173l4.694 1.26V20h-.084a3.99 3.99 0 0 0-3.067 1.44l-5.867 7.04c-.202.239-.314.541-.316.854v1.333H8.315a3.977 3.977 0 0 0-3.578 2.21l-3.264 6.527h.014c-.098.184-.15.388-.154.596v31.038A2.657 2.657 0 0 0 0 73.333v2.666a2.667 2.667 0 0 0 2.667 2.667H20.37a2.657 2.657 0 0 0 2.296 1.333h34.666a2.657 2.657 0 0 0 2.296-1.333h17.704A2.667 2.667 0 0 0 80 75.999v-2.666a2.657 2.657 0 0 0-1.333-2.296Zm-20-.371h-1.334V41.333H76v29.333H58.667Zm-14.667 0h-8V55.999h8v14.667Zm1.333-17.333H34.667c-.737 0-1.334.597-1.334 1.333v16h-8V41.333h29.334v29.333h-8v-16c0-.736-.597-1.333-1.334-1.333ZM60 30.666v2.667H20v-2.667h40Zm-2.667 5.333v2.667H22.667v-2.667h34.666Zm14.352-2.666c.506-.002.968.284 1.192.737l2.299 4.596H60v-2.667a2.667 2.667 0 0 0 2.667-2.666h9.018ZM40 2.666l17.352 4.667h-.017l-17.328 4.666-17.34-4.677L40 2.666Zm-10.667 9.23 9.982 2.68c.449.12.921.12 1.37 0l9.982-2.68v8.103H29.333v-8.104Zm-3.774 11.25c.253-.304.628-.48 1.024-.48h25.645c.354 0 .694.14.944.39L58.115 28H21.513l4.046-4.853ZM7.123 34.07a1.325 1.325 0 0 1 1.192-.737h9.018A2.667 2.667 0 0 0 20 35.999v2.667H4.824l2.299-4.596ZM2.667 73.333H20v2.666H2.667v-2.666Zm18.666-2.667H4V41.333h18.667v29.333h-1.334Zm1.334 6.667v-4h34.666v4H22.667Zm54.666-1.334H60v-2.666h17.333v2.666Z" fill="#1629E6"></path><path d="M36.001 44c-.736 0-1.333.597-1.333 1.333V48a1.333 1.333 0 1 0 2.667 0v-2.667c0-.736-.597-1.333-1.334-1.333ZM17.333 45.336c-.736 0-1.333.597-1.333 1.333v2.667a1.333 1.333 0 1 0 2.667 0v-2.667c0-.736-.597-1.333-1.334-1.333ZM9.333 45.336c-.736 0-1.333.597-1.333 1.333v2.667a1.333 1.333 0 1 0 2.667 0v-2.667c0-.736-.597-1.333-1.334-1.333ZM17.333 53.336c-.736 0-1.333.597-1.333 1.333v2.667a1.333 1.333 0 1 0 2.667 0v-2.667c0-.736-.597-1.333-1.334-1.333ZM9.333 53.336c-.736 0-1.333.597-1.333 1.333v2.667a1.333 1.333 0 1 0 2.667 0v-2.667c0-.736-.597-1.333-1.334-1.333ZM17.333 61.336c-.736 0-1.333.597-1.333 1.333v2.667a1.333 1.333 0 1 0 2.667 0v-2.667c0-.736-.597-1.333-1.334-1.333ZM9.333 61.336c-.736 0-1.333.597-1.333 1.333v2.667a1.333 1.333 0 1 0 2.667 0v-2.667c0-.736-.597-1.333-1.334-1.333ZM70.665 45.336c-.736 0-1.333.597-1.333 1.333v2.667a1.333 1.333 0 0 0 2.667 0v-2.667c0-.736-.597-1.333-1.334-1.333ZM62.665 45.336c-.736 0-1.333.597-1.333 1.333v2.667a1.333 1.333 0 0 0 2.667 0v-2.667c0-.736-.597-1.333-1.334-1.333ZM70.665 53.336c-.736 0-1.333.597-1.333 1.333v2.667a1.333 1.333 0 0 0 2.667 0v-2.667c0-.736-.597-1.333-1.334-1.333ZM62.665 53.336c-.736 0-1.333.597-1.333 1.333v2.667a1.333 1.333 0 0 0 2.667 0v-2.667c0-.736-.597-1.333-1.334-1.333ZM70.665 61.336c-.736 0-1.333.597-1.333 1.333v2.667a1.333 1.333 0 0 0 2.667 0v-2.667c0-.736-.597-1.333-1.334-1.333ZM62.665 61.336c-.736 0-1.333.597-1.333 1.333v2.667a1.333 1.333 0 0 0 2.667 0v-2.667c0-.736-.597-1.333-1.334-1.333ZM44.001 44c-.736 0-1.333.597-1.333 1.333V48a1.333 1.333 0 1 0 2.667 0v-2.667c0-.736-.597-1.333-1.334-1.333Z" fill="#1629E6"></path></svg>
              <h1 className='text-5xl font-extrabold '>4500+</h1>
              <h2 className='font-medium'>Schools and Colleges</h2>
          </div>
      </div>

      
      </motion.div>
  </div>


  {/* stories form members section         ------------ skipped for now*/} 


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
        className="flex-[0.95]  flex justify-center flex-col xl:flex-row"
      >
        {/* <TypingText title="| Whats new?" /> */}
        <h1 className='font-semibold xl:w-[60%] text-3xl md:text-4xl leading-relaxed md:mr-6'>Join India’s largest social learning and earning space.</h1>

        <div className="flex flex-col md:flex-row xl:w-1/2">

                  <Link
										activeClass="Download app"
										to="Download app"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer mr-2 flex flex-row  items-center justify-center  bg-[#5169F6] mt-4 text-white px-6 py-4 text-center md:w-1/2 rounded-full  text-[22.5px] leading-relaxed hover:bg-black font-semibold"
									>
										Download the app
									</Link>

                  <Link
										activeClass="Download app"
										to="Download app"
										smooth={true}
										offset={50}
										duration={500}
										className=" flex flex-row  items-center justify-center  cursor-pointer border-grey-50 border-2 mt-4 text-[#5169F6] px-6 py-4 text-center md:w-1/2 rounded-full  text-[22.5px] leading-relaxed hover:bg-black font-semibold"
									>
										Recruiter Login
									</Link>
      </div>

      </motion.div>

      
    </motion.div>
  </section>

    </div>

  

    



  </>  
);

export default LandingHero;



// 