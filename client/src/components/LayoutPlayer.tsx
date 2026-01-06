import { Link, useLocation } from "wouter";
import { 
  LayoutDashboard, 
  Target, 
  History, 
  Trophy, 
  Bell, 
  LogOut,
  ShieldCheck,
  Menu,
  Grid,
  Clock,
  Database,
  Settings,
  User,
  Zap,
  PlayCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import avatarVideo from "@assets/generated_videos/animated_dubai_police_officer_avatar.mp4";

interface LayoutPlayerProps {
  children: React.ReactNode;
}

export function LayoutPlayer({ children }: LayoutPlayerProps) {
  const [location, setLocation] = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Player Specific Navigation Items
  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/player/dashboard" },
    { icon: Target, label: "Scenario Planning", href: "/player/scenarios" },
    { icon: History, label: "Game History", href: "/player/history" },
    { icon: Trophy, label: "Leaderboard", href: "/player/leaderboard" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex overflow-hidden font-sans">
      {/* Sidebar */}
      <aside 
        className={cn(
          "bg-sidebar border-r border-sidebar-border/50 transition-all duration-500 ease-in-out flex flex-col z-20 shadow-2xl",
          sidebarOpen ? "w-64" : "w-20"
        )}
      >
        <div className="h-20 flex items-center px-6 gap-3">
          <div className="w-8 h-8 rounded bg-brand-green flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(38,208,124,0.3)]">
            <ShieldCheck className="w-5 h-5 text-white" />
          </div>
          {sidebarOpen && (
            <div className="flex flex-col">
               <span className="font-display font-bold text-lg tracking-widest text-white leading-none">
                FUTURE
              </span>
              <span className="font-display text-sm tracking-widest text-brand-bright-green leading-none">
                FORESIGHT
              </span>
            </div>
          )}
        </div>

        <nav className="flex-1 py-8 px-4 space-y-2">
          {navItems.map((item) => {
            const isActive = location === item.href || location.startsWith(item.href + '/');
            
            return (
              <Link key={item.href} href={item.href}>
                <div 
                  className={cn(
                    "flex items-center gap-4 px-3 py-3 rounded-lg transition-all duration-300 group cursor-pointer",
                    isActive 
                      ? "bg-brand-green/10 text-brand-bright-green border-l-2 border-brand-bright-green" 
                      : "text-muted-foreground hover:text-foreground hover:bg-white/[0.02]"
                  )}
                >
                  <item.icon className={cn("w-5 h-5 transition-colors duration-300", isActive ? "text-brand-bright-green drop-shadow-[0_0_8px_rgba(38,208,124,0.5)]" : "text-muted-foreground/70 group-hover:text-foreground")} />
                  {sidebarOpen && <span className="font-medium text-sm tracking-wide">{item.label}</span>}
                </div>
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-white/5">
          <Link href="/">
            <div className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors cursor-pointer opacity-70 hover:opacity-100",
              !sidebarOpen && "justify-center"
            )}>
              <LogOut className="w-5 h-5" />
              {sidebarOpen && <span className="font-medium text-sm">Logout</span>}
            </div>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 bg-transparent">
        {/* Header - Floating and minimal */}
        <header className="h-20 flex items-center justify-between px-8 sticky top-0 z-10 bg-background/80 backdrop-blur-xl border-b border-white/5">
          <div className="flex items-center gap-8">
            <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)} className="text-muted-foreground hover:text-foreground hover:bg-white/5">
              <Menu className="w-5 h-5" />
            </Button>
            
            {/* Active Game Indicator */}
            <div className="hidden lg:flex items-center gap-4 px-4 py-1.5 bg-brand-green/10 rounded-full border border-brand-green/20 animate-in fade-in slide-in-from-top-4 duration-700">
                <span className="w-2 h-2 rounded-full bg-brand-bright-green animate-pulse"></span>
                <span className="text-xs font-mono text-brand-bright-green tracking-widest uppercase">Active Session: Future of Transport</span>
                <span className="text-xs font-mono text-white tracking-widest ml-2 border-l border-brand-green/30 pl-3">00:45:12</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex flex-col items-end mr-4">
               <span className="text-xs font-display font-bold text-white tracking-widest">DUBAI POLICE</span>
               <span className="text-[10px] text-muted-foreground tracking-wider dir-rtl">شرطة دبي</span>
            </div>
            
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-brand-bright-green relative">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full"></span>
                </Button>

                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-3 pl-2 pr-4 py-1 h-auto hover:bg-white/5 rounded-full border border-transparent transition-all">
                    <div className="w-9 h-9 rounded-full border-2 border-brand-green/20 ring-2 ring-transparent group-hover:ring-brand-green/30 transition-all overflow-hidden relative">
                        <video 
                        src={avatarVideo} 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col items-start text-left">
                        <span className="text-sm font-semibold leading-none tracking-tight text-white">Officer</span>
                        <span className="text-[10px] text-brand-bright-green uppercase tracking-wider font-bold mt-1">Player / Expert</span>
                    </div>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-card/95 backdrop-blur-xl border-white/10 shadow-2xl">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-white/10" />
                    <DropdownMenuItem className="cursor-pointer focus:bg-brand-green/20 focus:text-brand-bright-green">
                    <Settings className="mr-2 w-4 h-4" />
                    Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                    className="cursor-pointer focus:bg-destructive/10 focus:text-destructive text-destructive"
                    onClick={() => setLocation("/")}
                    >
                    <LogOut className="mr-2 w-4 h-4" />
                    Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-8 lg:p-10">
          <div className="max-w-[1600px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
            {children}
          </div>
        </div>
        
        {/* Footer Bar (Visual Only) */}
        <div className="h-12 border-t border-white/5 bg-background/50 backdrop-blur-md px-8 flex items-center justify-between text-[10px] text-muted-foreground uppercase tracking-widest">
           <div className="flex items-center gap-4">
              <span className="flex items-center gap-2"><Grid className="w-3 h-3" /> SYSTEM READY</span>
              <span className="flex items-center gap-2"><Database className="w-3 h-3" /> DATABASE CONNECTED</span>
           </div>
           <div className="flex items-center gap-4">
              <span className="flex items-center gap-2"><Clock className="w-3 h-3" /> UTC+4</span>
              <span>VERSION 2.5.0</span>
           </div>
        </div>
      </main>
    </div>
  );
}
