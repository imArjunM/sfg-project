import { LayoutGM } from '@/components/LayoutGM';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import {
  Target,
  PlayCircle,
  CheckCircle2,
  Clock,
  AlertCircle,
  ChevronRight,
  TrendingUp,
  Users,
  Calendar,
} from 'lucide-react';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

/* -----------------------------------------
   METRICS
----------------------------------------- */
const metrics = [
  {
    label: 'Total Games Hosted',
    value: 24,
    icon: Target,
    color: 'text-brand-bright-green',
    bg: 'bg-brand-green/10',
  },
  {
    label: 'Games In Progress',
    value: 2,
    icon: PlayCircle,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    label: 'Games Completed',
    value: 18,
    icon: CheckCircle2,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
  {
    label: 'Yet to Start',
    value: 4,
    icon: Clock,
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
  },
];

/* -----------------------------------------
   DEPARTMENT ANALYTICS
----------------------------------------- */
const departmentAnalytics = [
  { department: 'Defense', hosted: 12, inProgress: 3 },
  { department: 'Urban', hosted: 9, inProgress: 2 },
  { department: 'Energy', hosted: 7, inProgress: 4 },
  { department: 'Health', hosted: 10, inProgress: 1 },
  { department: 'Transport', hosted: 6, inProgress: 2 },
];

/* -----------------------------------------
   NOTIFICATIONS
----------------------------------------- */
const notifications = [
  {
    id: 1,
    title: 'Game Request Approved',
    message: 'Cybersecurity 2030 scenario approved.',
    time: '2h ago',
    read: false,
  },
  {
    id: 2,
    title: 'New Participants Joined',
    message: '5 experts joined Urban Mobility session.',
    time: '4h ago',
    read: false,
  },
  {
    id: 3,
    title: 'Scenario Updated',
    message: 'AI Ethics Framework revised.',
    time: 'Yesterday',
    read: true,
  },
];

export default function GMDashboard1() {
  return (
    <LayoutGM>
      <div className='space-y-10'>

        {/* -------------------------------- HEADER -------------------------------- */}
        <div>
          <h1 className='text-3xl font-bold text-white tracking-wide'>
            Command Center
          </h1>
          <p className='text-muted-foreground'>
            Strategic foresight control & analytics dashboard
          </p>
        </div>

        {/* -------------------------------- METRICS -------------------------------- */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {metrics.map((stat, i) => (
            <GlassCard
              key={stat.label}
              className='p-6 hover:glow-teal transition-all'
            >
              <div className='flex justify-between'>
                <div>
                  <p className='text-3xl font-bold text-white'>
                    {stat.value}
                  </p>
                  <p className='text-sm text-muted-foreground'>
                    {stat.label}
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${stat.bg}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>

              {/* Progress Bar (Gamification) */}
              <div className='mt-4 h-1 w-full bg-white/10 rounded'>
                <div
                  className='h-full rounded bg-brand-bright-green'
                  style={{ width: `${stat.value * 4}%` }}
                />
              </div>
            </GlassCard>
          ))}
        </div>

        {/* -------------------------------- ANALYTICS GRAPH -------------------------------- */}
        <Card className='glass-card border-none'>
          <CardHeader>
            <CardTitle className='flex items-center gap-2 text-white'>
              <TrendingUp className='w-5 h-5 text-brand-bright-green' />
              Department Performance Matrix
            </CardTitle>
            <CardDescription>
              Games hosted vs in progress by department
            </CardDescription>
          </CardHeader>

          <CardContent className='h-[320px]'>
            <ResponsiveContainer width='100%' height='100%'>
              <BarChart data={departmentAnalytics}>
                <XAxis dataKey='department' stroke='#9ca3af' />
                <YAxis stroke='#9ca3af' />
                <Tooltip
                  cursor={{ fill: 'rgba(255,255,255,0.04)' }}
                  contentStyle={{
                    background: 'rgba(15,15,15,0.9)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 8,
                  }}
                />
                <Legend />
                <Bar
                  dataKey='hosted'
                  name='Games Hosted'
                  fill='#22c55e'
                  radius={[6, 6, 0, 0]}
                />
                <Bar
                  dataKey='inProgress'
                  name='In Progress'
                  fill='#3b82f6'
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

       
      </div>
    </LayoutGM>
  );
}
