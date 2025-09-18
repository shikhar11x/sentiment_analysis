// VISTA Framework Types

export interface SentimentData {
  positive: number;
  negative: number;
  neutral: number;
}

export interface EmotionData {
  joy: number;
  anger: number;
  fear: number;
  sadness: number;
  surprise: number;
  trust: number;
}

export interface VoiceData {
  platform: string;
  volume: number;
  percentage: number;
  color: string;
}

export interface InfluencerData {
  name: string;
  platform: string;
  reach: number;
  engagement: number;
  sentiment: number;
}

export interface NarrativeCluster {
  id: string;
  label: string;
  volume: number;
  sentiment: number;
  x: number;
  y: number;
  description: string;
}

export interface TimeSeriesData {
  date: string;
  volume: number;
  sentiment: number;
  positive: number;
  negative: number;
  neutral: number;
}

export interface AlignmentData {
  pillar: string;
  theme: string;
  score: number;
  volume: number;
  relevance: number;
}

export interface KPIMetrics {
  totalPosts: number;
  platforms: number;
  avgSentiment: number;
  topEmotion: string;
  timeRange: string;
}

export interface GeographicData {
  country: string;
  volume: number;
  sentiment: number;
  coordinates: [number, number];
}