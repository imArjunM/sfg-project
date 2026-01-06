import { GlassCard } from '@/components/ui/glass-card';
import { ProgressGlow } from '@/components/ui/progress-glow';

const departments = [
  { name: 'Cyber Security', completion: 92, quality: 88 },
  { name: 'Transportation', completion: 85, quality: 81 },
  { name: 'Urban Planning', completion: 76, quality: 73 },
  { name: 'Energy', completion: 69, quality: 70 },
];

export function DepartmentPerformanceMatrix() {
  return (
    <GlassCard className='p-6'>
      <h3 className='text-lg font-semibold mb-6'>
        📊 Department Performance Overview
      </h3>

      <div className='space-y-5'>
        {departments.map((d) => (
          <div key={d.name}>
            <div className='flex justify-between text-sm font-medium mb-1'>
              <span>{d.name}</span>
              <span>{d.completion}% completion</span>
            </div>

            <ProgressGlow value={d.completion} />

            <div className='text-xs text-muted-foreground mt-1'>
              Strategic Quality Index: {d.quality}%
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
