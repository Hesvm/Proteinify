'use client'

const CHIPS: { label: string; value: string }[] = [
  { label: 'Grocery', value: 'grocery' },
  { label: 'Foods',   value: 'foods'   },
  { label: 'Vegan',   value: 'vegan'   },
  { label: 'Keto',    value: 'keto'    },
]

type Props = {
  selected: string[]
  onChange: (tags: string[]) => void
}

export default function FilterChips({ selected, onChange }: Props) {
  const toggle = (value: string) => {
    onChange(
      selected.includes(value)
        ? selected.filter(v => v !== value)
        : [...selected, value]
    )
  }

  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {CHIPS.map(chip => {
        const active = selected.includes(chip.value)
        return (
          <button
            key={chip.value}
            onClick={() => toggle(chip.value)}
            style={{
              padding: '5px 14px',
              borderRadius: '999px',
              border: `1px solid ${active ? '#e02f44' : 'rgba(255,255,255,0.18)'}`,
              background: active ? 'rgba(224,47,68,0.15)' : 'rgba(255,255,255,0.05)',
              color: active ? '#e02f44' : 'rgba(255,255,255,0.55)',
              fontFamily: "'RaviFaNum', sans-serif",
              fontSize: '13px',
              fontWeight: active ? 600 : 400,
              cursor: 'pointer',
              transition: 'all 0.15s ease-out',
              whiteSpace: 'nowrap',
            }}
          >
            {chip.label}
          </button>
        )
      })}
    </div>
  )
}
