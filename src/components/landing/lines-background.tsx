'use client'

import { cn } from '@/lib/utils'

export interface LinesBackgroundProps {
  className?: string
  lineColor?: string
  /** Gap between bars in pixels (default 2 = condensed) */
  gap?: number
  opacity?: number
  /** Angle in degrees - 0 = horizontal lines */
  angle?: number
}

/**
 * Single-direction lines (no grid). Default: 0deg, 2px gap between bars.
 */
export function LinesBackground({
  className,
  lineColor = 'rgba(0,0,0,0.07)',
  gap = 2,
  opacity = 1,
  angle = 0,
}: LinesBackgroundProps) {
  const lineWidth = 1
  const period = lineWidth + gap
  return (
    <div
      className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}
      aria-hidden
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            ${angle}deg,
            transparent 0,
            transparent ${period - lineWidth}px,
            ${lineColor} ${period - lineWidth}px,
            ${lineColor} ${period}px
          )`,
          opacity,
        }}
      />
    </div>
  )
}
