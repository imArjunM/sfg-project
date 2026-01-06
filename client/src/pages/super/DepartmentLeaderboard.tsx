import { GlassCard } from '@/components/ui/glass-card';
import { ProgressGlow } from '@/components/ui/progress-glow';
import { cn } from '@/lib/utils';

const leaderboardData = [
  { dept: 'Cyber Security', score: 820, trend: 'up' },
  { dept: 'Transportation', score: 760, trend: 'up' },
  { dept: 'Urban Planning', score: 690, trend: 'down' },
  { dept: 'Energy', score: 610, trend: 'up' },
];

export function DepartmentLeaderboard() {
  return (
    <GlassCard className='p-6'>
      <h3 className='text-lg font-semibold mb-4 flex items-center gap-2'>
        🏆 Department Leaderboard
      </h3>

      <div className='space-y-4'>
        {leaderboardData.map((item, index) => (
          <div
            key={item.dept}
            className='flex items-center gap-4 p-3 rounded-lg bg-muted/30'
          >
            <span className='text-xl font-bold w-6'>
              {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : index + 1}
            </span>

            <div className='flex-1'>
              <div className='flex justify-between text-sm font-medium'>
                <span>{item.dept}</span>
                <span>{item.score} pts</span>
              </div>
              <ProgressGlow value={(item.score / 1000) * 100} />
            </div>

            <span
              className={cn(
                'text-xs font-semibold',
                item.trend === 'up' ? 'text-green-400' : 'text-red-400'
              )}
            >
              {item.trend === 'up' ? '▲' : '▼'}
            </span>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
