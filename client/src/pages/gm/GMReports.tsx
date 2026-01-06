import { LayoutGM } from '@/components/LayoutGM';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  FileText,
  Search,
  Filter,
  Download,
  Eye,
  Calendar,
  Clock,
  CheckCircle2,
} from 'lucide-react';

export default function GMReports() {
  const reports = [
    {
      id: 'RPT-2025-001',
      title: 'Future of Transportation 2030 - Final Report',
      date: 'Dec 22, 2025',
      type: 'Full Scenario',
      status: 'Submitted',
      participants: 12,
    },
    {
      id: 'RPT-2025-002',
      title: 'AI Ethics Framework - Preliminary Findings',
      date: 'Nov 15, 2025',
      type: 'Workshop Summary',
      status: 'Draft',
      participants: 8,
    },
    {
      id: 'RPT-2025-003',
      title: 'Cyber Resilience Strategy - Executive Brief',
      date: 'Oct 05, 2025',
      type: 'Executive Brief',
      status: 'Approved',
      participants: 15,
    },
  ];

  return (
    <LayoutGM>
      <div className='space-y-8'>
        <div>
          <h1 className='text-3xl font-bold text-white mb-2 font-display tracking-wide'>
            Reports Library
          </h1>
          <p className='text-muted-foreground'>
            Access and manage final reports from all completed scenario
            sessions.
          </p>
        </div>

        {/* Search and Filter */}
        <div className='flex flex-col md:flex-row gap-4 items-center bg-white/5 p-4 rounded-lg border border-white/5'>
          <div className='relative flex-1 w-full'>
            <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground' />
            <Input
              placeholder='Search reports by title or ID...'
              className='pl-9 bg-black/20 border-white/10'
            />
          </div>
          <div className='flex gap-2 w-full md:w-auto'>
            <Button
              variant='secondary'
              
            >
              <Filter className='w-4 h-4' /> Type
            </Button>
            <Button
              variant='secondary'
              
            >
              <Calendar className='w-4 h-4' /> Date Range
            </Button>
          </div>
        </div>

        <div className='grid gap-4'>
          {reports.map((report) => (
            <Card
              key={report.id}
              className='glass-card border-none hover:bg-white/5 transition-all group'
            >
              <CardContent className='p-6 flex flex-col md:flex-row items-start md:items-center gap-6'>
                <div className='p-3 rounded-lg bg-white/5 group-hover:bg-brand-green/10 transition-colors'>
                  <FileText className='w-6 h-6 text-muted-foreground group-hover:text-brand-bright-green' />
                </div>

                <div className='flex-1 space-y-1'>
                  <div className='flex items-center gap-3'>
                    <h3 className='font-semibold text-white text-lg'>
                      {report.title}
                    </h3>
                    <Badge
                      variant='secondary'
                      className={`
                      ${
                        report.status === 'Approved'
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                          : report.status === 'Submitted'
                          ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                          : 'bg-orange-500/10 text-orange-400 border-orange-500/20'
                      }
                    `}
                    >
                      {report.status}
                    </Badge>
                  </div>
                  <div className='flex flex-wrap items-center gap-4 md:gap-6 text-sm text-muted-foreground'>
                    <span className='font-mono text-xs'>{report.id}</span>
                    <span className='flex items-center gap-1'>
                      <Calendar className='w-3 h-3' /> {report.date}
                    </span>
                    <span className='flex items-center gap-1'>
                      <Clock className='w-3 h-3' /> {report.type}
                    </span>
                  </div>
                </div>

                <div className='flex items-center gap-2 w-full md:w-auto mt-4 md:mt-0'>
                  <Button
                    
                    size='sm'
                    
                  >
                    <Eye className='w-4 h-4 mr-2' /> View
                  </Button>
                  <Button
                   
                    size='sm'
                    
                  >
                    <Download className='w-4 h-4 mr-2' /> Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </LayoutGM>
  );
}
