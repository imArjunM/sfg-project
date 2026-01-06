import { Layout } from '@/components/Layout';
import { Users, Activity, Gamepad2, CheckCircle2, Clock } from 'lucide-react';

import { GlassCard } from '@/components/ui/glass-card';
import { ProgressGlow } from '@/components/ui/progress-glow';

import { useGame } from '@/contexts/GameContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

import { ActivityTimeline } from './dashboard/ActivityTimeline';
import { GameStatusChart } from './dashboard/GameStatusChart';

import { DepartmentLeaderboard } from './super/DepartmentLeaderboard';
import { DepartmentPerformanceMatrix } from './super/DepartmentPerformanceMatrix';
import { SystemMonitorPanel } from './super/SystemMonitorPanel';
import { GovernanceComplianceTracker } from './super/GovernanceComplianceTracker';
import { StrategicReportingPanel } from './super/StrategicReportingPanel';
import { PhaseFunnel } from './dashboard/PhaseFunnel';

/* 📈 Static Analytics Data (Replace with API later) */
const activityData = [
  { name: 'Jan', scenarios: 4 },
  { name: 'Feb', scenarios: 3 },
  { name: 'Mar', scenarios: 7 },
  { name: 'Apr', scenarios: 5 },
  { name: 'May', scenarios: 9 },
  { name: 'Jun', scenarios: 12 },
];

const statusData = [
  { name: 'Active', value: 4 },
  { name: 'Pending', value: 5 },
  { name: 'Completed', value: 7 },
];

const phaseData = [
  { phase: 'Focal Topics', count: 6 },
  { phase: 'Theme Assignment', count: 5 },
  { phase: 'Challenges', count: 4 },
  { phase: 'Voting', count: 3 },
  { phase: 'Reporting', count: 2 },
];

export default function SuperAdminDashboard() {
  const { games } = useGame();
  const { t } = useLanguage();

  const statsCards = [
    {
      title: 'Scenario Plans Hosted',
      value: 10,
      icon: Gamepad2,
      color: 'from-dp-green to-dp-teal',
    },
    {
      title: 'Departments Active',
      value: 8,
      icon: Users,
      color: 'from-dp-teal to-blue-500',
    },
    {
      title: 'Pending Approvals',
      value: 5,
      icon: Clock,
      color: 'from-dp-gold to-amber-600',
    },
    {
      title: 'Completed Cycles',
      value: 7,
      icon: CheckCircle2,
      color: 'from-dp-success to-emerald-600',
    },
  ];

  return (
    <Layout>
      <div className='space-y-10'>
        <div>
          <h1 className='text-3xl font-bold text-white mb-2'>
            Super Admin Control Center (SFD)
          </h1>
          <p className='text-muted-foreground'>
            Strategic foresight system monitoring & governance
          </p>
        </div>

        {/* KPI */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {statsCards.map((stat) => (
            <GlassCard key={stat.title} className='p-6'>
              <div className='flex justify-between'>
                <div>
                  <div className='text-3xl font-bold'>{stat.value}</div>
                  <div className='text-sm text-muted-foreground'>
                    {stat.title}
                  </div>
                </div>
                <div
                  className={cn(
                    'w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center',
                    stat.color
                  )}
                >
                  <stat.icon className='w-6 h-6 text-white' />
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          <GlassCard className='p-6 lg:col-span-2'>
            <h3 className='text-lg font-semibold mb-4'>
              Scenario Activity Over Time
            </h3>
            <ActivityTimeline data={activityData} />
          </GlassCard>

          <GlassCard className='p-6'>
            <h3 className='text-lg font-semibold mb-4'>
              Game Status Distribution
            </h3>
            <GameStatusChart data={statusData} />
          </GlassCard>

          <GlassCard className='p-6 lg:col-span-3'>
            <h3 className='text-lg font-semibold mb-4'>Game Progress Funnel</h3>
            <PhaseFunnel data={phaseData} />
          </GlassCard>
        </div>

        {/* Oversight */}
        <DepartmentLeaderboard />
        <DepartmentPerformanceMatrix />

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <SystemMonitorPanel />
          <GovernanceComplianceTracker />
        </div>

        <StrategicReportingPanel />
      </div>
    </Layout>
  );
}
