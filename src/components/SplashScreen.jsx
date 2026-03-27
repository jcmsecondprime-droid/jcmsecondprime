import { motion } from 'framer-motion'

export default function SplashScreen({ onComplete }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 2.2 }}
      onAnimationComplete={onComplete}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'linear-gradient(150deg,#fdf8f5 0%,#fceee8 50%,#fdf3e3 100%)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
      }}
    >
      {/* Flower bloom animation */}
      <motion.div
        initial={{ scale: 0, rotate: -30, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
        style={{ marginBottom: 28 }}
      >
        <svg width="90" height="90" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0,40,80,120,160,200,240,280,320].map((a, i) => (
            <motion.ellipse
              key={i}
              cx="36" cy="36" rx="7" ry="17"
              fill="#c9a96e"
              fillOpacity={0.5 + i * 0.04}
              transform={`rotate(${a} 36 36)`}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.06, ease: 'easeOut' }}
              style={{ transformOrigin: '36px 36px' }}
            />
          ))}
          <motion.circle cx="36" cy="36" r="10" fill="#c9a96e"
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.9 }} />
          <motion.circle cx="36" cy="36" r="5.5" fill="#fdf8f5"
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1.1 }} />
        </svg>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        style={{ fontFamily: 'Playfair Display, serif', fontSize: 26, fontWeight: 700, color: '#1e1e1e', marginBottom: 8 }}
      >
        JCM Second Prime
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13, color: '#c9a96e', letterSpacing: '0.18em', textTransform: 'uppercase' }}
      >
        Lifelong Fitness and Clarity
      </motion.p>

      {/* Loading bar */}
      <motion.div
        style={{ position: 'absolute', bottom: 0, left: 0, height: 3, background: 'linear-gradient(to right,#c9a96e,#e8d5b0)', borderRadius: 2 }}
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ duration: 2.0, ease: 'easeInOut' }}
      />
    </motion.div>
  )
}
