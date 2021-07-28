import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 4000,
    amt: 2290
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "July",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Jun",
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: "Aug",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Sep",
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: "Okt",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Dec",
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
];

export default function Rechart2() {
  return (
    <BarChart
      width={550}
      height={295}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="1 3"/>
      <XAxis dataKey="name" axisLine={false} tickLine={false} />
      <YAxis hide={true} axisLine={false} />
      <Tooltip contentStyle={{ backgroundColor: '#222B45', opacity: 0.8, color: 'white', borderRadius: 9}} />
      <Bar dataKey="pv" stackId="a" fill="#3366FF" />
      <Bar dataKey="uv" stackId="a" fill="#598BFF" />
      <Bar dataKey="amt" stackId="a" fill="#A6C1FF" />
    </BarChart>
  );
}
