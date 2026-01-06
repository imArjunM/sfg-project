import { LayoutPlayer } from '@/components/LayoutPlayer';
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
  Zap,
  Trophy,
  History,
} from 'lucide-react';
import { Link } from 'wouter';

export default function PlayerDashboard() {
  const metrics = [
    {
      label: 'Total Games Played',
      value: '12',
      icon: History,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
    },
    {
      label: 'Games In Progress',
      value: '01',
      icon: PlayCircle,
      color: 'text-brand-bright-green',
      bg: 'bg-brand-green/10',
    },
    {
      label: 'Upcoming Games',
      value: '03',
      icon: Calendar,
      color: 'text-orange-400',
      bg: 'bg-orange-500/10',
    },
    {
      label: 'Total Points',
      value: '1,240',
      icon: Trophy,
      color: 'text-yellow-400',
      bg: 'bg-yellow-500/10',
    },
  ];

  const recentActivity = [
    {
      id: 1,
      title: 'Game Result Published',
      message: "Final report for 'Cybersecurity 2025' is now available.",
      time: '2 hours ago',
      type: 'success',
      read: false,
    },
    {
      id: 2,
      title: 'Game Invitation',
      message: "You have been invited to join 'Smart City Ethics'.",
      time: 'Yesterday',
      type: 'info',
      read: false,
    },
    {
      id: 3,
      title: 'Badge Earned',
      message: "Congratulations! You earned the 'Strategic Thinker' badge.",
      time: '2 days ago',
      type: 'achievement',
      read: true,
    },
  ];

  return (
    <LayoutPlayer>
      <div className='space-y-8'>
        <div>
          <h1 className='text-3xl font-bold text-white mb-2 font-display tracking-wide'>
            Player Dashboard
          </h1>
          <p className='text-muted-foreground'>
            Welcome back, Officer. Ready to shape the future?
          </p>
        </div>

        {/* Metrics Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {metrics.map((metric, i) => (
            <Card
              key={i}
              className='glass-card border-none hover:bg-white/5 transition-colors group'
            >
              <CardContent className='p-6'>
                <div className='flex justify-between items-start'>
                  <div
                    className={`p-3 rounded-lg ${metric.bg} group-hover:scale-110 transition-transform`}
                  >
                    <metric.icon className={`w-6 h-6 ${metric.color}`} />
                  </div>
                </div>
                <div className='mt-4'>
                  <span className='text-4xl font-bold text-white font-display block mb-1'>
                    {metric.value}
                  </span>
                  <span className='text-sm text-muted-foreground'>
                    {metric.label}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Recent Activity / Notifications */}
          <div className='lg:col-span-2 space-y-6'>
            <div className='flex items-center justify-between'>
              <h2 className='text-xl font-semibold text-white flex items-center gap-2'>
                <Zap className='w-5 h-5 text-brand-bright-green' />
                Recent Activity
              </h2>
            </div>

            <div className='space-y-4'>
              {recentActivity.map((notif) => (
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
                          : notif.type === 'achievement'
                          ? 'bg-yellow-400'
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

            {/* In Progress / Scheduled */}
            <div className='mt-8 pt-8 border-t border-white/5'>
              <div className='flex items-center justify-between mb-6'>
                <h2 className='text-xl font-semibold text-white flex items-center gap-2'>
                  <Target className='w-5 h-5 text-brand-bright-green' />
                  Active & Scheduled Sessions
                </h2>
                <Link href='/player/scenarios'>
                  <Button
                    variant='ghost'
                    className='text-xs text-brand-bright-green hover:text-brand-bright-green hover:bg-brand-green/10'
                  >
                    View All
                  </Button>
                </Link>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <Card className='bg-brand-green/5 border-brand-green/20 hover:border-brand-green/40 transition-all cursor-pointer group relative overflow-hidden'>
                  <div className='absolute top-0 right-0 p-2'>
                    <span className='flex h-2 w-2 relative'>
                      <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-bright-green opacity-75'></span>
                      <span className='relative inline-flex rounded-full h-2 w-2 bg-brand-bright-green'></span>
                    </span>
                  </div>
                  <CardHeader className='pb-3'>
                    <div className='flex justify-between items-start'>
                      <Badge
                        variant='secondary'
                        className='bg-brand-green/20 text-brand-bright-green border-brand-green/30 text-[10px] mb-2'
                      >
                        LIVE NOW
                      </Badge>
                    </div>
                    <CardTitle className='text-base text-white group-hover:text-brand-bright-green transition-colors'>
                      Future of Transportation
                    </CardTitle>
                    <CardDescription className='text-xs'>
                      Strategic Planning Dept.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      size='sm'
                      className='w-full bg-brand-green hover:bg-brand-green/90 text-white shadow-[0_0_15px_rgba(38,208,124,0.3)]'
                    >
                      Join Session <ChevronRight className='w-4 h-4 ml-1' />
                    </Button>
                  </CardContent>
                </Card>

                <Card className='bg-card/30 border-white/5 hover:border-white/10 transition-all cursor-pointer group'>
                  <CardHeader className='pb-3'>
                    <div className='flex justify-between items-start'>
                      <Badge
                        variant='secondary'
                        className='bg-blue-500/10 text-blue-400 border-blue-500/20 text-[10px] mb-2'
                      >
                        SCHEDULED
                      </Badge>
                    </div>
                    <CardTitle className='text-base text-white group-hover:text-blue-400 transition-colors'>
                      AI Ethics Framework
                    </CardTitle>
                    <CardDescription className='text-xs'>
                      Artificial Intelligence Dept.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className='flex items-center gap-4 text-xs text-muted-foreground mb-4'>
                      <span className='flex items-center gap-1'>
                        <Calendar className='w-3 h-3' /> Jan 15, 2026
                      </span>
                      <span className='flex items-center gap-1'>
                        <Clock className='w-3 h-3' /> 10:00 AM
                      </span>
                    </div>
                    <Button
                      size='sm'
                      variant='secondary'
                      className='w-full border-white/10 hover:bg-white/5 text-muted-foreground'
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Leaderboard Snippet */}
          <div className='space-y-6'>
            <Card className='glass-card border-none bg-gradient-to-b from-yellow-500/5 to-transparent'>
              <CardHeader>
                <CardTitle className='text-white text-lg flex items-center gap-2'>
                  <Trophy className='w-5 h-5 text-yellow-400' />
                  Your Performance
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div className='text-center py-4'>
                  <div className='text-xs text-muted-foreground uppercase tracking-widest mb-2'>
                    Global Rank
                  </div>
                  <div className='text-5xl font-bold text-white font-display'>
                    #14
                  </div>
                  <div className='text-xs text-brand-bright-green mt-2 flex items-center justify-center gap-1'>
                    <TrendingUp className='w-3 h-3' /> Top 5%
                  </div>
                </div>

                <div className='space-y-3'>
                  <div className='text-xs font-semibold text-white uppercase tracking-wider mb-2'>
                    Recent Badges
                  </div>
                  <div className='flex gap-2 justify-center'>
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className='w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all cursor-pointer'
                        title='Badge Name'
                      >
                        <Trophy className='w-4 h-4 text-yellow-400' />
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  variant='secondary'
                  className='w-full border-white/10 hover:bg-white/5 text-white'
                >
                  View Full Leaderboard
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </LayoutPlayer>
  );
}
