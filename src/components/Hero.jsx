import { motion } from 'framer-motion'

const WA = 'https://wa.me/919818461302'

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', textAlign: 'center',
      padding: '120px 24px 80px',
      background: 'linear-gradient(150deg, #fdf8f5 0%, #fceee8 40%, #fdf3e3 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Soft blobs */}
      <div style={{ position:'absolute', top:80, left:'5%', width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle, #f9d8d8 0%, transparent 70%)', opacity:0.5, pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:60, right:'5%', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle, #f5e6c8 0%, transparent 70%)', opacity:0.4, pointerEvents:'none' }} />

      {/* Flower */}
      <motion.div
        animate={{ x: [-18, 18, -18], y: [0, -6, 0, 6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{ marginBottom: 32 }}
      >
        <FlowerLogo />
      </motion.div>

      {/* Tag */}
      <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1, duration:0.7 }}
        style={{ fontFamily:'Poppins,sans-serif', fontSize:12, fontWeight:600, letterSpacing:'0.2em', textTransform:'uppercase', color:'#c9a96e', marginBottom:20 }}>
        The JCM Second Prime &nbsp;·&nbsp; Fitness &amp; Life Program
      </motion.p>

      {/* Heading */}
      <motion.h1 initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.25, duration:0.8 }}
        style={{ fontFamily:'Playfair Display,serif', fontSize:'clamp(2.6rem,7vw,5.5rem)', fontWeight:700, lineHeight:1.15, color:'#1e1e1e', marginBottom:20, maxWidth:780 }}>
        Reinvent Yourself<br />
        <em style={{ color:'#c9a96e', fontStyle:'italic' }}>After 45</em>
      </motion.h1>

      {/* Subheading */}
      <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.4, duration:0.7 }}
        style={{ fontFamily:'Playfair Display,serif', fontStyle:'italic', fontSize:'clamp(1.1rem,2.5vw,1.5rem)', color:'#7a6a5a', marginBottom:24, maxWidth:560 }}>
        A fresh chapter is possible — at any age.
      </motion.p>

      {/* Body */}
      <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.55, duration:0.7 }}
        style={{ fontFamily:'Poppins,sans-serif', fontSize:'clamp(0.9rem,1.8vw,1.05rem)', color:'#7a6a5a', lineHeight:1.8, maxWidth:520, marginBottom:44 }}>
        If you feel lost, stuck, or unsure about who you are becoming in this phase of life, you are not alone.
      </motion.p>

      {/* CTA */}
      <motion.a href={WA} target="_blank" rel="noopener noreferrer"
        initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }} transition={{ delay:0.7, duration:0.6 }}
        whileHover={{ scale:1.06, boxShadow:'0 12px 40px rgba(201,169,110,0.45)' }}
        whileTap={{ scale:0.97 }}
        style={{
          display:'inline-block', padding:'16px 44px', borderRadius:50,
          background:'linear-gradient(135deg,#c9a96e,#b8935a)',
          color:'white', fontFamily:'Poppins,sans-serif', fontWeight:600,
          fontSize:15, letterSpacing:'0.06em', textDecoration:'none',
          boxShadow:'0 6px 28px rgba(201,169,110,0.35)', cursor:'pointer',
        }}>
        Start Your Journey
      </motion.a>

      {/* Scroll hint */}
      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.2 }}
        style={{ position:'absolute', bottom:36, display:'flex', flexDirection:'column', alignItems:'center', gap:6 }}>
        <span style={{ fontSize:10, letterSpacing:'0.18em', textTransform:'uppercase', color:'#c9a96e' }}>Scroll</span>
        <motion.div animate={{ y:[0,8,0] }} transition={{ duration:1.6, repeat:Infinity }}
          style={{ width:1.5, height:32, background:'linear-gradient(to bottom,#c9a96e,transparent)', borderRadius:4 }} />
      </motion.div>
    </section>
  )
}

function FlowerLogo() {
  return (
    <svg width="80" height="80" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[0,40,80,120,160,200,240,280,320].map((a,i) => (
        <ellipse key={i} cx="36" cy="36" rx="7" ry="17" fill="#c9a96e" fillOpacity={0.55 + i*0.03} transform={`rotate(${a} 36 36)`} />
      ))}
      <circle cx="36" cy="36" r="10" fill="#c9a96e" />
      <circle cx="36" cy="36" r="5.5" fill="#fdf8f5" />
    </svg>
  )
}
