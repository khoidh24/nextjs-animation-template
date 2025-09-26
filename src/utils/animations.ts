import gsap from 'gsap'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

//*: Animation khi vào trang
export const pageInLoadingAnimation = () => {
  const banners = [
    document.getElementById('banner-1'),
    document.getElementById('banner-2'),
    document.getElementById('banner-3'),
    document.getElementById('banner-4'),
  ].filter(Boolean)

  if (banners.length === 4) {
    const tl = gsap.timeline()

    tl.set(banners, {
      yPercent: 0,
    }).to(banners, {
      yPercent: 100,
      stagger: 0.2,
    })
  }
}

//*: Animation khi rời trang
export const pageOutLoadingAnimation = (
  href: string,
  router: AppRouterInstance,
  onComplete?: () => void
) => {
  const banners = [
    document.getElementById('banner-1'),
    document.getElementById('banner-2'),
    document.getElementById('banner-3'),
    document.getElementById('banner-4'),
  ].filter(Boolean)

  if (banners.length === 4) {
    const tl = gsap.timeline()

    tl.set(banners, {
      yPercent: -100,
    }).to(banners, {
      yPercent: 0,
      stagger: 0.2,
      overwrite: true,
      onComplete: () => {
        router.push(href)
        onComplete?.()
      },
    })
  }
}
