import { Clock, Hourglass } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TimerProps {
  label: string;
  time: string;
  progress: number; // 0–100
  active?: boolean;
}

export function GameTimerHUD({
  sectionMinutes = 10,
  sectionActive,
}: {
  sectionMinutes: number;
  sectionActive: boolean;
}) {
  return (
    <div className='flex items-center gap-6'>
      {/* SECTION TIMER */}
      <MissionTimer
        label='Section Timer'
        time='09:12'
        progress={72}
        active={sectionActive}
      />

      {/* TOTAL SESSION TIMER */}
      <MissionTimer label='Session Time' time='00:45:12' progress={38} />
    </div>
  );
}

/* --------------------------------------------------
   SINGLE TIMER
-------------------------------------------------- */
function MissionTimer({ label, time, progress, active }: TimerProps) {
  const state =
    progress <= 15
      ? 'critical'
      : progress <= 30
      ? 'danger'
      : progress <= 55
      ? 'warning'
      : 'normal';

  return (
    <div
      className={cn(
        'relative px-5 py-4 rounded-xl border w-[200px]',
        'bg-black/40 backdrop-blur-md',
        stateStyles[state].border,
        state === 'critical' && 'animate-pulse'
      )}
    >
      {/* ICON */}
      <div
        className={cn(
          'absolute -top-3 -left-3 w-9 h-9 rounded-full flex items-center justify-center',
          stateStyles[state].iconBg
        )}
      >
        {label === 'Session Time' ? (
          <Clock className='w-4 h-4 text-white' />
        ) : (
          <Hourglass className='w-4 h-4 text-white' />
        )}
      </div>

      {/* LABEL */}
      <p className='text-xs uppercase tracking-wider text-muted-foreground'>
        {label}
      </p>

      {/* TIME */}
      <p
        className={cn(
          'text-2xl font-mono font-semibold tracking-wide mt-1',
          stateStyles[state].text
        )}
      >
        {time}
      </p>

      {/* PROGRESS BAR */}
      {/* <div className='mt-3 h-2 w-full rounded-full bg-white/10 overflow-hidden'>
        <div
          className={cn(
            'h-full transition-all duration-500',
            stateStyles[state].bar
          )}
          style={{ width: `${progress}%` }}
        />
      </div> */}

      {/* STATUS */}
      {/* <p
        className={cn(
          'mt-2 text-[10px] uppercase tracking-widest',
          stateStyles[state].status
        )}
      >
        {state === 'normal' && 'Stable'}
        {state === 'warning' && 'Time Passing'}
        {state === 'danger' && 'Red Alert'}
        {state === 'critical' && 'Critical'}
      </p> */}

      {/* DISABLED OVERLAY */}
      {!active && label === 'Section Timer' && (
        <div className='absolute inset-0 bg-black/60 rounded-xl flex items-center justify-center text-xs text-muted-foreground'>
          Disabled
        </div>
      )}
    </div>
  );
}

/* --------------------------------------------------
   VISUAL STATES
-------------------------------------------------- */
const stateStyles = {
  normal: {
    border: 'border-brand-green/40',
    iconBg: 'bg-brand-green',
    text: 'text-brand-bright-green',
    bar: 'bg-brand-bright-green',
    status: 'text-brand-bright-green',
  },
  warning: {
    border: 'border-yellow-400/40',
    iconBg: 'bg-yellow-500',
    text: 'text-yellow-300',
    bar: 'bg-yellow-400',
    status: 'text-yellow-400',
  },
  danger: {
    border: 'border-red-500/50',
    iconBg: 'bg-red-500',
    text: 'text-red-400',
    bar: 'bg-red-500 animate-pulse',
    status: 'text-red-400',
  },
  critical: {
    border: 'border-red-600/80 shadow-[0_0_25px_rgba(255,0,0,0.35)]',
    iconBg: 'bg-red-600',
    text: 'text-red-500',
    bar: 'bg-red-600 animate-pulse',
    status: 'text-red-500',
  },
};
