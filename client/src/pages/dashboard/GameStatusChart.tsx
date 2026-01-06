import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';

const COLORS = ['#14b8a6', '#f59e0b', '#3b82f6'];

export function GameStatusChart({ data }: { data: any[] }) {
  return (
    <div>
      <div className='h-[260px]'>
        <ResponsiveContainer width='100%' height='100%'>
          <PieChart>
            <Pie
              data={data}
              dataKey='value'
              nameKey='name'
              innerRadius={70}
              outerRadius={100}
              paddingAngle={4}
            >
              {data?.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Explanation */}
      <p className='text-xs text-muted-foreground mt-3 leading-relaxed'>
        This distribution represents the current lifecycle status of all games
        in the system.
      </p>
    </div>
  );
}
