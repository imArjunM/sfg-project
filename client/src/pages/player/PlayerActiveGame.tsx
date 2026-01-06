import { LayoutPlayer } from '@/components/LayoutPlayer';
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
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Clock,
  ArrowRight,
  Send,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Info,
  ChevronRight,
  BarChart2,
  FileText,
  Trophy,
} from 'lucide-react';
import { useLocation } from 'wouter';

// Stage 4: Focal Topic Entry
const FocalTopicEntry = ({ onNext }: { onNext: () => void }) => (
  <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-right-4 duration-500'>
    <div className='lg:col-span-2 space-y-6'>
      <Card className='glass-card border-none bg-brand-green/5 border-l-4 border-l-brand-green'>
        <CardHeader>
          <div className='flex justify-between items-start'>
            <div>
              <CardTitle className='text-xl text-white'>
                Submit Focal Topic
              </CardTitle>
              <CardDescription>
                What is the most critical issue we need to address?
              </CardDescription>
            </div>
            <div className='flex items-center gap-2 bg-black/20 px-3 py-1 rounded-full border border-white/10'>
              <Clock className='w-4 h-4 text-brand-bright-green animate-pulse' />
              <span className='font-mono text-brand-bright-green'>04:32</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className='space-y-4'>
          <Textarea
            placeholder='Enter your focal topic here...'
            className='min-h-[150px] bg-secondary/20 border-white/10 text-lg'
          />
          <div className='flex justify-end'>
            <Button className='bg-brand-green hover:bg-brand-green/90'>
              Submit Topic <Send className='ml-2 w-4 h-4' />
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className='space-y-4'>
        <h3 className='text-sm font-semibold text-muted-foreground uppercase tracking-wider'>
          Submitted Topics (Read Only)
        </h3>
        <div className='grid gap-3'>
          {[1, 2].map((i) => (
            <Card
              key={i}
              className='glass-card border-none bg-white/5 opacity-70'
            >
              <CardContent className='p-4'>
                <p className='text-sm text-white'>
                  Impact of Autonomous AI on urban security infrastructure.
                </p>
                <p className='text-xs text-muted-foreground mt-2'>
                  Submitted by: Officer Sarah
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {/* Dev Button to skip */}
      <div className='flex justify-end pt-8'>
        <Button
          variant='ghost'
          onClick={onNext}
          className='text-xs text-muted-foreground hover:text-white'
        >
          Skip to next stage (Dev)
        </Button>
      </div>
    </div>

    <div className='space-y-6'>
      <Card className='glass-card border-none'>
        <CardHeader>
          <CardTitle className='text-lg text-white'>Participants</CardTitle>
          <CardDescription>12 Active Members</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className='h-[400px] pr-4'>
            <div className='space-y-3'>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className='flex items-center gap-3 p-2 rounded hover:bg-white/5'
                >
                  <Avatar className='w-8 h-8 border border-white/10'>
                    <AvatarFallback className='text-xs'>P{i}</AvatarFallback>
                  </Avatar>
                  <div className='overflow-hidden'>
                    <p className='text-sm font-medium text-white truncate'>
                      Participant Name {i}
                    </p>
                    <div className='flex items-center gap-2'>
                      <span className='w-1.5 h-1.5 rounded-full bg-brand-bright-green' />
                      <p className='text-xs text-muted-foreground'>Online</p>
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

// Stage 5: Voting
const VotingStage = ({ onNext }: { onNext: () => void }) => (
  <div className='space-y-6 animate-in fade-in slide-in-from-right-4 duration-500'>
    <div className='flex justify-between items-center bg-brand-green/10 p-4 rounded-lg border border-brand-green/20 mb-6'>
      <div className='flex items-center gap-4'>
        <div className='p-2 rounded bg-brand-green/20'>
          <BarChart2 className='w-6 h-6 text-brand-bright-green' />
        </div>
        <div>
          <h3 className='text-lg font-bold text-white'>Cast Your Vote</h3>
          <p className='text-sm text-brand-bright-green'>
            Select the most relevant focal topic. You have 1 vote.
          </p>
        </div>
      </div>
      <div className='text-right'>
        <div className='text-2xl font-mono text-white'>01:59</div>
        <div className='text-xs text-muted-foreground'>REMAINING</div>
      </div>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      {[1, 2, 3, 4].map((i) => (
        <Card
          key={i}
          className='glass-card border-none hover:bg-white/5 cursor-pointer group hover:ring-2 hover:ring-brand-green/50 transition-all'
        >
          <CardContent className='p-6'>
            <h4 className='text-lg font-semibold text-white mb-2 group-hover:text-brand-bright-green transition-colors'>
              Impact of AI on Digital Forensics and Evidence Integrity
            </h4>
            <p className='text-xs text-muted-foreground mb-4'>
              Submitted by: Officer Ahmed
            </p>
            <Button className='w-full bg-white/10 hover:bg-brand-green hover:text-white text-white border border-white/10'>
              Vote for this Topic
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
    {/* Dev Button to skip */}
    <div className='flex justify-end pt-8'>
      <Button
        variant='ghost'
        onClick={onNext}
        className='text-xs text-muted-foreground hover:text-white'
      >
        Skip to next stage (Dev)
      </Button>
    </div>
  </div>
);

// Stage 6, 7: Theme Assignment & Challenges
const ChallengesStage = ({ onNext }: { onNext: () => void }) => (
  <div className='space-y-6 animate-in fade-in slide-in-from-right-4 duration-500'>
    {/* Theme Assignment Banner */}
    <div className='bg-gradient-to-r from-brand-green/20 to-transparent p-6 rounded-xl border-l-4 border-brand-bright-green mb-8'>
      <h2 className='text-sm uppercase tracking-widest text-brand-bright-green font-bold mb-1'>
        Your Assigned Theme
      </h2>
      <h1 className='text-3xl font-bold text-white font-display'>
        Technological Implications
      </h1>
      <p className='text-muted-foreground mt-2 text-sm'>
        You are contributing ideas specifically for the technological dimension
        of this scenario.
      </p>
    </div>

    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
      <div className='lg:col-span-2 space-y-6'>
        <Card className='glass-card border-none'>
          <CardHeader>
            <CardTitle className='text-lg text-white'>
              Submit Challenge
            </CardTitle>
            <CardDescription>
              Identify a key technological challenge for 2030.
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <Textarea
              placeholder='Describe the challenge...'
              className='min-h-[100px] bg-secondary/20 border-white/10'
            />
            <div className='flex justify-end'>
              <Button className='bg-brand-green hover:bg-brand-green/90'>
                Submit Challenge <Send className='ml-2 w-4 h-4' />
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className='space-y-4'>
          <h3 className='text-sm font-semibold text-muted-foreground uppercase tracking-wider'>
            Your Submissions
          </h3>
          <div className='grid gap-3'>
            <Card className='glass-card border-none bg-white/5 border-l-2 border-l-yellow-500'>
              <CardContent className='p-4 flex justify-between items-start'>
                <div>
                  <p className='text-sm text-white'>
                    Quantum decryption threats to current encryption standards.
                  </p>
                  <Badge
                    variant='secondary'
                    className='mt-2 text-[10px] bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                  >
                    Pending Approval
                  </Badge>
                </div>
              </CardContent>
            </Card>
            <Card className='glass-card border-none bg-white/5 border-l-2 border-l-brand-bright-green'>
              <CardContent className='p-4 flex justify-between items-start'>
                <div>
                  <p className='text-sm text-white'>
                    Integration of autonomous drone swarms in urban patrol.
                  </p>
                  <Badge
                    variant='secondary'
                    className='mt-2 text-[10px] bg-brand-green/10 text-brand-bright-green border-brand-green/20'
                  >
                    Approved
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className='space-y-6'>
        <Card className='glass-card border-none bg-blue-500/5'>
          <CardHeader>
            <CardTitle className='text-sm text-blue-400 uppercase tracking-widest'>
              Other Themes
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='p-3 bg-white/5 rounded border border-white/5'>
              <h4 className='text-white font-semibold text-sm'>Social</h4>
              <p className='text-xs text-muted-foreground mt-1'>
                4 Participants Active
              </p>
            </div>
            <div className='p-3 bg-white/5 rounded border border-white/5'>
              <h4 className='text-white font-semibold text-sm'>Legal</h4>
              <p className='text-xs text-muted-foreground mt-1'>
                4 Participants Active
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    {/* Dev Button to skip */}
    <div className='flex justify-end pt-8'>
      <Button
        variant='ghost'
        onClick={onNext}
        className='text-xs text-muted-foreground hover:text-white'
      >
        Skip to next stage (Dev)
      </Button>
    </div>
  </div>
);

// Stage 8: Impact/Probability Voting
const ImpactVotingStage = ({ onNext }: { onNext: () => void }) => (
  <div className='space-y-8 animate-in fade-in slide-in-from-right-4 duration-500'>
    <div className='flex justify-between items-center'>
      <div>
        <h2 className='text-2xl font-bold text-white'>Evaluate Challenges</h2>
        <p className='text-muted-foreground'>
          Rate the Impact and Probability for each approved challenge.
        </p>
      </div>
      <div className='text-right'>
        <span className='text-sm text-muted-foreground block'>Progress</span>
        <span className='text-xl font-mono text-brand-bright-green'>
          2 / 5 Rated
        </span>
      </div>
    </div>

    <div className='max-w-3xl mx-auto space-y-8'>
      <Card className='glass-card border-none ring-1 ring-brand-green/30'>
        <CardHeader>
          <Badge className='w-fit mb-2 bg-brand-green/10 text-brand-bright-green'>
            Technological Challenge
          </Badge>
          <CardTitle className='text-xl text-white'>
            Quantum decryption threats to current encryption standards.
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-8'>
          <div className='space-y-4'>
            <div className='flex justify-between'>
              <Label className='text-lg'>Impact</Label>
              <span className='text-brand-bright-green font-bold text-lg'>
                4 - High
              </span>
            </div>
            <Slider defaultValue={[4]} max={5} step={1} className='py-4' />
            <div className='flex justify-between text-xs text-muted-foreground px-1'>
              <span>Very Low</span>
              <span>Very High</span>
            </div>
          </div>

          <div className='space-y-4'>
            <div className='flex justify-between'>
              <Label className='text-lg'>Probability</Label>
              <span className='text-blue-400 font-bold text-lg'>
                3 - Medium
              </span>
            </div>
            <Slider defaultValue={[3]} max={5} step={1} className='py-4' />
            <div className='flex justify-between text-xs text-muted-foreground px-1'>
              <span>Unlikely</span>
              <span>Certain</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className='flex justify-end border-t border-white/5 pt-6'>
          <Button className='bg-white/10 hover:bg-white/20 text-white'>
            Submit Rating <ArrowRight className='ml-2 w-4 h-4' />
          </Button>
        </CardFooter>
      </Card>
    </div>
    {/* Dev Button to skip */}
    <div className='flex justify-end pt-8'>
      <Button
        variant='ghost'
        onClick={onNext}
        className='text-xs text-muted-foreground hover:text-white'
      >
        Skip to next stage (Dev)
      </Button>
    </div>
  </div>
);

// Stage 9: Theme Results (Read Only)
const ThemeResultsStage = ({ onNext }: { onNext: () => void }) => (
  <div className='space-y-8 animate-in fade-in slide-in-from-right-4 duration-500'>
    <div className='text-center space-y-2 mb-8'>
      <h2 className='text-3xl font-bold text-white font-display'>
        Voting Results
      </h2>
      <p className='text-muted-foreground'>
        Top themes identified based on collective intelligence.
      </p>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      <Card className='glass-card border-none bg-brand-green/10 border-t-4 border-t-brand-bright-green transform scale-105 shadow-2xl'>
        <CardHeader className='text-center pb-2'>
          <Trophy className='w-8 h-8 text-yellow-400 mx-auto mb-2' />
          <CardTitle className='text-2xl text-white'>Technological</CardTitle>
          <Badge className='bg-brand-green text-white mt-2'>Selected</Badge>
        </CardHeader>
        <CardContent className='text-center'>
          <div className='text-4xl font-bold text-white font-display my-4'>
            8.4
          </div>
          <p className='text-xs text-muted-foreground'>Average Impact Score</p>
        </CardContent>
      </Card>

      <Card className='glass-card border-none bg-blue-500/10 border-t-4 border-t-blue-400 transform scale-105 shadow-2xl'>
        <CardHeader className='text-center pb-2'>
          <Trophy className='w-8 h-8 text-gray-400 mx-auto mb-2' />
          <CardTitle className='text-2xl text-white'>Social</CardTitle>
          <Badge className='bg-blue-500 text-white mt-2'>Selected</Badge>
        </CardHeader>
        <CardContent className='text-center'>
          <div className='text-4xl font-bold text-white font-display my-4'>
            7.9
          </div>
          <p className='text-xs text-muted-foreground'>Average Impact Score</p>
        </CardContent>
      </Card>

      <Card className='glass-card border-none opacity-50 grayscale'>
        <CardHeader className='text-center pb-2'>
          <CardTitle className='text-xl text-white'>Legal</CardTitle>
        </CardHeader>
        <CardContent className='text-center'>
          <div className='text-3xl font-bold text-white font-display my-4'>
            6.2
          </div>
          <p className='text-xs text-muted-foreground'>Average Impact Score</p>
        </CardContent>
      </Card>
    </div>
    {/* Dev Button to skip */}
    <div className='flex justify-end pt-8'>
      <Button
        variant='ghost'
        onClick={onNext}
        className='text-xs text-muted-foreground hover:text-white'
      >
        Skip to next stage (Dev)
      </Button>
    </div>
  </div>
);

// Stage 10: Key Event Summary
const SummaryStage = ({ onNext }: { onNext: () => void }) => (
  <div className='space-y-6 animate-in fade-in slide-in-from-right-4 duration-500'>
    <div className='flex justify-between items-center'>
      <h2 className='text-2xl font-bold text-white'>Final Summary Input</h2>
      <Button
        onClick={onNext}
        className='bg-brand-green hover:bg-brand-green/90'
      >
        Submit Final Summary <CheckCircle2 className='ml-2 w-4 h-4' />
      </Button>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      <div className='space-y-2'>
        <Label className='text-red-400 flex items-center gap-2'>
          <AlertTriangle className='w-4 h-4' /> Key Risks Identified
        </Label>
        <Textarea
          className='min-h-[120px] bg-red-950/20 border-red-500/20'
          placeholder='List key risks...'
        />
      </div>
      <div className='space-y-2'>
        <Label className='text-brand-bright-green flex items-center gap-2'>
          <Zap className='w-4 h-4' /> Opportunities
        </Label>
        <Textarea
          className='min-h-[120px] bg-brand-green/5 border-brand-green/20'
          placeholder='List key opportunities...'
        />
      </div>
      <div className='md:col-span-2 space-y-2'>
        <Label className='text-white flex items-center gap-2'>
          <FileText className='w-4 h-4' /> Strategic Narrative Summary
        </Label>
        <Textarea
          className='min-h-[150px] bg-secondary/20 border-white/10'
          placeholder='Write the final narrative...'
        />
      </div>
    </div>
  </div>
);

// Stage 11: Game Completion
const CompletionStage = () => (
  <div className='flex flex-col items-center justify-center min-h-[500px] animate-in zoom-in duration-500'>
    <div className='w-24 h-24 rounded-full bg-brand-green/20 flex items-center justify-center mb-8 border-4 border-brand-green shadow-[0_0_50px_rgba(38,208,124,0.3)]'>
      <CheckCircle2 className='w-12 h-12 text-brand-bright-green' />
    </div>
    <h1 className='text-4xl font-bold text-white font-display mb-4'>
      Game Completed
    </h1>
    <p className='text-lg text-muted-foreground text-center max-w-lg mb-8'>
      Thank you for your valuable contribution to Dubai Police's strategic
      foresight. The final report has been generated.
    </p>

    <div className='flex gap-4'>
      <Button variant='secondary' className='border-white/10 hover:bg-white/5'>
        Back to Dashboard
      </Button>
      <Button className='bg-brand-green hover:bg-brand-green/90 text-white'>
        View Final Report <ArrowRight className='ml-2 w-4 h-4' />
      </Button>
    </div>
  </div>
);

export default function PlayerActiveGame() {
  const [currentStep, setCurrentStep] = useState(1);

  // Simplified stages for player view
  const stages = [
    { id: 'topic', label: 'Topic Entry', component: FocalTopicEntry },
    { id: 'voting', label: 'Voting', component: VotingStage },
    { id: 'challenges', label: 'Challenges', component: ChallengesStage },
    { id: 'impact', label: 'Evaluation', component: ImpactVotingStage },
    { id: 'results', label: 'Results', component: ThemeResultsStage },
    { id: 'summary', label: 'Summary', component: SummaryStage },
    { id: 'done', label: 'Completion', component: CompletionStage },
  ];

  const CurrentComponent = stages[currentStep].component;

  const nextStep = () => {
    if (currentStep < stages.length - 1) setCurrentStep(currentStep + 1);
  };

  return (
    <LayoutPlayer>
      <div className='space-y-8'>
        {/* Game Header */}
        <div className='flex items-center justify-between border-b border-white/5 pb-6'>
          <div>
            <div className='flex items-center gap-3 mb-2'>
              <Badge
                variant='secondary'
                className='bg-brand-green/10 text-brand-bright-green border-brand-green/20'
              >
                LIVE SESSION
              </Badge>
              <span className='text-xs font-mono text-muted-foreground'>
                GAME-001
              </span>
            </div>
            <h1 className='text-3xl font-bold text-white font-display tracking-wide'>
              Future of Transportation 2030
            </h1>
          </div>

          <div className='hidden md:block'>
            <div className='flex items-center gap-2 text-sm text-muted-foreground'>
              <span>
                Stage {currentStep + 1} of {stages.length}:
              </span>
              <span className='text-white font-bold uppercase'>
                {stages[currentStep].label}
              </span>
            </div>
            <div className='w-48 h-1.5 bg-white/10 rounded-full mt-2 overflow-hidden'>
              <div
                className='h-full bg-brand-green transition-all duration-500 ease-out'
                style={{
                  width: `${((currentStep + 1) / stages.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Dynamic Stage Content */}
        <div className='min-h-[500px]'>
          <CurrentComponent onNext={nextStep} />
        </div>
      </div>
    </LayoutPlayer>
  );
}
