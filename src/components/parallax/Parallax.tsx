import './parallax.scss'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

type ParallaxProps = {
  type: string
}

const Parallax = (props: ParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '1200%'])
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '120%'])

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          props.type === 'about'
            ? 'linear-gradient(180deg, #111132, #0c0c1d)'
            : 'linear-gradient(180deg, #111132, #505064)',
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {props.type === 'about' ? 'About me' : 'Some work I have done'}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${props.type === 'about' ? './planets.png' : './sun.png'}`,
        }}
      ></motion.div>
      <motion.div className="stars" style={{ x: yBg }}></motion.div>
    </div>
  )
}

export default Parallax
