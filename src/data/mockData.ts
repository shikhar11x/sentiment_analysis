import { SentimentData, EmotionData, VoiceData, InfluencerData, NarrativeCluster, TimeSeriesData, AlignmentData, KPIMetrics, GeographicData } from '../types/vista';

export const kpiMetrics: KPIMetrics = {
  totalPosts: 1247863,
  platforms: 8,
  avgSentiment: 0.34,
  topEmotion: "Trust",
  timeRange: "2023-2024"
};

export const sentimentData: SentimentData = {
  positive: 45.2,
  negative: 23.8,
  neutral: 31.0
};

export const emotionData: EmotionData = {
  joy: 28.5,
  anger: 15.2,
  fear: 12.8,
  sadness: 8.3,
  surprise: 18.7,
  trust: 16.5
};

export const voiceData: VoiceData[] = [
  { platform: "Twitter/X", volume: 456789, percentage: 36.6, color: "#8B1538" },
  { platform: "Facebook", volume: 321456, percentage: 25.8, color: "#B8425A" },
  { platform: "Instagram", volume: 198765, percentage: 15.9, color: "#2d2d2d" },
  { platform: "LinkedIn", volume: 134567, percentage: 10.8, color: "#6b6b6b" },
  { platform: "TikTok", volume: 89234, percentage: 7.2, color: "#a0a0a0" },
  { platform: "YouTube", volume: 46852, percentage: 3.7, color: "#505050" }
];

export const influencerData: InfluencerData[] = [
  { name: "@PolicyWatchDog", platform: "Twitter/X", reach: 892000, engagement: 4.2, sentiment: 0.23 },
  { name: "CitizenVoice Official", platform: "Facebook", reach: 567000, engagement: 3.8, sentiment: 0.45 },
  { name: "@GovAccountability", platform: "Twitter/X", reach: 445000, engagement: 5.1, sentiment: -0.12 },
  { name: "PublicPolicy Hub", platform: "LinkedIn", reach: 234000, engagement: 2.9, sentiment: 0.67 },
  { name: "@CivicEngagement", platform: "Instagram", reach: 189000, engagement: 6.3, sentiment: 0.34 }
];

export const narrativeClusters: NarrativeCluster[] = [
  { 
    id: "cluster1", 
    label: "Economic Recovery", 
    volume: 234567, 
    sentiment: 0.23, 
    x: 0.3, 
    y: 0.6,
    description: "Discussions around post-pandemic economic policies and recovery measures"
  },
  { 
    id: "cluster2", 
    label: "Healthcare Reform", 
    volume: 189432, 
    sentiment: -0.15, 
    x: 0.7, 
    y: 0.4,
    description: "Debates on healthcare accessibility and policy changes"
  },
  { 
    id: "cluster3", 
    label: "Climate Action", 
    volume: 167891, 
    sentiment: 0.45, 
    x: 0.2, 
    y: 0.8,
    description: "Environmental policies and climate change initiatives"
  },
  { 
    id: "cluster4", 
    label: "Education Policy", 
    volume: 134567, 
    sentiment: 0.12, 
    x: 0.8, 
    y: 0.7,
    description: "Educational reforms and funding discussions"
  },
  { 
    id: "cluster5", 
    label: "Digital Infrastructure", 
    volume: 98765, 
    sentiment: 0.56, 
    x: 0.5, 
    y: 0.3,
    description: "Technology adoption and digital transformation in public services"
  }
];

