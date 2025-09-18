import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LineChart, Line } from "recharts";
import { narrativeClusters } from "../../data/mockData";
import { Zap, MessageSquare, TrendingUp, AlertCircle } from "lucide-react";

export function StorylineTab() {
  // Echo chamber data
  const echoChamberData = [
    { platform: "Twitter/X", score: 0.67, risk: "Medium" },
    { platform: "Facebook", score: 0.82, risk: "High" },
    { platform: "Instagram", score: 0.45, risk: "Low" },
    { platform: "LinkedIn", score: 0.34, risk: "Low" },
    { platform: "TikTok", score: 0.78, risk: "High" }
  ];

  // Platform divergence heatmap data
  const divergenceData = [
    { narrative: "Economic Recovery", twitter: 0.23, facebook: 0.45, instagram: 0.12, linkedin: 0.67 },
    { narrative: "Healthcare Reform", twitter: -0.15, facebook: -0.32, instagram: 0.08, linkedin: -0.21 },
    { narrative: "Climate Action", twitter: 0.45, facebook: 0.38, instagram: 0.56, linkedin: 0.42 },
    { narrative: "Education Policy", twitter: 0.12, facebook: 0.08, instagram: 0.23, linkedin: 0.34 },
    { narrative: "Digital Infrastructure", twitter: 0.56, facebook: 0.43, instagram: 0.34, linkedin: 0.78 }
  ];

  // Narrative lifecycle data (simplified timeline)
  const lifecycleData = [
    { month: "Jan", "Economic Recovery": 45000, "Healthcare Reform": 32000, "Climate Action": 28000 },
    { month: "Feb", "Economic Recovery": 52000, "Healthcare Reform": 38000, "Climate Action": 31000 },
    { month: "Mar", "Economic Recovery": 48000, "Healthcare Reform": 45000, "Climate Action": 35000 },
    { month: "Apr", "Economic Recovery": 58000, "Healthcare Reform": 42000, "Climate Action": 42000 },
    { month: "May", "Economic Recovery": 62000, "Healthcare Reform": 39000, "Climate Action": 48000 },
    { month: "Jun", "Economic Recovery": 55000, "Healthcare Reform": 41000, "Climate Action": 52000 }
  ];

  const ClusterTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-background border border-border rounded-lg p-3 shadow-lg max-w-xs">
          <p className="font-medium">{data.label}</p>
          <p className="text-sm text-muted-foreground mb-2">{data.description}</p>
          <div className="space-y-1 text-xs">
            <p>Volume: {data.volume.toLocaleString()}</p>
            <p>Sentiment: {(data.sentiment * 100).toFixed(1)}%</p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Narrative Clusters Scatter Plot */}
      <Card className="border shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Narrative Clusters
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            LLM-labeled themes positioned by sentiment and volume
          </p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                type="number" 
                domain={[0, 1]} 
                dataKey="x" 
                name="Narrative Spread"
                tickFormatter={(value) => `${(value * 100).toFixed(0)}%`}
              />
              <YAxis 
                type="number" 
                domain={[0, 1]} 
                dataKey="y" 
                name="Engagement Depth"
                tickFormatter={(value) => `${(value * 100).toFixed(0)}%`}
              />
              <Tooltip content={<ClusterTooltip />} />
              <Scatter data={narrativeClusters} fill="var(--chart-1)">
                {narrativeClusters.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={`var(--chart-${(index % 5) + 1})`}
                  />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Storyline Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {narrativeClusters.map((cluster, index) => (
          <Card key={cluster.id} className="border shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg">{cluster.label}</CardTitle>
                <Badge 
                  variant={cluster.sentiment > 0.2 ? "default" : cluster.sentiment < -0.1 ? "destructive" : "secondary"}
                >
                  {cluster.sentiment > 0 ? "+" : ""}{(cluster.sentiment * 100).toFixed(0)}%
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">{cluster.description}</p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  <span>{cluster.volume.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  <span>Rising</span>
                </div>
              </div>
              <div className="pt-2 border-t">
                <p className="text-xs text-muted-foreground italic">
                  "Government needs to act more decisively on this issue to restore public confidence..."
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Platform Divergence Heatmap */}
        <Card className="border shadow-lg">
          <CardHeader>
            <CardTitle>Platform Sentiment Divergence</CardTitle>
            <p className="text-sm text-muted-foreground">
              How sentiment varies across platforms for each narrative
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {divergenceData.map((row, index) => (
                <div key={index} className="space-y-2">
                  <div className="font-medium text-sm">{row.narrative}</div>
                  <div className="grid grid-cols-4 gap-2">
                    {Object.entries(row).slice(1).map(([platform, sentiment]) => (
                      <div 
                        key={platform}
                        className="p-2 rounded text-center text-xs border"
                        style={{
                          backgroundColor: 
                            sentiment > 0.3 ? 'rgb(34, 197, 94, 0.2)' :
                            sentiment > 0 ? 'rgb(34, 197, 94, 0.1)' :
                            sentiment > -0.2 ? 'rgb(156, 163, 175, 0.1)' :
                            'rgb(239, 68, 68, 0.2)'
                        }}
                      >
                        <div className="font-medium capitalize">{platform}</div>
                        <div>{sentiment > 0 ? "+" : ""}{(sentiment * 100).toFixed(0)}%</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Echo Chamber Index */}
        <Card className="border shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              Echo Chamber Index
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Platform isolation and discourse diversity scores
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {echoChamberData.map((platform, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{platform.platform}</span>
                    <Badge 
                      variant={
                        platform.risk === "High" ? "destructive" : 
                        platform.risk === "Medium" ? "default" : 
                        "secondary"
                      }
                    >
                      {platform.risk} Risk
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-primary" 
                        style={{ width: `${platform.score * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium">{(platform.score * 100).toFixed(0)}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Narrative Lifecycle Timeline */}
      <Card className="border shadow-lg">
        <CardHeader>
          <CardTitle>Narrative Lifecycle</CardTitle>
          <p className="text-sm text-muted-foreground">
            Volume evolution of top narratives over time
          </p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lifecycleData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`} />
              <Tooltip formatter={(value: any) => [value.toLocaleString(), 'Volume']} />
              <Line 
                type="monotone" 
                dataKey="Economic Recovery" 
                stroke="var(--chart-1)" 
                strokeWidth={3}
              />
              <Line 
                type="monotone" 
                dataKey="Healthcare Reform" 
                stroke="var(--chart-2)" 
                strokeWidth={3}
              />
              <Line 
                type="monotone" 
                dataKey="Climate Action" 
                stroke="var(--chart-3)" 
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}