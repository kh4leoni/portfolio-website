import './contact.scss'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const variants = {
  initial: {
    y: -300,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
}

const Contact = () => {
  const ref = useRef(null)
  const formRef = useRef(null)
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const isInView = useInView(ref)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        },
      )
      .then(
        () => {
          setSuccess(true)
          setTimeout(() => {
            setSuccess(false)
          }, 3000)
        },
        (error) => {
          setError(true)
          setTimeout(() => {
            console.log(error)
            setError(false)
          }, 3000)
        },
      )
  }

  return (
    <motion.div
      className="contact"
      variants={variants}
      initial={'initial'}
      animate={isInView && 'animate'}
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Lets work together.</motion.h1>
        {/*<motion.div variants={variants} className="item">
          <h2>Mail</h2>
          <span>hello@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Sivukuja 2, 00910 Helsinki</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>0505012003</span>
        </motion.div>*/}
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="phoneSvg"
          style={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <svg
            className="phoneIcon"
            fill="none"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(-1)">
              <g>
                <g>
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={isInView && { pathLength: 1 }}
                    transition={{ duration: 3 }}
                    d="M506.847,376.188c-2.506-4.739-5.667-9.463-9.428-14.215c-8.571-10.83-20.227-21.791-34.287-32.906
				c-9.809-7.755-20.237-15.145-30.657-21.961c-6.267-4.1-11.191-7.129-14.123-8.847c-24.749-14.092-53.262-12.224-67.987,11.507
				c-0.684,0.812-1.553,1.841-2.567,3.034c-2.772,3.26-5.585,6.516-8.252,9.535c-0.576,0.651-0.576,0.651-1.151,1.298
				c-4.427,4.973-8.479,9.158-8.33,9.057c-16.299,11.031-26.909,10.163-41.279-4.208L184.976,224.674
				c-14.37-14.37-15.239-24.98-4.201-41.289c-0.107,0.158,4.078-3.894,9.051-8.321c0.647-0.575,0.647-0.575,1.298-1.151
				c3.019-2.667,6.275-5.48,9.535-8.252c1.193-1.014,2.221-1.884,3.034-2.567c23.731-14.725,25.602-43.232,11.64-67.756
				c-1.851-3.163-4.88-8.086-8.98-14.354c-6.816-10.42-14.206-20.848-21.961-30.657c-11.114-14.06-22.076-25.716-32.906-34.287
				c-4.752-3.761-9.477-6.922-14.222-9.432c-22.077-11.67-49.146-7.606-66.816,10.03L47.514,39.593
				c-76.079,76.079-55.111,166.746,35.804,257.661l66.43,66.451l66.458,66.437c90.913,90.913,181.581,111.881,257.666,35.795
				l22.919-22.94C514.45,425.372,518.531,398.258,506.847,376.188z M466.629,412.82l-22.934,22.955
				c-55.66,55.66-120.958,40.559-197.322-35.804l-66.456-66.434l-66.427-66.448c-76.366-76.366-91.467-141.664-35.8-197.331
				l22.919-22.94c4.408-4.4,11.174-5.415,16.709-2.489c2.276,1.204,4.866,2.937,7.688,5.17c7.823,6.191,16.675,15.605,25.913,27.291
				c6.887,8.712,13.561,18.13,19.727,27.554c3.689,5.64,6.357,9.977,7.74,12.337c3.849,6.764,3.612,9.72,2.477,10.358l-3.217,2.217
				c-0.944,0.787-2.561,2.147-4.631,3.907c-3.449,2.934-6.901,5.915-10.144,8.78c-0.708,0.627-0.708,0.627-1.418,1.257
				c-8.44,7.514-13.205,12.127-16.009,16.265c-22.372,33.057-19.645,66.377,9.36,95.382l103.808,103.808
				c29.005,29.005,62.325,31.733,95.373,9.367c4.147-2.81,8.76-7.575,16.274-16.015c0.63-0.709,0.63-0.709,1.257-1.418
				c2.865-3.243,5.847-6.695,8.78-10.144c1.76-2.069,3.12-3.686,3.907-4.631l2.217-3.217c0.637-1.135,3.594-1.371,10.589,2.611
				c2.129,1.25,6.466,3.918,12.106,7.607c9.425,6.165,18.842,12.839,27.555,19.727c11.686,9.238,21.099,18.09,27.29,25.913
				c2.233,2.821,3.966,5.412,5.173,7.693C472.054,401.659,471.037,408.42,466.629,412.82z"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={isInView && { pathLength: 1 }}
                    transition={{ duration: 3 }}
                    d="M257.454,213.334c23.589,0,42.667,19.078,42.667,42.667c0,11.782,9.551,21.333,21.333,21.333s21.333-9.551,21.333-21.333
				c0-47.153-38.181-85.333-85.333-85.333c-11.782,0-21.333,9.551-21.333,21.333S245.672,213.334,257.454,213.334z"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={isInView && { pathLength: 1 }}
                    transition={{ duration: 3 }}
                    d="M257.454,128c70.757,0,128,57.243,128,128c0,11.782,9.551,21.333,21.333,21.333c11.782,0,21.333-9.551,21.333-21.333
				c0-94.321-76.346-170.667-170.667-170.667c-11.782,0-21.333,9.551-21.333,21.333C236.12,118.449,245.672,128,257.454,128z"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={isInView && { pathLength: 1 }}
                    transition={{ duration: 3 }}
                    d="M278.787,42.667c106.127,0,192,85.873,192,192c0,11.782,9.551,21.333,21.333,21.333s21.333-9.551,21.333-21.333
				C513.454,104.976,408.479,0,278.787,0c-11.782,0-21.333,9.551-21.333,21.333C257.454,33.116,267.005,42.667,278.787,42.667z"
                  />
                </g>
              </g>
            </g>
          </svg>
        </motion.div>
        <motion.form
          style={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          ref={formRef}
          onSubmit={sendEmail}
        >
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea
            cols={30}
            rows={8}
            placeholder="Message"
            name="message"
          ></textarea>
          <button type={'submit'}>Submit</button>
          {error && 'Error'}
          {success && 'Success'}
        </motion.form>
      </div>
    </motion.div>
  )
}

export default Contact
