import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const WA = 'https://wa.me/919818461302'

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={ref} style={{
      padding: '100px 24px',
      background: 'linear-gradient(150deg,#fdf3e3 0%,#fceee8 50%,#fdf8f5 100%)',
    }}>
      <motion.div initial={{ opacity:0, y:40 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:0.8 }}
        style={{ maxWidth:680, margin:'0 auto', textAlign:'center' }}>

        {/* Flower */}
        <div style={{ display:'flex', justifyContent:'center', marginBottom:28 }}>
          <svg width="56" height="56" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            {[0,45,90,135,180,225,270,315].map((a,i) => (
              <ellipse key={i} cx="36" cy="36" rx="7" ry="16" fill="#c9a96e" fillOpacity="0.65" transform={`rotate(${a} 36 36)`} />
            ))}
            <circle cx="36" cy="36" r="9" fill="#c9a96e" />
            <circle cx="36" cy="36" r="5" fill="#fdf8f5" />
          </svg>
        </div>

        <p style={{ fontFamily:'Poppins,sans-serif', fontSize:12, fontWeight:600, letterSpacing:'0.2em', textTransform:'uppercase', color:'#c9a96e', marginBottom:16 }}>
          Let us Connect
        </p>

        <h2 style={{ fontFamily:'Playfair Display,serif', fontSize:'clamp(2rem,4vw,3rem)', fontWeight:700, color:'#1e1e1e', lineHeight:1.25, marginBottom:20 }}>
          Start With A Conversation
        </h2>

        <p style={{ fontFamily:'Poppins,sans-serif', fontSize:16, lineHeight:1.8, color:'#7a6a5a', marginBottom:44 }}>
          Sometimes all it takes is a single conversation to begin seeing things differently.
        </p>

        <motion.a href={WA} target="_blank" rel="noopener noreferrer"
          whileHover={{ scale:1.06, boxShadow:'0 16px 48px rgba(37,211,102,0.38)' }}
          whileTap={{ scale:0.97 }}
          style={{
            display:'inline-flex', alignItems:'center', gap:12,
            padding:'18px 48px', borderRadius:50,
            background:'linear-gradient(135deg,#25d366,#1da851)',
            color:'white', fontFamily:'Poppins,sans-serif', fontWeight:600,
            fontSize:16, letterSpacing:'0.04em', textDecoration:'none',
            boxShadow:'0 8px 32px rgba(37,211,102,0.3)', cursor:'pointer',
          }}>
          <WAIcon />
          Message on WhatsApp
        </motion.a>
      </motion.div>
    </section>
  )
}

function WAIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
