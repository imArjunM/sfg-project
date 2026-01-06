import { GlassCard } from '@/components/ui/glass-card';

const pulseEvents = [
  '🗳 Cyber Security entered Voting phase',
  '🚀 Transportation scenario approved',
  '🏆 Urban Planning completed a full game cycle',
  '📊 Energy department gained +40 points',
];

export function LiveGamePulse() {
  return (
    <GlassCard className='p-6'>
      <h3 className='text-lg font-semibold mb-4'>⚡ Live Game Pulse</h3>

      <ul className='space-y-3 text-sm text-muted-foreground'>
        {pulseEvents.map((event, i) => (
          <li key={i}>{event}</li>
        ))}
      </ul>
    </GlassCard>
  );
}
