import './sidebar.scss'
import Links from './links/Links.tsx'
import ToggleButton from './toggleButton/ToggleButton.tsx'
import { useState } from 'react'
import { motion } from 'framer-motion'

const variants = {
  open: {
    clipPath: 'circle(1500px at 50px 50px)',
    transition: {
      type: 'spring',
      stiffness: 20,
    },
  },
  closed: {
    clipPath: 'circle(30px at 50px 50px)',
    transition: {
      delay: 0.2,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}
const Sidebar = () => {
  const [open, setOpen] = useState(false)

  return (
    <motion.div className="sidebar" animate={open ? 'open' : 'closed'}>
      <motion.div className="bg" variants={variants}>
        <Links setOpen={setOpen} />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  )
}

export default Sidebar
