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
  FileText,
} from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';
import { cn } from '@/lib/utils';

export default function GMDashboard1() {
  const metrics = [
    {
      label: 'Total Games Hosted',
      value: '24',
      icon: Target,
      color: 'text-brand-bright-green',
      bg: 'bg-brand-green/10',
    },
    {
      label: 'Games In Progress',
      value: '02',
      icon: PlayCircle,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
    },
    {
      label: 'Games Completed',
      value: '18',
      icon: CheckCircle2,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
    },
    {
      label: 'Yet to Start',
      value: '04',
      icon: Clock,
      color: 'text-orange-400',
      bg: 'bg-orange-500/10',
    },
  ];

  const notifications = [
    {
      id: 1,
      title: 'Game Request Approved',
      message:
        "The 'Cybersecurity 2030' scenario request has been approved by Admin.",
      time: '2 hours ago',
      type: 'success',
      read: false,
    },
    {
      id: 2,
      title: 'New Participant Registration',
      message: "5 new experts have registered for 'Urban Mobility' session.",
      time: '4 hours ago',
      type: 'info',
      read: false,
    },
    {
      id: 3,
      title: 'Changes Requested',
      message:
        "Please review the objectives for 'AI Ethics Framework' scenario.",
      time: 'Yesterday',
      type: 'warning',
      read: true,
    },
    {
      id: 4,
      title: 'Scenario Published',
      message:
        "Your 'Climate Resilience 2040' scenario is now live and visible to participants.",
      time: '2 days ago',
      type: 'success',
      read: true,
    },
    {
      id: 5,
      title: 'Session Reminder',
      message: "The 'Future of Healthcare' foresight session starts in 1 hour.",
      time: '1 hour ago',
      type: 'info',
      read: false,
    },
  ];

  return (
    <LayoutGM>
      <div className='space-y-8'>
        <div>
          <h1 className='text-3xl font-bold text-white mb-2 font-display tracking-wide'>
            Command Center
          </h1>
          <p className='text-muted-foreground'>
            Overview of all strategic foresight activities and game statuses.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {metrics.map((stat, i) => (
            <GlassCard
              key={stat.label}
              className='p-6 group hover:glow-teal transition-all duration-300'
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className='flex items-start justify-between'>
                <div>
                  <div className='text-3xl font-bold text-foreground'>
                    {stat.value}
                  </div>
                  <div className='text-sm text-muted-foreground mt-1'>
                    {stat.label}
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${stat.bg}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Recent Activity / Notifications */}
          <div className='lg:col-span-2 space-y-6'>
            <div className='flex items-center justify-between'>
              <h2 className='text-xl font-semibold text-white flex items-center gap-2'>
                <AlertCircle className='w-5 h-5 text-brand-bright-green' />
                Latest Notifications
              </h2>
              <Button
                variant='ghost'
                className='text-xs text-brand-bright-green hover:text-brand-bright-green hover:bg-brand-green/10'
              >
                View All
              </Button>
            </div>

            <div className='space-y-4'>
              {notifications.map((notif) => (
                <Card
                  key={notif.id}
                  className={`glass-card border-none transition-all hover:bg-white/5 ${
                    !notif.read ? 'border-l-4 border-l-brand-bright-green' : ''
                  }`}
                >
                  <CardContent className='p-4 flex items-start gap-4'>
                    <div
                      className={`mt-1 w-2 h-2 rounded-full ${
                        notif.type === 'success'
                          ? 'bg-brand-bright-green'
                          : notif.type === 'warning'
                          ? 'bg-orange-400'
                          : 'bg-blue-400'
                      }`}
                    />
                    <div className='flex-1'>
                      <div className='flex justify-between items-start mb-1'>
                        <h4
                          className={`font-semibold text-sm ${
                            !notif.read ? 'text-white' : 'text-muted-foreground'
                          }`}
                        >
                          {notif.title}
                        </h4>
                        <span className='text-[10px] text-muted-foreground/60 font-mono'>
                          {notif.time}
                        </span>
                      </div>
                      <p className='text-xs text-muted-foreground leading-relaxed'>
                        {notif.message}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Actions / Status */}
          <div className='space-y-6'>
            {/* Upcoming Games */}
            <div className='mt-8 pt-8 border-t border-white/5'>
              <div className='flex items-center justify-between mb-6'>
                <h2 className='text-xl font-semibold text-white flex items-center gap-2'>
                  <Calendar className='w-5 h-5 text-brand-bright-green' />
                  Upcoming Sessions
                </h2>
              </div>

              <div className='grid grid-cols-1 gap-4'>
                {[1, 2].map((_, i) => (
                  <Card
                    key={i}
                    className='bg-card/30 border-white/5 hover:border-brand-green/30 transition-all cursor-pointer group'
                  >
                    <CardHeader className='pb-3'>
                      <div className='flex justify-between items-start'>
                        <Badge
                          variant='secondary'
                          className='bg-blue-500/10 text-blue-400 border-blue-500/20 text-[10px] mb-2'
                        >
                          PLANNED
                        </Badge>
                        <ChevronRight className='w-4 h-4 text-muted-foreground group-hover:text-brand-bright-green transition-colors' />
                      </div>
                      <CardTitle className='text-base text-white group-hover:text-brand-bright-green transition-colors'>
                        Future of Transportation 2030
                      </CardTitle>
                      <CardDescription className='text-xs'>
                        Strategic Planning Dept.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className='flex items-center gap-4 text-xs text-muted-foreground'>
                        <span className='flex items-center gap-1'>
                          <Calendar className='w-3 h-3' /> Dec 24, 2025
                        </span>
                        <span className='flex items-center gap-1'>
                          <Users className='w-3 h-3' /> 12 Participants
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* <Card className='glass-card border-none bg-gradient-to-br from-brand-green/20 to-transparent'>
              <CardHeader>
                <CardTitle className='text-white text-lg'>
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-3'>
                <Button className='w-full'>
                  <PlayCircle className='w-4 h-4 mr-2' /> Start New Session
                </Button>
                <Button
                  variant='secondary'
                  className='w-full border-white/10 hover:bg-white/5 text-white'
                >
                  <Target className='w-4 h-4 mr-2' /> Create Game Request
                </Button>
                <Button
                  variant='secondary'
                  className='w-full border-white/10 hover:bg-white/5 text-white'
                >
                  <FileText className='w-4 h-4 mr-2' /> View Reports
                </Button>
              </CardContent>
            </Card> */}

            <Card className='glass-card border-none'>
              <CardHeader>
                <CardTitle className='text-white text-sm uppercase tracking-wider'>
                  System Status
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='flex items-center justify-between text-xs'>
                  <span className='text-muted-foreground'>Database Sync</span>
                  <span className='text-brand-bright-green flex items-center gap-1'>
                    <span className='w-1.5 h-1.5 rounded-full bg-brand-bright-green animate-pulse'></span>{' '}
                    Active
                  </span>
                </div>
                <div className='flex items-center justify-between text-xs'>
                  <span className='text-muted-foreground'>AI Engine</span>
                  <span className='text-brand-bright-green flex items-center gap-1'>
                    <span className='w-1.5 h-1.5 rounded-full bg-brand-bright-green animate-pulse'></span>{' '}
                    Online
                  </span>
                </div>
                <div className='flex items-center justify-between text-xs'>
                  <span className='text-muted-foreground'>Latency</span>
                  <span className='text-white font-mono'>24ms</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </LayoutGM>
  );
}
