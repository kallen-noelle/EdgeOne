export function FishMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="fish-body" x1="12" y1="12" x2="42" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9BF9E6" />
          <stop offset="1" stopColor="#12A38F" />
        </linearGradient>
      </defs>
      <path d="M15 24c0-6.6 5.8-11.6 13-11.6S41 17.4 41 24s-5.8 11.6-13 11.6S15 30.6 15 24Z" fill="url(#fish-body)" opacity="0.92" />
      <path d="M15 24 5 15.5v17L15 24Z" fill="url(#fish-body)" opacity="0.7" />
      <path d="M26 12.2c1.4-3 3.8-4.4 6.8-4.2-.4 3-2.2 5.2-5.4 6" fill="#9BF9E6" opacity="0.75" />
      <circle cx="33.4" cy="20.6" r="2.3" fill="#04231D" />
      <circle cx="34.2" cy="19.8" r="0.75" fill="#E9F7F5" />
      <path d="M29 28.4c2 1.3 4.4 1.3 6.4 0" stroke="#04231D" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}
