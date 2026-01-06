'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

import { ArrowRight, GripVertical, Info } from 'lucide-react';

/* ------------------------------------------------------------
 Types
------------------------------------------------------------ */
type Participant = {
  id: string;
  fullName: string;
  department: string;
  designation: string;
  role: 'Commander' | 'Expert' | 'Participant' | 'Observer';
  theme: 'Technological' | 'Social' | 'Legal';
  email: string;
  phone: string;
};

/* ------------------------------------------------------------
 Dubai Police Participants (Assigned to Themes)
------------------------------------------------------------ */
const participants: Participant[] = [
  {
    id: 'DP-10234',
    fullName: 'Lt. Col. Ahmed Al Mansoori',
    department: 'General Criminal Investigation',
    designation: 'Head of Cybercrime Division',
    role: 'Commander',
    theme: 'Technological',
    email: 'ahmed.almansoori@dubaipolice.gov.ae',
    phone: '+971 50 123 4567',
  },
  {
    id: 'DP-11387',
    fullName: 'Maj. Fatima Al Suwaidi',
    department: 'Smart Services Department',
    designation: 'Digital Transformation Lead',
    role: 'Expert',
    theme: 'Technological',
    email: 'fatima.alsuwaidi@dubaipolice.gov.ae',
    phone: '+971 55 987 6543',
  },
  {
    id: 'DP-11890',
    fullName: 'Capt. Saeed Al Nuaimi',
    department: 'Traffic & Patrols Department',
    designation: 'Road Safety Analytics Officer',
    role: 'Participant',
    theme: 'Social',
    email: 'saeed.alnuaimi@dubaipolice.gov.ae',
    phone: '+971 52 334 8899',
  },
  {
    id: 'DP-12111',
    fullName: 'Lt. Mariam Al Hammadi',
    department: 'Artificial Intelligence Department',
    designation: 'Predictive Policing Specialist',
    role: 'Expert',
    theme: 'Technological',
    email: 'mariam.alhammadi@dubaipolice.gov.ae',
    phone: '+971 56 778 2211',
  },
  {
    id: 'DP-12998',
    fullName: 'W/O Khalid Al Shehhi',
    department: 'General Department of Operations',
    designation: 'Command & Control Officer',
    role: 'Observer',
    theme: 'Legal',
    email: 'khalid.alshehhi@dubaipolice.gov.ae',
    phone: '+971 54 445 9900',
  },
  {
    id: 'DP-13567',
    fullName: 'Maj. Rashid Al Marri',
    department: 'Legal Affairs Department',
    designation: 'Senior Legal Advisor',
    role: 'Expert',
    theme: 'Legal',
    email: 'rashid.almarri@dubaipolice.gov.ae',
    phone: '+971 55 661 7733',
  },
];

/* ------------------------------------------------------------
 Themes
------------------------------------------------------------ */
const themes: Array<Participant['theme']> = [
  'Technological',
  'Social',
  'Legal',
];

/* ------------------------------------------------------------
 Component
------------------------------------------------------------ */
export default function ThemeAssignmentStage({
  onNext,
}: {
  onNext: () => void;
}) {
  const [selected, setSelected] = useState<Participant | null>(null);

  return (
    <div className='space-y-6 animate-in fade-in slide-in-from-right-4 duration-500'>
      {/* Header */}
      <div className='flex justify-between items-center'>
        <div>
          <h2 className='text-xl font-bold text-white'>Theme Allocation</h2>
          <p className='text-muted-foreground'>
            Assign participants to specific strategic themes.
          </p>
        </div>

        <div className='flex gap-2'>
          <Button variant='secondary'>Auto-Assign All</Button>
          <Button onClick={onNext}>
            Confirm Allocation
            <ArrowRight className='ml-2 w-4 h-4' />
          </Button>
        </div>
      </div>

      {/* Theme Columns */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {themes.map((theme) => {
          const themeUsers = participants.filter((p) => p.theme === theme);

          return (
            <Card key={theme} className='glass-card border-none'>
              <CardHeader className='pb-3 border-b border-white/5'>
                <CardTitle className='text-lg flex items-center justify-between'>
                  {theme}
                  <Badge variant='secondary' className='bg-white/10'>
                    {themeUsers.length} Users
                  </Badge>
                </CardTitle>
              </CardHeader>

              <CardContent className='pt-4 px-0'>
                <div className='space-y-2'>
                  {themeUsers.map((p) => (
                    <div
                      key={p.id}
                      className='p-2 rounded bg-white/5 border border-white/5 flex items-center justify-between gap-2 cursor-move hover:bg-white/10 transition-colors'
                    >
                      <div className='flex items-center gap-3'>
                        <GripVertical className='w-4 h-4 text-muted-foreground' />

                        <Avatar className='w-8 h-8'>
                          <AvatarFallback className='text-[10px]'>
                            {p.fullName
                              .split(' ')
                              .map((n) => n[0])
                              .slice(0, 2)
                              .join('')}
                          </AvatarFallback>
                        </Avatar>

                        <div>
                          <p className='text-sm text-white leading-none mb-2'>
                            {p.fullName}
                          </p>
                          <p className='text-xs text-muted-foreground'>
                            {p.department}
                          </p>
                        </div>
                      </div>

                      <Button
                        size='icon'
                        variant='ghost'
                        onClick={() => setSelected(p)}
                      >
                        <Info className='w-4 h-4' />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Participant Details Dialog */}
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
              <Detail label='Role' value={selected.role} />
              <Detail label='Assigned Theme' value={selected.theme} />
              <Detail label='Email' value={selected.email} />
              <Detail label='Contact' value={selected.phone} />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

/* ------------------------------------------------------------
 Helper
------------------------------------------------------------ */
function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className='flex justify-between gap-4'>
      <span className='text-muted-foreground'>{label}</span>
      <span className='text-white text-right'>{value}</span>
    </div>
  );
}
