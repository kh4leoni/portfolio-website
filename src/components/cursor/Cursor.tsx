import './cursor.scss'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Cursor = () => {
  const [position, setPosition] = useState({ x: 1, y: 1 })

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  return (
    <motion.div
      className="cursor"
      animate={{ x: position.x + 20, y: position.y + 40 }}
    ></motion.div>
  )
}

export default Cursor
