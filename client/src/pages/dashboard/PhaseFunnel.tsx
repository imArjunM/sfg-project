import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';

export function PhaseFunnel({ data }: { data: any[] }) {
  return (
    <div>
      <div className='h-[260px]'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart layout='vertical' data={data}>
            <XAxis type='number' hide />
            <YAxis
              type='category'
              dataKey='phase'
              width={140}
              tick={{ fill: '#aaa', fontSize: 12 }}
            />
            <Tooltip />
            <Legend />

            <Bar
              dataKey='count'
              name='Games in Phase'
              fill='#14b8a6'
              radius={[0, 6, 6, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Explanation */}
      <p className='text-xs text-muted-foreground mt-3 leading-relaxed'>
        This funnel highlights how many games currently exist at each stage of
        the foresight workflow. Phases with higher counts may indicate process
        bottlenecks or approval delays requiring attention.
      </p>
    </div>
  );
}
