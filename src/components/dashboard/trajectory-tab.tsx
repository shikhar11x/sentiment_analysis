import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from "recharts";
import { timeSeriesData } from "../../data/mockData";
import { TrendingUp, Calendar, Zap, Target } from "lucide-react";

export function TrajectoryTab() {
  // Event annotations for spike detection
  const eventAnnotations = [
    { date: "2023-05", event: "Policy Announcement", impact: "High", sentiment: 0.31 },
    { date: "2023-10", event: "Budget Release", impact: "High", sentiment: 0.42 },
    { date: "2024-01", event: "New Year Address", impact: "Medium", sentiment: 0.29 },
    { date: "2024-03", event: "Legislative Session", impact: "High", sentiment: 0.34 }
  ];

  // Forecast data (mock predictions)
  const forecastData = [
    { date: "2024-04", actual: 142356, forecast: null, upper: null, lower: null },
    { date: "2024-05", actual: null, forecast: 148000, upper: 165000, lower: 131000 },
    { date: "2024-06", actual: null, forecast: 152000, upper: 171000, lower: 133000 },
    { date: "2024-07", actual: null, forecast: 147000, upper: 168000, lower: 126000 },
    { date: "2024-08", actual: null, forecast: 159000, upper: 183000, lower: 135000 },
    { date: "2024-09", actual: null, forecast: 163000, upper: 189000, lower: 137000 }
  ];

  // Emotion evolution data
  const emotionTimelineData = [
    { date: "2023-01", joy: 22, anger: 18, fear: 15, trust: 14, sadness: 12, surprise: 19 },
    { date: "2023-03", joy: 25, anger: 16, fear: 13, trust: 16, sadness: 10, surprise: 20 },
    { date: "2023-05", joy: 32, anger: 12, fear: 11, trust: 19, sadness: 8, surprise: 18 },
    { date: "2023-07", joy: 28, anger: 14, fear: 12, trust: 17, sadness: 9, surprise: 20 },
    { date: "2023-09", joy: 26, anger: 15, fear: 14, trust: 15, sadness: 11, surprise: 19 },
    { date: "2023-11", joy: 30, anger: 13, fear: 10, trust: 18, sadness: 9, surprise: 20 },
    { date: "2024-01", joy: 27, anger: 16, fear: 13, trust: 16, sadness: 10, surprise: 18 },
    { date: "2024-03", joy: 29, anger: 15, fear: 12, trust: 17, sadness: 9, surprise: 18 }
  ];

  // Yearly volume comparison
  const yearlyVolumeData = [
    { year: "2020", volume: 876543 },
    { year: "2021", volume: 1023456 },
    { year: "2022", volume: 1156789 },
    { year: "2023", volume: 1289012 },
    { year: "2024", volume: 1347865 }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border border-border rounded-lg p-3 shadow-lg">
          <p className="font-medium">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.name}: {typeof entry.value === 'number' ? entry.value.toLocaleString() : entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Sentiment Timeline with Events */}
      <Card className="border shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Sentiment Timeline with Event Detection
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Sentiment evolution with key event annotations
          </p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={timeSeriesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="date" 
                tickFormatter={(value) => {
                  const [year, month] = value.split('-');
                  return `${month}/${year.slice(-2)}`;
                }}
              />
              <YAxis yAxisId="left" domain={[-0.1, 0.5]} />
              <YAxis yAxisId="right" orientation="right" tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`} />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="sentiment" 
                stroke="var(--chart-1)" 
                strokeWidth={3}
                name="Sentiment"
                dot={{ r: 4 }}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="volume" 
                stroke="var(--chart-2)" 
                strokeWidth={2}
                strokeDasharray="5 5"
                name="Volume"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
          
          {/* Event Annotations */}
          <div className="mt-4 space-y-2">
            <h4 className="font-medium">Key Events</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {eventAnnotations.map((event, index) => (
                <div key={index} className="flex items-center gap-2 p-2 border rounded-lg bg-muted/30">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{event.event}</span>
                      <Badge variant={event.impact === "High" ? "default" : "secondary"}>
                        {event.impact}
                      </Badge>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {event.date} • Sentiment: +{(event.sentiment * 100).toFixed(0)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Emotion Timeline */}
        <Card className="border shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Emotion Evolution
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              How emotional tone has changed over time
            </p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={emotionTimelineData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="date" 
                  tickFormatter={(value) => {
                    const [year, month] = value.split('-');
                    return `${month}/${year.slice(-2)}`;
                  }}
                />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Area 
                  type="monotone" 
                  dataKey="joy" 
                  stackId="1" 
                  stroke="var(--chart-4)" 
                  fill="var(--chart-4)" 
                  fillOpacity={0.6}
                />
                <Area 
                  type="monotone" 
                  dataKey="trust" 
                  stackId="1" 
                  stroke="var(--chart-2)" 
                  fill="var(--chart-2)" 
                  fillOpacity={0.6}
                />
                <Area 
                  type="monotone" 
                  dataKey="surprise" 
                  stackId="1" 
                  stroke="var(--chart-3)" 
                  fill="var(--chart-3)" 
                  fillOpacity={0.6}
                />
                <Area 
                  type="monotone" 
                  dataKey="anger" 
                  stackId="1" 
                  stroke="var(--chart-5)" 
                  fill="var(--chart-5)" 
                  fillOpacity={0.6}
                />
                <Area 
                  type="monotone" 
                  dataKey="fear" 
                  stackId="1" 
                  stroke="var(--chart-1)" 
                  fill="var(--chart-1)" 
                  fillOpacity={0.6}
                />
                <Area 
                  type="monotone" 
                  dataKey="sadness" 
                  stackId="1" 
                  stroke="#666666" 
                  fill="#666666" 
                  fillOpacity={0.6}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Yearly Volume Summary */}
        <Card className="border shadow-lg">
          <CardHeader>
            <CardTitle>Yearly Volume Trends</CardTitle>
            <p className="text-sm text-muted-foreground">
              Annual conversation volume growth
            </p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={yearlyVolumeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="year" />
                <YAxis tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`} />
                <Tooltip 
                  formatter={(value: any) => [value.toLocaleString(), 'Volume']}
                  labelFormatter={(label) => `Year ${label}`}
                />
                <Bar dataKey="volume" fill="var(--chart-1)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            
            {/* Growth metrics */}
            <div className="mt-4 grid grid-cols-2 gap-4 pt-4 border-t">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">+24.3%</div>
                <div className="text-sm text-muted-foreground">2024 vs 2023</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">54.2%</div>
                <div className="text-sm text-muted-foreground">5-year growth</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sentiment Forecast */}
      <Card className="border shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Volume Forecast (Next 6 Months)
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Predictive modeling with confidence intervals
          </p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={[...timeSeriesData.slice(-3), ...forecastData]}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="date" 
                tickFormatter={(value) => {
                  const [year, month] = value.split('-');
                  return `${month}/${year.slice(-2)}`;
                }}
              />
              <YAxis tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`} />
              <Tooltip content={<CustomTooltip />} />
              
              {/* Historical data */}
              <Line 
                type="monotone" 
                dataKey="volume" 
                stroke="var(--chart-1)" 
                strokeWidth={3}
                name="Actual Volume"
                connectNulls={false}
              />
              
              {/* Forecast line */}
              <Line 
                type="monotone" 
                dataKey="forecast" 
                stroke="var(--chart-2)" 
                strokeWidth={3}
                strokeDasharray="8 4"
                name="Forecast"
                connectNulls={false}
              />
              
              {/* Confidence intervals */}
              <Line 
                type="monotone" 
                dataKey="upper" 
                stroke="var(--chart-3)" 
                strokeWidth={1}
                strokeDasharray="2 2"
                name="Upper Bound"
                connectNulls={false}
              />
              <Line 
                type="monotone" 
                dataKey="lower" 
                stroke="var(--chart-3)" 
                strokeWidth={1}
                strokeDasharray="2 2"
                name="Lower Bound"
                connectNulls={false}
              />
            </LineChart>
          </ResponsiveContainer>
          
          <div className="mt-4 p-3 bg-muted/30 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Target className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Forecast Summary</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
              <div>
                <span className="text-muted-foreground">Expected Growth:</span>
                <span className="font-medium ml-2">+12.4%</span>
              </div>
              <div>
                <span className="text-muted-foreground">Confidence:</span>
                <span className="font-medium ml-2">78%</span>
              </div>
              <div>
                <span className="text-muted-foreground">Model:</span>
                <span className="font-medium ml-2">ARIMA + LSTM</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}