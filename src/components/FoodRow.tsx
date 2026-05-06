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

// Base shared across all row cells — 18px → 14px (×0.8)
const cellBase = {
  fontFamily: "'RaviFaNum', sans-serif",
  fontSize: '14px',
  letterSpacing: '-0.56px',
  color: 'white',
  whiteSpace: 'nowrap' as const,
}
// Product name: bold (700)
const cellName = { ...cellBase, fontWeight: 700 }
// All other data cells: medium (500)
const cellData = { ...cellBase, fontWeight: 500 }

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
            <Star size={13} fill={isStarred ? '#f5c518' : 'none'} />
          </button>
        </div>

        <div style={{ flex: '0 0 200px', ...cellName, textDecoration: isFirst ? 'underline' : 'none' }}>
          {food.emoji} {food.name}
        </div>
        <div style={{ flex: 1, ...cellData }}>{cal}</div>
        <div style={{ flex: 1, ...cellData }}>{pro}</div>
        <div style={{ flex: 1, ...cellData }}>{carb}</div>
        <div style={{ flex: 1, ...cellData }}>{pct}</div>
        <div style={{ flex: '0 0 80px', display: 'flex', justifyContent: 'flex-end' }}>
          <HealthBadge score={food.healthScore} />
        </div>
        {/* Budget */}
        <div style={{ flex: '0 0 60px', ...cellData, textAlign: 'center', color: 'rgba(255,255,255,0.6)' }}>
          {food.budget}
        </div>
        {/* GI Index */}
        <div style={{
          flex: '0 0 60px',
          ...cellData,
          textAlign: 'center',
          color: food.gi === 0 ? 'rgba(255,255,255,0.35)'
               : food.gi < 55  ? '#4ade80'
               : food.gi < 70  ? '#facc15'
               : '#f87171',
        }}>
          {food.gi === 0 ? '—' : food.gi}
        </div>
        {/* Satiety */}
        <div style={{ flex: '0 0 80px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{
            flex: 1,
            height: '4px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '2px',
            overflow: 'hidden',
          }}>
            <div style={{
              width: `${food.satiety}%`,
              height: '100%',
              background: food.satiety >= 70 ? '#4ade80' : food.satiety >= 40 ? '#facc15' : '#f87171',
              borderRadius: '2px',
            }} />
          </div>
          <span style={{ ...cellData, fontSize: '12px', color: 'rgba(255,255,255,0.5)', flexShrink: 0 }}>
            {food.satiety}
          </span>
        </div>
      </div>

      {/* Mobile card */}
      <div className="flex md:hidden" style={{ alignItems: 'center', padding: '12px 0', gap: '12px' }}>
        <HealthBadge score={food.healthScore} />
        <div style={{ flex: 1 }}>
          <div style={{ ...cellName, fontSize: '13px' }}>{food.emoji} {food.name}</div>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', fontFamily: "'RaviFaNum', sans-serif", fontWeight: 500, marginTop: '4px' }}>
            {cal} کالری · {pro} پروتئین
          </div>
        </div>
        <button
          onClick={() => onToggleStar(food.id)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: isStarred ? '#f5c518' : 'rgba(255,255,255,0.3)', padding: '4px', flexShrink: 0 }}
        >
          <Star size={16} fill={isStarred ? '#f5c518' : 'none'} />
        </button>
      </div>
    </>
  )
}
