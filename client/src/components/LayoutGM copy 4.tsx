import { Link, useLocation } from 'wouter';
import {
  LayoutDashboard,
  FileText,
  Target,
  LogOut,
  ShieldCheck,
  Menu,
  Gamepad2,
  Settings,
  Copyright,
  Moon,
  Info,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import avatarVideo from '@assets/generated_videos/animated_dubai_police_officer_avatar.mp4';
import { LanguageSwitch } from './LanguageSwitch';
import futuristicBg from '@/assets/futuristic-bg.jpg';

interface LayoutGMProps {
  children: React.ReactNode;
}

export function LayoutGM({ children }: LayoutGMProps) {
  const [location, setLocation] = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/gm/dashboard' },
    { icon: Gamepad2, label: 'Game Requests', href: '/gm/requests' },
    { icon: Target, label: 'Games', href: '/gm/games' },
    { icon: FileText, label: 'Reports / Recap', href: '/gm/reports' },
  ];

  return (
    <div className='min-h-screen bg-background text-foreground relative overflow-hidden font-sans'>
      {/* BACKGROUND */}
      <div
        className='fixed inset-0 z-0'
        style={{
          backgroundImage: `url(${futuristicBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      <div className='fixed inset-0 z-0 bg-background/40 backdrop-blur-[2px]' />

      {/* ================= HEADER (FULL WIDTH) ================= */}
      <header
        className='relative z-50 h-14 w-full flex items-center justify-between px-4
        bg-background/40 backdrop-blur-xl border-b border-white/5'
      >
        <Button
          variant='ghost'
          size='icon'
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className='text-muted-foreground hover:text-foreground hover:bg-white/5'
        >
          <Menu className='w-5 h-5' />
        </Button>

        <div className='flex items-center gap-6'>
          <LanguageSwitch />
          <Button variant='ghost' size='icon'>
            <Moon className='w-5 h-5' />
          </Button>

          <div className='hidden md:flex flex-col items-end mr-4'>
            <span className='text-xs font-display font-bold text-white tracking-widest'>
              DUBAI POLICE
            </span>
            <span className='text-[10px] text-muted-foreground tracking-wider dir-rtl'>
              شرطة دبي
            </span>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className='flex items-center gap-3 pl-2 pr-4 py-1 rounded-full hover:bg-white/5 cursor-pointer'>
                <div className='w-9 h-9 rounded-full border-2 border-brand-green/30 overflow-hidden'>
                  <video
                    src={avatarVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='flex flex-col'>
                  <span className='text-sm font-semibold text-white'>User</span>
                  <span className='text-[10px] text-brand-bright-green uppercase font-bold'>
                    Game Master
                  </span>
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align='end'
              className='w-56 bg-card/95 backdrop-blur-xl border-white/10'
            >
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className='bg-white/10' />
              <DropdownMenuItem onClick={() => setLocation('/settings')}>
                <Settings className='mr-2 w-4 h-4' /> Settings
              </DropdownMenuItem>
              <DropdownMenuItem
                className='text-destructive'
                onClick={() => setLocation('/')}
              >
                <LogOut className='mr-2 w-4 h-4' /> Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* ================= BODY (SIDEBAR + CONTENT) ================= */}
      <div className='relative z-40 flex w-full min-h-[calc(100vh-3.5rem)]'>
        {/* SIDEBAR */}
        <aside
          className={cn(
            'bg-background/40 backdrop-blur-xl border-r border-white/5 shadow-2xl',
            'transition-all duration-500 ease-in-out',
            sidebarOpen ? 'w-64' : 'w-20'
          )}
        >
          <div className='h-20 flex items-center px-6 gap-3'>
            <div className='w-8 h-8 rounded bg-brand-green flex items-center justify-center shadow-lg'>
              <ShieldCheck className='w-5 h-5 text-white' />
            </div>
            {sidebarOpen && (
              <div>
                <span className='block font-display font-bold text-lg text-white'>
                  FUTURE
                </span>
                <span className='block text-sm text-brand-bright-green tracking-widest'>
                  FORESIGHT
                </span>
              </div>
            )}
          </div>

          <nav className='px-4 py-6 space-y-2'>
            {navItems.map((item) => {
              const isActive = location.startsWith(item.href);
              return (
                <Link key={item.href} href={item.href}>
                  <div
                    className={cn(
                      'flex items-center gap-4 px-3 py-3 rounded-lg cursor-pointer transition-all',
                      isActive
                        ? 'bg-brand-dark-green text-white'
                        : 'text-muted-foreground hover:bg-white/5'
                    )}
                  >
                    <item.icon className='w-5 h-5' />
                    {sidebarOpen && (
                      <span className='text-sm font-medium'>{item.label}</span>
                    )}
                  </div>
                </Link>
              );
            })}
          </nav>

          <div className='mt-auto px-4 py-4 border-t border-white/5'>
            <div className='flex items-center gap-3 text-muted-foreground'>
              <Info className='w-4 h-4' />
              {sidebarOpen && <span className='text-sm'>Help & Support</span>}
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className='flex-1 overflow-hidden'>
          <div className='h-full overflow-auto p-6 lg:p-8'>
            <div className='max-w-[1600px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700'>
              {children}
            </div>
          </div>
        </main>
      </div>

      {/* ================= FOOTER (FULL WIDTH) ================= */}
      <footer
        className='relative z-40 h-12 w-full flex items-center justify-between px-8
        bg-background/50 backdrop-blur-md border-t border-white/5 text-[10px] uppercase tracking-widest text-muted-foreground'
      >
        <span className='flex items-center gap-2'>
          <Copyright className='w-3 h-3' />
          Copyright 2025, Dubai Police
        </span>
        <span>Version 2.5.0</span>
      </footer>
    </div>
  );
}
