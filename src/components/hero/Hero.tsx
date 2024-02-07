import './hero.scss'
import { motion } from 'framer-motion'

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
}

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-500%',

    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 20,
    },
  },
}

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial={'initial'}
          animate={'animate'}
        >
          <motion.h2 variants={textVariants}>Mikael Häkkilä</motion.h2>
          <motion.h1 variants={textVariants}>Developer</motion.h1>

          <motion.div className="buttons" variants={textVariants}>
            <a href="#Portfolio">
              <motion.button variants={textVariants}>My work</motion.button>
            </a>
            <a href="#Contact">
              <motion.button variants={textVariants}>Contant Me</motion.button>
            </a>
          </motion.div>
          <motion.img
            src="./scroll.png"
            alt=""
            variants={textVariants}
            animate={'scrollButton'}
          />
        </motion.div>
        <motion.div
          className="slidingTextContainer"
          variants={sliderVariants}
          initial="initial"
          animate={'animate'}
        >
          IT-student Programmer Musician
        </motion.div>
        <div className="imageContainer">
          <img src="./hero2.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
