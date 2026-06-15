import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const trafficData = [
  { name: "Search Engines", value: 55 },
  { name: "Direct Click", value: 30 },
  { name: "Social Media", value: 15 },
];

// Colors tracking back to your top card gradients
const COLORS = ["#5ca0f2", "#ff9a9e", "#4facfe"];

export default function TrafficChart() {
  return (
    <div className="w-full h-72 mt-4 flex flex-col justify-between">
      <ResponsiveContainer width="100%" height="80%">
        <PieChart>
          <Pie
            data={trafficData}
            cx="50%"
            cy="50%"
            innerRadius={60} // 👈 This setting opens the middle to turn a Pie into a Donut!
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {trafficData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      {/* Dynamic legend listing colors cleanly below the graphic */}
      <div className="pt-6 text-xs font-medium text-slate-500 pb-2">
        {trafficData.map((item, index) => (
          <div key={item.name} className="pb-4 flex items-center gap-1.5">
            <span
              className="w-3.5 flex-none size-3.5 rounded-full"
              style={{ backgroundColor: COLORS[index] }}
            />
            <span className="w-64 flex-initial">{item.name}</span>
            <span className="w-5 flex-initia">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
