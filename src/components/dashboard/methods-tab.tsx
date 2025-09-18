import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Brain, Database, TrendingUp, Target, MessageSquare, Cpu, GitBranch, Zap } from "lucide-react";

export function MethodsTab() {
  const methods = [
    {
      id: "voice",
      title: "Voice Analysis",
      icon: MessageSquare,
      description: "Actor segmentation and influence detection",
      techniques: [
        { name: "Named Entity Recognition (NER)", description: "spaCy + custom models for people, organizations, locations" },
        { name: "Actor Segmentation", description: "Rule-based heuristics + machine learning classification" },
        { name: "Influencer Detection", description: "Graph-based centrality measures + engagement metrics" },
        { name: "Bot Detection", description: "Feature engineering + Random Forest classifier" }
      ],
      metrics: ["Share of voice", "Reach", "Engagement rate", "Credibility score"],
      visualization: "Donut charts, network graphs, geographic maps"
    },
    {
      id: "interpretation",
      title: "Interpretation Analysis",
      icon: Brain,
      description: "Sentiment, emotion, and frame detection",
      techniques: [
        { name: "Sentiment Analysis", description: "Fine-tuned BERT/RoBERTa on government domain data" },
        { name: "Emotion Classification", description: "Multi-label classification for 6 core emotions" },
        { name: "Frame Detection", description: "LLM-based classification with few-shot prompting" },
        { name: "Keyword Extraction", description: "TF-IDF + RAKE + domain-specific n-grams" }
      ],
      metrics: ["Sentiment polarity", "Emotion distribution", "Frame prevalence", "Keyword frequency"],
      visualization: "Stacked bars, pie charts, word clouds, trend lines"
    },
    {
      id: "storyline",
      title: "Storyline Analysis",
      icon: GitBranch,
      description: "Narrative clustering and theme discovery",
      techniques: [
        { name: "Text Clustering", description: "BERTopic with UMAP dimensionality reduction" },
        { name: "Theme Labeling", description: "GPT-4 based automatic labeling of clusters" },
        { name: "Narrative Summarization", description: "Extractive + abstractive summarization" },
        { name: "Echo Chamber Detection", description: "Community detection algorithms on user graphs" }
      ],
      metrics: ["Cluster coherence", "Theme diversity", "Echo chamber index", "Cross-platform alignment"],
      visualization: "Scatter plots, narrative cards, heatmaps, network diagrams"
    },
    {
      id: "trajectory",
      title: "Trajectory Analysis",
      icon: TrendingUp,
      description: "Time series forecasting and trend analysis",
      techniques: [
        { name: "Time Series Decomposition", description: "STL decomposition for trend, seasonality, residuals" },
        { name: "Change Point Detection", description: "PELT algorithm for identifying sentiment shifts" },
        { name: "Forecasting", description: "ARIMA + LSTM ensemble for volume/sentiment prediction" },
        { name: "Event Detection", description: "Statistical outlier detection + manual annotation" }
      ],
      metrics: ["Trend direction", "Volatility", "Forecast accuracy", "Event impact"],
      visualization: "Time series charts, event annotations, forecast bands, decomposition plots"
    },
    {
      id: "alignment",
      title: "Alignment Analysis",
      icon: Target,
      description: "Policy relevance and vision alignment scoring",
      techniques: [
        { name: "Embedding Similarity", description: "OpenAI/Azure embeddings with cosine similarity" },
        { name: "Relevance Scoring", description: "Volume × Sentiment × Similarity weighted scoring" },
        { name: "Gap Analysis", description: "Public sentiment vs. policy priority comparison" },
        { name: "Pillar Mapping", description: "Multi-label classification to national vision pillars" }
      ],
      metrics: ["Alignment score", "Relevance index", "Gap magnitude", "Priority ranking"],
      visualization: "Heatmaps, radar charts, scorecards, gap analysis charts"
    }
  ];

  const pipelineSteps = [
    { step: 1, title: "Data Ingestion", description: "Multi-source data collection and initial processing" },
    { step: 2, title: "Preprocessing", description: "Cleaning, deduplication, language detection, translation" },
    { step: 3, title: "Entity Recognition", description: "Extract people, organizations, locations, and metadata" },
    { step: 4, title: "VISTA Analytics", description: "Run Voice, Interpretation, Storyline, Trajectory, Alignment" },
    { step: 5, title: "Cross-cutting Analysis", description: "Meta-analyses, benchmarking, comparative studies" },
    { step: 6, title: "Visualization", description: "Generate dashboard components and export reports" }
  ];

  return (
    <div className="space-y-6">
      {/* Pipeline Overview */}
      <Card className="border shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cpu className="h-5 w-5" />
            VISTA Processing Pipeline
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            End-to-end analytical workflow from raw data to insights
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pipelineSteps.map((step, index) => (
              <div key={step.step} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                  {step.step}
                </div>
                <div className="flex-1">
                  <div className="font-medium">{step.title}</div>
                  <div className="text-sm text-muted-foreground">{step.description}</div>
                </div>
                {index < pipelineSteps.length - 1 && (
                  <div className="flex-shrink-0 w-px h-8 bg-border ml-4"></div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Method Details */}
      <div className="space-y-6">
        {methods.map((method) => {
          const IconComponent = method.icon;
          return (
            <Card key={method.id} className="border shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <IconComponent className="h-5 w-5" />
                  {method.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{method.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Techniques */}
                <div>
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <Database className="h-4 w-4" />
                    Techniques & Models
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {method.techniques.map((technique, index) => (
                      <div key={index} className="border rounded-lg p-3 bg-muted/30">
                        <div className="font-medium text-sm">{technique.name}</div>
                        <div className="text-xs text-muted-foreground mt-1">{technique.description}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Metrics and Visualization */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Zap className="h-4 w-4" />
                      Key Metrics
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {method.metrics.map((metric, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {metric}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Visualization Output</h4>
                    <p className="text-sm text-muted-foreground">{method.visualization}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Technical Specifications */}
      <Card className="border shadow-lg">
        <CardHeader>
          <CardTitle>Technical Specifications</CardTitle>
          <p className="text-sm text-muted-foreground">
            System requirements and model specifications
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="font-medium">Language Models</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Sentiment:</span>
                  <Badge variant="outline">BERT-base</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Embeddings:</span>
                  <Badge variant="outline">OpenAI Ada-002</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Clustering:</span>
                  <Badge variant="outline">BERTopic</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Generation:</span>
                  <Badge variant="outline">GPT-4</Badge>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">Processing</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Batch Size:</span>
                  <span>1,000 posts</span>
                </div>
                <div className="flex justify-between">
                  <span>Update Frequency:</span>
                  <span>Daily</span>
                </div>
                <div className="flex justify-between">
                  <span>Languages:</span>
                  <span>15+ supported</span>
                </div>
                <div className="flex justify-between">
                  <span>Latency:</span>
                  <span>&lt;5 minutes</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">Accuracy Metrics</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Sentiment F1:</span>
                  <span>0.87</span>
                </div>
                <div className="flex justify-between">
                  <span>Entity NER F1:</span>
                  <span>0.92</span>
                </div>
                <div className="flex justify-between">
                  <span>Cluster Coherence:</span>
                  <span>0.84</span>
                </div>
                <div className="flex justify-between">
                  <span>Forecast MAPE:</span>
                  <span>12.3%</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}