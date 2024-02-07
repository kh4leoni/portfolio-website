import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

type PortFolioItem = {
  id: number
  title: string
  img: string
  desc: string
  url?: string
}

type SingleProps = {
  item: PortFolioItem
}

const items = [
  {
    id: 1,
    title: 'Suolakurkkutietokanta',
    img: './coding.png',
    desc: 'Verkkosivujen kehittäminen kurssilla tehty sivusto. HTML/CSS & Vanilla JS',
    url: 'https://github.com/kh4leoni/suolakurkkumeininki',
  },
  {
    id: 2,
    title: 'Home routine app',
    img: './homework.png',
    desc: 'Simple web app that keeps track of daily household routines, cleaning and taking dog out and feeding dog. Is not too appealing visually, main agenda here was to train fullstack app development with REST API. React frontend with Express backend and MongoDB for data storaging. Still work on progress',
    url: 'https://github.com/kh4leoni/home-routines-backend',
  },
  {
    id: 3,
    title: 'C# + Unity GameDev',
    img: './gamedev.png',
    desc: 'I have also studied game development and made couple of simple 2D games',
    url: 'https://github.com/kh4leoni/blockbreaker',
  },
]

const Single = (props: SingleProps) => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    /*offset: ['start start', 'end start'],*/
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-200px', '200px'])

  const { title, img, desc, url } = props.item
  return (
    <section id="Portfolio">
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={img} alt="" />
          </div>

          <motion.div className="textContainer" style={{ y }}>
            <h2>{title}</h2>
            <p>{desc}</p>
            <a target="_blank" href={url}>
              <button>Github</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Portfolio = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  return (
    <motion.div className="portfolio" ref={ref}>
      <motion.div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          className="progressBar"
          style={{ scaleX: scaleX }}
        ></motion.div>
      </motion.div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </motion.div>
  )
}

export default Portfolio
