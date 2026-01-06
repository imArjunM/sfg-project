import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, ArrowRight, AlertTriangle, Timer } from 'lucide-react';

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
      {/* ================= GAME STATE PANEL ================= */}
      <div
        className={`
          relative overflow-hidden rounded-xl border p-4 flex justify-between items-center
          ${
            finalCallIssued
              ? 'bg-red-500/10 border-red-500/30'
              : 'bg-emerald-500/10 border-emerald-500/30'
          }
        `}
      >
        {/* Top glow bar */}
        <div
          className={`
            absolute inset-x-0 top-0 h-[2px]
            ${
              finalCallIssued
                ? 'bg-gradient-to-r from-red-500 via-orange-500 to-red-500 animate-pulse'
                : 'bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400'
            }
          `}
        />

        <div className='flex items-center gap-4'>
          <div
            className={`
              p-3 rounded-lg
              ${
                finalCallIssued
                  ? 'bg-red-500/20 text-red-400'
                  : 'bg-emerald-500/20 text-emerald-400'
              }
            `}
          >
            {finalCallIssued ? (
              <AlertTriangle className='w-6 h-6 animate-pulse' />
            ) : (
              <Timer className='w-6 h-6' />
            )}
          </div>

          <div>
            <h3 className='text-lg font-bold text-white tracking-wide'>
              {finalCallIssued ? 'FINAL CALL ACTIVE' : 'FOCAL TOPIC COLLECTION'}
            </h3>
            <p
              className={`text-sm ${
                finalCallIssued ? 'text-red-300' : 'text-emerald-300'
              }`}
            >
              {finalCallIssued
                ? 'No more extensions allowed'
                : 'Players may request time extensions'}
            </p>
          </div>
        </div>

        <div className='text-right'>
          <div className='text-3xl font-mono text-white tracking-widest'>
            {finalCallIssued ? '05:00' : '10:00'}
          </div>
          <div className='text-xs uppercase tracking-wider text-muted-foreground'>
            {finalCallIssued ? 'Critical Countdown' : 'Base Timer'}
          </div>
        </div>
      </div>

      {/* ================= MAIN LAYOUT ================= */}
      <div className='grid grid-cols-[2.5fr_1fr] gap-6'>
        {/* ================= FOCAL TOPICS ================= */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card
              key={i}
              className={`
                glass-card border-none cursor-pointer transition
                hover:bg-white/5
                ${
                  i === 1
                    ? 'ring-2 ring-brand-bright-green bg-brand-green/5'
                    : ''
                }
              `}
            >
              <CardContent className='p-4'>
                <div className='flex justify-between items-start mb-4'>
                  <Badge className='bg-blue-500/10 text-blue-400 border-blue-500/20'>
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
          <CardContent className='p-4 space-y-4'>
            <div className='flex items-center justify-between'>
              <h4 className='text-lg font-semibold text-white'>
                Extension Requests
              </h4>
              <Badge className='bg-orange-500/10 text-orange-400 border-orange-500/20'>
                {extensionRequests.length}
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
                    {req.department} • +{req.requested}
                  </p>
                </div>

                <Badge
                  className={`
                    px-3 py-1 text-xs tracking-wide
                    ${
                      req.status === 'approved'
                        ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                        : 'bg-yellow-500/15 text-yellow-400 border border-yellow-500/30 animate-pulse'
                    }
                  `}
                >
                  {req.status === 'approved' ? 'EXTENDED' : 'WAITING'}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* ================= MONITOR ACTIONS ================= */}
      <div className='flex justify-between items-center pt-4 border-t border-white/5'>
        {!finalCallIssued ? (
          <Button
            variant='secondary'
            className='relative overflow-hidden bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 hover:bg-red-500/20 hover:text-red-300 transition'
            onClick={() => setFinalCallIssued(true)}
          >
            <span className='absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-red-500/20 opacity-0 hover:opacity-100 transition' />
            <AlertTriangle className='w-4 h-4 mr-2 z-10' />
            <span className='z-10'>Issue Final Call (5 min)</span>
          </Button>
        ) : (
          <Badge className='bg-red-500/15 text-red-400 border border-red-500/30 px-4 py-2 tracking-wider'>
            FINAL CALL LOCKED
          </Badge>
        )}

        <Button onClick={onNext}>
          Proceed to Themes <ArrowRight className='ml-2 w-4 h-4' />
        </Button>
      </div>
    </div>
  );
}
