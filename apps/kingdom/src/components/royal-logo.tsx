interface RoyalLogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function RoyalLogo({ className = "", size = "md" }: RoyalLogoProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  }

  return (
    <div className={`royal-crest rounded-lg p-2 ${className}`}>
      <svg
        className={`${sizeClasses[size]} text-primary-foreground`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {/* Castle with heraldic elements */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 21h18M5 21V7l1-1h2l1 1v2l1-1h2l1 1v2l1-1h2l1 1v14M9 21v-4a2 2 0 114 0v4M7 13h2m6 0h2"
        />
        {/* Crown on top */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7l1-2 3 1 3-1 1 2" />
        {/* Heraldic shield */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 15s2-1 2-3V9l-2-1-2 1v3c0 2 2 3 2 3z"
        />
      </svg>
    </div>
  )
}
