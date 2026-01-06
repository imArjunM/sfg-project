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
import ParticipantsStage from './live/ParticipantsStage';
import FocalTopicsStage from './live/FocalTopicsStage';
import ThemeAssignmentStage from './live/ThemeAssignmentStage';
import ChallengesStage from './live/ChallengesStage';
import VotingStage from './live/VotingStage';
import SummaryStage from './live/SummaryStage';
import ReportStage from './live/ReportStage';
import GameConfig from './live/GameConfig';
import { GameTimerHUD } from './GameTimerHUD';

export default function GMActiveGame() {
  const [params] = useLocation();
  // Mock ID from URL if needed, but for prototype we just show the active game UI

  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { id: 'config', label: 'Game Config', component: GameConfig },
    { id: 'participants', label: 'Participants', component: ParticipantsStage },
    { id: 'topics', label: 'Focal Topics', component: FocalTopicsStage },
    { id: 'themes', label: 'Themes', component: ThemeAssignmentStage },
    { id: 'challenges', label: 'Challenges', component: ChallengesStage },
    { id: 'voting', label: 'Voting', component: VotingStage },
    { id: 'summary', label: 'Summary', component: SummaryStage },
    // { id: 'report', label: 'Report', component: ReportStage },
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

          {/* <div className='flex items-center gap-4'>
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
          </div> */}
          <GameTimerHUD sectionMinutes={10} sectionActive={themeTimerEnabled} />
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
