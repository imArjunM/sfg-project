import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { User, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

import avatarVideo from '@assets/generated_videos/animated_dubai_police_officer_avatar.mp4';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export default function AddUser({
  showDetails,
  employeeId,
  handleIdChange,
}: any) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <UserPlus className='w-4 h-4 mr-2' />
          Add New User
        </Button>
      </DialogTrigger>

      <DialogContent className='bg-card border-white/10 text-foreground sm:max-w-[900px]'>
        <DialogHeader>
          <DialogTitle className='text-2xl'>Add New User</DialogTitle>
          <DialogDescription className='text-muted-foreground'>
            Verify employee identity and assign system access.
          </DialogDescription>
        </DialogHeader>

        {/* TWO COLUMN LAYOUT */}
        <div className='grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 py-6'>
          {/* LEFT — IDENTITY & INSTRUCTION */}
          <div className='space-y-6'>
            {/* Avatar */}
            <div className='flex flex-col items-center gap-4'>
              {/* <div className='w-36 h-36 rounded-full border-4 border-brand-green/30 shadow-[0_0_25px_rgba(38,208,124,0.25)] overflow-hidden'>
                <video
                  src={avatarVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className='w-full h-full object-cover'
                />
              </div> */}
            </div>

            {/* Employee ID */}

            <p className='text-sm italic text-brand-dark-green '>
              Enter the employee ID to load official Dubai Police personnel
              records.
            </p>
            <div className='grid gap-2'>
              <Label htmlFor='empId'>Employee ID</Label>
              <Input
                id='empId'
                placeholder='Enter Employee ID (e.g. 8821)'
                className='bg-secondary/30 border-white/10'
                value={employeeId}
                onChange={handleIdChange}
              />
            </div>

            {!showDetails ? (
              <div className='text-xs text-muted-foreground italic'>
                Waiting for valid employee ID…
              </div>
            ) : (
              <div className='flex flex-col gap-4'>
                <div className='text-xs text-muted-foreground italic'>
                  Verified employee details will appear here
                </div>
                <div className='flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10'>
                  <Avatar className='h-16 w-16 border border-brand-green/40 shadow-[0_0_20px_rgba(38,208,124,0.25)]'>
                    <AvatarFallback className='bg-secondary text-brand-bright-green'>
                      <User className='w-6 h-6' />
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <p className='text-white font-medium'>Mohammed Al Falasi</p>
                    <p className='text-sm text-muted-foreground'>
                      m.alfalasi@dubaipolice.gov.ae
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT — LOADED DATA & ASSIGNMENT */}
          <div className='space-y-6'>
            {!showDetails ? (
              <div className='h-full min-h-[300px] border-2 border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center gap-4 text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-white/[0.02] '>
                <div className='w-16 h-16 rounded-full bg-white/5 flex items-center justify-center'>
                  <User className='w-8 h-8' />
                </div>
                <span className='font-medium'>
                  Employee details will appear here
                </span>
              </div>
            ) : (
              <div className='space-y-6 animate-in fade-in slide-in-from-right-4 duration-300'>
                {/* Verified Info */}
                <div className='space-y-4'>
                  <div>
                    <Label>Name</Label>
                    <div className='p-2 rounded bg-white/5 border border-white/5 text-sm'>
                      Mohammed Al Falasi
                    </div>
                  </div>

                  <div className='grid gap-4'>
                    <div>
                      <Label>Email</Label>
                      <div className='p-2 rounded bg-white/5 border border-white/5 text-sm'>
                        m.alfalasi@dubaipolice.gov.ae
                      </div>
                    </div>
                    <div>
                      <Label>Phone</Label>
                      <div className='p-2 rounded bg-white/5 border border-white/5 text-sm'>
                        +971 50 123 4567
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className='bg-white/5' />

                {/* Assignment */}
                <div className='grid gap-4'>
                  <div className='grid gap-2'>
                    <Label htmlFor='dept'>Department</Label>
                    <Select>
                      <SelectTrigger className='bg-secondary/30 border-white/10'>
                        <SelectValue placeholder='Select department' />
                      </SelectTrigger>
                      <SelectContent className='bg-card border-white/10'>
                        <SelectItem value='strategy'>
                          Strategic Planning
                        </SelectItem>
                        <SelectItem value='cyber'>Cyber Security</SelectItem>
                        <SelectItem value='traffic'>Traffic Control</SelectItem>
                        <SelectItem value='hr'>HR Department</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Sub-Department</Label>
                    <Select>
                      <SelectTrigger className='bg-secondary/30 border-white/10'>
                        <SelectValue placeholder='Select sub-department' />
                      </SelectTrigger>
                      <SelectContent className='bg-card border-white/10'>
                        <SelectItem value='foresight'>
                          Foresight Unit
                        </SelectItem>
                        <SelectItem value='analysis'>Analysis Wing</SelectItem>
                        <SelectItem value='ops'>Operations</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>System Role</Label>
                    <Select>
                      <SelectTrigger className='bg-secondary/30 border-white/10'>
                        <SelectValue placeholder='Select role' />
                      </SelectTrigger>
                      <SelectContent className='bg-card border-white/10'>
                        <SelectItem value='admin'>Super Admin</SelectItem>
                        <SelectItem value='analyst'>Analyst</SelectItem>
                        <SelectItem value='moderator'>Moderator</SelectItem>
                        <SelectItem value='viewer'>Viewer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <DialogFooter>
          <Button
            type='submit'
            className='bg-primary text-primary-foreground hover:bg-primary/90 w-full md:w-auto'
            disabled={!showDetails}
          >
            Create Active Account
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
