import { Inter, IBM_Plex_Sans, Lato } from 'next/font/google'
import './globals.css'

// Components
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

import { SpeedInsights } from "@vercel/speed-insights/next"


const inter = Lato({ weight: '400', subsets: ['latin'] })

export const metadata = {
  title: 'Bryan Melvison',
  description: 'Made by Bryan Melvison',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <SpeedInsights />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
