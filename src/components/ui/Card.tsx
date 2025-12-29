'use client'

import { HTMLAttributes, forwardRef, useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  cursorFollow?: boolean
  disableAnimation?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, cursorFollow = true, disableAnimation = false, children, ...props }, ref) => {
    const internalRef = useRef<HTMLDivElement>(null)
    const [isHovered, setIsHovered] = useState(false)
    const [fillDirection, setFillDirection] = useState<'left' | 'right' | 'top' | 'bottom'>('right')

    // Use ref callback to set both internal and external refs
    const setRefs = useCallback((node: HTMLDivElement | null) => {
      internalRef.current = node
      if (typeof ref === 'function') {
        ref(node)
      } else if (ref) {
        ref.current = node
      }
    }, [ref])

    // Determine entry direction when mouse enters
    const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
      const currentRef = internalRef.current
      if (!currentRef || !cursorFollow) {
        setIsHovered(true)
        return
      }

      const rect = currentRef.getBoundingClientRect()
      const cardCenterX = rect.left + rect.width / 2
      const cardCenterY = rect.top + rect.height / 2
      const mouseX = e.clientX
      const mouseY = e.clientY

      const deltaX = mouseX - cardCenterX
      const deltaY = mouseY - cardCenterY

      // Determine which side the cursor entered from
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        setFillDirection(deltaX > 0 ? 'left' : 'right')
      } else {
        setFillDirection(deltaY > 0 ? 'top' : 'bottom')
      }

      setIsHovered(true)
    }, [cursorFollow])

    const handleMouseLeave = useCallback(() => {
      setIsHovered(false)
    }, [])

    const cardClassName = cn(
      'relative rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg overflow-hidden transform-gpu',
      hover && 'hover:shadow-xl transition-shadow duration-300',
      className
    )

    if (disableAnimation) {
      return (
        <div
          ref={setRefs}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={cardClassName}
          {...props}
        >
          {cursorFollow && (
            <div
              className={cn(
                'card-fill-overlay',
                isHovered && 'active',
                isHovered && `fill-${fillDirection}`
              )}
            />
          )}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      )
    }

    return (
      <motion.div
        ref={setRefs}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cardClassName}
        {...props}
      >
        {/* Directional fill overlay - CSS animation for performance */}
        {cursorFollow && (
          <div
            className={cn(
              'card-fill-overlay',
              isHovered && 'active',
              isHovered && `fill-${fillDirection}`
            )}
          />
        )}
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    )
  }
)

Card.displayName = 'Card'

export default Card
