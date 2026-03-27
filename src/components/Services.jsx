import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  {
    icon: '🪞',
    title: 'Midlife Identity Reconstruction',
    desc: "Rediscover who you are beyond the roles you have played and step into a fuller version of yourself.",
  },
  {
    icon: '💪',
    title: 'Rebuilding Confidence & Self-Trust',
    desc: "Reclaim your inner voice and build unshakeable trust in your own decisions and worth.",
  },
  {
    icon: '🌿',
    title: 'Navigating Life Transitions',
    desc: "Move through change with grace — whether career, relationships, health, or identity shifts.",
  },
  {
    icon: '🚀',
    title: 'Exploring New Possibilities',
    desc: "Open doors you thought were closed and discover what is truly possible in this next chapter.",
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" ref={ref} style={{ padding:'100px 24px', background:'#fff' }}>
      <div style={{ maxWidth:1100, margin:'0 auto' }}>

        {/* Header */}
        <motion.div initial={{ opacity:0, y:30 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:0.7 }}
          style={{ textAlign:'center', marginBottom:64 }}>
          <p style={{ fontFamily:'Poppins,sans-serif', fontSize:12, fontWeight:600, letterSpacing:'0.2em', textTransform:'uppercase', color:'#c9a96e', marginBottom:14 }}>
            What We Work On
          </p>
          <h2 style={{ fontFamily:'Playfair Display,serif', fontSize:'clamp(2rem,4vw,3rem)', fontWeight:700, color:'#1e1e1e', lineHeight:1.2 }}>
            How I Support You
          </h2>
          <div style={{ width:60, height:2, background:'linear-gradient(to right,#c9a96e,#e8d5b0)', margin:'20px auto 0', borderRadius:2 }} />
        </motion.div>

        {/* Grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:24 }} className="services-grid">
          {services.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity:0, y:50 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:0.65, delay:i*0.12 }}
              whileHover={{ y:-8 }}
              style={{
                borderRadius:24, padding:'36px 28px',
                background:'linear-gradient(145deg,rgba(253,248,245,0.9),rgba(252,238,232,0.6))',
                backdropFilter:'blur(10px)',
                border:'1px solid rgba(201,169,110,0.18)',
                boxShadow:'0 4px 24px rgba(201,169,110,0.1)',
                display:'flex', flexDirection:'column', gap:16,
                cursor:'default', transition:'transform 0.3s, box-shadow 0.3s',
              }}>
              <span style={{ fontSize:40, lineHeight:1 }}>{s.icon}</span>
              <h3 style={{ fontFamily:'Playfair Display,serif', fontSize:17, fontWeight:600, color:'#1e1e1e', lineHeight:1.35 }}>{s.title}</h3>
              <p style={{ fontFamily:'Poppins,sans-serif', fontSize:13.5, lineHeight:1.75, color:'#7a6a5a' }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 540px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
