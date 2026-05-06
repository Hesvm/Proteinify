import { healthScoreBgColor } from '@/lib/healthScore'

export default function HealthBadge({ score }: { score: number }) {
  return (
    <div
      className={healthScoreBgColor(score)}
      style={{
        width: '45px',
        height: '34px',
        borderRadius: '11px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <span style={{
        fontFamily: "'RaviFaNum', sans-serif",
        fontSize: '18px',
        fontWeight: 700,
        letterSpacing: '-0.72px',
        color: 'white',
      }}>
        {score.toLocaleString('fa-IR')}
      </span>
    </div>
  )
}
