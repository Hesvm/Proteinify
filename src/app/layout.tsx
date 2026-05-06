import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'پروتئینیفای — ماشین حساب آنلاین پروتئین و کالری',
  description: 'ماشین حساب آنلاین پروتئین و کالری مواد غذایی',
  icons: { icon: '/logo.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body style={{ fontFamily: "'RaviFaNum', sans-serif" }}>
        {children}
      </body>
    </html>
  )
}
