'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

import styles from '../../styles';
import { newFeatures } from '../../constants';
import { NewFeatures, TitleText, TypingText } from '../../components';
import { planetVariants, staggerContainer, fadeIn } from '../../utils/motion';
import Carousel from '../../components/Carousel';

const page = () => {
  return (
    <div className='overflow-hidden '>
    <section className={`${styles.paddings} mt-16 relative `}>
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
        <TitleText  title={<>Get the best talent with proof of work</>} />

        <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[28px] text-[20px] leading-relaxed text-black"
      >
Hire from the biggest pre-screened talent pool in the country in 15 minutes.      </motion.p>

      <div className="flex ">

                  <Link
										activeClass="Download app"
										to="Download app"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer mr-2 bg-[#5169F6] mt-4 text-white px-6 py-4 text-center  md:w-1/3 rounded-full  text-[22.5px] leading-relaxed hover:bg-black font-semibold"
									>
										Hire now
									</Link>
      </div>
     

      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/hiretalent1.png"
          alt="get-started"
          className="w-[100%] h-[100%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>


  {/* company tags  */}
  <div className={`${styles.paddings} bg-[#E1E5FE] py-4 mt-20   relative `}>
  <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex-col gap-8`}
    >
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-semibold sm:text-[26px] text-[20px] leading-relaxed text-center text-black"
      >
        Our community of 100,000 are the top 2% talent of India, they are
      </motion.p>


      <div className='flex flex-col p-12 sm:flex-row   gap-6 md:gap-14 lg:gap-40 items-center justify-center'>

        <div className='flex flex-col items-center gap-3'>
          <svg width="100" height="100" viewBox="0 0 63 74" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M25.04 62.5561L20.5025 55.7498L25.04 48.9436C25.4225 48.3686 25.2675 47.5923 24.6938 47.2098C24.1188 46.8273 23.3425 46.9823 22.96 47.5561L17.96 55.0561C17.68 55.4761 17.68 56.0236 17.96 56.4436L22.96 63.9436C23.3425 64.5173 24.1188 64.6723 24.6938 64.2898C25.2675 63.9073 25.4225 63.1311 25.04 62.5561Z" fill="#2638EC"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M40.0398 63.9436L45.0398 56.4436C45.3198 56.0236 45.3198 55.4761 45.0398 55.0561L40.0398 47.5561C39.6573 46.9823 38.8811 46.8273 38.3061 47.2098C37.7323 47.5923 37.5773 48.3686 37.9598 48.9436L42.4973 55.7498L37.9598 62.5561C37.5773 63.1311 37.7323 63.9073 38.3061 64.2898C38.8811 64.6723 39.6573 64.5173 40.0398 63.9436Z" fill="#2638EC"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M32.8141 47.8554L27.8141 62.8554C27.5966 63.5091 27.9504 64.2179 28.6054 64.4366C29.2591 64.6541 29.9679 64.3004 30.1866 63.6454L35.1866 48.6454C35.4041 47.9916 35.0504 47.2829 34.3954 47.0641C33.7416 46.8466 33.0329 47.2004 32.8141 47.8554Z" fill="#2638EC"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M31.5 0.75C21.8412 0.75 14 8.59125 14 18.25C14 27.9088 21.8412 35.75 31.5 35.75C41.1588 35.75 49 27.9088 49 18.25C49 8.59125 41.1588 0.75 31.5 0.75ZM31.5 3.25C39.7787 3.25 46.5 9.97125 46.5 18.25C46.5 26.5287 39.7787 33.25 31.5 33.25C23.2212 33.25 16.5 26.5287 16.5 18.25C16.5 9.97125 23.2212 3.25 31.5 3.25Z" fill="#2638EC"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10.25 47.2612C4.10625 53.4212 0.25 62.2262 0.25 72C0.25 72.69 0.81 73.25 1.5 73.25H61.5C62.19 73.25 62.75 72.69 62.75 72C62.75 62.2262 58.8937 53.4212 52.75 47.2612V42C52.75 39.9288 51.0713 38.25 49 38.25C41.8175 38.25 21.1825 38.25 14 38.25C11.9288 38.25 10.25 39.9288 10.25 42V47.2612ZM52.75 50.9625V70.75H60.2275C59.9512 63.1462 57.1712 56.2337 52.75 50.9625ZM50.25 42V70.75H12.75V42C12.75 41.31 13.31 40.75 14 40.75H49C49.69 40.75 50.25 41.31 50.25 42ZM10.25 70.75V50.9625C5.82875 56.2337 3.04875 63.1462 2.7725 70.75H10.25Z" fill="#2638EC"></path></svg>
          <h4 className='text-lg md:text-xl'>Developers </h4>
        </div>
        <div className='flex flex-col items-center gap-3'>
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_14864_122068)"><path d="M99.1343 72.7593L88.8843 67.6343L82.3608 50.6655C82.284 50.4649 82.1667 50.2822 82.0162 50.129C81.8656 49.9758 81.6851 49.8552 81.4858 49.7749L41.0093 33.5952C40.7263 33.4825 40.4165 33.455 40.1181 33.5161C39.8196 33.5772 39.5456 33.7241 39.3296 33.9389L33.9312 39.3374C33.7192 39.5535 33.5746 39.8266 33.515 40.1234C33.4554 40.4202 33.4832 40.728 33.5952 41.0093L49.7749 81.4858C49.8552 81.6851 49.9758 81.8656 50.129 82.0161C50.2823 82.1667 50.4649 82.284 50.6655 82.3608L67.6343 88.8843L72.7593 99.1343C72.8672 99.3603 73.0279 99.557 73.2277 99.7079C73.4276 99.8588 73.6608 99.9595 73.9077 100.001C73.9909 100.009 74.0746 100.009 74.1577 100.001C74.5714 99.9997 74.9676 99.8339 75.2593 99.5405L99.5405 75.2593C99.7192 75.0868 99.8543 74.8743 99.9344 74.6392C100.015 74.4042 100.038 74.1534 100.001 73.9077C99.9595 73.6608 99.8589 73.4276 99.708 73.2277C99.557 73.0278 99.3603 72.8672 99.1343 72.7593ZM36.8686 40.8061L37.7358 39.9467L57.8843 60.0952C56.5564 61.9768 55.9829 64.2881 56.2772 66.5722C56.5715 68.8562 57.7121 70.9467 59.4735 72.4302C61.235 73.9138 63.4889 74.6824 65.7898 74.5841C68.0906 74.4857 70.2708 73.5276 71.8992 71.8992C73.5276 70.2708 74.4857 68.0906 74.5841 65.7898C74.6824 63.4889 73.9138 61.2349 72.4303 59.4735C70.9467 57.7121 68.8562 56.5715 66.5722 56.2772C64.2881 55.9829 61.9768 56.5564 60.0952 57.8842L39.9468 37.7358L40.8061 36.8686L79.689 52.4233L85.8218 68.3764L68.3765 85.8218L52.4233 79.6889L36.8686 40.8061ZM65.3921 59.3218C66.7964 59.3238 68.1565 59.8127 69.2407 60.7052C70.325 61.5976 71.0663 62.8383 71.3384 64.216C71.6104 65.5937 71.3964 67.0231 70.7328 68.2607C70.0692 69.4983 68.997 70.4675 67.6989 71.0032C66.4009 71.539 64.9572 71.6081 63.6139 71.1988C62.2706 70.7896 61.1107 69.9272 60.3319 68.7587C59.553 67.5902 59.2034 66.1878 59.3426 64.7904C59.4818 63.393 60.1012 62.0871 61.0952 61.0952C62.2359 59.9581 63.7814 59.3202 65.3921 59.3218ZM74.5874 95.7983L70.6812 87.9858L87.9702 70.6968L95.7827 74.603L74.5874 95.7983Z" fill="#2638EC"></path><path d="M29.8825 83.5946C29.5837 83.3122 29.1882 83.1548 28.777 83.1548C28.3659 83.1548 27.9703 83.3122 27.6716 83.5946L25.6872 85.5789C20.3917 78.3918 17.4704 69.7317 17.3303 60.8055C17.1903 51.8793 19.8385 43.1318 24.9059 35.7821C26.4241 36.6175 28.1722 36.9384 29.8881 36.6967C31.604 36.455 33.1954 35.6638 34.4238 34.4415C35.6522 33.2193 36.4514 31.6319 36.7017 29.9172C36.952 28.2025 36.6399 26.4529 35.8122 24.9305C43.1619 19.8631 51.9094 17.2149 60.8356 17.3549C69.7618 17.4949 78.4219 20.4163 85.6091 25.7117L83.5934 27.6727C83.3029 27.9656 83.14 28.3616 83.1403 28.7742C83.1391 28.9799 83.1785 29.1837 83.2563 29.3741C83.334 29.5645 83.4486 29.7376 83.5934 29.8836L90.4841 36.7196C90.7768 37.0106 91.1728 37.1739 91.5856 37.1739C91.9984 37.1739 92.3944 37.0106 92.6872 36.7196L99.5387 29.868C99.684 29.7229 99.7993 29.5506 99.8779 29.3609C99.9565 29.1712 99.997 28.9679 99.997 28.7625C99.997 28.5572 99.9565 28.3539 99.8779 28.1642C99.7993 27.9745 99.684 27.8022 99.5387 27.6571L92.6872 20.8055C92.3944 20.5145 91.9984 20.3511 91.5856 20.3511C91.1728 20.3511 90.7768 20.5145 90.4841 20.8055L87.8356 23.4383C81.3083 18.5266 73.5913 15.4406 65.4771 14.4974C57.3628 13.5542 49.1437 14.7876 41.6637 18.0711L50.6716 9.08675C51.6929 9.57477 52.8541 9.68524 53.9492 9.39855C55.0443 9.11187 56.0024 8.44655 56.6535 7.52065C57.3047 6.59474 57.6069 5.4681 57.5064 4.3406C57.406 3.2131 56.9094 2.15764 56.1048 1.36145C55.3001 0.565256 54.2395 0.0798175 53.111 -0.00874963C51.9825 -0.0973167 50.8591 0.216713 49.9401 0.87763C49.0211 1.53855 48.366 2.50362 48.0908 3.60164C47.8157 4.69967 47.9384 5.85965 48.4372 6.87581L33.2341 22.1024C31.6904 21.0669 29.8352 20.5995 27.9852 20.78C26.1352 20.9606 24.4053 21.7778 23.091 23.0921C21.7766 24.4065 20.9594 26.1364 20.7789 27.9863C20.5984 29.8363 21.0658 31.6916 22.1012 33.2352L6.87468 48.4383C5.85454 47.9412 4.69121 47.8219 3.5914 48.1015C2.49159 48.3812 1.52654 49.0417 0.867725 49.9656C0.208911 50.8896 -0.100994 52.0172 -0.00691923 53.1481C0.0871551 54.279 0.579115 55.34 1.38154 56.1424C2.18397 56.9448 3.24489 57.4368 4.37579 57.5308C5.50668 57.6249 6.63431 57.315 7.55829 56.6562C8.48227 55.9974 9.14276 55.0323 9.4224 53.9325C9.70204 52.8327 9.58271 51.6694 9.08562 50.6493L18.0934 41.6649C14.8067 49.1428 13.5693 57.3608 14.5084 65.475C15.4475 73.5892 18.5292 81.3073 23.4372 87.8368L20.7966 90.4852C20.5055 90.7779 20.3422 91.174 20.3422 91.5868C20.3422 91.9995 20.5055 92.3956 20.7966 92.6883L27.6481 99.5399C27.9398 99.8333 28.3359 99.9991 28.7497 100.001C28.9559 100.001 29.16 99.9603 29.3504 99.8812C29.5408 99.8021 29.7137 99.6861 29.8591 99.5399L36.7184 92.6883C37.0094 92.3956 37.1728 91.9995 37.1728 91.5868C37.1728 91.174 37.0094 90.7779 36.7184 90.4852L29.8825 83.5946ZM91.6012 24.1024L96.2419 28.743L91.6012 33.3836L86.9606 28.743L91.6012 24.1024ZM51.5622 3.618C51.7944 3.38392 52.0908 3.22409 52.414 3.15878C52.7372 3.09347 53.0724 3.12564 53.3773 3.25119C53.6822 3.37674 53.9428 3.59001 54.1263 3.86396C54.3097 4.13791 54.4077 4.46017 54.4077 4.78987C54.4077 5.11957 54.3097 5.44183 54.1263 5.71578C53.9428 5.98973 53.6822 6.20301 53.3773 6.32856C53.0724 6.45411 52.7372 6.48627 52.414 6.42096C52.0908 6.35565 51.7944 6.19582 51.5622 5.96175C51.4082 5.80792 51.286 5.62525 51.2026 5.42417C51.1193 5.22309 51.0763 5.00755 51.0763 4.78987C51.0763 4.5722 51.1193 4.35665 51.2026 4.15557C51.286 3.95449 51.4082 3.77182 51.5622 3.618ZM25.3122 25.3133C25.7659 24.8574 26.3052 24.4957 26.8991 24.2488C27.4931 24.002 28.1299 23.8749 28.7731 23.8749C29.4163 23.8749 30.0532 24.002 30.6471 24.2488C31.241 24.4957 31.7803 24.8574 32.2341 25.3133C32.9199 25.9981 33.3872 26.8709 33.5769 27.8213C33.7665 28.7717 33.67 29.757 33.2994 30.6525C32.9289 31.5481 32.3011 32.3136 31.4954 32.8522C30.6896 33.3908 29.7423 33.6782 28.7731 33.6782C27.804 33.6782 26.8566 33.3908 26.0509 32.8522C25.2452 32.3136 24.6173 31.5481 24.2468 30.6525C23.8763 29.757 23.7797 28.7717 23.9694 27.8213C24.159 26.8709 24.6263 25.9981 25.3122 25.3133ZM5.96843 53.9071C5.64944 54.1731 5.24249 54.3102 4.82756 54.2914C4.41262 54.2727 4.0197 54.0994 3.726 53.8057C3.4323 53.512 3.25905 53.1191 3.2403 52.7042C3.22156 52.2892 3.35866 51.8823 3.62468 51.5633C3.93734 51.256 4.35818 51.0839 4.79655 51.0839C5.23493 51.0839 5.65577 51.256 5.96843 51.5633C6.12244 51.7171 6.24463 51.8998 6.32799 52.1009C6.41135 52.302 6.45426 52.5175 6.45426 52.7352C6.45426 52.9529 6.41135 53.1684 6.32799 53.3695C6.24463 53.5706 6.12244 53.7532 5.96843 53.9071ZM28.7731 96.1961L24.1325 91.5555L28.7731 86.9149L33.4137 91.5555L28.7731 96.1961Z" fill="#2638EC"></path></g><defs><clipPath id="clip0_14864_122068"><rect width="100" height="100" fill="white"></rect></clipPath></defs></svg>
          <h4 className='text-lg md:text-xl'>Designers </h4>
        </div>
        <div className='flex flex-col items-center gap-3'>
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_14864_122078)"><path d="M5.96087 46.88H24.7809C27.6209 46.88 29.9409 44.56 29.9409 41.72V22.9C29.9409 20.06 27.6209 17.74 24.7809 17.74H5.96087C3.12087 17.74 0.800874 20.06 0.800874 22.9V41.72C0.800874 44.58 3.12087 46.88 5.96087 46.88ZM3.60087 22.9C3.60087 21.6 4.66087 20.54 5.96087 20.54H24.7809C26.0809 20.54 27.1409 21.6 27.1409 22.9V41.72C27.1409 43.02 26.0809 44.08 24.7809 44.08H5.96087C4.66087 44.08 3.60087 43.02 3.60087 41.72V22.9ZM15.3809 40C19.6209 40 23.0609 36.56 23.0609 32.32C23.0609 28.08 19.6209 24.64 15.3809 24.64C11.1409 24.64 7.70087 28.08 7.70087 32.32C7.70087 36.56 11.1409 40 15.3809 40ZM15.3809 27.44C18.0809 27.44 20.2609 29.62 20.2609 32.32C20.2609 35.02 18.0609 37.2 15.3809 37.2C12.7009 37.2 10.5009 35 10.5009 32.32C10.5009 29.64 12.6809 27.44 15.3809 27.44ZM79.3809 66.8H57.6609C54.5009 66.8 51.9209 69.38 51.9209 72.54V94.26C51.9209 97.42 54.5009 100 57.6609 100H79.3809C82.5409 100 85.1209 97.42 85.1209 94.26V72.54C85.1209 69.38 82.5409 66.8 79.3809 66.8ZM82.3209 94.26C82.3209 95.88 81.0009 97.2 79.3809 97.2H57.6609C56.0409 97.2 54.7209 95.88 54.7209 94.26V72.54C54.7209 70.92 56.0409 69.6 57.6609 69.6H79.3809C81.0009 69.6 82.3209 70.92 82.3209 72.54V94.26ZM75.8009 76.22L69.7209 72.7C69.2809 72.44 68.7609 72.44 68.3209 72.7C67.8809 72.96 67.6209 73.42 67.6209 73.92V84.9C66.9809 84.58 66.2409 84.4 65.4809 84.4C62.7609 84.4 60.5409 86.62 60.5409 89.34C60.5409 92.06 62.7609 94.28 65.4809 94.28C68.2009 94.28 70.4209 92.06 70.4209 89.34C70.4209 89.2 70.4209 89.04 70.4009 88.9C70.4209 88.82 70.4209 88.74 70.4209 88.68V76.34L74.4009 78.64C75.0809 79.02 75.9209 78.8 76.3209 78.12C76.7209 77.44 76.4809 76.6 75.8009 76.22ZM65.4809 91.48C64.3009 91.48 63.3409 90.52 63.3409 89.34C63.3409 88.16 64.3009 87.2 65.4809 87.2C66.6609 87.2 67.6209 88.16 67.6209 89.34C67.6209 90.52 66.6609 91.48 65.4809 91.48ZM46.5609 66.18H40.5409H28.4609H16.3409H14.4409L45.4809 57.86C45.8409 57.76 46.1409 57.54 46.3409 57.2C46.5409 56.86 46.5809 56.5 46.4809 56.14L45.0009 50.66C44.2809 47.94 41.4809 46.32 38.7609 47.06L30.2009 49.34L18.5209 52.48L4.56087 56.2C3.24087 56.56 2.14087 57.4 1.46087 58.58C0.780874 59.76 0.600874 61.14 0.940874 62.44L2.36087 67.74V94.88C2.36087 97.68 4.64087 99.98 7.46087 99.98H42.8209C45.6409 99.98 47.9209 97.7 47.9209 94.88V67.58C47.9609 66.8 47.3209 66.18 46.5609 66.18ZM45.1609 75.54H36.7009L41.2409 68.96H45.1609V75.54ZM24.6009 75.54L29.1409 68.96H37.8209L33.2809 75.54H24.6009ZM12.5009 75.54L17.0409 68.96H25.7409L21.2009 75.54H12.5009ZM5.20087 75.54V68.96H13.6609L9.12087 75.54H5.20087ZM18.5409 55.36L24.6209 60.54L16.2209 62.8L10.1209 57.62L18.5409 55.36ZM30.2209 52.24L36.3009 57.42L27.9009 59.68L21.8209 54.5L30.2209 52.24ZM39.4609 49.76C39.6609 49.7 39.8609 49.68 40.0609 49.68C41.0809 49.68 42.0009 50.36 42.2809 51.38L43.3809 55.52L39.6009 56.54L33.5209 51.36L39.4609 49.76ZM3.90087 59.98C4.20087 59.44 4.70087 59.06 5.30087 58.9L6.86087 58.48L12.9609 63.66L4.80087 65.84L3.70087 61.7C3.52087 61.14 3.60087 60.52 3.90087 59.98ZM42.8609 97.2H7.48087C6.22087 97.2 5.18087 96.18 5.18087 94.9V78.34H9.82087H21.9009H33.9809H45.1009V94.9C45.1609 96.18 44.1209 97.2 42.8609 97.2ZM31.7809 86.82L21.7809 81.04C21.3409 80.78 20.8209 80.78 20.3809 81.04C19.9409 81.3 19.6809 81.76 19.6809 82.26V93.8C19.6809 94.3 19.9409 94.76 20.3809 95.02C20.6009 95.14 20.8409 95.2 21.0809 95.2C21.3209 95.2 21.5609 95.14 21.7809 95.02L31.7809 89.24C32.2209 88.98 32.4809 88.52 32.4809 88.02C32.4809 87.52 32.2009 87.06 31.7809 86.82ZM22.4609 91.38V84.68L28.2609 88.02L22.4609 91.38ZM55.4409 49.52C54.8209 50.2 54.4809 51.12 54.4809 52.02C54.4809 52.8 54.7409 53.6 55.2009 54.26C54.7209 54.92 54.4809 55.72 54.4809 56.5C54.4809 58.26 55.7409 60.14 58.1009 60.14H58.6209L59.7809 61.86C60.6809 63.2 62.1209 63.96 63.7409 63.96H68.7809C70.3809 63.96 71.8409 63.2 72.7409 61.86L73.9009 60.14H74.4209C76.7609 60.14 78.0409 58.26 78.0409 56.5C78.0409 55.72 77.7809 54.92 77.3209 54.26C77.8009 53.6 78.0409 52.8 78.0409 52.02C78.0409 51.14 77.7209 50.24 77.1209 49.56C77.2209 49.4 77.3409 49.24 77.4609 49.08C80.7609 44.4 84.4809 39.1 84.4809 32.92C84.4809 22.88 76.3009 14.7 66.2609 14.7C56.2209 14.7 48.0409 22.88 48.0409 32.92C48.0409 39.06 51.7409 44.28 55.0009 48.88C55.1409 49.1 55.3009 49.32 55.4409 49.52ZM75.2209 52.02C75.2209 52.32 75.1209 52.86 74.4009 52.86H58.0809C57.3809 52.86 57.2609 52.34 57.2609 52.02C57.2609 51.72 57.3609 51.18 58.0809 51.18H74.4009C75.1209 51.18 75.2209 51.7 75.2209 52.02ZM70.4209 60.26C70.0409 60.82 69.4809 61.12 68.8009 61.12H63.7609C63.0809 61.12 62.5209 60.82 62.1409 60.26L62.0409 60.1H70.5409L70.4209 60.26ZM74.4209 57.32H58.1009C57.4009 57.32 57.2809 56.8 57.2809 56.48C57.2809 56.18 57.3809 55.64 58.1009 55.64H74.4209C75.1209 55.64 75.2409 56.16 75.2409 56.48C75.2209 56.8 75.1209 57.32 74.4209 57.32ZM66.2609 17.5C74.7609 17.5 81.6809 24.42 81.6809 32.92C81.6809 38.22 78.3609 42.92 75.1609 47.48C74.9409 47.78 74.7409 48.1 74.5209 48.4H58.0609C57.8009 48.02 57.5409 47.66 57.2809 47.28C54.1209 42.8 50.8409 38.18 50.8409 32.92C50.8409 24.42 57.7609 17.5 66.2609 17.5ZM42.9609 11.64C42.4209 11.1 42.4209 10.2 42.9609 9.66C43.5009 9.12 44.4009 9.12 44.9409 9.66L49.7209 14.44C50.2609 14.98 50.2609 15.88 49.7209 16.42C49.4409 16.7 49.0809 16.84 48.7409 16.84C48.4009 16.84 48.0209 16.7 47.7609 16.42L42.9609 11.64ZM33.3209 32.94C33.3209 32.16 33.9409 31.54 34.7209 31.54H41.4809C42.2609 31.54 42.8809 32.16 42.8809 32.94C42.8809 33.72 42.2609 34.34 41.4809 34.34H34.7209C33.9409 34.34 33.3209 33.72 33.3209 32.94ZM64.8609 8.16V1.4C64.8609 0.62 65.4809 0 66.2609 0C67.0409 0 67.6609 0.62 67.6609 1.4V8.16C67.6609 8.94 67.0409 9.56 66.2609 9.56C65.4809 9.56 64.8609 8.94 64.8609 8.16ZM99.2009 32.94C99.2009 33.72 98.5809 34.34 97.8009 34.34H91.0409C90.2609 34.34 89.6409 33.72 89.6409 32.94C89.6409 32.16 90.2609 31.54 91.0409 31.54H97.8009C98.5809 31.54 99.2009 32.18 99.2009 32.94ZM89.5609 11.64L84.7809 16.42C84.5009 16.7 84.1409 16.84 83.7809 16.84C83.4209 16.84 83.0609 16.7 82.7809 16.42C82.2409 15.88 82.2409 14.98 82.7809 14.44L87.5609 9.66C88.1009 9.12 89.0009 9.12 89.5409 9.66C90.1009 10.2 90.1009 11.08 89.5609 11.64ZM60.9009 44.18C61.1209 44.3 61.3609 44.36 61.6009 44.36C61.8409 44.36 62.0809 44.3 62.3009 44.18L75.3409 36.64C75.7809 36.38 76.0409 35.92 76.0409 35.42C76.0409 34.92 75.7809 34.46 75.3409 34.2L62.3009 26.66C61.8609 26.4 61.3409 26.4 60.9009 26.66C60.4609 26.92 60.2009 27.38 60.2009 27.88V42.94C60.2009 43.48 60.4609 43.94 60.9009 44.18ZM63.0009 30.34L71.8409 35.44L63.0009 40.56V30.34Z" fill="#2638EC"></path></g><defs><clipPath id="clip0_14864_122078"><rect width="100" height="100" fill="white"></rect></clipPath></defs></svg>
          <h4 className='text-lg md:text-xl'>Creators </h4>
        </div>
        <div className='flex flex-col items-center gap-3'>
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M64.4721 31.8009C54.7468 17.4932 41.7578 9.88882 34.9556 14.5482C34.2066 15.0756 33.5557 15.7302 33.0325 16.4822C33.0325 16.5372 17.2853 48.4053 17.2853 48.4053L8.49406 54.3614C7.14448 55.2775 5.98862 56.4505 5.09251 57.8135C4.1964 59.1764 3.5776 60.7026 3.27146 62.3047C2.96531 63.9069 2.97782 65.5537 3.30827 67.151C3.63872 68.7483 4.28064 70.2649 5.19735 71.6141L5.59296 72.1965C7.44594 74.8958 10.2884 76.7557 13.5037 77.3728C16.7191 77.99 20.0481 77.3146 22.7688 75.4932L36.8897 96.2954C38.9666 98.8559 42.9556 101.405 47.8787 98.4053C48.7508 97.8398 49.4948 97.0978 50.0626 96.2271C50.6304 95.3565 51.0095 94.3765 51.1754 93.3504C51.3743 92.3297 51.3689 91.2798 51.1595 90.2612C50.9501 89.2427 50.5409 88.2757 49.9556 87.4163L37.516 69.0646C37.516 69.0646 66.9226 66.724 67.0325 66.68C67.9507 66.4879 68.8212 66.1143 69.593 65.5811C73.0875 63.2075 74.3402 58.2295 73.1314 51.5592C72.0435 45.4163 68.9556 38.4603 64.4721 31.8009ZM8.79076 70.0317L8.39516 69.4493C7.76267 68.5181 7.32004 67.4714 7.09259 66.369C6.86515 65.2665 6.85736 64.1301 7.06967 63.0246C7.28197 61.9192 7.71022 60.8665 8.32987 59.9268C8.94953 58.987 9.74844 58.1788 10.6809 57.5482L18.2743 52.3833L28.2963 67.1416L20.7028 72.3064C19.7715 72.9397 18.7245 73.3833 17.6216 73.6117C16.5187 73.8401 15.3817 73.849 14.2754 73.6377C13.1691 73.4265 12.1153 72.9992 11.1742 72.3805C10.2331 71.7618 9.42322 70.9636 8.79076 70.0317ZM46.7908 89.5811C47.3914 90.4748 47.613 91.5702 47.4069 92.627C47.2009 93.6839 46.5841 94.6159 45.6919 95.2185C44.7965 95.8197 43.6994 96.0416 42.6407 95.8356C41.5821 95.6296 40.6482 95.0126 40.0435 94.1196L25.9666 73.3833L31.6259 69.5372L33.1204 69.4163L46.7908 89.5811ZM31.9336 65.6471L21.0105 49.5592L31.4281 28.3174C32.4391 34.2844 35.3952 41.3723 40.1204 48.3284C44.8457 55.2844 50.3402 60.6471 55.505 63.7899L31.9336 65.6471ZM64.3512 63.0866C59.0985 62.746 50.549 56.8229 43.3072 46.1526C36.0655 35.4822 33.7138 25.3833 35.3292 20.3614C35.621 19.4187 36.2031 18.5923 36.9925 18.0003C37.7819 17.4082 38.7382 17.0808 39.7248 17.0646C44.9336 17.0646 53.8018 23.0207 61.2523 33.9987C65.4501 40.1745 68.5051 46.6361 69.3402 52.2844C70.9776 63.0866 64.3512 63.0866 64.3512 63.0866Z" fill="#2638EC"></path><path d="M50.7345 32.209C49.3884 31.9447 48.0031 31.9514 46.6597 32.2288C45.3163 32.5061 44.0416 33.0486 42.9103 33.8244C42.7018 33.9687 42.5237 34.1527 42.3863 34.3658C42.2488 34.5789 42.1547 34.817 42.1093 35.0665C42.0639 35.316 42.0681 35.572 42.1216 35.8199C42.1752 36.0678 42.277 36.3027 42.4213 36.5112C42.5656 36.7197 42.7496 36.8978 42.9627 37.0352C43.1758 37.1727 43.4139 37.2668 43.6634 37.3122C43.9129 37.3576 44.1689 37.3534 44.4168 37.2999C44.6647 37.2464 44.8996 37.1445 45.1081 37.0002C45.8246 36.5139 46.6299 36.1735 47.4779 35.9983C48.326 35.8232 49.2003 35.8169 50.0508 35.9796C50.9013 36.1424 51.7114 36.4711 52.4349 36.9469C53.1584 37.4228 53.7811 38.0365 54.2674 38.753C54.7538 39.4695 55.0942 40.2747 55.2693 41.1228C55.4444 41.9709 55.4508 42.8451 55.288 43.6956C55.1253 44.5462 54.7966 45.3563 54.3207 46.0798C53.8449 46.8033 53.2312 47.426 52.5147 47.9123C52.1768 48.1456 51.9225 48.4809 51.789 48.8692C51.6554 49.2574 51.6496 49.6782 51.7724 50.07C51.8953 50.4618 52.1402 50.8039 52.4715 51.0465C52.8028 51.289 53.203 51.4191 53.6136 51.4178C54.0053 51.4252 54.3895 51.3099 54.7125 51.0881C56.4217 49.9303 57.7488 48.2912 58.5257 46.3785C59.3026 44.4658 59.4943 42.3655 59.0765 40.3438C58.6588 38.322 57.6503 36.4697 56.179 35.0216C54.7076 33.5734 52.8395 32.5946 50.8114 32.209H50.7345Z" fill="#2638EC"></path><path d="M66.8455 18.4278H67.0323C67.508 18.4276 67.9667 18.2511 68.3198 17.9325C68.673 17.6138 68.8955 17.1756 68.9444 16.7025L70.4279 2.28491C70.4617 2.02997 70.444 1.77084 70.3758 1.52287C70.3077 1.2749 70.1905 1.04311 70.0312 0.841222C69.8719 0.639335 69.6737 0.471449 69.4484 0.347497C69.2231 0.223545 68.9752 0.146045 68.7194 0.119583C68.4636 0.093121 68.2051 0.118234 67.9591 0.193436C67.7132 0.268637 67.4849 0.392401 67.2876 0.557403C67.0904 0.722406 66.9282 0.925295 66.8107 1.15407C66.6933 1.38284 66.6229 1.63285 66.6038 1.8893L65.1312 16.3179C65.079 16.825 65.2302 17.332 65.5516 17.7277C65.8731 18.1233 66.3385 18.3751 66.8455 18.4278Z" fill="#2638EC"></path><path d="M91.7028 15.4626C91.4204 15.0369 90.9812 14.7403 90.4809 14.6373C89.9806 14.5344 89.4599 14.6335 89.0325 14.9131L75.6369 23.7043C75.289 23.934 75.0252 24.2705 74.8852 24.6631C74.7452 25.0557 74.7365 25.4831 74.8605 25.8811C74.9844 26.2791 75.2344 26.626 75.5726 26.8696C75.9108 27.1132 76.319 27.2403 76.7358 27.2318C77.1245 27.2408 77.5071 27.1336 77.8347 26.9241L91.2303 18.1329C91.6458 17.8405 91.9288 17.3956 92.0173 16.8952C92.1059 16.3949 91.9928 15.8798 91.7028 15.4626Z" fill="#2638EC"></path><path d="M95.8022 38.9341L80.2198 36.1319C79.717 36.0416 79.199 36.1547 78.7796 36.4463C78.3602 36.7379 78.0738 37.1841 77.9835 37.6869C77.8932 38.1896 78.0062 38.7077 78.2978 39.1271C78.5894 39.5464 79.0357 39.8328 79.5384 39.9231L95.1099 42.7253H95.4505C95.9405 42.7397 96.4175 42.5663 96.7839 42.2408C97.1504 41.9152 97.3787 41.462 97.4222 40.9737C97.4657 40.4855 97.3211 39.999 97.018 39.6138C96.7148 39.2286 96.276 38.9737 95.7912 38.9012L95.8022 38.9341Z" fill="#2638EC"></path></svg>
          <h4 className='text-lg md:text-xl'>Marketers </h4>
        </div>
        
        
      </div>

      
      </motion.div>
  </div>


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