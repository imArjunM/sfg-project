import { LayoutGM } from '@/components/LayoutGM';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Users,
  Target,
  Lightbulb,
  Swords,
  BarChart2,
  FileText,
  CheckCircle2,
  Clock,
  Plus,
  Search,
  ArrowRight,
  UserPlus,
  Trash2,
  MoreVertical,
  GripVertical,
  AlertTriangle,
  Zap,
  Info,
  Edit2Icon,
} from 'lucide-react';
import { useLocation } from 'wouter';
import { Textarea } from '@/components/ui/textarea';
import { SectionCountdown } from './SectionCountdown';
import { SectionTimerControl } from './SectionTimerControl';

// Stage Components (Mocked for speed)
const ParticipantsStage = ({ onNext }: { onNext: () => void }) => (
  <div className='space-y-6 animate-in fade-in slide-in-from-right-4 duration-500'>
    <div className='flex justify-between items-center'>
      <h2 className='text-xl font-bold text-white'>Participants Management</h2>
      <Button onClick={onNext}>
        Start Game <ArrowRight className='ml-2 w-4 h-4' />
      </Button>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      {/* Add Participant */}
      <Card className='glass-card border-none md:col-span-1'>
        <CardHeader>
          <CardTitle className='text-lg'>Add Participant</CardTitle>
          <CardDescription>Invite stakeholders to the session</CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='space-y-2'>
            <Label>Search Employee</Label>
            <div className='relative'>
              <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground' />
              <Input
                placeholder='ID or Name...'
                className='pl-9 bg-secondary/20 border-white/10'
              />
            </div>
          </div>
          <div className='pt-2'>
            <div className='p-3 rounded bg-white/5 border border-white/5 flex items-center gap-3 mb-4'>
              <Avatar className='w-8 h-8'>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className='overflow-hidden'>
                <p className='text-sm font-medium truncate text-white'>
                  John Doe
                </p>
                <p className='text-xs text-muted-foreground truncate'>
                  ID: 98765 • Strategy
                </p>
              </div>
              <Button size='sm' variant='ghost'>
                <UserPlus className='w-4 h-4' />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* List */}
      <Card className='glass-card border-none md:col-span-2'>
        <CardHeader className='flex flex-row items-center justify-between'>
          <div>
            <CardTitle className='text-lg'>Current Participants</CardTitle>
            <CardDescription>12 Users Ready</CardDescription>
          </div>
          <Badge
            variant='secondary'
            className='bg-brand-green/10 text-brand-bright-green border-brand-green/20'
          >
            <span className='w-2 h-2 rounded-full bg-brand-bright-green mr-2 animate-pulse' />
            Waiting for start
          </Badge>
        </CardHeader>
        <CardContent>
          <ScrollArea className='h-[400px] pr-4'>
            <div className='space-y-3'>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className='flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5'
                >
                  <div className='flex items-center gap-3'>
                    <Avatar className='w-9 h-9 border border-white/10'>
                      <AvatarFallback>U{i}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className='text-sm font-medium text-white'>
                        Participant Name {i}
                      </p>
                      <p className='text-xs text-muted-foreground'>
                        Artificial Intelligence
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center gap-4'>
                    <Badge
                      variant='secondary'
                      className='bg-white/10 text-white/70 hover:bg-white/20'
                    >
                      Expert{' '}
                      <div className='text-muted-foreground hover:text-destructive cursor-pointer ml-2'>
                        <Edit2Icon className='w-3 h-3' />
                      </div>
                    </Badge>

                    <div className='text-muted-foreground hover:text-destructive cursor-pointer'>
                      <Trash2 className='w-4 h-4' />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  </div>
);

