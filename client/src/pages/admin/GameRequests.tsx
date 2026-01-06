import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Eye, Filter, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useLocation } from 'wouter';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const requests = [
  {
    id: 'REQ-2025-001',
    game: 'Urban Resilience 2030',
    gm: 'Sarah Connor',
    dept: 'Crisis Management',
    status: 'Pending',
    date: 'Oct 15, 2025',
  },
  {
    id: 'REQ-2025-002',
    game: 'Cyber Shield Defense',
    gm: 'John Anderson',
    dept: 'Cyber Security',
    status: 'Approved',
    date: 'Oct 12, 2025',
  },
  {
    id: 'REQ-2025-003',
    game: 'Future Mobility Ops',
    gm: 'Alex Murphy',
    dept: 'Traffic Control',
    status: 'Changes Requested',
    date: 'Oct 10, 2025',
  },
  {
    id: 'REQ-2025-004',
    game: 'Community Trust Building',
    gm: 'Ellen Ripley',
    dept: 'Community Policing',
    status: 'Pending',
    date: 'Oct 18, 2025',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Approved':
      return 'bg-primary/10 text-primary border-primary/20';
    case 'Pending':
      return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
    case 'Changes Requested':
      return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
    default:
      return 'bg-white/5 text-muted-foreground';
  }
};

export default function GameRequests() {
  const [, setLocation] = useLocation();

  return (
    <Layout>
      <div className='space-y-8'>
        <div className='flex items-center justify-between'>
          <div>
            <h1 className='text-3xl font-bold text-white mb-2'>
              Game Requests
            </h1>
            <p className='text-muted-foreground'>
              Review and approve game proposals from Game Masters
            </p>
          </div>
        </div>

        <Tabs defaultValue='approval' className='w-full space-y-6'>
          <TabsList className='bg-white/5 border border-white/10 p-1 w-auto inline-flex rounded-lg'>
            <TabsTrigger
              value='approval'
              className='data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-2'
            >
              Scenario Planning
            </TabsTrigger>
            <TabsTrigger
              value='published'
              className='data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-2'
            >
              Future Retreat
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className='glass-card rounded-lg p-1'>
          <div className='p-4 border-b border-white/5 flex flex-col sm:flex-row gap-4 justify-between items-center'>
            <div className='relative w-full sm:w-96'>
              <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground' />
              <Input
                placeholder='Search requests...'
                className='pl-10 bg-background/50 border-white/5 focus:border-primary/50 transition-all'
              />
            </div>
            <Button
              variant='secondary'
              className='border-white/10 hover:bg-white/5 text-muted-foreground hover:text-white'
            >
              <Filter className='w-4 h-4 mr-2' />
              Filter
            </Button>
          </div>

          <Table>
            <TableHeader className='bg-white/5'>
              <TableRow className='border-white/5 hover:bg-transparent'>
                <TableHead className='text-primary font-bold'>
                  Request ID
                </TableHead>
                <TableHead className='text-primary font-bold'>
                  Game Name
                </TableHead>
                <TableHead className='text-primary font-bold'>
                  Requested By
                </TableHead>
                <TableHead className='text-primary font-bold'>
                  Department
                </TableHead>
                <TableHead className='text-primary font-bold'>Date</TableHead>
                <TableHead className='text-primary font-bold'>Status</TableHead>
                <TableHead className='text-right text-primary font-bold'>
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requests.map((req) => (
                <TableRow
                  key={req.id}
                  className='border-white/5 hover:bg-white/5 transition-colors'
                >
                  <TableCell className='font-mono text-muted-foreground'>
                    {req.id}
                  </TableCell>
                  <TableCell className='font-medium text-white'>
                    {req.game}
                  </TableCell>
                  <TableCell className='text-white'>{req.gm}</TableCell>
                  <TableCell className='text-muted-foreground'>
                    {req.dept}
                  </TableCell>
                  <TableCell className='text-muted-foreground text-sm'>
                    {req.date}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant='secondary'
                      className={getStatusColor(req.status)}
                    >
                      {req.status}
                    </Badge>
                  </TableCell>
                  <TableCell className='text-right'>
                    <Button
                      variant='ghost'
                      size='sm'
                      className='text-primary hover:text-primary hover:bg-primary/10'
                      onClick={() => setLocation(`/admin/game-requests/1`)}
                    >
                      <Eye className='w-4 h-4 mr-2' />
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Layout>
  );
}
