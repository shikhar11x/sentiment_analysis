import { useState } from "react";
import { Card } from "./components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Badge } from "./components/ui/badge";
import { Separator } from "./components/ui/separator";
import { 
  BarChart3, 
  MessageSquare, 
  Brain, 
  GitBranch, 
  TrendingUp, 
  Target, 
  Layers, 
  Settings, 
  Download,
  Zap
} from "lucide-react";

// Import tab components
import { OverviewTab } from "./components/dashboard/overview-tab";
import { VoiceTab } from "./components/dashboard/voice-tab";
import { InterpretationTab } from "./components/dashboard/interpretation-tab";
import { StorylineTab } from "./components/dashboard/storyline-tab";
import { TrajectoryTab } from "./components/dashboard/trajectory-tab";
import { AlignmentTab } from "./components/dashboard/alignment-tab";
import { MetaTab } from "./components/dashboard/meta-tab";
import { MethodsTab } from "./components/dashboard/methods-tab";
import { ExportTab } from "./components/dashboard/export-tab";

export default function App() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: BarChart3, component: OverviewTab },
    { id: "voice", label: "Voice", icon: MessageSquare, component: VoiceTab },
    { id: "interpretation", label: "Interpretation", icon: Brain, component: InterpretationTab },
    { id: "storyline", label: "Storyline", icon: GitBranch, component: StorylineTab },
    { id: "trajectory", label: "Trajectory", icon: TrendingUp, component: TrajectoryTab },
    { id: "alignment", label: "Alignment", icon: Target, component: AlignmentTab },
    { id: "meta", label: "Meta", icon: Layers, component: MetaTab },
    { id: "methods", label: "Methods & Models", icon: Settings, component: MethodsTab },
    { id: "export", label: "Export", icon: Download, component: ExportTab }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-300 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[#8B1538] to-[#B8425A] rounded-lg flex items-center justify-center shadow-md">
                  <Zap className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-[#8B1538] to-[#B8425A] bg-clip-text text-transparent">
                    VISTA
                  </h1>
                  <p className="text-xs text-[#6b6b6b] -mt-1">Sentiment Intelligence</p>
                </div>
              </div>
              <Separator orientation="vertical" className="h-8 bg-[#d0d0d0]" />
              <div className="hidden sm:block">
                <Badge variant="outline" className="text-xs border-[#8B1538] text-[#8B1538]">
                  Government Analytics Platform
                </Badge>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="hidden md:flex bg-[#e5e5e5] text-[#2d2d2d] border-[#d0d0d0]">
                Last Updated: 2024-03-15 14:30 UTC
              </Badge>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#8B1538] rounded-full animate-pulse"></div>
                <span className="text-xs text-[#6b6b6b] hidden sm:inline">Live Data</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-[#2d2d2d]">
                Sentiment Intelligence Dashboard
              </h2>
              <p className="text-[#6b6b6b]">
                VISTA Framework • Voice • Interpretation • Storyline • Trajectory • Alignment
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="border-[#8B1538] text-[#8B1538] bg-white">
                1.2M+ Posts Analyzed
              </Badge>
              <Badge variant="outline" className="border-[#B8425A] text-[#B8425A] bg-white">
                8 Platforms
              </Badge>
            </div>
          </div>
        </div>

        {/* Dashboard */}
        <Card className="border border-[#d0d0d0] shadow-xl bg-white/95 backdrop-blur-sm">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* Tab Navigation */}
            <div className="border-b border-[#d0d0d0] bg-[#f8f8f8]">
              <TabsList className="grid w-full grid-cols-4 lg:grid-cols-9 h-auto p-1 bg-transparent">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <TabsTrigger 
                      key={tab.id}
                      value={tab.id} 
                      className="flex flex-col gap-1 h-16 text-[#6b6b6b] hover:text-[#2d2d2d] data-[state=active]:bg-white data-[state=active]:text-[#8B1538] data-[state=active]:shadow-md data-[state=active]:border data-[state=active]:border-[#d0d0d0]"
                    >
                      <IconComponent className="h-4 w-4" />
                      <span className="text-xs leading-tight text-center">
                        {tab.label}
                      </span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {tabs.map((tab) => {
                const TabComponent = tab.component;
                return (
                  <TabsContent key={tab.id} value={tab.id} className="mt-0">
                    <TabComponent />
                  </TabsContent>
                );
              })}
            </div>
          </Tabs>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-[#f8f8f8] backdrop-blur-sm border-t border-[#d0d0d0] mt-12 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div className="text-sm text-[#6b6b6b]">
              © 2024 VISTA Sentiment Intelligence Framework • Government Analytics Platform
            </div>
            <div className="flex items-center gap-4 text-xs text-[#6b6b6b]">
              <span>Privacy Compliant</span>
              <span className="text-[#d0d0d0]">•</span>
              <span>Secure Processing</span>
              <span className="text-[#d0d0d0]">•</span>
              <span>Real-time Analytics</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}