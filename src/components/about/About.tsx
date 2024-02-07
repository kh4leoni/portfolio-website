import './about.scss'
import { motion, useInView, Variants } from 'framer-motion'
import { useRef } from 'react'

const firstVariants: Variants = {
  initial: {
    x: 1500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
}

const secondVariants: Variants = {
  initial: {
    x: -1500,
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
}

type SingleItem = {
  id: number
  img: string
  title: string
  desc: string
}

type SingleProps = {
  item: SingleItem
  variants: Variants
}

const items = [
  {
    id: 1,
    img: './character.png',
    title: 'Me',
    desc: `
               I am a soon-to-be 35-year-old individual from Helsinki who has
               I am currently in the process of switching careers and am on study leave from my current job. 
               I am in my second year of studying for a degree in IT at Laurea
               University of Applied Sciences. In my free time I like to spend time with my family,
               play video games and code.
    `,
  },
  {
    id: 2,
    img: './codeguy.png',
    title: 'Coding',
    desc: `
               Alongside my studies, I am passionately engaged in programming and
               have a keen interest in technology. I started learning programming
               years ago. My dream is to work in the field of programming. I have a
               lot of experience with HTML, CSS, JavaScript, TypeScript, React, Node,
               and databases. 
               
              
               I have taken several courses related to
               programming, including the Fullstack Open course at the University of
               Helsinki, Full Web Development Bootcamp, as well as 2D Game
               Development with Unity & C#.
    
    `,
  },
  {
    id: 3,
    img: './music.png',
    title: 'Music',
    desc: `
              I'm also deeply passionated by music. I've been involved in making
              music for most of my life. In my own music, rap is the predominant
              genre, and I take on roles as a lyricist, arranger, performer, and
              producer. I've also dabbled in other genres of music, and I'm
              quite proficient with the guitar as well. Additionally, a few
              friends and I run a small-scale indie record label.
          `,
  },
]

const Single = (props: SingleProps) => {
  const { img, title, desc } = props.item

  const ref = useRef(null)

  const isInView = useInView(ref, { margin: '-100px' })

  return (
    <motion.section id="About" ref={ref}>
      <motion.div
        className="item"
        variants={props.variants}
        initial={'initial'}
        animate={isInView && 'animate'}
      >
        <div className="textContainer">
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
        <div className="imageContainer">
          <img src={img} alt="" />
        </div>
      </motion.div>
    </motion.section>
  )
}

const About = () => {
  return (
    <motion.div className="about">
      <motion.div className="wrapper">
        {items.map((item) => (
          <Single
            item={item}
            key={item.id}
            variants={item.id === 2 ? secondVariants : firstVariants}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}

export default About
