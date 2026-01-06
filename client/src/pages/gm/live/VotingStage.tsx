
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,

} from '@/components/ui/card';

import {

  ArrowRight,

} from 'lucide-react';

export default function VotingStage({ onNext }: { onNext: () => void }) {
  return (
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
  )
}
