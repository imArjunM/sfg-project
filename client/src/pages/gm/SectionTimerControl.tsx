import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Clock } from 'lucide-react';

interface SectionTimerControlProps {
  enabled: boolean;
  duration: number; // minutes
  onToggle: (value: boolean) => void;
  onDurationChange: (value: number) => void;
}

export function SectionTimerControl({
  enabled,
  duration,
  onToggle,
  onDurationChange,
}: SectionTimerControlProps) {
  return (
    <div className='flex items-center gap-4 bg-black/30 px-4 py-2 rounded-lg border border-white/10'>
      <Clock className='w-4 h-4 text-muted-foreground' />

      <div className='flex items-center gap-2'>
        <span className='text-xs text-muted-foreground'>Timer</span>
        <Switch checked={enabled} onCheckedChange={onToggle} />
      </div>

      {enabled && (
        <div className='flex items-center gap-2'>
          <Input
            type='number'
            min={1}
            value={duration}
            onChange={(e) => onDurationChange(Number(e.target.value))}
            className='w-20 h-8 text-center font-mono'
          />
          <span className='text-xs text-muted-foreground'>min</span>
        </div>
      )}
    </div>
  );
}
