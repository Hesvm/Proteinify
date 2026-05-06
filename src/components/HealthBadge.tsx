import { healthScoreBgColor } from '@/lib/healthScore'

export default function HealthBadge({ score }: { score: number }) {
  return (
    <div
      className={healthScoreBgColor(score)}
      style={{
        width: '36px',
        height: '27px',
        borderRadius: '9px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <span style={{
        fontFamily: "'RaviFaNum', sans-serif",
        fontSize: '14px',
        fontWeight: 700,
        letterSpacing: '-0.56px',
        color: 'white',
      }}>
        {score.toLocaleString('fa-IR')}
      </span>
    </div>
  )
}
