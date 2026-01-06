import { Layout } from '@/components/Layout';
import {
  Users,
  Activity,
  ArrowRight,
  Gamepad2,
  CheckCircle2,
  Clock,
} from 'lucide-react';

import { GlassCard } from '@/components/ui/glass-card';
import { Link } from 'wouter';
import { ProgressGlow } from '@/components/ui/progress-glow';
import { TacticalBadge } from '@/components/ui/tactical-badge';

import { useGame } from '@/contexts/GameContext';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

/* 📊 Analytics Components */
import { ActivityTimeline } from './dashboard/ActivityTimeline';
import { GameStatusChart } from './dashboard/GameStatusChart';
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
  const { t } = useLanguage();
  const { user } = useAuth();
  const { games } = useGame();

  const recentGames = games.slice(0, 3);

  const statsCards = [
    {
      title: 'Scenario Plans Hosted',
      value: 10,
      icon: Gamepad2,
      color: 'from-dp-green to-dp-teal',
    },
    {
      title: 'Retreats Hosted',
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
      title: 'Completed Games',
      value: 7,
      icon: CheckCircle2,
      color: 'from-dp-success to-emerald-600',
    },
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, any> = {
      active: 'success',
      pending: 'warning',
      completed: 'info',
      draft: 'default',
    };

    return (
      <TacticalBadge variant={variants[status] || 'default'}>
        {t(`status.${status}`)}
      </TacticalBadge>
    );
  };

  return (
    <Layout>
      <div className='space-y-10'>
        {/* Header */}
        <div>
          <h1 className='text-3xl font-bold text-white mb-2'>
            Welcome Back, Admin (SFD)
          </h1>
          <p className='text-muted-foreground'>
            Strategic foresight system overview and performance
          </p>
        </div>

        {/* KPI Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {statsCards.map((stat) => (
            <GlassCard
              key={stat.title}
              className='p-6 hover:glow-teal transition-all'
            >
              <div className='flex items-start justify-between'>
                <div>
                  <div className='text-3xl font-bold text-foreground'>
                    {stat.value}
                  </div>
                  <div className='text-sm text-muted-foreground mt-1'>
                    {stat.title}
                  </div>
                </div>

                <div
                  className={cn(
                    'w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br',
                    stat.color
                  )}
                >
                  <stat.icon className='w-6 h-6 text-white' />
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Analytics Grid */}
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

        {/* Recent Games */}
        <GlassCard className='p-6'>
          <div className='flex items-center justify-between mb-6'>
            <h2 className='text-lg font-semibold flex items-center gap-2'>
              <Activity className='w-5 h-5 text-dp-teal' />
              Recent Games
            </h2>

            <Link
              to='/games'
              className='text-sm text-dp-teal hover:underline flex items-center gap-1'
            >
              View All
              <ArrowRight className='w-4 h-4' />
            </Link>
          </div>

          <div className='space-y-4'>
            {recentGames.map((game) => (
              <Link
                key={game.id}
                to={`/games/${game.id}`}
                className='block p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors border border-border/30 hover:border-dp-teal/30'
              >
                <div className='flex items-start justify-between gap-4'>
                  <div className='flex-1 min-w-0'>
                    <h3 className='font-semibold truncate'>{game.title}</h3>
                    <p className='text-sm text-muted-foreground mt-1 line-clamp-2'>
                      {game.focalIssue}
                    </p>

                    <div className='flex items-center gap-4 mt-3'>
                      <span className='text-xs text-muted-foreground flex items-center gap-1'>
                        <Users className='w-3 h-3' />
                        {game.participants.length} participants
                      </span>
                      <span className='text-xs text-muted-foreground'>
                        {game.department}
                      </span>
                    </div>
                  </div>

                  <div className='flex flex-col items-end gap-2'>
                    {getStatusBadge(game.status)}
                    <span className='text-xs text-muted-foreground uppercase'>
                      {t(`phase.${game.phase}`)}
                    </span>
                  </div>
                </div>

                <ProgressGlow
                  value={
                    game.status === 'completed'
                      ? 100
                      : game.phase === 'focalTopic'
                      ? 15
                      : game.phase === 'themeAssignment'
                      ? 30
                      : game.phase === 'challengeCreation'
                      ? 45
                      : game.phase === 'voting'
                      ? 60
                      : game.phase === 'scoring'
                      ? 75
                      : game.phase === 'reporting'
                      ? 90
                      : 100
                  }
                  className='mt-4'
                />
              </Link>
            ))}
          </div>
        </GlassCard>
      </div>
    </Layout>
  );
}
