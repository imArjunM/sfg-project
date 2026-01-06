'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';

import { Search, ArrowRight, UserPlus, Trash2, Info } from 'lucide-react';

/* ------------------------------------------------------------
 Types
------------------------------------------------------------ */
type Participant = {
  id: string;
  fullName: string;
  department: string;
  designation: string;
  role: 'Commander' | 'Expert' | 'Participant' | 'Observer';
  email: string;
  phone: string;
};

/* ------------------------------------------------------------
 Dubai Police Participants (Realistic)
------------------------------------------------------------ */
const participants: Participant[] = [
  {
    id: 'DP-10234',
    fullName: 'Lt. Col. Ahmed Al Mansoori',
    department: 'General Department of Criminal Investigation',
    designation: 'Head of Cybercrime Division',
    role: 'Commander',
    email: 'ahmed.almansoori@dubaipolice.gov.ae',
    phone: '+971 50 123 4567',
  },
  {
    id: 'DP-11387',
    fullName: 'Maj. Fatima Al Suwaidi',
    department: 'Smart Services Department',
    designation: 'Digital Transformation Lead',
    role: 'Expert',
    email: 'fatima.alsuwaidi@dubaipolice.gov.ae',
    phone: '+971 55 987 6543',
  },
  {
    id: 'DP-11890',
    fullName: 'Capt. Saeed Al Nuaimi',
    department: 'Traffic & Patrols Department',
    designation: 'Road Safety Analytics Officer',
    role: 'Participant',
    email: 'saeed.alnuaimi@dubaipolice.gov.ae',
    phone: '+971 52 334 8899',
  },
  {
    id: 'DP-12111',
    fullName: 'Lt. Mariam Al Hammadi',
    department: 'Artificial Intelligence Department',
    designation: 'Predictive Policing Specialist',
    role: 'Expert',
    email: 'mariam.alhammadi@dubaipolice.gov.ae',
    phone: '+971 56 778 2211',
  },
  {
    id: 'DP-12998',
    fullName: 'W/O Khalid Al Shehhi',
    department: 'General Department of Operations',
    designation: 'Command & Control Officer',
    role: 'Observer',
    email: 'khalid.alshehhi@dubaipolice.gov.ae',
    phone: '+971 54 445 9900',
  },
];

/* ------------------------------------------------------------
 Component
------------------------------------------------------------ */
export default function ParticipantsStage({ onNext }: { onNext: () => void }) {
  const [selected, setSelected] = useState<Participant | null>(null);

  return (
    <div className='space-y-6 animate-in fade-in slide-in-from-right-4 duration-500'>
      {/* Header */}
      <div className='flex justify-between items-center'>
        <h2 className='text-xl font-bold text-white'>
          Participants Management
        </h2>
        <Button onClick={onNext}>
          Proceed to Focal Topics <ArrowRight className='ml-2 w-4 h-4' />
        </Button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {/* Add Participant */}
        <Card className='glass-card border-none'>
          <CardHeader>
            <CardTitle className='text-lg'>Add Participant</CardTitle>
            <CardDescription>Invite Dubai Police stakeholders</CardDescription>
          </CardHeader>

          <CardContent className='space-y-4'>
            <div className='space-y-2'>
              <Label>Search Employee</Label>
              <div className='relative'>
                <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground' />
                <Input
                  placeholder='Employee ID or Name'
                  className='pl-9 bg-secondary/20 border-white/10'
                />
              </div>
            </div>

            <div className='p-3 rounded bg-white/5 border border-white/5 flex items-center gap-3'>
              <Avatar className='w-8 h-8'>
                <AvatarFallback>DP</AvatarFallback>
              </Avatar>
              <div className='flex-1 overflow-hidden'>
                <p className='text-sm font-medium truncate text-white'>
                  Dubai Police Directory
                </p>
                <p className='text-xs text-muted-foreground truncate'>
                  Authorized Internal Network
                </p>
              </div>
              <Button size='sm' variant='ghost'>
                <UserPlus className='w-4 h-4' />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Participants List */}
        <Card className='glass-card border-none md:col-span-2'>
          <CardHeader className='flex flex-row items-center justify-between'>
            <div>
              <CardTitle className='text-lg'>Current Participants</CardTitle>
              <CardDescription>
                {participants.length} Officers Ready
              </CardDescription>
            </div>

            <Badge className='bg-brand-green/10 text-brand-bright-green border-brand-green/20'>
              <span className='w-2 h-2 rounded-full bg-brand-bright-green mr-2 animate-pulse' />
              Waiting for start
            </Badge>
          </CardHeader>

          <CardContent>
            <ScrollArea className='h-[400px] pr-4'>
              <div className='space-y-3'>
                {participants.map((p) => (
                  <div
                    key={p.id}
                    className='flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5'
                  >
                    <div className='flex items-center gap-3'>
                      <Avatar className='w-9 h-9 border border-white/10'>
                        <AvatarFallback>
                          {p.fullName
                            .split(' ')
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join('')}
                        </AvatarFallback>
                      </Avatar>

                      <div>
                        <p className='text-sm font-medium text-white'>
                          {p.fullName}
                        </p>
                        <p className='text-xs text-muted-foreground'>
                          {p.department}
                        </p>
                      </div>
                    </div>

                    <div className='flex items-center gap-3'>
                      <Badge className='bg-white/10 text-white/70'>
                        {p.role}
                      </Badge>

                      <Button
                        size='icon'
                        variant='ghost'
                        onClick={() => setSelected(p)}
                      >
                        <Info className='w-4 h-4' />
                      </Button>

                      <Trash2 className='w-4 h-4 cursor-pointer text-muted-foreground hover:text-destructive' />
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      {/* Details Dialog */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className='glass-card'>
          <DialogHeader>
            <DialogTitle>Participant Details</DialogTitle>
          </DialogHeader>

          {selected && (
            <div className='space-y-3 text-sm'>
              <Detail label='Full Name' value={selected.fullName} />
              <Detail label='Employee ID' value={selected.id} />
              <Detail label='Department' value={selected.department} />
              <Detail label='Designation' value={selected.designation} />
              <Detail label='Session Role' value={selected.role} />
              <Detail label='Official Email' value={selected.email} />
              <Detail label='Contact Number' value={selected.phone} />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

/* ------------------------------------------------------------
 Small Helper
------------------------------------------------------------ */
function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className='flex justify-between gap-4'>
      <span className='text-muted-foreground'>{label}</span>
      <span className='text-white text-right'>{value}</span>
    </div>
  );
}
