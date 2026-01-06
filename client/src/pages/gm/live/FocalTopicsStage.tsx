import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  Timer,
} from 'lucide-react';
import { useState } from 'react';

export default function FocalTopicsStage({ onNext }: { onNext: () => void }) {
  const [finalCallIssued, setFinalCallIssued] = useState(false);

  const extensionRequests = [
    {
      id: 1,
      name: 'Officer Ahmed',
      department: 'Cybercrime',
      requested: '3 min',
      status: 'pending',
    },
    {
      id: 2,
      name: 'Officer Sara',
      department: 'Digital Forensics',
      requested: '2 min',
      status: 'approved',
    },
  ];

  return (
    <div className='space-y-6 animate-in fade-in slide-in-from-right-4 duration-500'>
      {/* ================= MONITOR STATUS PANEL ================= */}
      <div className='bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 flex justify-between items-center'>
        <div className='flex items-center gap-4'>
          <div className='p-2 bg-amber-500/20 rounded'>
            <Timer className='w-6 h-6 text-amber-400' />
          </div>
          <div>
            <h3 className='text-lg font-bold text-white'>
              Focal Topic Collection – Live Monitoring
            </h3>
            <p className='text-sm text-amber-300'>
              Players may request time extensions
            </p>
          </div>
        </div>

        <div className='text-right'>
          <div className='text-2xl font-mono text-white'>
            {finalCallIssued ? '05:00' : '10:00'}
          </div>
          <div className='text-xs text-muted-foreground'>
            {finalCallIssued ? 'FINAL COUNTDOWN' : 'BASE TIMER'}
          </div>
        </div>
      </div>

      <div className='grid grid-cols-[2.5fr_1fr] gap-6'>
        {/* ================= FOCAL TOPICS GRID ================= */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card
              key={i}
              className={`glass-card border-none hover:bg-white/5 cursor-pointer ${
                i === 1 ? 'ring-2 ring-brand-bright-green bg-brand-green/5' : ''
              }`}
            >
              <CardContent className='p-4'>
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
                <p className='text-xs text-muted-foreground'>
                  Submitted by: Officer Ahmed
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ================= EXTENSION REQUESTS ================= */}
        <Card className='glass-card border-none'>
          <CardContent className='p-0 space-y-4'>
            <div className='flex items-center justify-between'>
              <h4 className='text-lg font-semibold text-white'>
                Time Extension Requests
              </h4>
              <Badge
                variant='secondary'
                className='bg-orange-500/10 text-orange-400 border-orange-500/20'
              >
                {extensionRequests.length} Requests
              </Badge>
            </div>

            {extensionRequests.map((req) => (
              <div
                key={req.id}
                className='flex items-center justify-between bg-black/30 p-3 rounded-lg border border-white/10'
              >
                <div>
                  <p className='text-sm text-white font-medium'>{req.name}</p>
                  <p className='text-xs text-muted-foreground'>
                    {req.department} • Requested {req.requested}
                  </p>
                </div>

                <Badge
                  className={
                    req.status === 'approved'
                      ? 'bg-brand-green/10 text-brand-bright-green'
                      : 'bg-yellow-500/10 text-yellow-400'
                  }
                >
                  {req.status.toUpperCase()}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* ================= FINAL MONITOR ACTIONS ================= */}
      <div className='flex justify-between items-center pt-4 border-t border-white/5'>
        {!finalCallIssued ? (
          <Button
            variant='secondary'
            className='border-yellow-500/30 text-yellow-400'
            onClick={() => setFinalCallIssued(true)}
          >
            <AlertTriangle className='w-4 h-4 mr-2' />
            Issue Final Call (5 min)
          </Button>
        ) : (
          <Badge className='bg-red-500/10 text-red-400 border-red-500/20'>
            Final Call Issued – No More Extensions
          </Badge>
        )}

        <Button onClick={onNext}>
          Proceed to Themes <ArrowRight className='ml-2 w-4 h-4' />
        </Button>
      </div>
    </div>
  );
}
