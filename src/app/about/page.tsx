import Navbar from '@/components/Navbar'

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#000' }}>
      <Navbar />
      <main style={{
        maxWidth: '640px',
        margin: '80px auto',
        padding: '0 24px',
        fontFamily: "'RaviFaNum', sans-serif",
        direction: 'rtl',
      }}>
        <h1 style={{ fontSize: '28px', fontWeight: 900, color: 'white', letterSpacing: '-1px', marginBottom: '24px' }}>
          درباره پروتئینیفای
        </h1>
        <p style={{ fontSize: '18px', fontWeight: 500, color: 'rgba(255,255,255,0.7)', lineHeight: 2, letterSpacing: '-0.5px' }}>
          پروتئینیفای یک ابزار رایگان برای مشاهده اطلاعات تغذیه‌ای مواد غذایی و محاسبه پروتئین و کالری است.
          هدف ما کمک به انتخاب هوشمندانه‌تر مواد غذایی برای رسیدن به اهداف سلامتی و تناسب اندام است.
        </p>
        <p style={{ marginTop: '24px', fontSize: '16px', fontWeight: 500, color: 'rgba(255,255,255,0.4)', letterSpacing: '-0.5px' }}>
          اطلاعات تغذیه‌ای بر اساس مقادیر استاندارد به ازای هر ۱۰۰ گرم از ماده غذایی ارائه می‌شود.
        </p>
      </main>
    </div>
  )
}
