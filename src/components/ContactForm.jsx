import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const WA = 'https://wa.me/919818461302'

export default function ContactForm() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Hi Janet! I found you through your website.\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage: ${form.message}`
    )
    window.open(`${WA}?text=${msg}`, '_blank')
    setSent(true)
  }

  return (
    <section id="form" ref={ref} style={{
      padding: '100px 24px',
      background: '#fff',
    }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <motion.div initial={{ opacity:0, y:30 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:0.7 }}
          style={{ textAlign:'center', marginBottom:52 }}>
          <p style={{ fontFamily:'Poppins,sans-serif', fontSize:12, fontWeight:600, letterSpacing:'0.2em', textTransform:'uppercase', color:'#c9a96e', marginBottom:14 }}>
            Get In Touch
          </p>
          <h2 style={{ fontFamily:'Playfair Display,serif', fontSize:'clamp(2rem,4vw,3rem)', fontWeight:700, color:'#1e1e1e', lineHeight:1.2, marginBottom:16 }}>
            Begin Your Journey Today
          </h2>
          <p style={{ fontFamily:'Poppins,sans-serif', fontSize:15, color:'#7a6a5a', lineHeight:1.8 }}>
            Fill in your details and Janet will reach out to you personally via WhatsApp.
          </p>
          <div style={{ width:60, height:2, background:'linear-gradient(to right,#c9a96e,#e8d5b0)', margin:'20px auto 0', borderRadius:2 }} />
        </motion.div>

        <motion.div initial={{ opacity:0, y:30 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:0.7, delay:0.15 }}>
          {sent ? (
            <div style={{
              background:'linear-gradient(135deg,#fdf3e3,#fceee8)', border:'1px solid #e8d5b0',
              borderRadius:24, padding:'48px 32px', textAlign:'center',
            }}>
              <div style={{ fontSize:48, marginBottom:16 }}>🌸</div>
              <h3 style={{ fontFamily:'Playfair Display,serif', fontSize:24, color:'#1e1e1e', marginBottom:10 }}>Thank You!</h3>
              <p style={{ fontFamily:'Poppins,sans-serif', fontSize:15, color:'#7a6a5a', lineHeight:1.7 }}>
                Your message is on its way to Janet via WhatsApp. She will be in touch with you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:16 }}>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }} className="form-row">
                <input required value={form.name} onChange={e => setForm({...form, name:e.target.value})}
                  placeholder="Your Name *" style={inp} />
                <input type="email" required value={form.email} onChange={e => setForm({...form, email:e.target.value})}
                  placeholder="Email Address *" style={inp} />
              </div>
              <input type="tel" value={form.phone} onChange={e => setForm({...form, phone:e.target.value})}
                placeholder="Phone Number (optional)" style={inp} />
              <textarea required value={form.message} onChange={e => setForm({...form, message:e.target.value})}
                placeholder="Tell Janet a little about where you are in life right now..."
                rows={5} style={{ ...inp, resize:'vertical' }} />

              <div style={{ display:'flex', alignItems:'center', gap:16, flexWrap:'wrap', marginTop:8 }}>
                <motion.button type="submit"
                  whileHover={{ scale:1.04, boxShadow:'0 12px 36px rgba(201,169,110,0.38)' }}
                  whileTap={{ scale:0.97 }}
                  style={{
                    padding:'16px 44px', borderRadius:50, border:'none', cursor:'pointer',
                    background:'linear-gradient(135deg,#c9a96e,#b8935a)',
                    color:'white', fontFamily:'Poppins,sans-serif', fontWeight:600,
                    fontSize:15, letterSpacing:'0.05em',
                    boxShadow:'0 6px 24px rgba(201,169,110,0.3)',
                  }}>
                  Send Message →
                </motion.button>

                <a href={WA} target="_blank" rel="noopener noreferrer"
                  style={{ display:'flex', alignItems:'center', gap:8, fontFamily:'Poppins,sans-serif', fontSize:13, color:'#25d366', textDecoration:'none', fontWeight:500 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#25d366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Or message directly
                </a>
              </div>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 540px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

const inp = {
  padding: '14px 18px',
  borderRadius: 12,
  border: '1.5px solid #e8d5b0',
  fontFamily: 'Poppins, sans-serif',
  fontSize: 14,
  color: '#2d2d2d',
  background: '#fdf8f5',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
}
