const INSTAGRAM = 'https://www.instagram.com/secondprime2377?igsh=eDE3cnd3MW4zaWs5&utm_source=qr'
const YOUTUBE = 'https://youtube.com/@secondprime2026?si=Vh1R6s2HmZIWOCj6'

export default function Footer() {
  return (
    <footer style={{ background:'#1a1a1a', padding:'56px 24px 36px', textAlign:'center' }}>

      {/* Flower */}
      <div style={{ display:'flex', justifyContent:'center', marginBottom:18 }}>
        <svg width="40" height="40" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0,45,90,135,180,225,270,315].map((a,i) => (
            <ellipse key={i} cx="36" cy="36" rx="6" ry="14" fill="#c9a96e" fillOpacity="0.65" transform={`rotate(${a} 36 36)`} />
          ))}
          <circle cx="36" cy="36" r="8" fill="#c9a96e" />
          <circle cx="36" cy="36" r="4" fill="#1a1a1a" />
        </svg>
      </div>

      <p style={{ fontFamily:'Playfair Display,serif', fontSize:20, fontWeight:600, color:'#c9a96e', marginBottom:6 }}>
        The JCM Second Prime
      </p>
      <p style={{ fontFamily:'Poppins,sans-serif', fontSize:13, color:'#888', fontStyle:'italic', marginBottom:32 }}>
        Lifelong Fitness and Clarity.
      </p>

      {/* Social links */}
      <div style={{ display:'flex', justifyContent:'center', gap:20, marginBottom:32 }}>
        {/* Instagram */}
        <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"
          style={{ display:'flex', alignItems:'center', gap:8, padding:'10px 22px', borderRadius:50, border:'1px solid #333', textDecoration:'none', transition:'all 0.3s' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor='#c9a96e'; e.currentTarget.style.background='rgba(201,169,110,0.08)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor='#333'; e.currentTarget.style.background='transparent' }}
        >
          <InstagramIcon />
          <span style={{ fontFamily:'Poppins,sans-serif', fontSize:13, fontWeight:500, color:'#aaa' }}>Instagram</span>
        </a>

        {/* YouTube */}
        <a href={YOUTUBE} target="_blank" rel="noopener noreferrer"
          style={{ display:'flex', alignItems:'center', gap:8, padding:'10px 22px', borderRadius:50, border:'1px solid #333', textDecoration:'none', transition:'all 0.3s' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor='#c9a96e'; e.currentTarget.style.background='rgba(201,169,110,0.08)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor='#333'; e.currentTarget.style.background='transparent' }}
        >
          <YouTubeIcon />
          <span style={{ fontFamily:'Poppins,sans-serif', fontSize:13, fontWeight:500, color:'#aaa' }}>YouTube</span>
        </a>
      </div>

      <div style={{ width:40, height:1, background:'#2e2e2e', margin:'0 auto 20px' }} />

      <p style={{ fontFamily:'Poppins,sans-serif', fontSize:12, color:'#444' }}>
        &copy; {new Date().getFullYear()} JCM Second Prime. All rights reserved.
      </p>
    </footer>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="#c9a96e" strokeWidth="1.8"/>
      <circle cx="12" cy="12" r="4.5" stroke="#c9a96e" strokeWidth="1.8"/>
      <circle cx="17.5" cy="6.5" r="1" fill="#c9a96e"/>
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg width="20" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="20" height="16" rx="4" stroke="#c9a96e" strokeWidth="1.8"/>
      <path d="M10 9l5 3-5 3V9z" fill="#c9a96e"/>
    </svg>
  )
}
