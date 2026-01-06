import { GlassCard } from '@/components/ui/glass-card';
import { cn } from '@/lib/utils';

const phases = [
  'Focal Topics',
  'Themes',
  'Challenges',
  'Voting',
  'Reporting',
  'Closure',
];

export function GameProgressJourney() {
  const activeIndex = 3; // simulate current phase

  return (
    <GlassCard className='p-6'>
      <h3 className='text-lg font-semibold mb-6'>🧭 Game Progress Journey</h3>

      <div className='flex items-center justify-between'>
        {phases.map((phase, index) => (
          <div key={phase} className='flex flex-col items-center'>
            <div
              className={cn(
                'w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold',
                index <= activeIndex
                  ? 'bg-dp-teal text-white shadow-lg'
                  : 'bg-muted text-muted-foreground'
              )}
            >
              {index <= activeIndex ? '✓' : index + 1}
            </div>
            <span className='text-xs mt-2 text-center'>{phase}</span>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
