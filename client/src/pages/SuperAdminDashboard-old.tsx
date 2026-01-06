import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Users,
  Target,
  FileText,
  Activity,
  TrendingUp,
  Calendar,
  ArrowUp,
  ArrowDown,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Button } from '@/components/ui/button';

const data = [
  { name: 'Jan', scenarios: 4, reports: 2 },
  { name: 'Feb', scenarios: 3, reports: 5 },
  { name: 'Mar', scenarios: 7, reports: 8 },
  { name: 'Apr', scenarios: 5, reports: 4 },
  { name: 'May', scenarios: 9, reports: 12 },
  { name: 'Jun', scenarios: 12, reports: 15 },
];

export default function SuperAdminDashboard() {
  return (
    <Layout>
      <div className='space-y-8'>
        {/* Stats Grid - Updated to match Reference Image and New Colors */}
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
          {/* Card 1: Total Users */}
          <Card className='glass-card card-glow-green border-none overflow-hidden relative min-h-[220px] flex flex-col justify-center'>
            <CardContent className='p-8 z-10'>
              <div className='flex items-start gap-4 mb-2'>
                {/* Using Brand Bright Green for Main Numbers */}
                <span className='text-6xl font-display font-bold text-brand-bright-green drop-shadow-[0_0_15px_rgba(38,208,124,0.5)]'>
                  637
                </span>
                <ArrowUp className='w-8 h-8 text-brand-bright-green mt-2' />
              </div>
              <h3 className='text-sm font-bold text-white uppercase tracking-widest mb-4'>
                Total Users
              </h3>
              <p className='text-muted-foreground text-xs leading-relaxed max-w-sm'>
                Active personnel across all departments engaging with the
                foresight platform. 12% increase from last quarter.
              </p>
            </CardContent>
          </Card>

          {/* Card 2: Scenario Completion */}
          <Card className='glass-card border-none overflow-hidden relative min-h-[220px] flex flex-col justify-center'>
            <div className='absolute inset-0 bg-gradient-to-b from-brand-green/10 to-transparent'></div>
            <CardContent className='p-8 z-10'>
              <div className='flex items-start gap-4 mb-2'>
                <span className='text-6xl font-display font-bold text-brand-bright-green drop-shadow-[0_0_15px_rgba(38,208,124,0.5)]'>
                  57%
                </span>
                <ArrowDown className='w-8 h-8 text-brand-red mt-2' />
              </div>
              <h3 className='text-sm font-bold text-white uppercase tracking-widest mb-4'>
                Scenario Completion
              </h3>
              <p className='text-muted-foreground text-xs leading-relaxed max-w-sm'>
                Percentage of strategic scenarios reaching the final report
                stage within the projected timeline.
              </p>
            </CardContent>
          </Card>

          {/* Card 3: Quick Links / Hotspots (Visual from reference) */}
          <Card className='glass-card border-none overflow-hidden row-span-2 relative'>
            <div className='absolute top-0 right-0 p-6 flex flex-col items-end'>
              <h3 className='text-sm font-bold text-white uppercase tracking-widest mb-1 text-right'>
                Quick <br />
                <span className='text-brand-bright-green'>Links</span>
              </h3>
            </div>
            <CardContent className='p-8 pt-20'>
              <div className='space-y-6'>
                <div className='space-y-2'>
                  <div className='text-xl font-display text-brand-bright-green'>
                    01. AL QUSAIS
                  </div>
                  <div className='text-2xl font-display text-brand-green/50'>
                    02. BUR DUBAI
                  </div>
                  <div className='text-2xl font-display text-brand-green/50'>
                    03. AL BARSHA
                  </div>
                </div>

                <div className='h-32 w-full bg-brand-navy/20 rounded-lg border border-white/5 relative overflow-hidden group cursor-pointer hover:border-brand-bright-green/30 transition-colors'>
                  {/* Fake Map Visual */}
                  <div className="absolute inset-0 opacity-30 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')] bg-cover bg-center invert"></div>
                  <MapPin className='absolute top-1/3 left-1/3 text-brand-bright-green fill-brand-bright-green/20 w-6 h-6 animate-bounce' />
                  <MapPin className='absolute top-1/2 right-1/3 text-brand-green w-4 h-4' />
                </div>

                <div>
                  <h4 className='text-xs font-bold text-white mb-2'>
                    TOP 3 ACTIVE RETREATS
                  </h4>
                  <p className='text-[10px] text-muted-foreground leading-relaxed'>
                    High priority sessions requiring immediate attention. Click
                    to view detailed analysis and live streams.
                  </p>
                </div>

                <div className='grid grid-cols-2 gap-2 mt-4'>
                  {[
                    'MAPS',
                    'REPORTS',
                    'ANALYSIS',
                    'PREDICTIONS',
                    'STATISTICS',
                    'INSIGHTS',
                  ].map((link) => (
                    <Button
                      key={link}
                      variant='ghost'
                      className='justify-start h-8 text-[10px] text-muted-foreground hover:text-brand-bright-green hover:bg-brand-navy/30'
                    >
                      {link}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 4: Force Readiness */}
          <Card className='glass-card border-none overflow-hidden relative min-h-[220px] flex flex-col justify-center'>
            <CardContent className='p-8 z-10'>
              <div className='flex items-start gap-4 mb-2'>
                <span className='text-6xl font-display font-bold text-brand-bright-green drop-shadow-[0_0_15px_rgba(38,208,124,0.5)]'>
                  91
                </span>
                <ArrowUp className='w-8 h-8 text-brand-bright-green mt-2' />
              </div>
              <h3 className='text-sm font-bold text-brand-bright-green uppercase tracking-widest mb-4'>
                Readiness Score
              </h3>
              <p className='text-muted-foreground text-xs leading-relaxed max-w-sm'>
                Operational capability index based on current resource
                allocation and active foresight training modules.
              </p>
            </CardContent>
          </Card>

          {/* Card 5: Force Impact */}
          <Card className='glass-card border-none overflow-hidden relative min-h-[220px] flex flex-col justify-center'>
            <CardContent className='p-8 z-10'>
              <div className='flex items-start gap-4 mb-2'>
                {/* Updated to Brand Red #E4002B */}
                <span className='text-6xl font-display font-bold text-brand-red drop-shadow-[0_0_15px_rgba(228,0,43,0.5)]'>
                  87
                </span>
                <ArrowUp className='w-8 h-8 text-brand-bright-green mt-2' />
              </div>
              <h3 className='text-sm font-bold text-brand-red uppercase tracking-widest mb-4'>
                Impact Score
              </h3>
              <p className='text-muted-foreground text-xs leading-relaxed max-w-sm'>
                Projected long-term influence of current strategic decisions on
                public safety outcomes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
