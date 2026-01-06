import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from 'recharts';

export function ActivityTimeline({ data }: { data: any[] }) {
  return (
    <div>
      <div className='h-[260px]'>
        <ResponsiveContainer width='100%' height='100%'>
          <AreaChart data={data}>
            <defs>
              <linearGradient id='scenarios' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='0%' stopColor='#14b8a6' stopOpacity={0.6} />
                <stop offset='100%' stopColor='#14b8a6' stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray='3 3' opacity={0.1} />
            <XAxis dataKey='name' stroke='#888' />
            <YAxis stroke='#888' />
            <Tooltip />
            <Legend />

            <Area
              type='monotone'
              dataKey='scenarios'
              name='Scenarios Conducted'
              stroke='#14b8a6'
              fill='url(#scenarios)'
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Explanation */}
      <p className='text-xs text-muted-foreground mt-3 leading-relaxed'>
        This chart shows the number of scenario planning activities conducted
        each month. It helps identify growth, seasonal variation, and overall
        engagement trends across the foresight program.
      </p>
    </div>
  );
}