const FocalTopicsStage = ({ onNext }: { onNext: () => void }) => (
  <div className='space-y-6 animate-in fade-in slide-in-from-right-4 duration-500'>
    <div className='flex justify-between items-center bg-brand-green/10 p-4 rounded-lg border border-brand-green/20'>
      <div className='flex items-center gap-4'>
        <div className='p-2 rounded bg-brand-green/20'>
          <Clock className='w-6 h-6 text-brand-bright-green animate-pulse' />
        </div>
        <div>
          <h3 className='text-lg font-bold text-white'>Voting In Progress</h3>
          <p className='text-sm text-brand-bright-green'>
            Participants are submitting focal topics...
          </p>
        </div>
      </div>
      <div className='text-right'>
        <div className='text-2xl font-mono text-white'>04:32</div>
        <div className='text-xs text-muted-foreground'>REMAINING</div>
      </div>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <Card
          key={i}
          className={`glass-card border-none hover:bg-white/5 cursor-pointer group ${
            i === 1 ? 'ring-2 ring-brand-bright-green bg-brand-green/5' : ''
          }`}
        >
          <CardContent className='p-6'>
            <div className='flex justify-between items-start mb-4'>
              <Badge
                variant='secondary'
                className='bg-blue-500/10 text-blue-400 border-blue-500/20'
              >
                {10 + i} Votes
              </Badge>
              {i === 1 && (
                <CheckCircle2 className='w-5 h-5 text-brand-bright-green' />
              )}
            </div>
            <h4 className='text-lg font-semibold text-white mb-2'>
              Impact of AI on Digital Forensics
            </h4>
            <p className='text-xs text-muted-foreground mb-4'>
              Submitted by: Officer Ahmed (Cybercrime)
            </p>
            {/* <div className='flex items-center justify-between pt-4 border-t border-white/5'>
              <Button
                size='sm'
                variant='ghost'
                className='text-xs w-full hover:text-brand-bright-green'
              >
                View Details
              </Button>
            </div> */}
          </CardContent>
        </Card>
      ))}
    </div>

    <div className='flex justify-end pt-4 border-t border-white/5'>
      <Button onClick={onNext}>
        Proceed to Themes <ArrowRight className='ml-2 w-4 h-4' />
      </Button>
    </div>
  </div>
);

