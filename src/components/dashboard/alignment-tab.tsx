import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { alignmentData } from "../../data/mockData";
import { Target, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";

export function AlignmentTab() {
  // National vision pillars for radar chart
  const pillarAlignment = [
    { pillar: "Economic Growth", score: 0.72, fullMark: 1 },
    { pillar: "Social Welfare", score: 0.77, fullMark: 1 },
    { pillar: "Environmental", score: 0.91, fullMark: 1 },
    { pillar: "Governance", score: 0.58, fullMark: 1 },
    { pillar: "Innovation", score: 0.75, fullMark: 1 },
    { pillar: "Security", score: 0.63, fullMark: 1 }
  ];

  // Theme-to-pillar heatmap data
  const heatmapData = [
    { theme: "Economic Recovery", economic: 0.78, social: 0.45, environmental: 0.23, governance: 0.34, innovation: 0.56 },
    { theme: "Healthcare Reform", economic: 0.32, social: 0.82, environmental: 0.19, governance: 0.67, innovation: 0.43 },
    { theme: "Climate Action", economic: 0.41, social: 0.56, environmental: 0.91, governance: 0.72, innovation: 0.68 },
    { theme: "Education Policy", economic: 0.52, social: 0.71, environmental: 0.28, governance: 0.58, innovation: 0.62 },
    { theme: "Digital Infrastructure", economic: 0.65, social: 0.39, environmental: 0.34, governance: 0.58, innovation: 0.87 }
  ];

  // Alignment trend data over time
  const alignmentTrendData = [
    { month: "Jan", economic: 0.68, social: 0.72, environmental: 0.85, governance: 0.52, innovation: 0.69 },
    { month: "Feb", economic: 0.71, social: 0.74, environmental: 0.87, governance: 0.54, innovation: 0.72 },
    { month: "Mar", economic: 0.69, social: 0.76, environmental: 0.89, governance: 0.56, innovation: 0.74 },
    { month: "Apr", economic: 0.72, social: 0.77, environmental: 0.91, governance: 0.58, innovation: 0.75 },
    { month: "May", economic: 0.74, social: 0.78, environmental: 0.93, governance: 0.59, innovation: 0.77 },
    { month: "Jun", economic: 0.72, social: 0.77, environmental: 0.91, governance: 0.58, innovation: 0.75 }
  ];

  // Gap analysis data
  const gapAnalysis = [
    { 
      area: "Economic Growth", 
      publicSentiment: 0.23, 
      policyPriority: 0.78, 
      gap: -0.55, 
      status: "Under-addressed" 
    },
    { 
      area: "Healthcare Reform", 
      publicSentiment: -0.15, 
      policyPriority: 0.45, 
      gap: -0.60, 
      status: "Misaligned" 
    },
    { 
      area: "Climate Action", 
      publicSentiment: 0.45, 
      policyPriority: 0.72, 
      gap: -0.27, 
      status: "Well-aligned" 
    },
    { 
      area: "Education Policy", 
      publicSentiment: 0.12, 
      policyPriority: 0.56, 
      gap: -0.44, 
      status: "Moderate gap" 
    },
    { 
      area: "Digital Infrastructure", 
      publicSentiment: 0.56, 
      policyPriority: 0.68, 
      gap: -0.12, 
      status: "Well-aligned" 
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 0.8) return "var(--chart-4)"; // Green
    if (score >= 0.6) return "var(--chart-3)"; // Blue
    if (score >= 0.4) return "var(--chart-2)"; // Yellow
    return "var(--chart-5)"; // Red
  };

  const getGapStatus = (gap: number) => {
    if (gap > -0.2) return { variant: "default" as const, icon: CheckCircle };
    if (gap > -0.4) return { variant: "default" as const, icon: TrendingUp };
    return { variant: "destructive" as const, icon: AlertTriangle };
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Theme-Pillar Heatmap */}
        <Card className="border shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Theme-Pillar Alignment Heatmap
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              How narratives map to national vision pillars
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {heatmapData.map((row, index) => (
                <div key={index} className="space-y-2">
                  <div className="font-medium text-sm">{row.theme}</div>
                  <div className="grid grid-cols-5 gap-1">
                    {Object.entries(row).slice(1).map(([pillar, score], i) => (
                      <div 
                        key={pillar}
                        className="p-2 rounded text-center text-xs border"
                        style={{
                          backgroundColor: 
                            score >= 0.8 ? 'rgb(34, 197, 94, 0.3)' :
                            score >= 0.6 ? 'rgb(34, 197, 94, 0.2)' :
                            score >= 0.4 ? 'rgb(234, 179, 8, 0.2)' :
                            score >= 0.2 ? 'rgb(239, 68, 68, 0.1)' :
                            'rgb(239, 68, 68, 0.2)'
                        }}
                      >
                        <div className="font-medium capitalize">{pillar.slice(0, 4)}</div>
                        <div>{(score * 100).toFixed(0)}%</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
              <span>Low alignment</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded bg-red-200"></div>
                <div className="w-3 h-3 rounded bg-yellow-200"></div>
                <div className="w-3 h-3 rounded bg-green-200"></div>
                <div className="w-3 h-3 rounded bg-green-300"></div>
              </div>
              <span>High alignment</span>
            </div>
          </CardContent>
        </Card>

        {/* Pillar Alignment Radar */}
        <Card className="border shadow-lg">
          <CardHeader>
            <CardTitle>Pillar Alignment Radar</CardTitle>
            <p className="text-sm text-muted-foreground">
              Overall alignment scores across vision pillars
            </p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={pillarAlignment}>
                <PolarGrid stroke="#f0f0f0" />
                <PolarAngleAxis dataKey="pillar" tick={{ fontSize: 12 }} />
                <PolarRadiusAxis 
                  angle={90} 
                  domain={[0, 1]} 
                  tick={{ fontSize: 10 }}
                  tickFormatter={(value) => `${(value * 100).toFixed(0)}%`}
                />
                <Radar 
                  name="Alignment Score" 
                  dataKey="score" 
                  stroke="var(--chart-1)" 
                  fill="var(--chart-1)" 
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Alignment Scorecards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {alignmentData.slice(0, 6).map((item, index) => (
          <Card key={index} className="border shadow-sm">
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-medium text-sm">{item.theme}</div>
                    <div className="text-xs text-muted-foreground">{item.pillar}</div>
                  </div>
                  <Badge 
                    variant={item.score >= 0.8 ? "default" : item.score >= 0.6 ? "secondary" : "destructive"}
                  >
                    {(item.score * 100).toFixed(0)}%
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Alignment Score</span>
                    <span>{(item.score * 100).toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="h-2 rounded-full" 
                      style={{ 
                        width: `${item.score * 100}%`,
                        backgroundColor: getScoreColor(item.score)
                      }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-muted-foreground">Volume:</span>
                    <span className="font-medium ml-1">{item.volume.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Relevance:</span>
                    <span className="font-medium ml-1">{(item.relevance * 100).toFixed(0)}%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Gap Analysis */}
      <Card className="border shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Gap Analysis: Public vs. Policy
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Alignment between public sentiment and policy priorities
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {gapAnalysis.map((item, index) => {
              const { variant, icon: Icon } = getGapStatus(item.gap);
              return (
                <div key={index} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4" />
                      <span className="font-medium">{item.area}</span>
                    </div>
                    <Badge variant={variant}>
                      {item.status}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Public Sentiment</div>
                      <div className="font-medium">
                        {item.publicSentiment > 0 ? "+" : ""}{(item.publicSentiment * 100).toFixed(1)}%
                      </div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Policy Priority</div>
                      <div className="font-medium">{(item.policyPriority * 100).toFixed(1)}%</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Gap</div>
                      <div className="font-medium text-red-600">{(Math.abs(item.gap) * 100).toFixed(1)}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Alignment Trends */}
      <Card className="border shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Alignment Score Trends
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            How alignment has evolved across pillars over time
          </p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={alignmentTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" />
              <YAxis domain={[0.4, 1]} tickFormatter={(value) => `${(value * 100).toFixed(0)}%`} />
              <Tooltip 
                formatter={(value: any) => [`${(value * 100).toFixed(1)}%`, 'Alignment Score']}
              />
              <Line 
                type="monotone" 
                dataKey="economic" 
                stroke="var(--chart-1)" 
                strokeWidth={2}
                name="Economic"
              />
              <Line 
                type="monotone" 
                dataKey="social" 
                stroke="var(--chart-2)" 
                strokeWidth={2}
                name="Social"
              />
              <Line 
                type="monotone" 
                dataKey="environmental" 
                stroke="var(--chart-4)" 
                strokeWidth={3}
                name="Environmental"
              />
              <Line 
                type="monotone" 
                dataKey="governance" 
                stroke="var(--chart-5)" 
                strokeWidth={2}
                name="Governance"
              />
              <Line 
                type="monotone" 
                dataKey="innovation" 
                stroke="var(--chart-3)" 
                strokeWidth={2}
                name="Innovation"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}