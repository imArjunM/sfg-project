
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,

} from '@/components/ui/card';

import {

  CheckCircle2,

  ArrowRight,

  Trash2,

  GripVertical,
 
} from 'lucide-react';


export default function ChallengesStage({ onNext }: { onNext: () => void }) {
  return (
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
  )
}
