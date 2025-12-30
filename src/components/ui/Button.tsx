'use client'

import { ButtonHTMLAttributes, forwardRef, cloneElement, isValidElement } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onDrag' | 'onDragStart' | 'onDragEnd'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, asChild, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none'
    
    const variants = {
      primary: 'bg-[#64ffda] text-[#0a192f] hover:bg-[#52e0c4] shadow-lg hover:shadow-[0_0_20px_rgba(100,255,218,0.3)] font-mono',
      secondary: 'bg-[#112240] text-[#ccd6f6] hover:bg-[#233554] border border-[#233554]',
      outline: 'border-2 border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 font-mono',
      ghost: 'text-[#8892b0] hover:text-[#64ffda] hover:bg-[#112240]',
    }
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    const buttonClassName = cn(baseStyles, variants[variant], sizes[size], className)

    if (asChild && isValidElement(children)) {
      const isFullWidth = className?.includes('w-full')
      return (
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={isFullWidth ? "block w-full" : "inline-block"}
        >
          {cloneElement(children as React.ReactElement, {
            className: cn(buttonClassName, (children as React.ReactElement).props.className),
          })}
        </motion.div>
      )
    }

    // Extract drag-related props that conflict with Framer Motion
    const { onDrag, onDragStart, onDragEnd, ...restProps } = props as any

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={buttonClassName}
        {...(restProps as HTMLMotionProps<'button'>)}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export default Button

