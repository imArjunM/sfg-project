import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import {
  FileText,
  Download,
  CheckCircle,
  MessageSquare,
  Search,
  Filter,
} from 'lucide-react';

const pendingReports = [
  {
    id: 1,
    title: 'Urban Resilience Post-Game Analysis',
    gm: 'Sarah Connor',
    date: 'Oct 26, 2025',
    type: 'PDF',
  },
  {
    id: 2,
    title: 'Cyber Shield Outcomes',
    gm: 'John Anderson',
    date: 'Oct 20, 2025',
    type: 'DOCX',
  },
];

const publishedReports = [
  {
    id: 3,
    title: 'Future Mobility Strategy 2030',
    author: 'Traffic Dept',
    date: 'Sep 15, 2025',
    type: 'PDF',
    tags: ['Strategy', 'Public'],
  },
  {
    id: 4,
    title: 'Community Policing AI Ethics',
    author: 'AI Ethics Comm',
    date: 'Aug 10, 2025',
    type: 'PDF',
    tags: ['Ethics', 'AI'],
  },
  {
    id: 5,
    title: 'Drone Regulation Framework',
    author: 'Air Wing',
    date: 'Jul 22, 2025',
    type: 'PPTX',
    tags: ['Regulation', 'Internal'],
  },
];

export default function AdminReports() {
  return (
    <Layout>
      <div className='space-y-8'>
        <div>
          <h1 className='text-3xl font-bold text-white mb-2'>
            Reports Governance
          </h1>
          <p className='text-muted-foreground'>
            Review submitted reports and manage the knowledge library
          </p>
        </div>

        <Tabs defaultValue='approval' className='w-full space-y-6'>
          <TabsList className='bg-white/5 border border-white/10 p-1 w-auto inline-flex rounded-lg'>
            <TabsTrigger
              value='approval'
              className='data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-2'
            >
              Approval Required
            </TabsTrigger>
            <TabsTrigger
              value='published'
              className='data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-2'
            >
              Published Reports
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value='approval'
            className='space-y-6 animate-in fade-in slide-in-from-bottom-2'
          >
            {pendingReports.map((report) => (
              <Card
                key={report.id}
                className='glass-card hover:border-primary/30 transition-all'
              >
                <CardContent className='p-6 flex flex-col md:flex-row items-center justify-between gap-6'>
                  <div className='flex items-center gap-4'>
                    <div className='p-4 rounded bg-white/5 text-primary'>
                      <FileText className='w-8 h-8' />
                    </div>
                    <div>
                      <h3 className='text-xl font-bold text-white mb-1'>
                        {report.title}
                      </h3>
                      <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                        <span>
                          Submitted by{' '}
                          <span className='text-white'>{report.gm}</span>
                        </span>
                        <span>•</span>
                        <span>{report.date}</span>
                        <span>•</span>
                        <Badge
                          variant='secondary'
                          className='bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                        >
                          Pending Approval
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className='flex gap-3 w-full md:w-auto'>
                    <Button
                      variant='secondary'
                      className='border-white/10 hover:bg-white/5 text-white'
                    >
                      <MessageSquare className='w-4 h-4 mr-2' />
                      Comment
                    </Button>
                    <Button className='bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_10px_rgba(16,185,129,0.3)]'>
                      <CheckCircle className='w-4 h-4 mr-2' />
                      Approve & Publish
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent
            value='published'
            className='space-y-6 animate-in fade-in slide-in-from-bottom-2'
          >
            <div className='flex gap-4 mb-6'>
              <div className='relative flex-1'>
                <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground' />
                <Input
                  placeholder='Search published reports...'
                  className='pl-10 bg-secondary/30 border-white/10 focus:border-primary/50'
                />
              </div>
              <Button
                variant='secondary'
                className='border-white/10 hover:bg-white/5 text-muted-foreground hover:text-white'
              >
                <Filter className='w-4 h-4 mr-2' /> Filter
              </Button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {publishedReports.map((report) => (
                <Card
                  key={report.id}
                  className='glass-card group hover:border-primary/30 transition-all'
                >
                  <CardContent className='p-5 flex flex-col h-full'>
                    <div className='flex justify-between items-start mb-4'>
                      <div className='p-3 rounded bg-white/5 group-hover:bg-primary/10 transition-colors'>
                        <FileText className='w-6 h-6 text-primary' />
                      </div>
                      <Badge
                        variant='secondary'
                        className='bg-white/5 hover:bg-white/10 text-muted-foreground text-xs font-mono'
                      >
                        {report.type}
                      </Badge>
                    </div>

                    <h3 className='text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors'>
                      {report.title}
                    </h3>

                    <div className='flex flex-wrap gap-2 mb-4'>
                      {report.tags.map((tag) => (
                        <span
                          key={tag}
                          className='text-[10px] px-1.5 py-0.5 rounded border border-white/10 text-muted-foreground'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className='mt-auto pt-4 border-t border-white/5 flex justify-between items-center'>
                      <span className='text-xs text-muted-foreground'>
                        {report.date}
                      </span>
                      <Button
                        size='sm'
                        variant='ghost'
                        className='hover:text-primary hover:bg-primary/10'
                      >
                        <Download className='w-4 h-4' />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