const ThemeAssignmentStage = ({ onNext }: { onNext: () => void }) => (
  <div className='space-y-6 animate-in fade-in slide-in-from-right-4 duration-500'>
    <div className='flex justify-between items-center'>
      <div>
        <h2 className='text-xl font-bold text-white'>Theme Allocation</h2>
        <p className='text-muted-foreground'>
          Assign participants to specific strategic themes.
        </p>
      </div>
      <div className='flex gap-2'>
        <Button variant='secondary'>Auto-Assign All</Button>
        <Button onClick={onNext}>
          Confirm Allocation <ArrowRight className='ml-2 w-4 h-4' />
        </Button>
      </div>
    </div>

    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
      {['Technological', 'Social', 'Legal'].map((theme, idx) => (
        <Card key={theme} className='glass-card border-none'>
          <CardHeader className='pb-3 border-b border-white/5'>
            <CardTitle className='text-lg flex items-center justify-between'>
              {theme}
              <Badge variant='secondary' className='bg-white/10'>
                {4} Users
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className='pt-4'>
            <div className='space-y-2'>
              {[1, 2, 3, 4].map((u) => (
                <div
                  key={u}
                  className='p-2 rounded bg-white/5 border border-white/5 flex items-center justify-between gap-2 cursor-move hover:bg-white/10 transition-colors'
                >
                  <div className='flex items-center gap-3'>
                    <GripVertical className='w-4 h-4 text-muted-foreground' />
                    <Avatar className='w-6 h-6'>
                      <AvatarFallback className='text-[10px]'>
                        P{u}
                      </AvatarFallback>
                    </Avatar>
                    <span className='text-sm text-white'>Participant {u}</span>
                  </div>

                  <div className='text-muted-foreground hover:text-brand-dark-green cursor-pointer'>
                    <Info className='w-4 h-4' />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

const ChallengesStage = ({ onNext }: { onNext: () => void }) => (
  <div className='space-y-6 animate-in fade-in slide-in-from-right-4 duration-500'>
    <div className='flex justify-between items-center'>
      <h2 className='text-xl font-bold text-white'>Define Challenges</h2>
      <Button onClick={onNext}>
        Proceed to Voting <ArrowRight className='ml-2 w-4 h-4' />
      </Button>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      {/* Tech Column */}
      <div className='space-y-4'>
        <h3 className='font-semibold text-brand-bright-green uppercase tracking-wider text-sm'>
          Technological
        </h3>
        {[1, 2].map((i) => (
          <Card
            key={i}
            className='glass-card border-none bg-brand-green/5 relative'
          >
            <CardContent className='p-4 space-y-3'>
              <p className='text-sm text-white font-medium'>
                Rapid obsolescence of current security hardware due to quantum
                computing advancements.
              </p>
              <div className='flex justify-between items-center pt-2'>
                <Badge>By: Participant 1</Badge>
                <div className='flex gap-1'>
                  <Button
                    size='icon'
                    variant='ghost'
                    className='h-6 w-6 text-emerald-400 hover:bg-emerald-400/10'
                  >
                    <CheckCircle2 className='w-4 h-4' />
                  </Button>
                  <Button
                    size='icon'
                    variant='ghost'
                    className='h-6 w-6 text-destructive hover:bg-destructive/10'
                  >
                    <Trash2 className='w-4 h-4' />
                  </Button>
                </div>
              </div>
            </CardContent>
            <div className='absolute top-6 left-2'>
              <GripVertical className='w-4 h-4 text-muted-foreground' />
            </div>
          </Card>
        ))}
      </div>

      {/* Social Column */}
      <div className='space-y-4'>
        <h3 className='font-semibold text-blue-400 uppercase tracking-wider text-sm'>
          Social
        </h3>
        {[1, 2, 3].map((i) => (
          <Card
            key={i}
            className='glass-card border-none bg-blue-500/5 relative'
          >
            <CardContent className='p-4 space-y-3'>
              <p className='text-sm text-white font-medium'>
                Public resistance to biometric surveillance in residential
                zones.
              </p>
              <div className='flex justify-between items-center pt-2'>
                <Badge>By: Participant 4</Badge>
                <div className='flex gap-1'>
                  <Button
                    size='icon'
                    variant='ghost'
                    className='h-6 w-6 text-emerald-400 hover:bg-emerald-400/10'
                  >
                    <CheckCircle2 className='w-4 h-4' />
                  </Button>
                  <Button
                    size='icon'
                    variant='ghost'
                    className='h-6 w-6 text-destructive hover:bg-destructive/10'
                  >
                    <Trash2 className='w-4 h-4' />
                  </Button>
                </div>
              </div>
            </CardContent>
            <div className='absolute top-6 left-2'>
              <GripVertical className='w-4 h-4 text-muted-foreground' />
            </div>
          </Card>
        ))}
      </div>

      {/* Legal Column */}
      <div className='space-y-4'>
        <h3 className='font-semibold text-orange-400 uppercase tracking-wider text-sm'>
          Legal
        </h3>
        {[1].map((i) => (
          <Card
            key={i}
            className='glass-card border-none bg-orange-500/5 relative'
          >
            <CardContent className='p-4 space-y-3 '>
              <p className='text-sm text-white font-medium'>
                Cross-border data jurisdiction conflicts in cloud-based evidence
                storage.
              </p>
              <div className='flex justify-between items-center pt-2'>
                <Badge>By: Participant 7</Badge>
                <div className='flex gap-1'>
                  <Button
                    size='icon'
                    variant='ghost'
                    className='h-6 w-6 text-emerald-400 hover:bg-emerald-400/10'
                  >
                    <CheckCircle2 className='w-4 h-4' />
                  </Button>
                  <Button
                    size='icon'
                    variant='ghost'
                    className='h-6 w-6 text-destructive hover:bg-destructive/10'
                  >
                    <Trash2 className='w-4 h-4' />
                  </Button>
                </div>
              </div>
            </CardContent>
            <div className='absolute top-6 left-2'>
              <GripVertical className='w-4 h-4 text-muted-foreground' />
            </div>
          </Card>
        ))}
      </div>
    </div>
  </div>
);

const VotingStage = ({ onNext }: { onNext: () => void }) => (
  <div className='space-y-6 animate-in fade-in slide-in-from-right-4 duration-500'>
    <div className='flex justify-between items-center bg-white/5 p-4 rounded-lg'>
      <div>
        <h2 className='text-xl font-bold text-white'>Impact vs. Probability</h2>
        <p className='text-muted-foreground'>Real-time voting visualization</p>
      </div>
      <Button onClick={onNext}>
        Finalize & Proceed <ArrowRight className='ml-2 w-4 h-4' />
      </Button>
    </div>

    <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
      <div className='lg:col-span-3 bg-white/5 rounded-xl p-6 min-h-[500px] relative border border-white/10 flex items-center justify-center'>
        {/* Mock Grid */}
        <div className='absolute left-4 top-1/2 -rotate-90 text-xs font-bold tracking-widest text-muted-foreground'>
          IMPACT
        </div>
        <div className='absolute bottom-4 left-1/2 -translate-x-1/2 text-xs font-bold tracking-widest text-muted-foreground'>
          PROBABILITY
        </div>

        <div className='grid grid-cols-3 grid-rows-3 w-full h-full gap-1 p-8'>
          {/* Low/Low */}
          <div className='bg-white/5 rounded flex items-center justify-center relative group hover:bg-white/10 transition-colors'>
            <span className='absolute top-2 right-2 text-[10px] text-muted-foreground opacity-50'>
              L/L
            </span>
            <div className='w-8 h-8 rounded-full bg-blue-500/50 flex items-center justify-center text-xs font-bold text-white shadow-lg backdrop-blur-sm'>
              2
            </div>
          </div>
          {/* Med/Low */}
          <div className='bg-white/5 rounded flex items-center justify-center relative group hover:bg-white/10 transition-colors'></div>
          {/* High/Low */}
          <div className='bg-white/5 rounded flex items-center justify-center relative group hover:bg-white/10 transition-colors'>
            <div className='w-10 h-10 rounded-full bg-orange-500/50 flex items-center justify-center text-xs font-bold text-white shadow-lg backdrop-blur-sm'>
              5
            </div>
          </div>

          {/* ... Middle rows mock ... */}
          <div className='bg-white/5 rounded flex items-center justify-center relative group hover:bg-white/10 transition-colors'></div>
          <div className='bg-white/5 rounded flex items-center justify-center relative group hover:bg-white/10 transition-colors'>
            <div className='w-12 h-12 rounded-full bg-brand-green flex items-center justify-center text-sm font-bold text-white shadow-lg backdrop-blur-sm ring-4 ring-brand-green/20'>
              8
            </div>
          </div>
          <div className='bg-white/5 rounded flex items-center justify-center relative group hover:bg-white/10 transition-colors'></div>

          {/* ... Bottom rows mock ... */}
          <div className='bg-white/5 rounded flex items-center justify-center relative group hover:bg-white/10 transition-colors'></div>
          <div className='bg-white/5 rounded flex items-center justify-center relative group hover:bg-white/10 transition-colors'>
            <div className='w-8 h-8 rounded-full bg-red-500/50 flex items-center justify-center text-xs font-bold text-white shadow-lg backdrop-blur-sm'>
              3
            </div>
          </div>
          <div className='bg-white/5 rounded flex items-center justify-center relative group hover:bg-white/10 transition-colors'>
            <span className='absolute top-2 right-2 text-[10px] text-muted-foreground opacity-50'>
              H/H
            </span>
            <div className='w-14 h-14 rounded-full bg-destructive flex items-center justify-center text-lg font-bold text-white shadow-lg backdrop-blur-sm ring-4 ring-destructive/20 animate-pulse'>
              12
            </div>
          </div>
        </div>
      </div>

      <div className='space-y-4'>
        <h3 className='font-semibold text-white mb-4'>Theme Scores</h3>
        {['Technological', 'Social', 'Legal'].map((theme) => (
          <Card key={theme} className='glass-card border-none'>
            <CardContent className='p-4'>
              <div className='text-sm text-muted-foreground mb-1'>{theme}</div>
              <div className='flex items-end justify-between'>
                <span className='text-2xl font-bold text-white'>8.4</span>
                <Badge
                  variant='secondary'
                  className='bg-brand-green/10 text-brand-bright-green border-brand-green/20'
                >
                  High
                </Badge>
              </div>
              <div className='mt-2 h-1.5 w-full bg-white/10 rounded-full overflow-hidden'>
                <div className='h-full bg-brand-green w-[84%] rounded-full' />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </div>
);

const SummaryStage = ({ onNext }: { onNext: () => void }) => (
  <div className='space-y-6 animate-in fade-in slide-in-from-right-4 duration-500'>
    <div className='flex justify-between items-center'>
      <h2 className='text-xl font-bold text-white'>Key Events & Summary</h2>
      <Button onClick={onNext}>
        Generate Final Report <ArrowRight className='ml-2 w-4 h-4' />
      </Button>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      <Card className='glass-card border-none bg-red-500/5'>
        <CardHeader>
          <CardTitle className='flex items-center gap-2 text-red-400'>
            <AlertTriangle className='w-5 h-5' /> Risks
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className='list-disc list-inside space-y-2 text-sm text-white/80'>
            <li>System vulnerabilities during quantum transition</li>
            <li>Loss of public trust due to automated enforcement</li>
            <li>Regulatory lag in cross-border cases</li>
          </ul>
        </CardContent>
      </Card>

      <Card className='glass-card border-none bg-brand-green/5'>
        <CardHeader>
          <CardTitle className='flex items-center gap-2 text-brand-bright-green'>
            <Zap className='w-5 h-5' /> Opportunities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className='list-disc list-inside space-y-2 text-sm text-white/80'>
            <li>AI-driven predictive policing capabilities</li>
            <li>Enhanced evidence processing speeds</li>
            <li>Global leadership in smart security standards</li>
          </ul>
        </CardContent>
      </Card>

      <Card className='glass-card border-none bg-blue-500/5 md:col-span-2'>
        <CardHeader>
          <CardTitle className='flex items-center gap-2 text-blue-400'>
            <Info className='w-5 h-5' /> Strategic Implications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            className='min-h-[100px] bg-black/20 border-white/10'
            placeholder='Add consolidation notes...'
            defaultValue='The consensus indicates a high urgency to upgrade encryption standards before 2027. Social acceptance remains the primary bottleneck for deployment.'
          />
        </CardContent>
      </Card>
    </div>
  </div>
);

const ReportStage = () => (
  <div className='space-y-6 animate-in fade-in slide-in-from-right-4 duration-500'>
    <div className='flex justify-between items-center bg-brand-green/10 p-6 rounded-xl border border-brand-green/20'>
      <div>
        <h2 className='text-2xl font-bold text-white mb-2'>Report Ready</h2>
        <p className='text-brand-bright-green'>
          The final strategic foresight report has been generated successfully.
        </p>
      </div>
      <div className='flex gap-4'>
        <Button variant='secondary'>Preview PDF</Button>
        <Button>
          Submit to Admin <CheckCircle2 className='ml-2 w-4 h-4' />
        </Button>
      </div>
    </div>

    <div className='bg-white text-black p-12 rounded shadow-2xl max-w-4xl mx-auto min-h-[600px] font-serif'>
      <div className='text-center border-b-2 border-black pb-8 mb-8'>
        <h1 className='text-4xl font-bold mb-4'>Strategic Foresight Report</h1>
        <h2 className='text-xl text-gray-600'>Future of Transportation 2030</h2>
        <p className='mt-4 text-sm text-gray-500'>
          Generated on: December 22, 2025
        </p>
      </div>

      <div className='space-y-8'>
        <section>
          <h3 className='text-xl font-bold uppercase tracking-widest mb-4 border-b border-gray-300 pb-2'>
            Executive Summary
          </h3>
          <p className='text-gray-800 leading-relaxed'>
            This session explored the critical implications of autonomous
            systems on urban mobility. Participants identified key technological
            risks and significant opportunities for Dubai Police to lead in
            smart infrastructure security.
          </p>
        </section>

        <section>
          <h3 className='text-xl font-bold uppercase tracking-widest mb-4 border-b border-gray-300 pb-2'>
            Top Priority Challenges
          </h3>
          <div className='grid grid-cols-2 gap-8'>
            <div>
              <h4 className='font-bold text-gray-900 mb-2'>Technological</h4>
              <p className='text-sm text-gray-700'>
                Quantum decryption threats to V2X communication protocols.
              </p>
            </div>
            <div>
              <h4 className='font-bold text-gray-900 mb-2'>Social</h4>
              <p className='text-sm text-gray-700'>
                Public resistance to mandatory biometric verification for
                transit.
              </p>
            </div>
          </div>
        </section>

        {/* Visual placeholder for report content */}
        <div className='h-40 bg-gray-100 rounded flex items-center justify-center text-gray-400 italic'>
          [Detailed Analytics & Charts]
        </div>
      </div>
    </div>
  </div>
);

export default function GMActiveGame() {
  const [params] = useLocation();
  // Mock ID from URL if needed, but for prototype we just show the active game UI

  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { id: 'participants', label: 'Participants', component: ParticipantsStage },
    { id: 'topics', label: 'Focal Topics', component: FocalTopicsStage },
    { id: 'themes', label: 'Themes', component: ThemeAssignmentStage },
    { id: 'challenges', label: 'Challenges', component: ChallengesStage },
    { id: 'voting', label: 'Voting', component: VotingStage },
    { id: 'summary', label: 'Summary', component: SummaryStage },
    { id: 'report', label: 'Report', component: ReportStage },
  ];

  const CurrentComponent = steps[currentStep].component;

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const goToStep = (index: number) => {
    // Allow navigation only to visited steps or next step (mock logic)
    if (index <= currentStep + 1) setCurrentStep(index);
  };

  const [themeTimerEnabled, setThemeTimerEnabled] = useState(true);
  const [themeDuration, setThemeDuration] = useState(10);

  return (
    <LayoutGM>
      <div className='space-y-8'>
        {/* Game Header */}
        <div className='flex items-center justify-between border-b border-white/5 pb-6'>
          <div>
            <div className='flex items-center gap-3 mb-2'>
              <Badge
                variant='secondary'
                className='bg-brand-green/10 text-brand-bright-green border-brand-green/20'
              >
                IN PROGRESS
              </Badge>
              <span className='text-xs font-mono text-muted-foreground'>
                GAME-001
              </span>
            </div>
            <h1 className='text-3xl font-bold text-white font-display tracking-wide'>
              Future of Transportation 2030
            </h1>
          </div>

          <div className='flex items-center gap-4'>
            <div className='flex items-center gap-4'>
              <SectionCountdown minutes={10} active={themeTimerEnabled} />

              <SectionTimerControl
                enabled={themeTimerEnabled}
                duration={themeDuration}
                onToggle={setThemeTimerEnabled}
                onDurationChange={setThemeDuration}
              />
            </div>
            <div className='bg-black/30 px-4 py-2 rounded-lg border border-white/10 text-center'>
              <span className='block text-xs text-muted-foreground uppercase tracking-wider'>
                Session Time
              </span>
              <span className='text-xl font-mono text-white'>00:45:12</span>
            </div>
          </div>
        </div>

        {/* Progress Stepper */}
        <div className='w-full overflow-x-auto pb-4'>
          <div className='flex items-center min-w-max'>
            {steps.map((step, index) => (
              <div key={step.id} className='flex items-center'>
                <button
                  onClick={() => goToStep(index)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                    index === currentStep
                      ? 'bg-brand-green text-white font-bold'
                      : index < currentStep
                      ? 'bg-brand-green/20 text-brand-bright-green hover:bg-brand-green/30'
                      : 'bg-white/5 text-muted-foreground hover:bg-white/10'
                  }`}
                >
                  <span
                    className={`flex items-center justify-center w-5 h-5 rounded-full text-[10px] ${
                      index === currentStep
                        ? 'bg-white text-brand-green'
                        : 'bg-black/20'
                    }`}
                  >
                    {index + 1}
                  </span>
                  <span className='text-sm whitespace-nowrap'>
                    {step.label}
                  </span>
                </button>
                {index < steps.length - 1 && (
                  <div
                    className={`w-8 h-0.5 mx-2 ${
                      index < currentStep ? 'bg-brand-green/50' : 'bg-white/5'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Stage Content */}
        <div className='min-h-[500px]'>
          <CurrentComponent onNext={nextStep} />
        </div>
      </div>
    </LayoutGM>
  );
}
