import type { Metadata } from 'next'
import './globals.css'
import { HealthProfileProvider } from '@/context/HealthProfileContext'

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export const metadata: Metadata = {
  title: 'پروتئینیفای — ماشین حساب آنلاین پروتئین و کالری',
  description: 'ماشین حساب آنلاین پروتئین و کالری مواد غذایی',
  icons: { icon: `${base}/logo.svg` },
}

const fontFaces = `
  @font-face {
    font-family: 'Ravi';
    src: url('${base}/fonts/Ravi-VF.ttf') format('truetype');
    font-weight: 100 900;
    font-display: swap;
  }
  @font-face {
    font-family: 'RaviFaNum';
    src: url('${base}/fonts/RaviFaNum-VF.ttf') format('truetype');
    font-weight: 100 900;
    font-display: swap;
  }
  @font-face {
    font-family: 'RaviNoEn';
    src: url('${base}/fonts/RaviNoEn-VF.ttf') format('truetype');
    font-weight: 100 900;
    font-display: swap;
  }
`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <style dangerouslySetInnerHTML={{ __html: fontFaces }} />
      </head>
      <body style={{ fontFamily: "'RaviFaNum', sans-serif" }}>
        <HealthProfileProvider>
          {children}
        </HealthProfileProvider>
      </body>
    </html>
  )
}
