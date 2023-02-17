'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

import styles from '../../styles';
import { newFeatures } from '../../constants';
import { NewFeatures, TitleText, TypingText } from '../../components';
import { planetVariants, staggerContainer, fadeIn } from '../../utils/motion';
import Carousel from '../../components/Carousel';

import HorizontalGallery from '../../components/HorizontalGallery'

const page = () => {
  return (
    <div className='overflow-hidden '>

      <section className={`${styles.paddings} mt-16 h-screen relative flex flex-col gap-14 items-center justify-center bg-[#121212] text-white`}>
        <div className="text ">

            <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1)}
            className="flex-[0.95]  flex justify-center flex-col"
          >
            {/* <TypingText title="| Whats new?" /> */}
            <div className="flex flex-col items-center justify-center">
            <h1 className='text-xl md:text-5xl  md:mx-auto font-bold  text-center leading-loose mb-4'> Community of tomorrow’s </h1>
            <div className='text-xl md:text-5xl  md:mx-auto font-bold  text-center leading-loose flex lg:gap-2 '> <h1 className='text-blue-500'>coders</h1> <h1>that actually change the world</h1></div>
            </div>

            <motion.p
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="mt-[8px] font-normal sm:text-[28px] text-[20px] leading-relaxed text-center mt-8"
          >
            Empowering every individual because you don’t need fancy tags to make an impact
          </motion.p>
          </motion.div>

        </div>

        <div className='flex flex-col p-12 sm:flex-row   gap-6 md:gap-14 lg:gap-20 items-center justify-center'>

        <div className='flex flex-col items-center gap-3 justify-center text-center'>

            <img src='/community.webp'/>

          <h4 className='text-xl md:text-3xl font-bold '>150,000+ </h4>
          <h4 className='text-lg '>Community members </h4>
        </div>

        <div className='flex flex-col items-center gap-3 justify-center text-center'>
         <img  src='institute.webp'/>
          <h4 className='text-xl md:text-3xl font-bold '>5,500 </h4>
          <h4 className='text-lg '>Schools and colleges </h4>

        </div>

        <div className='flex flex-col items-center gap-3 justify-center text-center'>
         <img  src='hiring.webp'/>
          <h4 className='text-xl md:text-3xl font-bold '>650+ </h4>
          <h4 className='text-lg '>Recruiters </h4>

        </div>

        <div className='flex flex-col items-center gap-3 justify-center text-center'>
          <img src='caly.webp' />
          <h4 className='text-xl md:text-3xl font-bold '>1,500+ </h4>
          <h4 className='text-lg '>Free events organized </h4>

        </div>

        
        

        </div>
      </section>


  {/* video component  */}
  <div className={`${styles.paddings} py-4 mt-20   relative `}>


    <section className="mx-auto max-w-6xl py-9 md:py-16">
        <div className="rounded-3xl bg-[#FFF7E3] px-2 py-6 md:p-20"><div className="text-center text-sm font-semibold md:text-3xl">We’re on a mission to empower the next generation to discover better ways to learn, earn, and network.
        </div>
        <div className="mt-12 aspect-video overflow-hidden rounded-3xl border-2 border-yellow-700 object-cover">
          <video playsinline="" controls src="https://files.bluelearn.in/OTHER/bluelearn.mov" autoplay=""></video>
          </div>
        </div>
    </section>
  
  </div>


  < HorizontalGallery/>


  <div className="container justify-center items-center mx-auto my-12 rounded-3xl bg-gray-100 px-2 py-6 md:p-10">
    <h3 className="text-center text-sm font-semibold md:text-xl">WE ARE TRUSTED BY THE BEST!</h3>
    <div className="mx-auto mt-12 flex flex-col items-center gap-9 md:flex-row md:flex-wrap md:justify-center lg:w-fit xl:w-full xl:flex-nowrap xl:justify-between">
      <img src="elevation.webp" alt="elevation capital" />
      <img src="lightspeed-color.webp" alt="lightspeed" />
      <img src="titan-color.webp" alt="titan capital" />
      <img src="2am-color.webp" alt="2am VC" />
      <img src="100x-color.webp" alt="100x VC" />
    </div>
    
    <div className="mt-8 grid gap-y-8 sm:grid-cols-2 md:mt-20 md:gap-y-11 md:gap-x-12 lg:grid-cols-3">
      <div className="flex cursor-pointer items-center gap-2">
        <img className="h-16 w-16 rounded-full md:h-20 md:w-20" src="vidit-aatrey.webp" alt="Aatrey" />
          
          <div className="space-y-2">
            <p className="font-semibold md:text-lg">Vidit Aatrey</p>
            <p className="text-sm text-gray-800 md:text-md">Founder &amp; CEO @ Meesho</p>
          </div>
      </div>
      <div className="flex cursor-pointer items-center gap-2">
        <img className="h-16 w-16 rounded-full md:h-20 md:w-20" src="vidit-aatrey.webp" alt="Aatrey" />
          
          <div className="space-y-2">
            <p className="font-semibold md:text-lg">Vidit Aatrey</p>
            <p className="text-sm text-gray-800 md:text-md">Founder &amp; CEO @ Meesho</p>
          </div>
      </div>
      <div className="flex cursor-pointer items-center gap-2">
        <img className="h-16 w-16 rounded-full md:h-20 md:w-20" src="vidit-aatrey.webp" alt="Aatrey" />
          
          <div className="space-y-2">
            <p className="font-semibold md:text-lg">Vidit Aatrey</p>
            <p className="text-sm text-gray-800 md:text-md">Founder &amp; CEO @ Meesho</p>
          </div>
      </div>
      <div className="flex cursor-pointer items-center gap-2">
        <img className="h-16 w-16 rounded-full md:h-20 md:w-20" src="vidit-aatrey.webp" alt="Aatrey" />
          
          <div className="space-y-2">
            <p className="font-semibold md:text-lg">Vidit Aatrey</p>
            <p className="text-sm text-gray-800 md:text-md">Founder &amp; CEO @ Meesho</p>
          </div>
      </div>
      <div className="flex cursor-pointer items-center gap-2">
        <img className="h-16 w-16 rounded-full md:h-20 md:w-20" src="vidit-aatrey.webp" alt="Aatrey" />
          
          <div className="space-y-2">
            <p className="font-semibold md:text-lg">Vidit Aatrey</p>
            <p className="text-sm text-gray-800 md:text-md">Founder &amp; CEO @ Meesho</p>
          </div>
      </div>
      <div className="flex cursor-pointer items-center gap-2">
        <img className="h-16 w-16 rounded-full md:h-20 md:w-20" src="vidit-aatrey.webp" alt="Aatrey" />
          
          <div className="space-y-2">
            <p className="font-semibold md:text-lg">Vidit Aatrey</p>
            <p className="text-sm text-gray-800 md:text-md">Founder &amp; CEO @ Meesho</p>
          </div>
      </div>
      <div className="flex cursor-pointer items-center gap-2">
        <img className="h-16 w-16 rounded-full md:h-20 md:w-20" src="vidit-aatrey.webp" alt="Aatrey" />
          
          <div className="space-y-2">
            <p className="font-semibold md:text-lg">Vidit Aatrey</p>
            <p className="text-sm text-gray-800 md:text-md">Founder &amp; CEO @ Meesho</p>
          </div>
      </div>
      <div className="flex cursor-pointer items-center gap-2">
        <img className="h-16 w-16 rounded-full md:h-20 md:w-20" src="vidit-aatrey.webp" alt="Aatrey" />
          
          <div className="space-y-2">
            <p className="font-semibold md:text-lg">Vidit Aatrey</p>
            <p className="text-sm text-gray-800 md:text-md">Founder &amp; CEO @ Meesho</p>
          </div>
      </div>
      <div className="flex cursor-pointer items-center gap-2">
        <img className="h-16 w-16 rounded-full md:h-20 md:w-20" src="vidit-aatrey.webp" alt="Aatrey" />
          
          <div className="space-y-2">
            <p className="font-semibold md:text-lg">Vidit Aatrey</p>
            <p className="text-sm text-gray-800 md:text-md">Founder &amp; CEO @ Meesho</p>
          </div>
      </div>
      
      
      </div>
      </div>



    
  





  {/* <section className='parallex '>

    <div id="sideScroller" className="flex flex-col flex-nowrap items-center gap-10 overflow-hidden lg:h-screen lg:flex-row lg:gap-16 lg:py-28" style="transform: translate(0px, 0px); inset: 0px auto auto 0px; margin: 0px; max-width: 1713.6px; width: 1713.6px; max-height: 1019.2px; height: 1019.2px; padding: 140px 0px;">
      <div id="scrollerSlide" className="container lg:min-w-[80vmin] lg:pl-[12vw]" style="transform: translate(0px, 0px);">
        <h2 className="text-center text-2xl font-semibold lg:text-left lg:text-7xl">Core values we stand for</h2>
      </div>
        <div id="scrollerSlide" className="flex h-full w-full shrink-0 flex-col gap-4 rounded-3xl bg-[#F3EEFD] p-4 px-4 py-6 lg:w-[720px] lg:flex-col-reverse lg:p-16 lg:px-14 lg:py-14" style="transform: translate(0px, 0px);"><div className="space-y-2.5">
          <h3 className="font-semibold text-purple-900 lg:text-5xl">Be Bold:</h3>
          <p>Don’t be afraid of what others say, and don’t wait for anyone’s permission —if you want to get it done, do it.&nbsp;<br/><br/>Embrace new solutions, creativity, and calculated risks, even if they mean challenging the status quo.&nbsp;</p>
        </div>
        
        <video playsinline="" autoplay="" loop="" className="mx-auto w-full max-w-sm lg:basis-1/2" src="/assets/about-page/great-big-bold.webm"></video>
        
    </div>
    <div id="scrollerSlide" className="flex h-full w-full shrink-0 flex-col gap-4 rounded-3xl bg-yellow-50 p-4 px-4 py-6 lg:w-[720px] lg:flex-col-reverse lg:p-16 lg:px-14 lg:py-14" style="transform: translate(0px, 0px);">
      <div className="space-y-2.5">
        <h3 className="font-semibold text-yellow-900 lg:text-5xl">Collaboration &gt; Competition:</h3>
        <p>Great things happen when people come together.&nbsp;<br/><br/>Working together as a team and pooling resources, skills, and knowledge will ALWAYS be better than an individual or group trying to succeed on their own.</p>
      </div>
      <video playsinline="" autoplay="" loop="" className="mx-auto w-full max-w-sm lg:basis-1/2" src="/assets/about-page/powers-combine.webm"></video></div><div id="scrollerSlide" className="flex h-full w-full shrink-0 flex-col gap-4 rounded-3xl bg-[#F3EEFD] p-4 px-4 py-6 lg:w-[720px] lg:flex-col-reverse lg:p-16 lg:px-14 lg:py-14" style="transform: translate(0px, 0px);">
        <div className="space-y-2.5"><h3 className="font-semibold text-blue-800 lg:text-5xl">Be curious:&nbsp;</h3>
          <p>Constantly question assumptions, seek new perspectives, and embrace different ways of doing things.&nbsp;<br/><br/>Think from first principles and always keep learning.</p>
        </div>
        
        <video playsinline="" autoplay="" loop="" className="mx-auto w-full max-w-sm lg:basis-1/2" src="/assets/about-page/curious.webm"></video>
      </div>
      
    </div>


  </section> */}




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
        <TitleText  title={<>Why bluelearn?</>} />

        <div className="flex flex-col gap-6 py-4 text-lg">
          <div className='flex gap-4 items-center '> 

          <svg width="29" height="21" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.7503 20.0422C11.4732 21.3193 9.40106 21.3193 8.12462 20.0422L0.957795 12.8754C-0.319265 11.5989 -0.319265 9.5268 0.957795 8.25035C2.23424 6.97329 4.30638 6.97329 5.58344 8.25035L9.85346 12.5198C10.1758 12.8415 10.6991 12.8415 11.022 12.5198L22.584 0.957795C23.8604 -0.319265 25.9326 -0.319265 27.2096 0.957795C27.8229 1.57106 28.1674 2.40312 28.1674 3.27031C28.1674 4.1375 27.8229 4.96956 27.2096 5.58282L12.7503 20.0422Z" fill="#4459F4"></path></svg>


          <h1>Zero commission ( It’s actually free)</h1>
          </div>
          
          <div className='flex gap-4 items-center '> 

          <svg width="29" height="21" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.7503 20.0422C11.4732 21.3193 9.40106 21.3193 8.12462 20.0422L0.957795 12.8754C-0.319265 11.5989 -0.319265 9.5268 0.957795 8.25035C2.23424 6.97329 4.30638 6.97329 5.58344 8.25035L9.85346 12.5198C10.1758 12.8415 10.6991 12.8415 11.022 12.5198L22.584 0.957795C23.8604 -0.319265 25.9326 -0.319265 27.2096 0.957795C27.8229 1.57106 28.1674 2.40312 28.1674 3.27031C28.1674 4.1375 27.8229 4.96956 27.2096 5.58282L12.7503 20.0422Z" fill="#4459F4"></path></svg>


          <h1>Only pre-screened, high quality candidates</h1>
          </div>
          
          <div className='flex gap-4 items-center '> 

          <svg width="29" height="21" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.7503 20.0422C11.4732 21.3193 9.40106 21.3193 8.12462 20.0422L0.957795 12.8754C-0.319265 11.5989 -0.319265 9.5268 0.957795 8.25035C2.23424 6.97329 4.30638 6.97329 5.58344 8.25035L9.85346 12.5198C10.1758 12.8415 10.6991 12.8415 11.022 12.5198L22.584 0.957795C23.8604 -0.319265 25.9326 -0.319265 27.2096 0.957795C27.8229 1.57106 28.1674 2.40312 28.1674 3.27031C28.1674 4.1375 27.8229 4.96956 27.2096 5.58282L12.7503 20.0422Z" fill="#4459F4"></path></svg>


          <h1>Directly talk to candidates for vibe check</h1>
          </div>
          
          <div className='flex gap-4 items-center '> 

          <svg width="29" height="21" viewBox="0 0 29 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.7503 20.0422C11.4732 21.3193 9.40106 21.3193 8.12462 20.0422L0.957795 12.8754C-0.319265 11.5989 -0.319265 9.5268 0.957795 8.25035C2.23424 6.97329 4.30638 6.97329 5.58344 8.25035L9.85346 12.5198C10.1758 12.8415 10.6991 12.8415 11.022 12.5198L22.584 0.957795C23.8604 -0.319265 25.9326 -0.319265 27.2096 0.957795C27.8229 1.57106 28.1674 2.40312 28.1674 3.27031C28.1674 4.1375 27.8229 4.96956 27.2096 5.58282L12.7503 20.0422Z" fill="#4459F4"></path></svg>


          <h1>Hire for any role - part time, freelancers, or freshers</h1>
          </div>
          
        </div>

      
     

      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/hire2.webp"
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

          <div className='outer flex gap-3 font-bold text-xl m-2 justify-center items-center text-center'>
            <h1 className='bg-[#FFF7E3]  p-4 px-5 rounded-full '>community manager</h1>
            <h1 className='bg-[#E9FBE9]  p-4 px-5 rounded-full '>Copywriters</h1>
          </div>

          <div className='outer flex gap-3 font-bold text-xl m-2 justify-center items-center text-center'>
            <h1 className='bg-[#EAE0FE]  p-4 px-5 rounded-full '>Co-founders</h1>
            <h1 className='bg-[#FFF7E3]  p-4 px-5 rounded-full '>video editors</h1>
          </div>

          <div className='outer flex gap-3 font-bold text-xl m-2 justify-center items-center text-center'>
            <h1 className='bg-[#E9FBE9]  p-4 px-5 rounded-full '>Moderators</h1>
            <h1 className='bg-[#EAE0FE]  p-4 px-5 rounded-full '>Graphic designers</h1>
          </div>
          <div className='outer flex gap-3 font-bold text-xl m-2 justify-center items-center text-center'>
            <h1 className='bg-[#FFF7E3]  p-4 px-5 rounded-full '>Social media managers</h1>
          </div>



         
          
        </div>
      </motion.div>

      <motion.div
        // variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95]  flex justify-center flex-col"
      >
        {/* <TypingText title="| Whats new?" /> */}
        <h1 className='font-bold text-3xl md:text-[48px] leading-relaxed'>Hire for niches that you can’t find anywhere else</h1>

        <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[24px] text-[20px] leading-normal tracking-wide text-black"
      >
Find unique talent that is hard to find on other platforms.      </motion.p>

      </motion.div>

     
    </motion.div>
  </section>

    </div>

    {/* blue section  */}


    <section className={`${styles.paddings} lg:pt-14  bg-[#4459f4] text-white   relative `}>

      <div className='flex flex-row items-center justify-center text-3xl font-semibold md:text-4xl' >An easier way to hire - Post a gig in 60 seconds</div>
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



          <h1>Sign up and create a job post in 3 clicks
</h1>
          </div>
          
          <div className='flex gap-4 items-center '> 

          <h1 className='bg-yellow-400 flex items-center justify-center  rounded-full text-black h-14 w-14'>2</h1>


          <h1>Browse applicant profiles</h1>
          </div>
          
          <div className='flex gap-4 items-center '> 

          <h1 className='bg-yellow-400 flex items-center justify-center  rounded-full text-black h-14 w-14'>3</h1>


          <h1>Find the perfect fit and hire right away</h1>
          </div>
          
          
          
        </div>

      
     

      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/hire3.png"
          alt="get-started"
          className="w-[85%] h-[85%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>  


  {/* autoplay  */}
  <Carousel />

  </div>
  )
}

export default page
