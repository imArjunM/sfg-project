import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

export function SectionCountdown({
  minutes,
  active,
}: {
  minutes: number;
  active: boolean;
}) {
  const [secondsLeft, setSecondsLeft] = useState(minutes * 60);

  useEffect(() => {
    if (!active) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [active]);

  const mins = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
  const secs = String(secondsLeft % 60).padStart(2, '0');

  return (
    <div className='flex items-center gap-2 text-sm font-mono text-white'>
      <Clock className='w-4 h-4 text-brand-bright-green' />
      {mins}:{secs}
    </div>
  );
}
