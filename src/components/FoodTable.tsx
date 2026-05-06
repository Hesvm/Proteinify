'use client'
import { useState, useMemo } from 'react'
import { Search, Star, ChevronUp, ChevronDown, ChevronsUpDown } from 'lucide-react'
import FoodRow from './FoodRow'
import { useStarred } from '@/hooks/useStarred'
import { foods } from '@/data/foods'
import type { FoodItem } from '@/data/foods'

type SortKey = 'popularity' | 'calories' | 'protein' | 'carbs' | 'proteinConversion' | 'healthScore'
type SortDir = 'asc' | 'desc'

const columns: { key: SortKey; label: string }[] = [
  { key: 'popularity',        label: 'محصول' },
  { key: 'calories',          label: 'کالری ۱۰۰ گرم' },
  { key: 'protein',           label: 'پروتئین' },
  { key: 'carbs',             label: 'کربوهیدرات' },
  { key: 'proteinConversion', label: 'کانورژن پروتئین' },
  { key: 'healthScore',       label: 'نمره سلامتی' },
]

function SortIcon({ active, dir }: { active: boolean; dir: SortDir }) {
  if (!active) return <ChevronsUpDown size={10} style={{ color: 'rgba(255,255,255,0.3)' }} />
  return dir === 'asc'
    ? <ChevronUp size={10} style={{ color: 'white' }} />
    : <ChevronDown size={10} style={{ color: 'white' }} />
}

export default function FoodTable() {
  const { isStarred, toggle } = useStarred()
  const [query, setQuery] = useState('')
  const [showStarredOnly, setShowStarredOnly] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [sortKey, setSortKey] = useState<SortKey>('popularity')
  const [sortDir, setSortDir] = useState<SortDir>('asc')

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(key)
      setSortDir(key === 'popularity' ? 'asc' : 'desc')
    }
  }

  const displayed = useMemo(() => {
    let list = [...foods]
    if (query.trim()) {
      const q = query.trim().toLowerCase()
      list = list.filter(f => f.name.includes(q) || f.emoji.includes(q))
    }
    if (showStarredOnly) {
      list = list.filter(f => isStarred(f.id))
    }
    list.sort((a, b) => {
      const va = a[sortKey] as number
      const vb = b[sortKey] as number
      return sortDir === 'asc' ? va - vb : vb - va
    })
    return list
  }, [query, showStarredOnly, sortKey, sortDir, isStarred])

  const buttonStyle = {
    background: 'rgba(255,255,255,0.08)',
    border: 'none',
    cursor: 'pointer',
    padding: '8px 12px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontFamily: "'RaviFaNum', sans-serif",
    fontSize: '18px',
    fontWeight: 500,
    letterSpacing: '-0.72px',
    color: 'white',
  }

  return (
    <div style={{ maxWidth: '1091px', margin: '0 auto', padding: '0 18px' }}>

      {/* Search + Starred row */}
      <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '9px', marginBottom: '24px' }}>
        <button
          onClick={() => setShowStarredOnly(v => !v)}
          style={{
            ...buttonStyle,
            background: showStarredOnly ? 'rgba(245,197,24,0.15)' : 'rgba(255,255,255,0.08)',
            color: showStarredOnly ? '#f5c518' : 'white',
          }}
        >
          <span>ستاره دار ها</span>
          <Star size={18} fill={showStarredOnly ? '#f5c518' : 'none'} color={showStarredOnly ? '#f5c518' : 'white'} />
        </button>

        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          {searchOpen ? (
            <input
              autoFocus
              value={query}
              onChange={e => setQuery(e.target.value)}
              onBlur={() => { if (!query) setSearchOpen(false) }}
              placeholder="جستجوی مواد غذایی..."
              style={{ ...buttonStyle, outline: 'none', width: '220px', fontSize: '16px' }}
              dir="rtl"
            />
          ) : (
            <button onClick={() => setSearchOpen(true)} style={buttonStyle}>
              <span>جستجو</span>
              <Search size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Column headers — desktop */}
      <div className="hidden md:flex" style={{
        alignItems: 'center',
        paddingBottom: '12px',
        borderBottom: '1px solid rgba(255,255,255,0.18)',
      }}>
        <div style={{ width: '36px', flexShrink: 0 }} />
        {columns.map(col => (
          <div
            key={col.key}
            onClick={() => handleSort(col.key)}
            style={{
              flex: col.key === 'popularity' ? '0 0 200px' : col.key === 'healthScore' ? '0 0 80px' : 1,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              userSelect: 'none',
              fontFamily: "'RaviFaNum', sans-serif",
              fontSize: '14px',
              fontWeight: 300,
              letterSpacing: '-0.56px',
              color: sortKey === col.key ? 'white' : 'rgba(255,255,255,0.5)',
              whiteSpace: 'nowrap',
              justifyContent: col.key === 'healthScore' ? 'flex-end' : 'flex-start',
            }}
          >
            {col.key !== 'popularity' && <SortIcon active={sortKey === col.key} dir={sortDir} />}
            <span>{col.label}</span>
            {col.key === 'popularity' && <SortIcon active={sortKey === col.key} dir={sortDir} />}
          </div>
        ))}
      </div>

      {/* Rows */}
      <div>
        {displayed.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '60px 0',
            color: 'rgba(255,255,255,0.3)',
            fontFamily: "'RaviFaNum', sans-serif",
            fontSize: '18px',
          }}>
            {showStarredOnly ? 'هیچ آیتم ستاره‌داری وجود ندارد.' : 'نتیجه‌ای یافت نشد.'}
          </div>
        ) : (
          displayed.map((food, index) => (
            <FoodRow
              key={food.id}
              food={food}
              isStarred={isStarred(food.id)}
              onToggleStar={toggle}
              isFirst={index === 0}
            />
          ))
        )}
      </div>

      <div style={{
        textAlign: 'center',
        padding: '24px 0',
        color: 'rgba(255,255,255,0.3)',
        fontFamily: "'RaviFaNum', sans-serif",
        fontSize: '14px',
      }}>
        {displayed.length.toLocaleString('fa-IR')} ماده غذایی
      </div>
    </div>
  )
}
