import { Link, useLocation } from 'wouter';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { GlassCard } from '@/components/ui/glass-card';
import {
  Shield,
  Target,
  Users,
  Gamepad2,
  TrendingUp,
  Brain,
  Zap,
  ChevronRight,
  Play,
  Award,
  Globe,
  Lock,
  ShieldCheck,
  Copyright,
} from 'lucide-react';
import futuristicBg from '@/assets/futuristic-bg.jpg';
import { Button } from '@/components/ui/button';
import SFG_LOGO from '@/assets/sfg_logo.png';
import POLICE_LOGO from '@/assets/dubai_police_logo.png';
import GOVERNMENT_LOGO from '@/assets/dubai_govt_logo.png';

export default function Landing() {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: Target,
      title: language === 'ar' ? 'تحليل السيناريوهات' : 'Scenario Analysis',
      description:
        language === 'ar'
          ? 'استكشف السيناريوهات المستقبلية من خلال اللعب التعاوني'
          : 'Explore future scenarios through collaborative gameplay',
    },
    {
      icon: Brain,
      title: language === 'ar' ? 'التفكير الاستراتيجي' : 'Strategic Thinking',
      description:
        language === 'ar'
          ? 'طور مهارات الاستشراف وتحديد الإشارات'
          : 'Develop foresight skills and signal identification',
    },
    {
      icon: Users,
      title: language === 'ar' ? 'التعاون الجماعي' : 'Team Collaboration',
      description:
        language === 'ar'
          ? 'اعمل مع زملائك لبناء رؤى مشتركة'
          : 'Work with colleagues to build shared visions',
    },
    {
      icon: TrendingUp,
      title: language === 'ar' ? 'تحليل التأثير' : 'Impact Analysis',
      description:
        language === 'ar'
          ? 'قيّم الاحتمالية والتأثير للتحديات المستقبلية'
          : 'Evaluate probability and impact of future challenges',
    },
  ];

  const stats = [
    {
      value: '50+',
      label: language === 'ar' ? 'جلسة مكتملة' : 'Sessions Completed',
    },
    { value: '500+', label: language === 'ar' ? 'مشارك' : 'Participants' },
    {
      value: '200+',
      label: language === 'ar' ? 'سيناريو' : 'Scenarios Created',
    },
    {
      value: '95%',
      label: language === 'ar' ? 'رضا المستخدمين' : 'User Satisfaction',
    },
  ];

  return (
    <div className='min-h-screen relative'>
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
      <div className='fixed inset-0 z-0 bg-background/30' />

      {/* Navigation */}
      <nav className='relative z-50 border-b border-border/20 bg-background/50 backdrop-blur-md'>
        <div className='container mx-auto px-6 py-4'>
          <div className='flex items-center justify-between'>
            {/* <div className='flex items-center px-6 gap-3'>
              <div className='w-10 h-10 rounded bg-brand-green flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(38,208,124,0.3)]'>
                <ShieldCheck className='w-6 h-6 text-white' />
              </div>

              <div className='flex flex-col'>
                <span className='font-display font-bold text-2xl tracking-widest text-white leading-none'>
                  FUTURE
                </span>
                <span className='font-display text-base tracking-widest text-brand-bright-green leading-none'>
                  FORESIGHT
                </span>
              </div>
            </div> */}

            <div className='flex items-center gap-8'>
              <div className='flex'>
                <img src={SFG_LOGO} alt='SFG Logo' className='w-auto h-14' />
              </div>
              <div className='flex'>
                <img src={POLICE_LOGO} alt='SFG Logo' className='w-auto h-20' />
              </div>
              <div className='flex'>
                <img
                  src={GOVERNMENT_LOGO}
                  alt='SFG Logo'
                  className='w-auto h-18'
                />
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <Link to='/login'>
                <Button variant={'primary'}>
                  {language === 'ar' ? 'تسجيل الدخول' : 'Sign In'}
                  <ChevronRight className='w-4 h-4 ml-2' />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className='relative z-10 container mx-auto px-6 py-20 md:py-32'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='space-y-8 animate-fade-in'>
            <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dp-green/10 border border-dp-green/30'>
              <Zap className='w-4 h-4 text-dp-gold' />
              <span className='text-sm font-medium text-dp-teal'>
                {language === 'ar'
                  ? 'منصة الاستشراف المتقدمة'
                  : 'Advanced Foresight Platform'}
              </span>
            </div>

            <h1 className='title-cyber text-4xl md:text-5xl lg:text-6xl leading-tight'>
              <span className='text-foreground'>
                {language === 'ar' ? 'لعبة الاستشراف' : 'Strategic Foresight'}
              </span>
              <br />
              <span className='text-gradient-green'>
                {language === 'ar' ? 'الاستراتيجي' : 'Game'}
              </span>
            </h1>

            <p className='text-lg text-muted-foreground max-w-xl leading-relaxed'>
              {language === 'ar'
                ? 'منصة متقدمة لاستكشاف السيناريوهات المستقبلية من خلال اللعب التعاوني والتحليل الاستراتيجي. صُممت خصيصاً لشرطة دبي لتعزيز الجاهزية للمستقبل.'
                : 'An advanced platform for exploring future scenarios through collaborative gameplay and strategic analysis. Designed specifically for Dubai Police to enhance future readiness.'}
            </p>

            <div className='flex flex-col sm:flex-row gap-4'>
              <Link to='/login'>
                <Button>
                  <Play className='w-5 h-5 mr-2' />
                  {language === 'ar' ? 'ابدأ اللعب' : 'Start Playing'}
                </Button>
              </Link>
              <Button variant='tertiary'>
                <Globe className='w-5 h-5 mr-2' />
                {language === 'ar' ? 'شاهد العرض' : 'Watch Demo'}
              </Button>
            </div>

            {/* Stats Row */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border/30'>
              {stats.map((stat) => (
                <div key={stat.label} className='text-center md:text-left'>
                  <div className='text-2xl font-bold text-gradient-gold title-cyber'>
                    {stat.value}
                  </div>
                  <div className='text-xs text-muted-foreground uppercase tracking-wider'>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual */}
          <div className='relative hidden lg:block animate-fade-in-right'>
            <div className='relative w-full aspect-square max-w-lg mx-auto'>
              {/* Main card */}
              <GlassCard className='absolute inset-8 p-8 glow-green animate-float'>
                <div className='h-full flex flex-col justify-between'>
                  <div>
                    <div className='flex items-center gap-2 mb-4'>
                      <div className='w-8 h-8 rounded-lg bg-dp-green/20 flex items-center justify-center'>
                        <Gamepad2 className='w-4 h-4 text-dp-teal' />
                      </div>
                      <span className='text-xs uppercase tracking-wider text-muted-foreground'>
                        Active Session
                      </span>
                    </div>
                    <h3 className='title-cyber text-xl mb-2'>
                      Cybercrime 2035
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                      AI-driven identity fraud patterns
                    </p>
                  </div>

                  <div className='space-y-4'>
                    <div className='flex items-center justify-between text-sm'>
                      <span className='text-muted-foreground'>
                        Phase Progress
                      </span>
                      <span className='text-dp-teal'>72%</span>
                    </div>
                    <div className='h-2 rounded-full bg-muted overflow-hidden'>
                      <div className='h-full w-[72%] rounded-full bg-gradient-to-r from-dp-green to-dp-teal' />
                    </div>
                    <div className='flex items-center gap-2'>
                      <Users className='w-4 h-4 text-muted-foreground' />
                      <span className='text-sm text-muted-foreground'>
                        12 participants
                      </span>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Floating elements */}
              <div className='absolute top-0 right-0 glass-card p-4 glow-teal animate-float float-delayed'>
                <div className='flex items-center gap-3'>
                  <Award className='w-8 h-8 text-dp-gold' />
                  <div>
                    <div className='text-sm font-semibold'>Top Analyst</div>
                    <div className='text-xs text-muted-foreground'>
                      Badge Earned
                    </div>
                  </div>
                </div>
              </div>

              <div className='absolute bottom-0 left-0 glass-card p-4 animate-float'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-full bg-gradient-to-br from-dp-green to-dp-teal flex items-center justify-center'>
                    <Lock className='w-5 h-5 text-white' />
                  </div>
                  <div>
                    <div className='text-sm font-semibold'>Secure Platform</div>
                    <div className='text-xs text-muted-foreground'>
                      Enterprise Grade
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='relative z-10 py-20 border-t border-border/20'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='title-cyber text-3xl md:text-4xl mb-4'>
              <span className='text-gradient-green'>
                {language === 'ar' ? 'مميزات المنصة' : 'Platform Features'}
              </span>
            </h2>
            <p className='text-muted-foreground max-w-2xl mx-auto'>
              {language === 'ar'
                ? 'أدوات متقدمة لتحليل المستقبل واتخاذ القرارات الاستراتيجية'
                : 'Advanced tools for future analysis and strategic decision making'}
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {features.map((feature, index) => (
              <GlassCard
                key={feature.title}
                className='p-6 hover:glow-teal transition-all duration-300 group'
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-dp-green/20 to-dp-teal/20 flex items-center justify-center mb-4 group-hover:glow-green transition-all'>
                  <feature.icon className='w-6 h-6 text-dp-teal' />
                </div>
                <h3 className='title-tactical text-lg mb-2'>{feature.title}</h3>
                <p className='text-sm text-muted-foreground leading-relaxed'>
                  {feature.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}
