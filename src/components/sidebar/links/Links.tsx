import './links.scss'
import { motion } from 'framer-motion'
import React from 'react'

type LinksProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
}
const Links = (props: LinksProps) => {
  const items = ['Homepage', 'About', 'Portfolio', 'Contact']

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => props.setOpen(false)}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  )
}

export default Links
