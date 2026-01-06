import React from 'react';
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

/* =========================================================
   METRICS
========================================================= */
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

/* =========================================================
   DEPARTMENT ANALYTICS (BAR CHART)
========================================================= */
const departmentAnalytics = [
  { department: 'Defence', hosted: 12, inProgress: 3 },
  { department: 'Urban', hosted: 9, inProgress: 2 },
  { department: 'Energy', hosted: 7, inProgress: 4 },
  { department: 'Health', hosted: 10, inProgress: 1 },
  { department: 'Transport', hosted: 6, inProgress: 2 },
];

/* =========================================================
   LEADERBOARD
========================================================= */
const departmentLeaderboard = [
  { department: 'Defence', score: 15, hosted: 12, inProgress: 3 },
  { department: 'Health', score: 11, hosted: 10, inProgress: 1 },
  { department: 'Urban', score: 11, hosted: 9, inProgress: 2 },
];

/* =========================================================
   HEATMAP DATA
========================================================= */
const heatmapData = [
  { dept: 'Defence', hour: '09', value: 8 },
  { dept: 'Defence', hour: '12', value: 12 },
  { dept: 'Defence', hour: '15', value: 6 },

  { dept: 'Urban', hour: '09', value: 5 },
  { dept: 'Urban', hour: '12', value: 9 },
  { dept: 'Urban', hour: '15', value: 4 },

  { dept: 'Energy', hour: '09', value: 4 },
  { dept: 'Energy', hour: '12', value: 10 },
  { dept: 'Energy', hour: '15', value: 7 },

  { dept: 'Health', hour: '09', value: 6 },
  { dept: 'Health', hour: '12', value: 11 },
  { dept: 'Health', hour: '15', value: 3 },
];

