import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function SectionReveal({ children, className, ...rest }) {
  const ref = useRef(null)
  const controls = useAnimation()
  const inView = useInView(ref, { margin: '-20% 0px -10% 0px', once: true })

  useEffect(() => {
    if (inView) controls.start('visible')
  }, [inView, controls])

  return (
    <motion.section
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40, rotateX: -6, transformPerspective: 800 },
        visible: {
          opacity: 1,
          y: 0,
          rotateX: 0,
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
      }}
      style={{ transformOrigin: '50% 80%' }}
      {...rest}
    >
      {children}
    </motion.section>
  )
}
