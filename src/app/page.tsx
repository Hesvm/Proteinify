import Navbar from '@/components/Navbar'
import FoodTable from '@/components/FoodTable'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#000', paddingTop: '56px' }}>
      <Navbar />

      {/* Hero */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
        paddingTop: '56px',
        paddingBottom: '56px',
        textAlign: 'center',
      }}>
        <Image
          src="/logo.svg"
          alt="Proteinify"
          width={82}
          height={82}
          style={{ marginBottom: '8px' }}
        />
        <h1 style={{
          fontFamily: "'RaviFaNum', sans-serif",
          fontSize: '32px',
          fontWeight: 900,
          letterSpacing: '-1.28px',
          color: 'white',
          margin: 0,
        }}>
          پروتئینیفای
        </h1>
        <p style={{
          fontFamily: "'RaviFaNum', sans-serif",
          fontSize: '18px',
          fontWeight: 500,
          letterSpacing: '-0.72px',
          color: 'rgba(255,255,255,0.5)',
          maxWidth: '327px',
          margin: 0,
        }}>
          ماشین حساب آنلاین پروتئین و کالری مواد غذایی
        </p>
      </div>

      <main style={{ paddingBottom: '80px' }}>
        <FoodTable />
      </main>
    </div>
  )
}