export const timeSeriesData: TimeSeriesData[] = [
  { date: "2023-01", volume: 89234, sentiment: 0.12, positive: 42.1, negative: 28.3, neutral: 29.6 },
  { date: "2023-02", volume: 92156, sentiment: 0.18, positive: 44.2, negative: 26.8, neutral: 29.0 },
  { date: "2023-03", volume: 95432, sentiment: 0.23, positive: 46.1, negative: 24.9, neutral: 29.0 },
  { date: "2023-04", volume: 87654, sentiment: 0.15, positive: 43.5, negative: 27.2, neutral: 29.3 },
  { date: "2023-05", volume: 104567, sentiment: 0.31, positive: 48.7, negative: 22.1, neutral: 29.2 },
  { date: "2023-06", volume: 112890, sentiment: 0.28, positive: 47.3, negative: 23.5, neutral: 29.2 },
  { date: "2023-07", volume: 98765, sentiment: 0.22, positive: 45.8, negative: 25.4, neutral: 28.8 },
  { date: "2023-08", volume: 106432, sentiment: 0.35, positive: 49.2, negative: 21.7, neutral: 29.1 },
  { date: "2023-09", volume: 89123, sentiment: 0.19, positive: 44.6, negative: 26.9, neutral: 28.5 },
  { date: "2023-10", volume: 115678, sentiment: 0.42, positive: 51.3, negative: 19.8, neutral: 28.9 },
  { date: "2023-11", volume: 123456, sentiment: 0.38, positive: 50.1, negative: 21.2, neutral: 28.7 },
  { date: "2023-12", volume: 108901, sentiment: 0.33, positive: 48.9, negative: 22.6, neutral: 28.5 },
  { date: "2024-01", volume: 134567, sentiment: 0.29, positive: 47.8, negative: 23.8, neutral: 28.4 },
  { date: "2024-02", volume: 128934, sentiment: 0.26, positive: 46.9, negative: 24.7, neutral: 28.4 },
  { date: "2024-03", volume: 142356, sentiment: 0.34, positive: 49.1, negative: 22.1, neutral: 28.8 }
];

export const alignmentData: AlignmentData[] = [
  { pillar: "Economic Growth", theme: "Economic Recovery", score: 0.78, volume: 234567, relevance: 0.89 },
  { pillar: "Economic Growth", theme: "Digital Infrastructure", score: 0.65, volume: 98765, relevance: 0.72 },
  { pillar: "Social Welfare", theme: "Healthcare Reform", score: 0.82, volume: 189432, relevance: 0.94 },
  { pillar: "Social Welfare", theme: "Education Policy", score: 0.71, volume: 134567, relevance: 0.85 },
  { pillar: "Environmental", theme: "Climate Action", score: 0.91, volume: 167891, relevance: 0.96 },
  { pillar: "Governance", theme: "Digital Infrastructure", score: 0.58, volume: 98765, relevance: 0.63 },
  { pillar: "Innovation", theme: "Digital Infrastructure", score: 0.87, volume: 98765, relevance: 0.91 },
  { pillar: "Innovation", theme: "Education Policy", score: 0.62, volume: 134567, relevance: 0.71 }
];

export const geographicData: GeographicData[] = [
  { country: "United States", volume: 425678, sentiment: 0.23, coordinates: [-95.7129, 37.0902] },
  { country: "United Kingdom", volume: 189234, sentiment: 0.31, coordinates: [-3.4360, 55.3781] },
  { country: "Canada", volume: 145632, sentiment: 0.42, coordinates: [-106.3468, 56.1304] },
  { country: "Australia", volume: 98756, sentiment: 0.38, coordinates: [133.7751, -25.2744] },
  { country: "Germany", volume: 167891, sentiment: 0.19, coordinates: [10.4515, 51.1657] },
  { country: "France", volume: 134567, sentiment: 0.27, coordinates: [2.2137, 46.2276] }
];

export const keyInsights = [
  "Climate Action narratives show strongest positive sentiment (+45%) with increasing momentum",
  "Economic Recovery discussions dominate volume (23.4% of total) but show mixed sentiment",
  "Healthcare Reform generates significant engagement but with polarized sentiment patterns"
];

export const misinterpretationData = [
  { 
    topic: "Healthcare Policy", 
    misinterpretation: "Universal healthcare = government takeover", 
    frequency: 1247, 
    impact: "High" 
  },
  { 
    topic: "Climate Action", 
    misinterpretation: "Carbon tax = job losses", 
    frequency: 892, 
    impact: "Medium" 
  },
  { 
    topic: "Education Reform", 
    misinterpretation: "Curriculum changes = political indoctrination", 
    frequency: 634, 
    impact: "Medium" 
  }
];