import { LayoutPlayer } from '@/components/LayoutPlayer';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Play,
  Calendar,
  Clock,
  ChevronRight,
  Target,
  User,
} from 'lucide-react';
import { Link } from 'wouter';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function PlayerScenarioList() {
  const games = [
    {
      id: 'GAME-001',
      title: 'Future of Transportation 2030',
      department: 'Strategic Planning Dept',
      gm: 'Capt. Sarah Al Maktoum',
      date: 'Dec 24, 2025',
      time: '09:00 AM',
      status: 'In Progress',
    },
    {
      id: 'GAME-002',
      title: 'AI Ethics Framework',
      department: 'Artificial Intelligence Dept',
      gm: 'Lt. Col. James Chen',
      date: 'Jan 15, 2026',
      time: '10:00 AM',
      status: 'Yet to Start',
    },
    {
      id: 'GAME-003',
      title: 'Cyber Resilience 2025',
      department: 'Cyber Security Dept',
      gm: 'Maj. Ahmed Bin Sulayem',
      date: 'Dec 20, 2025',
      time: '02:00 PM',
      status: 'Completed',
    },
  ];

  return (
    <LayoutPlayer>
      <div className='space-y-8'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
          <div>
            <h1 className='text-3xl font-bold text-white mb-2 font-display tracking-wide'>
              Scenario Planning
            </h1>
            <p className='text-muted-foreground'>
              Join scheduled games or review past sessions.
            </p>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button className='bg-brand-green hover:bg-brand-green/90 text-white shadow-[0_0_15px_rgba(38,208,124,0.3)]'>
                <Play className='w-4 h-4 mr-2' /> Join via Code
              </Button>
            </DialogTrigger>
            <DialogContent className='bg-card border-white/10 text-white'>
              <DialogHeader>
                <DialogTitle>Join Game</DialogTitle>
                <DialogDescription>
                  Enter the 6-digit game code provided by your Game Master.
                </DialogDescription>
              </DialogHeader>
              <div className='py-6 space-y-4'>
                <div className='space-y-2'>
                  <Label>Game Code</Label>
                  <Input
                    placeholder='e.g. 839201'
                    className='text-center text-2xl font-mono tracking-widest bg-secondary/20 border-white/10 h-14'
                    maxLength={6}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button className='w-full bg-brand-green hover:bg-brand-green/90 text-white'>
                  Join Session
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className='grid gap-6'>
          {games.map((game) => (
            <Card
              key={game.id}
              className='glass-card border-none hover:border-brand-green/30 transition-all group relative overflow-hidden'
            >
              <div className='absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand-green to-transparent opacity-0 group-hover:opacity-100 transition-opacity' />

              <CardContent className='p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6'>
                <div className='flex-1 space-y-3'>
                  <div className='flex items-center gap-3'>
                    <Badge
                      variant='secondary'
                      className={`
                            ${
                              game.status === 'In Progress'
                                ? 'bg-brand-green/10 text-brand-bright-green border-brand-green/20'
                                : game.status === 'Yet to Start'
                                ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                                : 'bg-white/5 text-muted-foreground border-white/10'
                            }
                        `}
                    >
                      {game.status}
                    </Badge>
                    <span className='text-xs font-mono text-muted-foreground'>
                      {game.id}
                    </span>
                  </div>

                  <h3 className='text-xl font-bold text-white group-hover:text-brand-bright-green transition-colors'>
                    {game.title}
                  </h3>

                  <div className='flex flex-wrap items-center gap-4 md:gap-8 text-sm text-muted-foreground'>
                    <span className='flex items-center gap-2'>
                      <Target className='w-4 h-4' /> {game.department}
                    </span>
                    <span className='flex items-center gap-2'>
                      <User className='w-4 h-4' /> GM: {game.gm}
                    </span>
                  </div>
                </div>

                <div className='flex flex-col md:items-end gap-2 text-sm text-muted-foreground min-w-[150px]'>
                  <div className='flex items-center gap-2'>
                    <Calendar className='w-4 h-4 text-brand-bright-green' />
                    <span>{game.date}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Clock className='w-4 h-4 text-brand-bright-green' />
                    <span>{game.time}</span>
                  </div>
                </div>

                <div className='w-full md:w-auto mt-4 md:mt-0'>
                  {game.status === 'In Progress' ? (
                    <Link href={`/player/game/${game.id}`}>
                      <Button className='w-full md:w-auto bg-brand-green hover:bg-brand-green/90 text-white shadow-[0_0_15px_rgba(38,208,124,0.3)]'>
                        Play Game <Play className='ml-2 w-4 h-4 fill-current' />
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      variant='secondary'
                      className='w-full md:w-auto border-white/10 hover:bg-white/5'
                      disabled={game.status === 'Completed'}
                    >
                      {game.status === 'Completed'
                        ? 'View Report'
                        : 'Join Waiting Room'}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </LayoutPlayer>
  );
}
