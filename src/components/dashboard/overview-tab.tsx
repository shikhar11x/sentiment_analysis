import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { TrendingUp, MessageSquare, Globe, BarChart3 } from "lucide-react";
import { kpiMetrics, keyInsights, timeSeriesData } from "../../data/mockData";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ScatterChart, Scatter } from "recharts";

export function OverviewTab() {
  // Relevance vs Resonance data for quadrant chart
  const quadrantData = [
    { relevance: 0.89, resonance: 0.78, theme: "Economic Recovery", volume: 234567 },
    { relevance: 0.94, resonance: 0.82, theme: "Healthcare Reform", volume: 189432 },
    { relevance: 0.96, resonance: 0.91, theme: "Climate Action", volume: 167891 },
    { relevance: 0.85, resonance: 0.71, theme: "Education Policy", volume: 134567 },
    { relevance: 0.91, resonance: 0.87, theme: "Digital Infrastructure", volume: 98765 }
  ];

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border border-[#d0d0d0] shadow-lg bg-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#2d2d2d]">Total Posts</CardTitle>
            <MessageSquare className="h-4 w-4 text-[#8B1538]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#8B1538]">{kpiMetrics.totalPosts.toLocaleString()}</div>
            <p className="text-xs text-[#6b6b6b]">Across {kpiMetrics.timeRange}</p>
          </CardContent>
        </Card>

        <Card className="border border-[#d0d0d0] shadow-lg bg-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#2d2d2d]">Platforms</CardTitle>
            <Globe className="h-4 w-4 text-[#B8425A]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#B8425A]">{kpiMetrics.platforms}</div>
            <p className="text-xs text-[#6b6b6b]">Social media sources</p>
          </CardContent>
        </Card>

        <Card className="border border-[#d0d0d0] shadow-lg bg-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#2d2d2d]">Avg Sentiment</CardTitle>
            <TrendingUp className="h-4 w-4 text-[#8B1538]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#2d2d2d]">+{kpiMetrics.avgSentiment}</div>
            <p className="text-xs text-[#6b6b6b]">
              <Badge variant={kpiMetrics.avgSentiment > 0 ? "default" : "destructive"} className="text-xs bg-[#8B1538] text-white border-[#8B1538]">
                {kpiMetrics.avgSentiment > 0 ? "Positive" : "Negative"}
              </Badge>
            </p>
          </CardContent>
        </Card>

        <Card className="border border-[#d0d0d0] shadow-lg bg-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#2d2d2d]">Top Emotion</CardTitle>
            <BarChart3 className="h-4 w-4 text-[#B8425A]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#B8425A]">{kpiMetrics.topEmotion}</div>
            <p className="text-xs text-[#6b6b6b]">Most prevalent emotion</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Relevance vs Resonance Quadrant Chart */}
        <Card className="border border-[#d0d0d0] shadow-lg bg-white">
          <CardHeader>
            <CardTitle className="text-[#2d2d2d]">Relevance vs. Resonance Matrix</CardTitle>
            <p className="text-sm text-[#6b6b6b]">
              Theme positioning by policy relevance and public resonance
            </p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  type="number" 
                  domain={[0.5, 1]} 
                  dataKey="relevance" 
                  name="Relevance"
                  tickFormatter={(value) => `${(value * 100).toFixed(0)}%`}
                />
                <YAxis 
                  type="number" 
                  domain={[0.5, 1]} 
                  dataKey="resonance" 
                  name="Resonance"
                  tickFormatter={(value) => `${(value * 100).toFixed(0)}%`}
                />
                <Tooltip 
                  formatter={(value: any, name: string) => [
                    name === 'volume' ? value.toLocaleString() : `${(value * 100).toFixed(1)}%`,
                    name === 'volume' ? 'Volume' : name.charAt(0).toUpperCase() + name.slice(1)
                  ]}
                  labelFormatter={(label: any, payload: any) => payload?.[0]?.payload?.theme || ''}
                />
                <Scatter data={quadrantData} fill="var(--chart-1)" />
              </ScatterChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Time Series Snapshot */}
        <Card className="border border-[#d0d0d0] shadow-lg bg-white">
          <CardHeader>
            <CardTitle className="text-[#2d2d2d]">Sentiment & Volume Trends</CardTitle>
            <p className="text-sm text-[#6b6b6b]">
              Monthly sentiment and volume evolution
            </p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={timeSeriesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="date" 
                  tickFormatter={(value) => {
                    const [year, month] = value.split('-');
                    return `${month}/${year.slice(-2)}`;
                  }}
                />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip 
                  labelFormatter={(value) => {
                    const [year, month] = value.split('-');
                    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                    return `${monthNames[parseInt(month) - 1]} ${year}`;
                  }}
                />
                <Line 
                  yAxisId="left" 
                  type="monotone" 
                  dataKey="sentiment" 
                  stroke="var(--chart-1)" 
                  strokeWidth={3}
                  name="Sentiment"
                />
                <Line 
                  yAxisId="right" 
                  type="monotone" 
                  dataKey="volume" 
                  stroke="var(--chart-2)" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Volume"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Key Insights */}
      <Card className="border border-[#d0d0d0] shadow-lg bg-white">
        <CardHeader>
          <CardTitle className="text-[#2d2d2d]">Key Insights</CardTitle>
          <p className="text-sm text-[#6b6b6b]">
            Auto-generated insights from VISTA analysis
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {keyInsights.map((insight, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-[#f8f8f8] border border-[#e5e5e5] shadow-sm">
                <div className="w-6 h-6 rounded-full bg-[#8B1538] text-white flex items-center justify-center text-xs font-medium">
                  {index + 1}
                </div>
                <p className="flex-1 text-sm text-[#2d2d2d]">{insight}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}