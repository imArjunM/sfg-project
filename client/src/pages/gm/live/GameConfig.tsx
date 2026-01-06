'use client';

import { useState } from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

import {
  Clock,
  Settings2,
  Timer,
  Layers,
  PlayCircle,
  ArrowRight,
} from 'lucide-react';

/* ------------------------------------------------------------
 Types
------------------------------------------------------------ */
type StepTimerConfig = {
  id: string;
  label: string;
  enabled: boolean;
  minutes: number;
};

/* ------------------------------------------------------------
 Steps
------------------------------------------------------------ */
const DEFAULT_STEPS: StepTimerConfig[] = [
  { id: 'participants', label: 'Participants', enabled: true, minutes: 5 },
  { id: 'topics', label: 'Focal Topics', enabled: true, minutes: 10 },
  { id: 'themes', label: 'Themes', enabled: true, minutes: 10 },
  { id: 'challenges', label: 'Challenges', enabled: true, minutes: 15 },
  { id: 'voting', label: 'Voting', enabled: true, minutes: 5 },
  { id: 'summary', label: 'Summary', enabled: false, minutes: 5 },
];

/* ------------------------------------------------------------
 Component
------------------------------------------------------------ */
export default function GameConfig({ onNext }: { onNext: () => void }) {
  const [globalTimerEnabled, setGlobalTimerEnabled] = useState(true);
  const [globalMinutes, setGlobalMinutes] = useState(60);
  const [stepTimers, setStepTimers] =
    useState<StepTimerConfig[]>(DEFAULT_STEPS);

  const updateStep = (id: string, updates: Partial<StepTimerConfig>) => {
    setStepTimers((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...updates } : s))
    );
  };

  const activeSteps = stepTimers.filter((s) => s.enabled).length;

  return (
    <div className='space-y-8 animate-in fade-in slide-in-from-right-4 duration-500'>
      {/* ================= HEADER ================= */}
      <div className='flex items-center justify-between'>
        <div className='space-y-1'>
          <h2 className='text-2xl font-bold text-white flex items-center gap-2'>
            <PlayCircle className='w-6 h-6 text-brand-bright-green' />
            Mission Setup
          </h2>
          <p className='text-muted-foreground'>
            Configure game flow, pacing, and strategic pressure
          </p>
        </div>

        <div className='flex items-center gap-4'>
          {/* <Badge className='bg-brand-green/10 text-brand-bright-green border-brand-green/20'>
            <Settings2 className='w-3 h-3 mr-2' />
            Pre-Game
          </Badge> */}

          <Button onClick={onNext}>
            Start Game <ArrowRight className='ml-2 w-4 h-4' />
          </Button>
        </div>
      </div>

      {/* ================= DASHBOARD ================= */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* Global Timer */}
        <Card className='glass-card border-none lg:col-span-1'>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <Clock className='w-5 h-5 text-brand-bright-green' />
              Mission Clock
            </CardTitle>
          </CardHeader>

          <CardContent className='space-y-6'>
            {/* Toggle */}
            <div className='flex items-center justify-between'>
              <Label>Enable Global Timer</Label>
              <Switch
                checked={globalTimerEnabled}
                onCheckedChange={setGlobalTimerEnabled}
              />
            </div>

            {/* ================= CLOCK HUD ================= */}
            <div className='flex items-start gap-5'>
              {/* Circular Gauge */}
              <div className='relative w-28 h-28'>
                <div className='absolute inset-0 rounded-full bg-white/5 border border-white/10' />

                {globalTimerEnabled && (
                  <div
                    className={`absolute inset-0 rounded-full ${
                      globalMinutes <= 10 ? 'animate-pulse' : ''
                    }`}
                    style={{
                      background: `conic-gradient(
                ${
                  globalMinutes <= 10
                    ? '#ef4444'
                    : globalMinutes < 45
                    ? '#facc15'
                    : '#22c55e'
                } ${Math.min((globalMinutes / 120) * 360, 360)}deg,
                rgba(255,255,255,0.08) 0deg
              )`,
                    }}
                  />
                )}

                <div className='absolute inset-3 rounded-full bg-background flex flex-col items-center justify-center text-center'>
                  <span className='text-xs text-muted-foreground'>
                    {globalTimerEnabled ? 'TOTAL' : 'MODE'}
                  </span>
                  <span
                    className={`text-xl font-bold ${
                      globalMinutes <= 10 ? 'text-red-400' : 'text-white'
                    }`}
                  >
                    {globalTimerEnabled ? globalMinutes : 'FREE'}
                  </span>
                  <span className='text-xs text-muted-foreground'>
                    {globalTimerEnabled ? 'min' : 'PLAY'}
                  </span>
                </div>
              </div>

              {/* Clock Stats */}
              <div className='flex-1 space-y-3'>
                {globalTimerEnabled ? (
                  <>
                    <Stat
                      label='Session Pace'
                      value={
                        globalMinutes <= 30
                          ? 'Critical'
                          : globalMinutes <= 45
                          ? 'Intense'
                          : globalMinutes <= 60
                          ? 'Balanced'
                          : 'Relaxed'
                      }
                      color={
                        globalMinutes <= 30
                          ? 'text-red-400'
                          : globalMinutes <= 45
                          ? 'text-orange-400'
                          : globalMinutes <= 60
                          ? 'text-yellow-400'
                          : 'text-green-400'
                      }
                    />

                    <Stat
                      label='Alert Status'
                      value={globalMinutes <= 10 ? 'RED ALERT' : 'Normal'}
                      color={
                        globalMinutes <= 10
                          ? 'text-red-500'
                          : 'text-brand-bright-green'
                      }
                    />
                  </>
                ) : (
                  <Stat
                    label='Session Mode'
                    value='Free Play'
                    color='text-brand-bright-green'
                  />
                )}
              </div>
            </div>

            {/* ================= TIME CONSUMPTION PREVIEW ================= */}
            {globalTimerEnabled && (
              <div className='space-y-3'>
                <p className='text-sm font-medium text-white'>
                  Time Consumption Preview
                </p>

                {(() => {
                  const usedTime = stepTimers
                    .filter((s) => s.enabled)
                    .reduce((acc, s) => acc + s.minutes, 0);

                  const diff = globalMinutes - usedTime;

                  return (
                    <>
                      <div className='h-2 rounded-full bg-white/10 overflow-hidden'>
                        <div
                          className={`h-full transition-all ${
                            diff < 0 ? 'bg-red-500' : 'bg-brand-bright-green'
                          }`}
                          style={{
                            width: `${Math.min(
                              (usedTime / globalMinutes) * 100,
                              100
                            )}%`,
                          }}
                        />
                      </div>

                      <div className='flex justify-between text-xs'>
                        <span className='text-muted-foreground'>
                          Allocated: {usedTime} min
                        </span>
                        <span
                          className={
                            diff < 0
                              ? 'text-red-400'
                              : 'text-brand-bright-green'
                          }
                        >
                          {diff < 0
                            ? `Over by ${Math.abs(diff)} min`
                            : `${diff} min remaining`}
                        </span>
                      </div>
                    </>
                  );
                })()}
              </div>
            )}

            {/* ================= INPUT ================= */}
            {globalTimerEnabled && (
              <div className='space-y-2'>
                <Label>Total Duration (minutes)</Label>
                <Input
                  type='number'
                  min={10}
                  value={globalMinutes}
                  onChange={(e) => setGlobalMinutes(Number(e.target.value))}
                  className='bg-secondary/20 border-white/10'
                />
              </div>
            )}

            {/* ================= ALERT FOOTER ================= */}
            {globalTimerEnabled && globalMinutes <= 10 && (
              <div className='p-3 rounded-lg border border-red-500/30 bg-red-500/10'>
                <p className='text-xs font-medium text-red-400'>
                  🚨 RED ALERT MODE
                </p>
                <p className='text-xs text-muted-foreground'>
                  Final 10 minutes. Consider accelerating decisions.
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* ================= SESSION ANALYTICS ================= */}
        <Card className='glass-card border-none lg:col-span-2'>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <Layers className='w-5 h-5 text-brand-bright-green' />
              Session Overview
            </CardTitle>
          </CardHeader>

          <CardContent className='space-y-6'>
            {/* === KPI ROW === */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              <Metric
                label='Active Stages'
                value={`${activeSteps}/${stepTimers.length}`}
                hint='Enabled stages'
              />
              <Metric
                label='Total Time'
                value={
                  globalTimerEnabled ? `${globalMinutes} min` : 'Unlimited'
                }
                hint='Mission duration'
              />
              <Metric
                label='Timed Stages'
                value={stepTimers.filter((s) => s.enabled).length.toString()}
                hint='Pressure points'
              />
              <Metric label='Control Mode' value='Moderator' hint='Authority' />
            </div>

            {/* === TIME DISTRIBUTION === */}
            <div className='space-y-3'>
              <p className='text-sm font-medium text-white'>Time Allocation</p>

              <div className='space-y-2'>
                {stepTimers.map((s) => {
                  if (!s.enabled || !globalTimerEnabled) return null;

                  const percent = Math.round((s.minutes / globalMinutes) * 100);

                  return (
                    <div key={s.id} className='space-y-1'>
                      <div className='flex justify-between text-xs'>
                        <span className='text-muted-foreground'>{s.label}</span>
                        <span className='text-white'>{percent}%</span>
                      </div>

                      <div className='h-2 rounded-full bg-white/10 overflow-hidden'>
                        <div
                          className='h-full bg-brand-bright-green transition-all'
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* === GAME FEEL INDICATORS === */}
            <div className='grid grid-cols-2 gap-4'>
              <Indicator
                label='Session Intensity'
                value={
                  globalTimerEnabled && globalMinutes < 45 ? 'High' : 'Moderate'
                }
                color={
                  globalTimerEnabled && globalMinutes < 45
                    ? 'text-red-400'
                    : 'text-yellow-400'
                }
              />
              <Indicator
                label='Flow Stability'
                value={activeSteps >= 5 ? 'Optimized' : 'Fragmented'}
                color={activeSteps >= 5 ? 'text-green-400' : 'text-orange-400'}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* ================= STEP TIMERS ================= */}
      <Card className='glass-card border-none'>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Timer className='w-5 h-5 text-brand-bright-green' />
            Timer for Each Stage Configuration
          </CardTitle>
        </CardHeader>

        <CardContent className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {stepTimers.map((step) => (
            <div
              key={step.id}
              className={`relative p-4 rounded-xl border transition-all
                ${
                  step.enabled
                    ? 'bg-white/5 border-brand-green/30'
                    : 'bg-white/3 border-white/5 opacity-60'
                }`}
            >
              <div className='flex items-start justify-between'>
                <div>
                  <p className='text-sm font-medium text-white'>{step.label}</p>
                  <p className='text-xs text-muted-foreground'>Stage timer</p>
                </div>
                <Switch
                  checked={step.enabled}
                  onCheckedChange={(val) =>
                    updateStep(step.id, { enabled: val })
                  }
                />
              </div>

              {step.enabled && (
                <div className='mt-4 space-y-2'>
                  <Input
                    type='number'
                    min={1}
                    value={step.minutes}
                    onChange={(e) =>
                      updateStep(step.id, {
                        minutes: Number(e.target.value),
                      })
                    }
                    className='bg-secondary/20 border-white/10'
                  />
                  <Badge
                    variant='secondary'
                    className='bg-white/10 text-white/70'
                  >
                    ⏳ {step.minutes} min
                  </Badge>
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* ================= FOOTER ================= */}
      <div className='flex justify-between items-center text-xs text-muted-foreground'>
        <span>Timers can be overridden by moderators during gameplay.</span>
        <span>Configuration saved automatically</span>
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <div className='p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition'>
      <p className='text-xs text-muted-foreground'>{label}</p>
      <p className='text-lg font-semibold text-white'>{value}</p>
      <p className='text-[10px] text-muted-foreground mt-1'>{hint}</p>
    </div>
  );
}

function Indicator({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className='p-4 rounded-xl bg-white/5 border border-white/10'>
      <p className='text-xs text-muted-foreground'>{label}</p>
      <p className={`text-lg font-semibold ${color}`}>{value}</p>
    </div>
  );
}

function Stat({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className='flex items-center justify-between'>
      <span className='text-xs text-muted-foreground'>{label}</span>
      <span className={`text-sm font-medium ${color}`}>{value}</span>
    </div>
  );
}
