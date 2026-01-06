import { LayoutGM } from '@/components/LayoutGM';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Play,
  Calendar,
  Users,
  Clock,
  Target,
  Flame,
  Trophy,
  BarChart3,
} from 'lucide-react';
import { Link } from 'wouter';

export default function GMGameList() {
  const games = [
    {
      id: 'GAME-001',
      title: 'Future of Transportation 2030',
      description:
        'Exploring the impact of autonomous systems on urban mobility infrastructure.',
      date: 'Dec 24, 2025',
      time: '09:00 AM',
      participants: 12,
      maxParticipants: 16,
      readiness: 78,
      engagement: 82,
      status: 'Scheduled',
    },
    {
      id: 'GAME-002',
      title: 'AI in Law Enforcement',
      description:
        'Strategic foresight into the role of artificial intelligence in crime prevention.',
      date: 'Dec 26, 2025',
      time: '10:30 AM',
      participants: 8,
      maxParticipants: 10,
      readiness: 92,
      engagement: 90,
      status: 'Ready to Start',
    },
    {
      id: 'GAME-003',
      title: 'Cyber Resilience Framework',
      description:
        'Developing robust defense mechanisms against next-gen cyber threats.',
      date: 'Jan 05, 2026',
      time: '02:00 PM',
      participants: 15,
      maxParticipants: 20,
      readiness: 64,
      engagement: 71,
      status: 'Scheduled',
    },
  ];

  return (
    <LayoutGM>
      <div className='space-y-10'>
        {/* --------------------------------------------------
           HEADER
        -------------------------------------------------- */}
        <div>
          <h1 className='text-3xl font-bold text-white mb-2 font-display tracking-wide'>
            Mission Control
          </h1>
          <p className='text-muted-foreground'>
            Launch, monitor and optimize your foresight game sessions.
          </p>
        </div>

        {/* --------------------------------------------------
           ANALYTICS OVERVIEW
        -------------------------------------------------- */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          <Card className='glass-card border-none'>
            <CardContent className='p-5 flex items-center gap-4'>
              <Target className='text-brand-bright-green w-6 h-6' />
              <div>
                <p className='text-xs text-muted-foreground'>Total Games</p>
                <p className='text-xl font-bold text-white'>{games.length}</p>
              </div>
            </CardContent>
          </Card>

          <Card className='glass-card border-none'>
            <CardContent className='p-5 flex items-center gap-4'>
              <Play className='text-brand-bright-green w-6 h-6' />
              <div>
                <p className='text-xs text-muted-foreground'>Ready to Launch</p>
                <p className='text-xl font-bold text-white'>
                  {games.filter((g) => g.status === 'Ready to Start').length}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className='glass-card border-none'>
            <CardContent className='p-5 flex items-center gap-4'>
              <Users className='text-brand-bright-green w-6 h-6' />
              <div>
                <p className='text-xs text-muted-foreground'>
                  Avg Participants
                </p>
                <p className='text-xl font-bold text-white'>
                  {Math.round(
                    games.reduce((a, g) => a + g.participants, 0) / games.length
                  )}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className='glass-card border-none'>
            <CardContent className='p-5 flex items-center gap-4'>
              <Flame className='text-brand-bright-green w-6 h-6' />
              <div>
                <p className='text-xs text-muted-foreground'>Engagement XP</p>
                <p className='text-xl font-bold text-white'>
                  {Math.round(
                    games.reduce((a, g) => a + g.engagement, 0) / games.length
                  )}
                  %
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* --------------------------------------------------
           GAME CARDS
        -------------------------------------------------- */}
        <div className='grid gap-6'>
          {games.map((game, idx) => (
            <Card
              key={game.id}
              className='glass-card border-none group hover:border-brand-green/30 transition-all overflow-hidden'
            >
              <div className='flex flex-col lg:flex-row'>
                {/* LEFT */}
                <div className='flex-1 p-6 md:p-8 space-y-4'>
                  <div className='flex items-center gap-3'>
                    <Badge
                      variant='secondary'
                      className='bg-brand-green/10 text-brand-bright-green'
                    >
                      {game.status}
                    </Badge>
                    <span className='text-xs font-mono text-muted-foreground'>
                      {game.id}
                    </span>

                    <Badge className='ml-auto bg-white/5'>
                      <Trophy className='w-3 h-3 mr-1' />
                      Rank #{idx + 1}
                    </Badge>
                  </div>

                  <h3 className='text-2xl font-bold text-white group-hover:text-brand-bright-green transition-colors'>
                    {game.title}
                  </h3>

                  <p className='text-muted-foreground max-w-2xl'>
                    {game.description}
                  </p>

                  {/* META */}
                  <div className='flex flex-wrap gap-6 text-sm text-muted-foreground'>
                    <div className='flex items-center gap-2'>
                      <Calendar className='w-4 h-4 text-brand-bright-green' />
                      {game.date}
                    </div>
                    <div className='flex items-center gap-2'>
                      <Clock className='w-4 h-4 text-brand-bright-green' />
                      {game.time}
                    </div>
                    <div className='flex items-center gap-2'>
                      <Users className='w-4 h-4 text-brand-bright-green' />
                      {game.participants}/{game.maxParticipants}
                    </div>
                  </div>

                  {/* PROGRESS BARS */}
                  <div className='space-y-3 pt-2'>
                    <ProgressBar label='Readiness' value={game.readiness} />
                    <ProgressBar
                      label='Engagement'
                      value={game.engagement}
                      accent
                    />
                  </div>
                </div>

                {/* RIGHT */}
                <div className='p-6 md:p-8 flex items-center justify-center'>
                  <Link href={`/gm/games/${game.id}`}>
                    <Button size='md'>
                      <Play className='w-5 h-5 mr-2 fill-current' />
                      Launch Session
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </LayoutGM>
  );
}

/* --------------------------------------------------
   PROGRESS BAR COMPONENT
-------------------------------------------------- */
function ProgressBar({
  label,
  value,
  accent,
}: {
  label: string;
  value: number;
  accent?: boolean;
}) {
  return (
    <div>
      <div className='flex justify-between text-xs text-muted-foreground mb-1'>
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className='h-2 rounded-full bg-white/10 overflow-hidden'>
        <div
          className={`h-full rounded-full transition-all ${
            accent
              ? 'bg-gradient-to-r from-brand-green to-brand-bright-green'
              : 'bg-brand-bright-green'
          }`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
