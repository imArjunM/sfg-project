import { TacticalBadge } from '@/components/ui/tactical-badge';

const achievements = [
  { label: 'Strategic Thinker', icon: '🧠' },
  { label: 'Fast Executor', icon: '⚡' },
  { label: 'Voting Champion', icon: '🗳' },
  { label: 'Policy Architect', icon: '🏛' },
];

export function AchievementStrip() {
  return (
    <div className='flex flex-wrap gap-3'>
      {achievements.map((a) => (
        <TacticalBadge key={a.label} variant='success'>
          {a.icon} {a.label}
        </TacticalBadge>
      ))}
    </div>
  );
}
