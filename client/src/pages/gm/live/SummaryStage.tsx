
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import {
  ArrowRight,
  AlertTriangle,
  Zap,
  Info,
} from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

export default function SummaryStage({ onNext }: { onNext: () => void }) {
  return (
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
  )
}
