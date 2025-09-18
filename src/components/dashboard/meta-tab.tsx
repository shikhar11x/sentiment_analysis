import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, LineChart, Line, Cell } from "recharts";
import { TrendingUp, ArrowUp, ArrowDown, BarChart3 } from "lucide-react";

export function MetaTab() {
  // Relevance vs Resonance Matrix (main quadrant chart)
  const relevanceResonanceData = [
    { relevance: 0.89, resonance: 0.78, theme: "Economic Recovery", volume: 234567, sentiment: 0.23 },
    { relevance: 0.94, resonance: 0.82, theme: "Healthcare Reform", volume: 189432, sentiment: -0.15 },
    { relevance: 0.96, resonance: 0.91, theme: "Climate Action", volume: 167891, sentiment: 0.45 },
    { relevance: 0.85, resonance: 0.71, theme: "Education Policy", volume: 134567, sentiment: 0.12 },
    { relevance: 0.91, resonance: 0.87, theme: "Digital Infrastructure", volume: 98765, sentiment: 0.56 },
    { relevance: 0.72, resonance: 0.64, theme: "Transport Policy", volume: 87654, sentiment: 0.08 },
    { relevance: 0.68, resonance: 0.45, theme: "Housing Reform", volume: 76543, sentiment: -0.21 },
    { relevance: 0.81, resonance: 0.73, theme: "Energy Policy", volume: 65432, sentiment: 0.31 }
  ];

  // Theme Momentum Index (rising/falling themes)
  const momentumData = [
    { theme: "Climate Action", momentum: 0.67, change: "+23%", direction: "rising" },
    { theme: "Digital Infrastructure", momentum: 0.54, change: "+18%", direction: "rising" },
    { theme: "Energy Policy", momentum: 0.42, change: "+12%", direction: "rising" },
    { theme: "Economic Recovery", momentum: 0.23, change: "+8%", direction: "stable" },
    { theme: "Education Policy", momentum: 0.12, change: "+3%", direction: "stable" },
    { theme: "Healthcare Reform", momentum: -0.15, change: "-5%", direction: "falling" },
    { theme: "Housing Reform", momentum: -0.28, change: "-12%", direction: "falling" },
    { theme: "Transport Policy", momentum: -0.34, change: "-15%", direction: "falling" }
  ];

  // Cross-platform comparative data
  const platformComparison = [
    { platform: "Twitter/X", volume: 456789, sentiment: 0.23, engagement: 4.2 },
    { platform: "Facebook", volume: 321456, sentiment: 0.31, engagement: 3.8 },
    { platform: "Instagram", volume: 198765, sentiment: 0.45, engagement: 6.3 },
    { platform: "LinkedIn", volume: 134567, sentiment: 0.42, engagement: 2.9 },
    { platform: "TikTok", volume: 89234, sentiment: 0.38, engagement: 8.1 },
    { platform: "YouTube", volume: 46852, sentiment: 0.52, engagement: 5.7 }
  ];

  // Country benchmark data
  const countryBenchmark = [
    { country: "United States", sentiment: 0.23, volume: 425678 },
    { country: "United Kingdom", sentiment: 0.31, volume: 189234 },
    { country: "Canada", sentiment: 0.42, volume: 145632 },
    { country: "Australia", sentiment: 0.38, volume: 98756 },
    { country: "Germany", sentiment: 0.19, volume: 167891 },
    { country: "France", sentiment: 0.27, volume: 134567 }
  ];

  // Comparative trends over time
  const comparativeTrends = [
    { month: "Jan", domestic: 0.23, usa: 0.19, uk: 0.28, canada: 0.35 },
    { month: "Feb", domestic: 0.31, usa: 0.22, uk: 0.31, canada: 0.38 },
    { month: "Mar", domestic: 0.28, usa: 0.25, uk: 0.29, canada: 0.41 },
    { month: "Apr", domestic: 0.34, usa: 0.21, uk: 0.33, canada: 0.39 },
    { month: "May", domestic: 0.37, usa: 0.28, uk: 0.35, canada: 0.43 },
    { month: "Jun", domestic: 0.34, usa: 0.23, uk: 0.31, canada: 0.42 }
  ];

  const QuadrantTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-background border border-border rounded-lg p-3 shadow-lg">
          <p className="font-medium">{data.theme}</p>
          <div className="space-y-1 text-sm">
            <p>Relevance: {(data.relevance * 100).toFixed(1)}%</p>
            <p>Resonance: {(data.resonance * 100).toFixed(1)}%</p>
            <p>Volume: {data.volume.toLocaleString()}</p>
            <p>Sentiment: {data.sentiment > 0 ? "+" : ""}{(data.sentiment * 100).toFixed(1)}%</p>
          </div>
        </div>
      );
    }
    return null;
  };

  const getMomentumIcon = (direction: string) => {
    switch (direction) {
      case "rising": return <ArrowUp className="h-4 w-4 text-green-600" />;
      case "falling": return <ArrowDown className="h-4 w-4 text-red-600" />;
      default: return <BarChart3 className="h-4 w-4 text-gray-600" />;
    }
  };

  const getMomentumColor = (momentum: number) => {
    if (momentum > 0.4) return "var(--chart-4)"; // Green
    if (momentum > 0.1) return "var(--chart-3)"; // Blue
    if (momentum > -0.1) return "var(--chart-2)"; // Yellow
    return "var(--chart-5)"; // Red
  };

  return (
    <div className="space-y-6">
      {/* Relevance vs Resonance Matrix */}
      <Card className="border shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Relevance vs. Resonance Matrix
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Strategic positioning of themes by policy relevance and public resonance
          </p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <ScatterChart margin={{ top: 20, right: 20, bottom: 60, left: 60 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              
              {/* Quadrant reference lines */}
              <defs>
                <pattern id="quadrantLines" patternUnits="userSpaceOnUse" width="100" height="100">
                  <path d="M 50,0 L 50,100 M 0,50 L 100,50" stroke="#e0e0e0" strokeWidth="1" strokeDasharray="2,2"/>
                </pattern>
              </defs>
              
              <XAxis 
                type="number" 
                domain={[0.6, 1]} 
                dataKey="relevance" 
                name="Policy Relevance"
                tickFormatter={(value) => `${(value * 100).toFixed(0)}%`}
                label={{ value: 'Policy Relevance', position: 'insideBottom', offset: -10 }}
              />
              <YAxis 
                type="number" 
                domain={[0.4, 1]} 
                dataKey="resonance" 
                name="Public Resonance"
                tickFormatter={(value) => `${(value * 100).toFixed(0)}%`}
                label={{ value: 'Public Resonance', angle: -90, position: 'insideLeft' }}
              />
              
              <Tooltip content={<QuadrantTooltip />} />
              <Scatter data={relevanceResonanceData} fill="var(--chart-1)">
                {relevanceResonanceData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.sentiment > 0 ? "var(--chart-4)" : "var(--chart-5)"}
                  />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
          
          {/* Quadrant Legend */}
          <div className="mt-4 grid grid-cols-2 gap-4 text-xs">
            <div className="p-2 bg-green-50 border border-green-200 rounded">
              <div className="font-medium text-green-800">High Impact Zone</div>
              <div className="text-green-600">High relevance + High resonance</div>
            </div>
            <div className="p-2 bg-yellow-50 border border-yellow-200 rounded">
              <div className="font-medium text-yellow-800">Policy Priority</div>
              <div className="text-yellow-600">High relevance + Low resonance</div>
            </div>
            <div className="p-2 bg-blue-50 border border-blue-200 rounded">
              <div className="font-medium text-blue-800">Engagement Opportunity</div>
              <div className="text-blue-600">Low relevance + High resonance</div>
            </div>
            <div className="p-2 bg-gray-50 border border-gray-200 rounded">
              <div className="font-medium text-gray-800">Monitor Zone</div>
              <div className="text-gray-600">Low relevance + Low resonance</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Theme Momentum Index */}
        <Card className="border shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Theme Momentum Index
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Rising and falling narrative themes
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {momentumData.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                  {getMomentumIcon(item.direction)}
                  <div className="flex-1">
                    <div className="font-medium text-sm">{item.theme}</div>
                    <div className="text-xs text-muted-foreground">
                      {item.direction} • {item.change}
                    </div>
                  </div>
                  <div className="w-20">
                    <div className="text-right text-sm font-medium mb-1">
                      {(Math.abs(item.momentum) * 100).toFixed(0)}%
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="h-2 rounded-full" 
                        style={{ 
                          width: `${Math.abs(item.momentum) * 100}%`,
                          backgroundColor: getMomentumColor(item.momentum)
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Platform Benchmarking */}
        <Card className="border shadow-lg">
          <CardHeader>
            <CardTitle>Platform Performance Benchmark</CardTitle>
            <p className="text-sm text-muted-foreground">
              Comparative volume, sentiment, and engagement metrics
            </p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={platformComparison} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis type="number" tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`} />
                <YAxis type="category" dataKey="platform" width={80} />
                <Tooltip 
                  formatter={(value: any, name: string) => [
                    name === 'volume' ? value.toLocaleString() : 
                    name === 'sentiment' ? `${(value * 100).toFixed(1)}%` :
                    `${value}%`,
                    name === 'volume' ? 'Volume' :
                    name === 'sentiment' ? 'Sentiment' : 'Engagement'
                  ]}
                />
                <Bar dataKey="volume" fill="var(--chart-1)" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Country Benchmarking */}
      <Card className="border shadow-lg">
        <CardHeader>
          <CardTitle>International Sentiment Benchmark</CardTitle>
          <p className="text-sm text-muted-foreground">
            Comparative sentiment analysis across similar topics internationally
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {countryBenchmark.map((country, index) => (
              <div key={index} className="border rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-sm">{country.country}</span>
                  <Badge variant={country.sentiment > 0.3 ? "default" : country.sentiment > 0 ? "secondary" : "destructive"}>
                    {country.sentiment > 0 ? "+" : ""}{(country.sentiment * 100).toFixed(1)}%
                  </Badge>
                </div>
                <div className="text-xs text-muted-foreground">
                  Volume: {country.volume.toLocaleString()}
                </div>
                <div className="w-full bg-muted rounded-full h-2 mt-2">
                  <div 
                    className="h-2 rounded-full bg-primary" 
                    style={{ width: `${Math.abs(country.sentiment) * 200}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Comparative Trends */}
      <Card className="border shadow-lg">
        <CardHeader>
          <CardTitle>Comparative Sentiment Trends</CardTitle>
          <p className="text-sm text-muted-foreground">
            How sentiment compares to international peers over time
          </p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={comparativeTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={(value) => `${(value * 100).toFixed(0)}%`} />
              <Tooltip 
                formatter={(value: any) => [`${(value * 100).toFixed(1)}%`, 'Sentiment']}
              />
              <Line 
                type="monotone" 
                dataKey="domestic" 
                stroke="var(--chart-1)" 
                strokeWidth={3}
                name="Domestic"
              />
              <Line 
                type="monotone" 
                dataKey="usa" 
                stroke="var(--chart-2)" 
                strokeWidth={2}
                strokeDasharray="5 5"
                name="USA"
              />
              <Line 
                type="monotone" 
                dataKey="uk" 
                stroke="var(--chart-3)" 
                strokeWidth={2}
                strokeDasharray="5 5"
                name="UK"
              />
              <Line 
                type="monotone" 
                dataKey="canada" 
                stroke="var(--chart-4)" 
                strokeWidth={2}
                strokeDasharray="5 5"
                name="Canada"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}