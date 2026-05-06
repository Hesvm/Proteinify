'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

export type Allergy = 'nuts' | 'dairy' | 'gluten' | 'shellfish' | 'eggs'
export type DietType = 'vegan' | 'keto' | 'none'

export type HealthProfile = {
  email: string
  allergies: Allergy[]
  diet: DietType
}

type Ctx = {
  profile: HealthProfile | null
  setProfile: (p: HealthProfile) => void
  clearProfile: () => void
}

const HealthProfileContext = createContext<Ctx | null>(null)

export function HealthProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfileState] = useState<HealthProfile | null>(null)
  return (
    <HealthProfileContext.Provider value={{
      profile,
      setProfile: setProfileState,
      clearProfile: () => setProfileState(null),
    }}>
      {children}
    </HealthProfileContext.Provider>
  )
}

export function useHealthProfile() {
  const ctx = useContext(HealthProfileContext)
  if (!ctx) throw new Error('useHealthProfile must be inside HealthProfileProvider')
  return ctx
}
