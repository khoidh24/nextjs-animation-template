'use client'

import { useState, useTransition } from 'react'

import { usePathname, useRouter } from 'next/navigation'

import { pageOutLoadingAnimation } from '../utils/animations'
import { cn } from '../utils/styleMerge'

/** *
 * @param href: Dùng để chứa link routing của trang
 * @param label: Dùng để chứa label của link
 */

type Props = {
  href: string
  label: string
}

const TransitionLink = ({ href, label }: Props) => {
  const router = useRouter()
  const pathname = usePathname()
  const [animating, setAnimating] = useState(false)

  const handleClick = () => {
    // *: Kiểm tra nếu link đi đến khác với link hiện tại
    if (pathname !== href) {
      setAnimating(true)
      pageOutLoadingAnimation(href, router, () => setAnimating(false))
    }
  }

  return (
    <button
      className={cn('text-xl text-neutral-900 hover:text-neutral-700')}
      onClick={handleClick}
      title={label}
      disabled={animating}
    >
      {label}
    </button>
  )
}

export default TransitionLink
