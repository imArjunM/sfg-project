import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowLeft,
  Calendar,
  Users,
  Target,
  Layers,
  CheckCircle,
  MessageSquare,
} from 'lucide-react';
import { useLocation } from 'wouter';

export default function GameRequestDetail() {
  const [, setLocation] = useLocation();

  return (
    <Layout>
      <div className='space-y-8'>
        <div className='flex items-center gap-4'>
          <Button
            variant='ghost'
            size='icon'
            onClick={() => setLocation('/admin/game-requests')}
          >
            <ArrowLeft className='w-5 h-5' />
          </Button>
          <div>
            <h1 className='text-3xl font-bold text-white mb-2'>
              Urban Resilience 2030
            </h1>
            <div className='flex items-center gap-3'>
              <Badge
                variant='secondary'
                className='bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
              >
                Pending Approval
              </Badge>
              <span className='text-muted-foreground text-sm'>
                Request ID: REQ-2025-001
              </span>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <div className='lg:col-span-2 space-y-8'>
            <Card className='glass-card'>
              <CardHeader>
                <CardTitle className='text-primary'>Game Details</CardTitle>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label className='text-xs text-muted-foreground uppercase tracking-wider block mb-2'>
                      Game Master
                    </label>
                    <div className='flex items-center gap-3 text-white bg-white/5 p-3 rounded border border-white/10'>
                      <div className='w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold'>
                        SC
                      </div>
                      <div>
                        <div className='font-medium'>Sarah Connor</div>
                        <div className='text-xs text-muted-foreground'>
                          Crisis Management Dept
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className='text-xs text-muted-foreground uppercase tracking-wider block mb-2'>
                      Proposed Schedule
                    </label>
                    <div className='flex items-center gap-3 text-white bg-white/5 p-3 rounded border border-white/10'>
                      <Calendar className='w-5 h-5 text-primary' />
                      <div>
                        <div className='font-medium'>Oct 25, 2025</div>
                        <div className='text-xs text-muted-foreground'>
                          09:00 AM - 04:00 PM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className='text-xs text-muted-foreground uppercase tracking-wider block mb-2'>
                    Focal Issue
                  </label>
                  <p className='text-white text-lg leading-relaxed bg-white/5 p-4 rounded border border-white/10'>
                    "How can Dubai maintain critical infrastructure resilience
                    during a coordinated multi-vector cyber-physical attack in
                    2030?"
                  </p>
                </div>

                <div>
                  <label className='text-xs text-muted-foreground uppercase tracking-wider block mb-2'>
                    Theme Explanation
                  </label>
                  <p className='text-muted-foreground leading-relaxed'>
                    This game explores the intersection of smart city
                    vulnerabilities and physical security. We will simulate a
                    scenario where autonomous transport systems and power grids
                    are compromised simultaneously. The goal is to identify gaps
                    in our current inter-departmental communication protocols.
                  </p>
                </div>

                <div>
                  <label className='text-xs text-muted-foreground uppercase tracking-wider block mb-3'>
                    Theme Breakdown
                  </label>

                  <div className='overflow-hidden rounded-lg border border-white/10'>
                    <table className='w-full text-sm'>
                      <thead className='bg-white/5'>
                        <tr>
                          <th className='px-4 py-3 text-left font-semibold text-white uppercase tracking-wide'>
                            Theme
                          </th>
                          <th className='px-4 py-3 text-left font-semibold text-white uppercase tracking-wide'>
                            Explanation
                          </th>
                        </tr>
                      </thead>

                      <tbody className='divide-y divide-white/10'>
                        {[
                          {
                            theme: 'Social',
                            description:
                              'Examines public trust, citizen behavior, and societal response during prolonged infrastructure disruptions.',
                          },
                          {
                            theme: 'Political',
                            description:
                              'Analyzes inter-government coordination, decision-making authority, and crisis governance under pressure.',
                          },
                          {
                            theme: 'Environmental',
                            description:
                              'Considers cascading environmental risks caused by infrastructure failures and emergency responses.',
                          },
                          {
                            theme: 'Technology',
                            description:
                              'Focuses on vulnerabilities in smart city systems, AI-driven controls, and cyber-physical integration.',
                          },
                          {
                            theme: 'Security',
                            description:
                              'Evaluates national security exposure, threat escalation, and resilience against coordinated attacks.',
                          },
                          {
                            theme: 'Economical',
                            description:
                              'Assesses economic disruption, service downtime impact, and long-term financial recovery scenarios.',
                          },
                        ].map((row) => (
                          <tr
                            key={row.theme}
                            className='hover:bg-white/5 transition-colors'
                          >
                            <td className='px-4 py-4 font-medium text-primary'>
                              {row.theme}
                            </td>
                            <td className='px-4 py-4 text-muted-foreground leading-relaxed'>
                              {row.description}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className='grid grid-cols-2 gap-4'>
                  <div>
                    <label className='text-xs text-muted-foreground uppercase tracking-wider block mb-2'>
                      Target Audience
                    </label>
                    <div className='flex items-center gap-2 text-white'>
                      <Users className='w-4 h-4 text-primary' />
                      <span>20-25 Senior Officers</span>
                    </div>
                  </div>
                  <div>
                    <label className='text-xs text-muted-foreground uppercase tracking-wider block mb-2'>
                      Game Format
                    </label>
                    <div className='flex items-center gap-2 text-white'>
                      <Layers className='w-4 h-4 text-primary' />
                      <span>Hybrid (Physical + VR)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className='space-y-6'>
            <Card className='glass-card border-l-4 border-l-primary'>
              <CardHeader>
                <CardTitle className='text-white'>Selected Themes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='flex flex-wrap gap-2'>
                  {[
                    'Social',
                    'Political',
                    'Environmental',
                    'Technology',
                    'Security',
                    'Economical',
                  ].map((tag) => (
                    <Badge
                      key={tag}
                      variant='secondary'
                      className='bg-white/10 text-white hover:bg-white/20'
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className='glass-card'>
              <CardHeader>
                <CardTitle className='text-white'>Admin Actions</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <Button className='w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-lg shadow-[0_0_15px_rgba(16,185,129,0.3)]'>
                  <CheckCircle className='w-5 h-5 mr-2' />
                  Approve Request
                </Button>
                <Button
                  variant='secondary'
                  className='w-full border-white/10 hover:bg-white/5 text-white h-12'
                >
                  <MessageSquare className='w-5 h-5 mr-2' />
                  Request Changes
                </Button>
                <p className='text-xs text-muted-foreground text-center mt-2'>
                  Game Master will be notified immediately.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
