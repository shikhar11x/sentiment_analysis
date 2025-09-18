import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area } from "recharts";
import { voiceData, influencerData, geographicData, timeSeriesData } from "../../data/mockData";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Globe, TrendingUp, Users } from "lucide-react";

export function VoiceTab() {
  // Transform time series data for yearly volume by platform
  const yearlyVolumeData = [
    { year: "2023", "Social Media": 890234, "News Media": 234567, "Government": 123456, "NGOs": 67890 },
    { year: "2024", "Social Media": 1120456, "News Media": 298734, "Government": 156789, "NGOs": 89234 }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border border-border rounded-lg p-3 shadow-lg">
          <p className="font-medium">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.name}: {entry.value.toLocaleString()}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Share of Voice Donut Chart */}
        <Card className="border shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Share of Voice by Platform
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Distribution of conversations across platforms
            </p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={voiceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={2}
                  dataKey="volume"
                >
                  {voiceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: any) => [value.toLocaleString(), 'Volume']}
                  labelFormatter={(label) => label}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {voiceData.map((platform, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: platform.color }}
                  />
                  <span className="flex-1">{platform.platform}</span>
                  <span className="font-medium">{platform.percentage}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Geographic Distribution Map Placeholder */}
        <Card className="border shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Geographic Distribution
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Volume and sentiment by region
            </p>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] bg-muted/30 rounded-lg border flex items-center justify-center">
              <div className="text-center space-y-2">
                <Globe className="h-12 w-12 mx-auto text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Interactive world map</p>
                <p className="text-xs text-muted-foreground">Showing conversation volume by country</p>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              {geographicData.slice(0, 3).map((country, index) => (
                <div key={index} className="flex items-center justify-between text-sm border rounded-lg p-2">
                  <span className="font-medium">{country.country}</span>
                  <div className="flex items-center gap-2">
                    <span>{country.volume.toLocaleString()}</span>
                    <Badge variant={country.sentiment > 0 ? "default" : "destructive"}>
                      {country.sentiment > 0 ? "+" : ""}{(country.sentiment * 100).toFixed(1)}%
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Influencer Leaderboard */}
      <Card className="border shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Influencer Leaderboard
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Top voices driving conversations
          </p>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Influencer</TableHead>
                <TableHead>Platform</TableHead>
                <TableHead>Reach</TableHead>
                <TableHead>Engagement</TableHead>
                <TableHead>Sentiment</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {influencerData.map((influencer, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{influencer.name}</TableCell>
                  <TableCell>{influencer.platform}</TableCell>
                  <TableCell>{influencer.reach.toLocaleString()}</TableCell>
                  <TableCell>{influencer.engagement}%</TableCell>
                  <TableCell>
                    <Badge variant={influencer.sentiment > 0 ? "default" : "destructive"}>
                      {influencer.sentiment > 0 ? "+" : ""}{(influencer.sentiment * 100).toFixed(1)}%
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Volume by Source Type Over Time */}
      <Card className="border shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Volume by Source Type (Yearly)
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Conversation volume trends by actor type
          </p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={yearlyVolumeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="year" />
              <YAxis tickFormatter={(value) => value.toLocaleString()} />
              <Tooltip content={<CustomTooltip />} />
              <Area 
                type="monotone" 
                dataKey="Social Media" 
                stackId="1" 
                stroke="var(--chart-1)" 
                fill="var(--chart-1)" 
                fillOpacity={0.8}
              />
              <Area 
                type="monotone" 
                dataKey="News Media" 
                stackId="1" 
                stroke="var(--chart-2)" 
                fill="var(--chart-2)" 
                fillOpacity={0.8}
              />
              <Area 
                type="monotone" 
                dataKey="Government" 
                stackId="1" 
                stroke="var(--chart-3)" 
                fill="var(--chart-3)" 
                fillOpacity={0.8}
              />
              <Area 
                type="monotone" 
                dataKey="NGOs" 
                stackId="1" 
                stroke="var(--chart-4)" 
                fill="var(--chart-4)" 
                fillOpacity={0.8}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}