import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

/**
 * SectionReveal
 * - Reveals its children when scrolled into view
 * - Supports configurable offset, duration, easing, and child staggering
 */
export default function SectionReveal({
  children,
  className,
  margin = '-20% 0px -10% 0px',
  once = true,
  y = 40,
  rx = -6,
  duration = 0.8,
  ease = [0.22, 1, 0.36, 1],
  stagger = 0.08,
  delayChildren = 0.05,
  style,
  ...rest
}) {
  const ref = useRef(null)
  const controls = useAnimation()
  const inView = useInView(ref, { margin, once })

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
        hidden: { opacity: 0, y, rotateX: rx, transformPerspective: 800 },
        visible: {
          opacity: 1,
          y: 0,
          rotateX: 0,
          transition: {
            duration,
            ease,
            when: 'beforeChildren',
            staggerChildren: stagger,
            delayChildren
          }
        }
      }}
      style={{ transformOrigin: '50% 80%', ...style }}
      {...rest}
    >
      {children}
    </motion.section>
  )
}

// Child variants to use inside SectionReveal for automatic staggering
export const revealItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}
