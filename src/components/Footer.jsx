const INSTAGRAM = 'https://www.instagram.com/secondprime2377?igsh=eDE3cnd3MW4zaWs5&utm_source=qr'
const YOUTUBE = 'https://youtube.com/@secondprime2026?si=Vh1R6s2HmZIWOCj6'
const WA = 'https://wa.me/919818461302'

const VIDEOS = [
  { id: 'TYPguASuizU', title: 'JCM Second Prime' },
  { id: 'eh2_MevffKg', title: 'Midlife Renewal' },
  { id: '3w-amv61w78', title: 'Rejuvenation Journey' },
]

export default function Footer() {
  return (
    <footer style={{ background:'#1a1a1a', padding:'56px 24px 36px' }}>

      {/* YouTube Videos */}
      <div style={{ maxWidth:1000, margin:'0 auto 48px' }}>
        <p style={{ fontFamily:'Poppins,sans-serif', fontSize:11, fontWeight:600, letterSpacing:'0.2em', textTransform:'uppercase', color:'#c9a96e', textAlign:'center', marginBottom:8 }}>
          Watch on YouTube
        </p>
        <h3 style={{ fontFamily:'Playfair Display,serif', fontSize:'clamp(1.4rem,3vw,2rem)', fontWeight:700, color:'white', textAlign:'center', marginBottom:32 }}>
          Janet's Channel
        </h3>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16 }} className="video-grid">
          {VIDEOS.map(v => (
            <div key={v.id} style={{ borderRadius:12, overflow:'hidden', boxShadow:'0 4px 20px rgba(0,0,0,0.4)' }}>
              <div style={{ position:'relative', paddingBottom:'56.25%', height:0 }}>
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position:'absolute', top:0, left:0, width:'100%', height:'100%', border:'none' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ width:60, height:1, background:'#2e2e2e', margin:'0 auto 40px' }} />

      {/* Footer info */}
      <div style={{ maxWidth:800, margin:'0 auto', textAlign:'center' }}>
        <div style={{ display:'flex', justifyContent:'center', marginBottom:16 }}>
          <svg width="36" height="36" viewBox="0 0 72 72" fill="none">
            {[0,45,90,135,180,225,270,315].map((a,i) => (
              <ellipse key={i} cx="36" cy="36" rx="6" ry="14" fill="#c9a96e" fillOpacity="0.65" transform={`rotate(${a} 36 36)`} />
            ))}
            <circle cx="36" cy="36" r="8" fill="#c9a96e" />
            <circle cx="36" cy="36" r="4" fill="#1a1a1a" />
          </svg>
        </div>

        <p style={{ fontFamily:'Playfair Display,serif', fontSize:20, fontWeight:600, color:'#c9a96e', marginBottom:4 }}>
          The JCM Second Prime
        </p>
        <p style={{ fontFamily:'Poppins,sans-serif', fontSize:13, color:'#888', fontStyle:'italic', marginBottom:24 }}>
          Life Coach for Midlife Rejuvenation &amp; Renewal
        </p>

        {/* Contact details */}
        <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:16, marginBottom:28 }}>
          <a href={`tel:+919818461302`} style={{ display:'flex', alignItems:'center', gap:6, color:'#aaa', textDecoration:'none', fontFamily:'Poppins,sans-serif', fontSize:13 }}>
            <span>📞</span> +91 98184 61302
          </a>
          <a href="mailto:jcmsecondprime@gmail.com" style={{ display:'flex', alignItems:'center', gap:6, color:'#aaa', textDecoration:'none', fontFamily:'Poppins,sans-serif', fontSize:13 }}>
            <span>✉️</span> jcmsecondprime@gmail.com
          </a>
          <a href={WA} target="_blank" rel="noopener noreferrer" style={{ display:'flex', alignItems:'center', gap:6, color:'#aaa', textDecoration:'none', fontFamily:'Poppins,sans-serif', fontSize:13 }}>
            <span>💬</span> WhatsApp
          </a>
        </div>

        {/* Social links */}
        <div style={{ display:'flex', justifyContent:'center', gap:16, marginBottom:28, flexWrap:'wrap' }}>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"
            style={{ display:'flex', alignItems:'center', gap:8, padding:'9px 20px', borderRadius:50, border:'1px solid #333', textDecoration:'none' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor='#c9a96e' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='#333' }}>
            <InstagramIcon />
            <span style={{ fontFamily:'Poppins,sans-serif', fontSize:13, fontWeight:500, color:'#aaa' }}>Instagram</span>
          </a>
          <a href={YOUTUBE} target="_blank" rel="noopener noreferrer"
            style={{ display:'flex', alignItems:'center', gap:8, padding:'9px 20px', borderRadius:50, border:'1px solid #333', textDecoration:'none' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor='#c9a96e' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='#333' }}>
            <YouTubeIcon />
            <span style={{ fontFamily:'Poppins,sans-serif', fontSize:13, fontWeight:500, color:'#aaa' }}>YouTube</span>
          </a>
        </div>

        <div style={{ width:40, height:1, background:'#2e2e2e', margin:'0 auto 20px' }} />
        <p style={{ fontFamily:'Poppins,sans-serif', fontSize:12, color:'#444' }}>
          &copy; {new Date().getFullYear()} JCM Second Prime. All rights reserved.
        </p>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .video-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 900px) and (min-width: 641px) {
          .video-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </footer>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="#c9a96e" strokeWidth="1.8"/>
      <circle cx="12" cy="12" r="4.5" stroke="#c9a96e" strokeWidth="1.8"/>
      <circle cx="17.5" cy="6.5" r="1" fill="#c9a96e"/>
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg width="20" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="4" width="20" height="16" rx="4" stroke="#c9a96e" strokeWidth="1.8"/>
      <path d="M10 9l5 3-5 3V9z" fill="#c9a96e"/>
    </svg>
  )
}
