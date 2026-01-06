
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,

} from '@/components/ui/card';

import {

  CheckCircle2,
  Clock,

  ArrowRight,

} from 'lucide-react';
export default function FocalTopicsStage({ onNext }: { onNext: () => void }) {
  return (
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
  )
}