/* =========================================================
   NOTIFICATIONS
========================================================= */
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
    message: '5 experts joined Urban Mobility.',
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
        {/* =====================================================
            HEADER
        ===================================================== */}
        <div>
          <h1 className='text-3xl font-bold text-white tracking-wide'>
            Command Center
          </h1>
          <p className='text-muted-foreground'>
            Strategic foresight control & analytics
          </p>
        </div>

        {/* =====================================================
            METRICS
        ===================================================== */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {metrics.map((stat) => (
            <GlassCard key={stat.label} className='p-6'>
              <div className='flex justify-between'>
                <div>
                  <p className='text-3xl font-bold text-white'>{stat.value}</p>
                  <p className='text-sm text-muted-foreground'>{stat.label}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.bg}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>

              {/* Progress Bar */}
              <div className='mt-4 h-1 bg-white/10 rounded'>
                <div
                  className='h-full bg-brand-bright-green rounded'
                  style={{ width: `${stat.value * 4}%` }}
                />
              </div>
            </GlassCard>
          ))}
        </div>

        {/* =====================================================
            DEPARTMENT BAR CHART
        ===================================================== */}
        <Card className='glass-card border-none'>
          <CardHeader>
            <CardTitle className='flex items-center gap-2 text-white'>
              <TrendingUp className='w-5 h-5 text-brand-bright-green' />
              Department Performance Matrix
            </CardTitle>
            <CardDescription>Games hosted vs in progress</CardDescription>
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
                <Bar dataKey='hosted' fill='#22c55e' radius={[6, 6, 0, 0]} />
                <Bar
                  dataKey='inProgress'
                  fill='#3b82f6'
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* =====================================================
            LEADERBOARD + HEATMAP
        ===================================================== */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* LEADERBOARD */}
          <Card className='glass-card border-none'>
            <CardHeader>
              <CardTitle>🏆 Department Leaderboard</CardTitle>
              <CardDescription>Ranked by total activity</CardDescription>
            </CardHeader>

            <CardContent className='space-y-3'>
              {departmentLeaderboard.map((dept, idx) => (
                <div
                  key={dept.department}
                  className='flex items-center justify-between p-3 rounded bg-white/5'
                >
                  <div className='flex items-center gap-3'>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                        idx === 0
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : idx === 1
                          ? 'bg-gray-400/20 text-gray-300'
                          : idx === 2
                          ? 'bg-orange-500/20 text-orange-400'
                          : 'bg-white/10 text-muted-foreground'
                      }`}
                    >
                      {idx + 1}
                    </div>
                    <div>
                      <p className='text-sm text-white'>{dept.department}</p>
                      <p className='text-[11px] text-muted-foreground'>
                        Hosted {dept.hosted} • In Progress {dept.inProgress}
                      </p>
                    </div>
                  </div>
                  <p className='text-lg font-bold text-brand-bright-green'>
                    {dept.score}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* HEATMAP */}
          <Card className='glass-card border-none'>
            <CardHeader>
              <CardTitle>🔥 Activity Heatmap</CardTitle>
              <CardDescription>Engagement by time of day</CardDescription>
            </CardHeader>

            <CardContent>
              <div className='grid grid-cols-[120px_repeat(3,1fr)] gap-2 text-xs'>
                <div />
                {['09:00', '12:00', '15:00'].map((h) => (
                  <div key={h} className='text-center text-muted-foreground'>
                    {h}
                  </div>
                ))}

                {['Defence', 'Urban', 'Energy', 'Health'].map((dept) => (
                  <React.Fragment key={dept}>
                    <div className='text-muted-foreground flex items-center'>
                      {dept}
                    </div>

                    {['09', '12', '15'].map((hour) => {
                      const cell = heatmapData.find(
                        (d) => d.dept === dept && d.hour === hour
                      );
                      const intensity = cell?.value ?? 0;

                      return (
                        <div
                          key={hour}
                          className='h-8 rounded flex items-center justify-center text-[10px]'
                          style={{
                            background: `rgba(34,197,94,${intensity / 15})`,
                          }}
                        >
                          {intensity || '-'}
                        </div>
                      );
                    })}
                  </React.Fragment>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* -------------------------------- LOWER GRID -------------------------------- */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>

          {/* Notifications */}
          <div className='lg:col-span-2 space-y-4'>
            <h2 className='text-xl font-semibold text-white flex items-center gap-2'>
              <AlertCircle className='w-5 h-5 text-brand-bright-green' />
              Latest Notifications
            </h2>

            {notifications.map((n) => (
              <Card
                key={n.id}
                className={`glass-card border-none ${
                  !n.read && 'border-l-4 border-l-brand-bright-green'
                }`}
              >
                <CardContent className='p-4'>
                  <div className='flex justify-between'>
                    <p className='font-medium text-white text-sm'>
                      {n.title}
                    </p>
                    <span className='text-[10px] text-muted-foreground'>
                      {n.time}
                    </span>
                  </div>
                  <p className='text-xs text-muted-foreground mt-1'>
                    {n.message}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Upcoming Sessions */}
          <div className='space-y-4'>
            <h2 className='text-xl font-semibold text-white flex items-center gap-2'>
              <Calendar className='w-5 h-5 text-brand-bright-green' />
              Upcoming Sessions
            </h2>

            {[1, 2].map((i) => (
              <Card
                key={i}
                className='bg-card/30 border-white/5 hover:border-brand-green/30 transition-all cursor-pointer'
              >
                <CardHeader className='pb-3'>
                  <Badge className='bg-blue-500/10 text-blue-400 text-[10px] w-fit'>
                    PLANNED
                  </Badge>
                  <CardTitle className='text-base text-white mt-2'>
                    Future of Transportation 2030
                  </CardTitle>
                  <CardDescription>
                    Strategic Planning Dept.
                  </CardDescription>
                </CardHeader>
                <CardContent className='flex justify-between text-xs text-muted-foreground'>
                  <span className='flex items-center gap-1'>
                    <Calendar className='w-3 h-3' /> Dec 24
                  </span>
                  <span className='flex items-center gap-1'>
                    <Users className='w-3 h-3' /> 12 Players
                  </span>
                  <ChevronRight className='w-4 h-4 text-muted-foreground' />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </LayoutGM>
  );
}
