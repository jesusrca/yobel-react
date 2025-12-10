import localFont from 'next/font/local'

export const NeueAugenblick = localFont({
  src: [
    {
      path: '../../public/fonts/NeueAugenblick-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeueAugenblick-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeueAugenblick-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeueAugenblick-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeueAugenblick-RegularItalic.ttf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-neue-augenblick',
})