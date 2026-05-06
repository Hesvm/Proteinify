'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useHealthProfile, type Allergy, type DietType } from '@/context/HealthProfileContext'

const ALLERGIES: { label: string; value: Allergy }[] = [
  { label: 'Nuts',      value: 'nuts'      },
  { label: 'Dairy',     value: 'dairy'     },
  { label: 'Gluten',    value: 'gluten'    },
  { label: 'Shellfish', value: 'shellfish' },
  { label: 'Eggs',      value: 'eggs'      },
]

const DIETS: { label: string; value: DietType }[] = [
  { label: 'No preference', value: 'none'  },
  { label: 'Vegan',         value: 'vegan' },
  { label: 'Keto',          value: 'keto'  },
]

const s = {
  page: {
    minHeight: '100vh',
    background: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
    fontFamily: "'RaviFaNum', sans-serif",
  } as React.CSSProperties,
  card: {
    width: '100%',
    maxWidth: '420px',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    padding: '40px 32px',
  } as React.CSSProperties,
  title: { fontSize: '22px', fontWeight: 700, color: '#fff', marginBottom: '8px' } as React.CSSProperties,
  sub: { fontSize: '14px', color: 'rgba(255,255,255,0.45)', marginBottom: '32px' } as React.CSSProperties,
  label: { fontSize: '13px', color: 'rgba(255,255,255,0.55)', marginBottom: '6px', display: 'block' } as React.CSSProperties,
  input: {
    width: '100%',
    background: 'rgba(255,255,255,0.07)',
    border: '1px solid rgba(255,255,255,0.15)',
    padding: '10px 14px',
    color: '#fff',
    fontFamily: "'RaviFaNum', sans-serif",
    fontSize: '14px',
    outline: 'none',
    marginBottom: '16px',
  } as React.CSSProperties,
  btn: {
    width: '100%',
    background: '#e02f44',
    border: 'none',
    padding: '12px',
    color: '#fff',
    fontFamily: "'RaviFaNum', sans-serif",
    fontSize: '15px',
    fontWeight: 700,
    cursor: 'pointer',
    marginTop: '8px',
  } as React.CSSProperties,
  chip: (active: boolean): React.CSSProperties => ({
    padding: '6px 14px',
    borderRadius: '999px',
    border: `1px solid ${active ? '#e02f44' : 'rgba(255,255,255,0.2)'}`,
    background: active ? 'rgba(224,47,68,0.15)' : 'transparent',
    color: active ? '#e02f44' : 'rgba(255,255,255,0.55)',
    fontFamily: "'RaviFaNum', sans-serif",
    fontSize: '13px',
    cursor: 'pointer',
  }),
  chipRow: { display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' } as React.CSSProperties,
  step: { fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginBottom: '20px' } as React.CSSProperties,
}

export default function LoginPage() {
  const router = useRouter()
  const { setProfile } = useHealthProfile()

  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [allergies, setAllergies] = useState<Allergy[]>([])
  const [diet, setDiet] = useState<DietType>('none')

  const toggleAllergy = (v: Allergy) =>
    setAllergies(prev => prev.includes(v) ? prev.filter(a => a !== v) : [...prev, v])

  const finish = () => {
    setProfile({ email, allergies, diet })
    router.push('/')
  }

  return (
    <div style={s.page}>
      <div style={s.card}>

        {/* Step 1: Login */}
        {step === 1 && (
          <>
            <div style={s.step}>Step 1 of 3</div>
            <div style={s.title}>Welcome to Proteinify</div>
            <div style={s.sub}>Sign in to personalise your health profile</div>
            <label style={s.label}>Email</label>
            <input style={s.input} type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" />
            <label style={s.label}>Password</label>
            <input style={s.input} type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" />
            <button style={s.btn} onClick={() => email && setStep(2)}>Continue →</button>
          </>
        )}

        {/* Step 2: Allergies */}
        {step === 2 && (
          <>
            <div style={s.step}>Step 2 of 3</div>
            <div style={s.title}>Any allergies?</div>
            <div style={s.sub}>We'll flag conflicting foods for you</div>
            <div style={s.chipRow}>
              {ALLERGIES.map(a => (
                <button key={a.value} style={s.chip(allergies.includes(a.value))} onClick={() => toggleAllergy(a.value)}>
                  {a.label}
                </button>
              ))}
            </div>
            <button style={s.btn} onClick={() => setStep(3)}>Continue →</button>
          </>
        )}

        {/* Step 3: Diet */}
        {step === 3 && (
          <>
            <div style={s.step}>Step 3 of 3</div>
            <div style={s.title}>Diet preference?</div>
            <div style={s.sub}>Foods matching your diet get a bonus score</div>
            <div style={s.chipRow}>
              {DIETS.map(d => (
                <button key={d.value} style={s.chip(diet === d.value)} onClick={() => setDiet(d.value)}>
                  {d.label}
                </button>
              ))}
            </div>
            <button style={s.btn} onClick={finish}>Done — show my foods</button>
          </>
        )}

      </div>
    </div>
  )
}
