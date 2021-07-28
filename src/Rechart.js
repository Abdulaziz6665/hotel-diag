import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

function Rechart() {

  const data = [
    {
      name: 'Page A',
      uv: 1500,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3500,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 3200,
      pv: 5000,
      amt: 2290,
    },
    {
      uv: 5000,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page F',
      uv: 1700,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 4500,
      pv: 4300,
      amt: 2100,
    },
    {
      uv: 3300,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 4400,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page E',
      uv: 2000,
      pv: 4800,
      amt: 2181,
    },
  ];

  return (
    <>
      <AreaChart
        width={550}
        height={290}
        data={data}
        margin={{
          top: 10,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="6 9" vertical={false}/>
        <XAxis tickLine={false} axisLine={false} />
        <YAxis dataKey="pv" tickLine={false} axisLine={false}/>
        <Tooltip contentStyle={{ backgroundColor: '#222B45', opacity: 0.8, color: 'white', borderRadius: 9}} name={false} separator={false} labelStyle={{display: 'none'}} itemStyle={{ color: 'white'}}/>
        <Area type="monotone" dataKey="uv" stroke="#3366FF" fill="#A6C1FF"/>
      </AreaChart>
    </>
  )
}

export default Rechart;
