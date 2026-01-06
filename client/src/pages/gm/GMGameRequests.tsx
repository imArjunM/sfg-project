import { LayoutGM } from '@/components/LayoutGM';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Gamepad2,
  Plus,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  AlertCircle,
  MoreVertical,
  Calendar,
  FileText,
  Target,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useState } from 'react';
import { GlassCard } from '@/components/ui/glass-card';

export default function GMGameRequests() {
  const [showCreateForm, setShowCreateForm] = useState(false);

  const requests = [
    {
      id: 'REQ-001',
      title: 'Cybersecurity 2030',
      department: 'IT Security Dept',
      date: 'Dec 24, 2025',
      status: 'Approved',
      reviewedBy: 'Admin User',
      focalIssue: 'AI-driven cyber threats',
    },
    {
      id: 'REQ-002',
      title: 'Urban Mobility Framework',
      department: 'Traffic Dept',
      date: 'Jan 10, 2026',
      status: 'Pending',
      reviewedBy: null,
      focalIssue: 'Autonomous vehicle integration',
    },
    {
      id: 'REQ-003',
      title: 'Smart City Ethics',
      department: 'Strategy Dept',
      date: 'Jan 15, 2026',
      status: 'Changes Requested',
      reviewedBy: 'Admin User',
      focalIssue: 'Data privacy in public spaces',
    },
  ];

  const stats = [
    {
      label: 'Total Requests',
      value: '24',
      icon: FileText,
      color: 'text-brand-bright-green',
      bg: 'bg-brand-green/10',
      meta: '+2 today',
    },
    {
      label: 'Approved',
      value: '18',
      icon: CheckCircle2,
      color: 'text-emerald-400',
      bg: 'bg-emerald-400/10',
    },
    {
      label: 'Pending Approval',
      value: '04',
      icon: Clock,
      color: 'text-orange-400',
      bg: 'bg-orange-400/10',
    },
    {
      label: 'Changes Requested',
      value: '02',
      icon: AlertCircle,
      color: 'text-blue-400',
      bg: 'bg-blue-400/10',
    },
  ];

  return (
    <LayoutGM>
      <div className='space-y-8'>
        <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
          <div>
            <h1 className='text-3xl font-bold text-white mb-2 font-display tracking-wide'>
              Game Requests
            </h1>
            <p className='text-muted-foreground'>
              Create and track scenario planning requests sent to
              administration.
            </p>
          </div>
          <Dialog open={showCreateForm} onOpenChange={setShowCreateForm}>
            <DialogTrigger asChild>
              <Button>
                <Plus className='w-4 h-4 mr-2' /> Create Game Request
              </Button>
            </DialogTrigger>
            <DialogContent className='max-w-2xl bg-card border-white/10 text-white'>
              <DialogHeader>
                <DialogTitle>Create New Game Request</DialogTitle>
                <DialogDescription>
                  Submit a new scenario planning request for administrative
                  approval.
                </DialogDescription>
              </DialogHeader>

              <div className='grid gap-6 py-4'>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='space-y-2'>
                    <Label>Game Title</Label>
                    <Input
                      placeholder='e.g. Future of Policing 2030'
                      className='bg-secondary/20 border-white/10'
                    />
                  </div>
                  <div className='space-y-2'>
                    <Label>Department</Label>
                    <Select>
                      <SelectTrigger className='bg-secondary/20 border-white/10'>
                        <SelectValue placeholder='Select Department' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='strategy'>
                          Strategy & Future
                        </SelectItem>
                        <SelectItem value='cid'>
                          Criminal Investigation
                        </SelectItem>
                        <SelectItem value='traffic'>Traffic Dept</SelectItem>
                        <SelectItem value='ai'>
                          Artificial Intelligence
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className='grid grid-cols-2 gap-4'>
                  <div className='space-y-2'>
                    <Label>Proposed Date</Label>
                    <Input
                      type='date'
                      className='bg-secondary/20 border-white/10'
                    />
                  </div>
                  <div className='space-y-2'>
                    <Label>Expected Participants</Label>
                    <Input
                      type='number'
                      placeholder='10-50'
                      className='bg-secondary/20 border-white/10'
                    />
                  </div>
                </div>

                <div className='space-y-2'>
                  <Label>Focal Issue</Label>
                  <Input
                    placeholder='Main strategic issue to address'
                    className='bg-secondary/20 border-white/10'
                  />
                </div>

                <div className='space-y-2'>
                  <Label>Themes Selection</Label>
                  <div className='grid grid-cols-3 gap-2'>
                    {[
                      'Technological',
                      'Social',
                      'Economic',
                      'Environmental',
                      'Political',
                      'Legal',
                    ].map((theme) => (
                      <div
                        key={theme}
                        className='flex items-center space-x-2 border border-white/10 rounded p-2 hover:bg-white/5 cursor-pointer'
                      >
                        <div className='w-4 h-4 rounded border border-white/30' />
                        <span className='text-sm'>{theme}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className='space-y-2'>
                  <Label>Theme Explanation</Label>
                  <Textarea
                    placeholder='Why were these themes chosen?'
                    className='bg-secondary/20 border-white/10 min-h-[80px]'
                  />
                </div>
              </div>

              <DialogFooter>
                <Button
                  variant='secondary'
                  onClick={() => setShowCreateForm(false)}
                  className='border-white/10 hover:bg-white/5'
                >
                  Save Draft
                </Button>
                <Button
                  onClick={() => setShowCreateForm(false)}
                  className='bg-brand-green hover:bg-brand-green/90'
                >
                  Send for Review
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Analytics Cards */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          {stats.map((stat, i) => (
            <GlassCard
              key={stat.label}
              className='p-6 group hover:glow-teal transition-all duration-300'
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className='flex items-start justify-between'>
                <div>
                  <div className='text-2xl font-bold text-white mb-1'>
                    {stat.value}
                  </div>
                  <div className='text-xs text-muted-foreground'>
                    {stat.label}
                  </div>

               
                </div>

                <div className={`p-3 rounded-lg ${stat.bg}`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Search and Filter */}
        <div className='flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/5'>
          <div className='relative flex-1 max-w-sm'>
            <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground' />
            <Input
              placeholder='Search requests...'
              className='pl-9 bg-black/20 border-white/10'
            />
          </div>
          <Button
            variant='secondary'
            className='border-white/10 hover:bg-white/5 gap-2'
          >
            <Filter className='w-4 h-4' /> Filter Status
          </Button>
        </div>

        {/* Requests List */}
        <div className='grid gap-4'>
          {requests.map((req) => (
            <Card
              key={req.id}
              className='glass-card border-none hover:bg-white/5 transition-all group'
            >
              <CardContent className='p-6 flex flex-col md:flex-row items-start md:items-center gap-6'>
                <div className='p-3 rounded-lg bg-white/5 group-hover:bg-brand-green/10 transition-colors'>
                  <Gamepad2 className='w-6 h-6 text-muted-foreground group-hover:text-brand-bright-green' />
                </div>

                <div className='flex-1 space-y-1'>
                  <div className='flex items-center gap-3'>
                    <h3 className='font-semibold text-white text-lg'>
                      {req.title}
                    </h3>
                    <Badge
                      variant='secondary'
                      className={`
                      ${
                        req.status === 'Approved'
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                          : req.status === 'Pending'
                          ? 'bg-orange-500/10 text-orange-400 border-orange-500/20'
                          : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                      }
                    `}
                    >
                      {req.status}
                    </Badge>
                  </div>
                  <div className='flex items-center gap-6 text-sm text-muted-foreground'>
                    <span className='flex items-center gap-1'>
                      <Target className='w-3 h-3' /> {req.department}
                    </span>
                    <span className='flex items-center gap-1'>
                      <Calendar className='w-3 h-3' /> Created: {req.date}
                    </span>
                    {req.reviewedBy && (
                      <span className='flex items-center gap-1 text-xs bg-white/5 px-2 py-0.5 rounded'>
                        Reviewed by: {req.reviewedBy}
                      </span>
                    )}
                  </div>
                </div>

                <div className='flex items-center gap-4'>
                  <div className='text-right hidden md:block'>
                    <div className='text-xs text-muted-foreground mb-1'>
                      Focal Issue
                    </div>
                    <div className='text-sm font-medium text-white'>
                      {req.focalIssue}
                    </div>
                  </div>
                  <Button
                    variant='ghost'
                    size='icon'
                    className='text-muted-foreground hover:text-white'
                  >
                    <MoreVertical className='w-4 h-4' />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </LayoutGM>
  );
}
