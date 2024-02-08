import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const ToggleButton = (props: Props) => {
  return (
    <button onClick={() => props.setOpen((prev) => !prev)}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d="M 2 4.5 L 20 4.5"
          variants={{
            closed: { d: 'M 2 4.5 L 20 4.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d="M 2 11.423 L 20 11.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d="M 2 18.346 L 20 18.346"
          variants={{
            closed: { d: 'M 2 18.346 L 20 18.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </button>
  )
}

export default ToggleButton
