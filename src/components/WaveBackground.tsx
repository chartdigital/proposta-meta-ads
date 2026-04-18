const WaveBackground = () => (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
    <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" className="w-full h-full opacity-[0.12]">
      <defs>
        <radialGradient id="g1" cx="20%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#1a5cff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#050508" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="g2" cx="85%" cy="70%" r="45%">
          <stop offset="0%" stopColor="#1a5cff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#050508" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1440" height="900" fill="url(#g1)" />
      <rect width="1440" height="900" fill="url(#g2)" />
      <g stroke="#1a5cff" strokeWidth="0.6" fill="none" opacity="0.6">
        {[200, 260, 320, 380, 440, 500, 560, 620, 680, 740].map((y) => (
          <path key={y} d={`M-100,${y} Q200,${y - 100} 500,${y + 20} T1100,${y} T1600,${y - 20}`} />
        ))}
      </g>
    </svg>
  </div>
);

export default WaveBackground;
