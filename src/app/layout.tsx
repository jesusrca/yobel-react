import type { Metadata } from 'next'
import '../index.css'
import { Layout } from '../components/layout/Layout'
import { CountryProvider } from '../../contexts/CountryContext'
import { neueAugenblick } from '../fonts/NeueAugenblick'

export const metadata: Metadata = {
  title: 'Yobel Final Front',
  description: 'Yobel SCM Logistics Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={neueAugenblick.variable}>
        <CountryProvider>
          <Layout>
            {children}
          </Layout>
        </CountryProvider>
      </body>
    </html>
  )
}
