import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

export default function TiltCard({ children, className }) {
  const ref = useRef(null)
  const [transform, setTransform] = useState('rotateX(0deg) rotateY(0deg) scale(1)')

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rotX = (0.5 - py) * 12 // -6 to 6
    const rotY = (px - 0.5) * 12 // -6 to 6
    setTransform(`rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02) `)
  }

  const handleLeave = () => {
    setTransform('rotateX(0deg) rotateY(0deg) scale(1)')
  }

  return (
    <div
      className="[perspective:1000px] group"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <motion.div
        ref={ref}
        style={{ transformStyle: 'preserve-3d', transform }}
        className={clsx('relative will-change-transform transition-transform duration-150 ease-out', className)}
        whileTap={{ scale: 0.98 }}
      >
        {/* Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            background:
              'radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(99,102,241,0.12), transparent 40%)'
          }}
        />
        {/* Content */}
        <div style={{ transform: 'translateZ(30px)' }}>
          {children}
        </div>
      </motion.div>
    </div>
  )
}
