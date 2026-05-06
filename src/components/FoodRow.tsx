'use client'
import { Star } from 'lucide-react'
import HealthBadge from './HealthBadge'
import type { FoodItem } from '@/data/foods'

type Props = {
  food: FoodItem
  isStarred: boolean
  onToggleStar: (id: number) => void
  isFirst: boolean
}

const cell = {
  fontFamily: "'RaviFaNum', sans-serif",
  fontSize: '18px',
  fontWeight: 700,
  letterSpacing: '-0.72px',
  color: 'white',
  whiteSpace: 'nowrap' as const,
}

export default function FoodRow({ food, isStarred, onToggleStar, isFirst }: Props) {
  const pct = `${food.proteinConversion.toLocaleString('fa-IR')}٪`
  const cal = food.calories.toLocaleString('fa-IR')
  const pro = `${food.protein.toLocaleString('fa-IR')} گرم`
  const carb = `${food.carbs.toLocaleString('fa-IR')} گرم`

  return (
    <>
      <div style={{ height: '1px', background: 'rgba(255,255,255,0.10)', width: '100%' }} />

      {/* Desktop row */}
      <div className="hidden md:flex" style={{ alignItems: 'center', height: '46px', width: '100%' }}>
        <div style={{ width: '36px', flexShrink: 0, display: 'flex', justifyContent: 'center' }}>
          <button
            onClick={() => onToggleStar(food.id)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: isStarred ? '#f5c518' : 'rgba(255,255,255,0.3)' }}
          >
            <Star size={16} fill={isStarred ? '#f5c518' : 'none'} />
          </button>
        </div>

        <div style={{ flex: '0 0 200px', ...cell, textDecoration: isFirst ? 'underline' : 'none' }}>
          {food.emoji} {food.name}
        </div>
        <div style={{ flex: 1, ...cell }}>{cal}</div>
        <div style={{ flex: 1, ...cell }}>{pro}</div>
        <div style={{ flex: 1, ...cell }}>{carb}</div>
        <div style={{ flex: 1, ...cell }}>{pct}</div>
        <div style={{ flex: '0 0 80px', display: 'flex', justifyContent: 'flex-end' }}>
          <HealthBadge score={food.healthScore} />
        </div>
      </div>

      {/* Mobile card */}
      <div className="flex md:hidden" style={{ alignItems: 'center', padding: '12px 0', gap: '12px' }}>
        <HealthBadge score={food.healthScore} />
        <div style={{ flex: 1 }}>
          <div style={{ ...cell, fontSize: '16px' }}>{food.emoji} {food.name}</div>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', fontFamily: "'RaviFaNum', sans-serif", marginTop: '4px' }}>
            {cal} کالری · {pro} پروتئین
          </div>
        </div>
        <button
          onClick={() => onToggleStar(food.id)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: isStarred ? '#f5c518' : 'rgba(255,255,255,0.3)', padding: '4px', flexShrink: 0 }}
        >
          <Star size={20} fill={isStarred ? '#f5c518' : 'none'} />
        </button>
      </div>
    </>
  )
}
