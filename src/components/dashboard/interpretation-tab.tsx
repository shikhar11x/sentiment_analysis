import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line } from "recharts";
import { sentimentData, emotionData, timeSeriesData, misinterpretationData } from "../../data/mockData";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { MessageCircle, TrendingUp, AlertTriangle, Hash } from "lucide-react";

export function InterpretationTab() {
  // Sample keywords data
  const keywordsData = [
    { text: "healthcare", value: 89, sentiment: 0.23 },
    { text: "economy", value: 76, sentiment: 0.15 },
    { text: "climate", value: 67, sentiment: 0.45 },
    { text: "education", value: 54, sentiment: 0.12 },
    { text: "jobs", value: 48, sentiment: 0.31 },
    { text: "policy", value: 42, sentiment: 0.08 },
    { text: "reform", value: 38, sentiment: -0.12 },
    { text: "budget", value: 35, sentiment: -0.21 },
    { text: "innovation", value: 32, sentiment: 0.56 },
    { text: "community", value: 28, sentiment: 0.42 }
  ];

  // Transform sentiment data for pie chart
  const sentimentChartData = [
    { name: "Positive", value: sentimentData.positive, fill: "var(--chart-4)" },
    { name: "Neutral", value: sentimentData.neutral, fill: "var(--chart-2)" },
    { name: "Negative", value: sentimentData.negative, fill: "var(--chart-5)" }
  ];

  // Transform emotion data for bar chart
  const emotionChartData = Object.entries(emotionData).map(([emotion, value]) => ({
    emotion: emotion.charAt(0).toUpperCase() + emotion.slice(1),
    value,
    fill: `var(--chart-${Object.keys(emotionData).indexOf(emotion) % 5 + 1})`
  }));

  // Frame distribution data
  const frameData = [
    { frame: "Problem-focused", percentage: 34.2, sentiment: -0.15 },
    { frame: "Solution-oriented", percentage: 28.7, sentiment: 0.42 },
    { frame: "Neutral/Factual", percentage: 22.1, sentiment: 0.05 },
    { frame: "Emotional/Personal", percentage: 15.0, sentiment: 0.23 }
  ];

  return (
    <div className="space-y-6">
      {/* Top Row - Sentiment and Emotion */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sentiment Distribution */}
        <Card className="border shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Sentiment Distribution
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Overall sentiment polarity breakdown
            </p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={sentimentChartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {sentimentChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: any) => [`${value}%`, 'Percentage']} />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-3 gap-2 mt-4">
              {sentimentChartData.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.fill }}
                    />
                    <span className="text-sm">{item.name}</span>
                  </div>
                  <div className="text-lg font-bold">{item.value}%</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Emotion Distribution */}
        <Card className="border shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Emotion Distribution
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Emotional tone breakdown
            </p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={emotionChartData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis type="number" domain={[0, 35]} />
                <YAxis type="category" dataKey="emotion" width={70} />
                <Tooltip formatter={(value: any) => [`${value}%`, 'Percentage']} />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Keywords Cloud */}
      <Card className="border shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Hash className="h-5 w-5" />
            Keyword Analysis
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Most frequent terms and phrases with sentiment scoring
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            {keywordsData.map((keyword, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 p-2 rounded-lg border bg-muted/30"
                style={{ 
                  fontSize: `${Math.max(0.8, keyword.value / 50)}rem`,
                  backgroundColor: keyword.sentiment > 0.2 ? 'rgb(34, 197, 94, 0.1)' : 
                                  keyword.sentiment < -0.1 ? 'rgb(239, 68, 68, 0.1)' : 
                                  'rgb(156, 163, 175, 0.1)'
                }}
              >
                <span className="font-medium">{keyword.text}</span>
                <Badge 
                  variant={keyword.sentiment > 0 ? "default" : "destructive"}
                  className="text-xs"
                >
                  {keyword.sentiment > 0 ? "+" : ""}{(keyword.sentiment * 100).toFixed(0)}%
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Frame Distribution */}
      <Card className="border shadow-lg">
        <CardHeader>
          <CardTitle>Frame Distribution</CardTitle>
          <p className="text-sm text-muted-foreground">
            How topics are presented and discussed
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {frameData.map((frame, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{frame.frame}</span>
                  <div className="flex items-center gap-2">
                    <span>{frame.percentage}%</span>
                    <Badge variant={frame.sentiment > 0 ? "default" : "destructive"}>
                      {frame.sentiment > 0 ? "+" : ""}{(frame.sentiment * 100).toFixed(1)}%
                    </Badge>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="h-2 rounded-full bg-primary" 
                    style={{ width: `${frame.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Misinterpretation Detection */}
      <Card className="border shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Misinterpretation Detection
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Common misconceptions and their prevalence
          </p>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Topic</TableHead>
                <TableHead>Common Misinterpretation</TableHead>
                <TableHead>Frequency</TableHead>
                <TableHead>Impact</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {misinterpretationData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.topic}</TableCell>
                  <TableCell className="max-w-xs">{item.misinterpretation}</TableCell>
                  <TableCell>{item.frequency.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={
                        item.impact === "High" ? "destructive" : 
                        item.impact === "Medium" ? "default" : 
                        "secondary"
                      }
                    >
                      {item.impact}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Sentiment Evolution Over Time */}
      <Card className="border shadow-lg">
        <CardHeader>
          <CardTitle>Sentiment Evolution</CardTitle>
          <p className="text-sm text-muted-foreground">
            How sentiment has changed over time
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
              <YAxis />
              <Tooltip 
                labelFormatter={(value) => {
                  const [year, month] = value.split('-');
                  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                  return `${monthNames[parseInt(month) - 1]} ${year}`;
                }}
              />
              <Line 
                type="monotone" 
                dataKey="positive" 
                stroke="var(--chart-4)" 
                strokeWidth={2}
                name="Positive %"
              />
              <Line 
                type="monotone" 
                dataKey="negative" 
                stroke="var(--chart-5)" 
                strokeWidth={2}
                name="Negative %"
              />
              <Line 
                type="monotone" 
                dataKey="neutral" 
                stroke="var(--chart-2)" 
                strokeWidth={2}
                name="Neutral %"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}