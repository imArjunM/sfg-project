import { Link, useLocation } from 'wouter';
import {
  LayoutDashboard,
  Users,
  FileText,
  Target,
  Calendar,
  Settings,
  Bell,
  Search,
  LogOut,
  ShieldCheck,
  Menu,
  Gamepad2,
  List,
  Grid,
  Clock,
  Database,
  Copyright,
  UserRoundCog,
  Info,
  Moon,
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
import futuristicBg from '@/assets/futuristic-bg.jpg';
import { LanguageSwitch } from './LanguageSwitch';
import SFG_LOGO from '@/assets/sfg_logo.png';
import POLICE_LOGO from '@/assets/dubai_police_logo.png';
import GOVERNMENT_LOGO from '@/assets/dubai_govt_logo.png';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [location, setLocation] = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const isAdmin = location.startsWith('/admin');

  const superAdminNavItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { icon: Users, label: 'User Management', href: '/users' },
    { icon: Target, label: 'Scenario Planning', href: '/scenarios' },
    { icon: Calendar, label: 'Future Retreat', href: '/retreats' },
    { icon: FileText, label: 'Reports Library', href: '/reports' },
    {
      icon: UserRoundCog,
      label: 'Roles Configuration',
      href: '/configuration',
    },
  ];

  const adminNavItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/admin/dashboard' },
    { icon: Users, label: 'User Management', href: '/admin/users' },
    { icon: Gamepad2, label: 'Game Requests', href: '/admin/game-requests' },
    { icon: Target, label: 'Scenario Planning', href: '/admin/scenarios' },
    { icon: Calendar, label: 'Future Retreat', href: '/admin/retreats' },
    { icon: List, label: 'Reports', href: '/admin/reports' },
    {
      icon: UserRoundCog,
      label: 'Roles Configuration',
      href: '/admin/configuration',
    },
  ];

  const navItems = isAdmin ? adminNavItems : superAdminNavItems;
  const userRole = isAdmin ? 'Admin (SFD)' : 'Super Admin';

  return (
    <div className='min-h-screen bg-background text-foreground flex overflow-hidden font-sans relative'>
      {/* Fixed Background Image */}
      <div
        className='fixed inset-0 z-0'
        style={{
          backgroundImage: `url(${futuristicBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      {/* Overlay for better readability */}
      <div className='fixed inset-0 z-0 bg-background/40 backdrop-blur-[2px]' />
      {/* Sidebar */}
      <aside
        // className={cn(
        //   'bg-background/40 backdrop-blur-[10px] border-r border-sidebar-border/50 transition-all duration-500 ease-in-out flex flex-col z-40 shadow-2xl ',

        className={cn(
          'bg-background/40 backdrop-blur-[10px] border-r border-sidebar-border/50 transition-all duration-500 ease-in-out flex flex-col z-40 shadow-2xl fixed top-0 left-0 h-screen',
          sidebarOpen ? 'w-64' : 'w-20'
        )}
      >
        <div className='h-20 flex items-center px-6 gap-3'>
          <div className='flex items-center gap-8'>
            <div className='flex'>
              <img src={SFG_LOGO} alt='SFG Logo' className='w-auto h-14' />
            </div>
          </div>
        </div>

        <nav className='flex-1 flex flex-col gap-1 py-8 px-4 space-y-2'>
          {navItems.map((item) => {
            const isActive =
              location === item.href ||
              (item.href !== '/admin' && location.startsWith(item.href + '/'));

            return (
              <Link key={item.href} href={item.href}>
                <div
                  className={cn(
                    'flex items-center gap-4 px-3 py-3 rounded-lg transition-all duration-300 group cursor-pointer',
                    isActive
                      ? 'bg-brand-dark-green text-white border-l-2'
                      : 'text-muted-foreground hover:text-foreground hover:bg-white/[0.02]'
                  )}
                >
                  <item.icon
                    className={cn(
                      'w-5 h-5 transition-colors duration-300',
                      isActive
                        ? 'text-brand-bright-green drop-shadow-[0_0_8px_rgba(38,208,124,0.5)]'
                        : 'text-muted-foreground/70 group-hover:text-foreground'
                    )}
                  />
                  {sidebarOpen && (
                    <span className='font-medium text-sm tracking-wide'>
                      {item.label}
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>

        <div className='px-6 py-1 h-13 border-t border-white/5'>
          <div
            className={cn(
              'flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground transition-colors cursor-pointer opacity-70 hover:opacity-100',
              !sidebarOpen && 'justify-center'
            )}
          >
            <Info className='w-5 h-5' />
            {sidebarOpen && (
              <span className='font-medium text-sm'>Help & Support</span>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div
        // className={cn(
        //   'relative z-40 w-full flex-1 flex flex-col transition-all duration-300'
        // )}

        className={cn(
          'relative z-40 w-full flex-1 flex flex-col transition-all duration-300',
          sidebarOpen ? 'ml-64' : 'ml-20'
        )}
      >
        <main className='w-full flex-1 flex flex-col bg-transparent'>
          {/* Header - Floating and minimal */}
          <header className='h-14 flex items-center justify-between px-4 sticky top-0 z-10 bg-background/30 backdrop-blur-[10px] border-b border-white/5'>
            <div className='flex items-center gap-8'>
              <Button
                variant='ghost'
                size='icon'
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className='text-muted-foreground hover:text-foreground hover:bg-white/5'
              >
                <Menu className='w-5 h-5' />
              </Button>

              {/* <h1 className='text-2xl font-bold text-white'>
                Scenario Planning
              </h1> */}
            </div>

            <div className='flex items-center gap-6'>
              <div className='flex items-center gap-1'>
                <LanguageSwitch />
                <div>
                  <Button
                    variant='ghost'
                    size='icon'
                    className='text-muted-foreground hover:text-foreground hover:bg-white/5'
                  >
                    <Moon className='w-5 h-5' />
                  </Button>
                </div>
              </div>
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
                  <div className='flex items-center gap-3 pl-2 pr-4 py-1 h-auto hover:bg-white/5 rounded-full border border-transparent transition-all cursor-pointer'>
                    <div className='w-9 h-9 rounded-full border-2 border-brand-green/20 ring-2 ring-transparent group-hover:ring-brand-green/30 transition-all overflow-hidden relative'>
                      <video
                        src={avatarVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className='w-full h-full object-cover'
                      />
                    </div>
                    <div className='flex flex-col items-start text-left'>
                      <span className='text-sm font-semibold leading-none tracking-tight text-white'>
                        User
                      </span>
                      <span className='text-[10px] text-brand-bright-green uppercase tracking-wider font-bold mt-1'>
                        {userRole}
                      </span>
                    </div>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align='end'
                  className='w-56 bg-card/95 backdrop-blur-xl border-white/10 shadow-2xl'
                >
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator className='bg-white/10' />
                  <DropdownMenuItem
                    className='cursor-pointer focus:bg-brand-green/20 focus:text-brand-bright-green'
                    onClick={() => setLocation('/settings')}
                  >
                    <Settings className='mr-2 w-4 h-4' />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className='cursor-pointer focus:bg-destructive/10 focus:text-destructive text-destructive'
                    onClick={() => setLocation('/')}
                  >
                    <LogOut className='mr-2 w-4 h-4' />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          {/* Page Content */}
          <div className='flex-1 overflow-auto p-6 lg:p-8'>
            <div className='max-w-[1600px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700'>
              {children}
            </div>
          </div>

          {/* Footer Bar (Visual Only) */}
          <div className='h-13 border-t border-white/5 bg-background/50 backdrop-blur-md px-8 flex items-center justify-between text-[10px] text-muted-foreground uppercase tracking-widest'>
            <div className='flex items-center gap-4'>
              <span className='flex items-center gap-2'>
                <Copyright className='w-3 h-3' /> COPY RIGHTS 2025, DUBAI POLICE
                DEPARTMENT
              </span>
            </div>
            <div className='flex items-center gap-4'>
              <span>VERSION 2.5.0</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
