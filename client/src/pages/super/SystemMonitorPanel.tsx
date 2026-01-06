import { GlassCard } from '@/components/ui/glass-card';
import { TacticalBadge } from '@/components/ui/tactical-badge';

const systemMetrics = [
  { label: 'Active Games', value: 12, status: 'success' },
  { label: 'Overdue Phases', value: 3, status: 'warning' },
  { label: 'Approval Bottlenecks', value: 2, status: 'warning' },
  { label: 'Blocked Games', value: 1, status: 'danger' },
];

export function SystemMonitorPanel() {
  return (
    <GlassCard className='p-6'>
      <h3 className='text-lg font-semibold mb-6'>
        🖥️ System Monitoring & Health
      </h3>

      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
        {systemMetrics.map((m) => (
          <div
            key={m.label}
            className='p-4 rounded-lg bg-muted/30 border border-border/40'
          >
            <div className='text-2xl font-bold'>{m.value}</div>
            <div className='text-xs text-muted-foreground mt-1'>
              {m.label}
            </div>
            <div className='mt-2'>
              <TacticalBadge variant={"default"}>
                {m.status.toUpperCase()}
              </TacticalBadge>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
