import { GlassCard } from '@/components/ui/glass-card';
import { TacticalBadge } from '@/components/ui/tactical-badge';

const complianceItems = [
  { label: 'Games with Approved Scope', status: 'success' },
  { label: 'Reports Pending Validation', status: 'warning' },
  { label: 'Incomplete Voting Logs', status: 'danger' },
  { label: 'Audit-Ready Games', status: 'success' },
];

export function GovernanceComplianceTracker() {
  return (
    <GlassCard className='p-6'>
      <h3 className='text-lg font-semibold mb-4'>🏛 Governance & Compliance</h3>

      <ul className='space-y-3 text-sm'>
        {complianceItems.map((item) => (
          <li key={item.label} className='flex items-center justify-between'>
            <span>{item.label}</span>
            <TacticalBadge variant={'default'}>{item.status}</TacticalBadge>
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}
