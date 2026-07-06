import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const mockData = [
  { month: "Jan", USA: 4000, India: 2400, UK: 1800 },
  { month: "Feb", USA: 3000, India: 1398, UK: 2200 },
  { month: "Mar", USA: 5000, India: 4800, UK: 2000 },
  { month: "Apr", USA: 4500, India: 3908, UK: 2700 },
  { month: "May", USA: 6000, India: 4300, UK: 2100 },
  { month: "Mar", USA: 5000, India: 4800, UK: 2000 },
  { month: "Apr", USA: 4500, India: 3908, UK: 2700 },
  { month: "May", USA: 6000, India: 4300, UK: 2100 },
];

export default function SalesChart() {
  return (
    // ResponsiveContainer forces the chart to fill the parent Card perfectly
    <div className="w-full h-72 mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={mockData}
          margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f9fbfc" />
          <XAxis
            dataKey="month"
            stroke="#94a3b8"
            fontSize={12}
            tickLine={false}
          />
          <Tooltip cursor={{ fill: "#f8fafc" }} />
          {/* Custom Hex colors to match your theme */}
          <Bar dataKey="USA" fill="#b388ff" barSize={8} />
          <Bar dataKey="India" fill="#f18407" barSize={8} />
          <Bar dataKey="UK" fill="#0c7be4" barSize={8} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
