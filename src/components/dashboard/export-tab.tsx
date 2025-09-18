import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Download, FileText, Database, Image, Calendar, Settings } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { DatePicker } from "../ui/calendar";
import { useState } from "react";

export function ExportTab() {
  const [selectedFormat, setSelectedFormat] = useState("csv");
  const [selectedSections, setSelectedSections] = useState<string[]>(["overview", "voice", "interpretation"]);
  const [dateRange, setDateRange] = useState("all");

  const exportFormats = [
    {
      id: "csv",
      name: "CSV (Enriched Dataset)",
      description: "Raw data with all analytics fields",
      icon: Database,
      size: "~45 MB",
      features: ["All processed posts", "Sentiment scores", "Entity tags", "Metadata"]
    },
    {
      id: "pdf",
      name: "PDF Report",
      description: "Executive summary with key insights",
      icon: FileText,
      size: "~8 MB",
      features: ["Executive summary", "Key visualizations", "Methodology", "Recommendations"]
    },
    {
      id: "dashboard",
      name: "Dashboard Snapshot",
      description: "Static HTML version of dashboard",
      icon: Image,
      size: "~12 MB",
      features: ["All current charts", "Interactive elements", "Embedded data", "Offline viewing"]
    }
  ];

  const dashboardSections = [
    { id: "overview", name: "Overview", description: "KPIs and key insights" },
    { id: "voice", name: "Voice Analysis", description: "Actor segmentation and influence" },
    { id: "interpretation", name: "Interpretation", description: "Sentiment and emotion analysis" },
    { id: "storyline", name: "Storyline", description: "Narrative clustering and themes" },
    { id: "trajectory", name: "Trajectory", description: "Time series and forecasting" },
    { id: "alignment", name: "Alignment", description: "Policy alignment scoring" },
    { id: "meta", name: "Meta Analysis", description: "Cross-cutting insights" },
    { id: "methods", name: "Methods & Models", description: "Technical methodology" }
  ];

  const recentExports = [
    { name: "VISTA_Analysis_2024-03.pdf", date: "2024-03-15", size: "7.8 MB", type: "PDF Report" },
    { name: "Enriched_Dataset_Q1_2024.csv", date: "2024-03-10", size: "42.3 MB", type: "CSV Data" },
    { name: "Dashboard_Snapshot_March.html", date: "2024-03-08", size: "11.7 MB", type: "HTML Dashboard" },
    { name: "VISTA_Analysis_2024-02.pdf", date: "2024-02-28", size: "8.2 MB", type: "PDF Report" }
  ];

  const handleSectionToggle = (sectionId: string) => {
    setSelectedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const handleExport = () => {
    // Mock export functionality
    const format = exportFormats.find(f => f.id === selectedFormat);
    alert(`Exporting ${format?.name}...\n\nSections: ${selectedSections.length}\nDate Range: ${dateRange}\n\nThis would start the actual export process.`);
  };

  return (
    <div className="space-y-6">
      {/* Export Configuration */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Format Selection */}
        <Card className="border shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              Export Format
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Choose your preferred export format
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {exportFormats.map((format) => {
              const IconComponent = format.icon;
              return (
                <div
                  key={format.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                    selectedFormat === format.id 
                      ? 'border-primary bg-primary/5' 
                      : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedFormat(format.id)}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">{format.name}</span>
                        <Badge variant="outline" className="text-xs">{format.size}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{format.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {format.features.map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Configuration Options */}
        <Card className="border shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Export Configuration
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Customize your export settings
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Date Range */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Date Range</label>
              <Select value={dateRange} onValueChange={setDateRange}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="last30">Last 30 Days</SelectItem>
                  <SelectItem value="last90">Last 90 Days</SelectItem>
                  <SelectItem value="q1_2024">Q1 2024</SelectItem>
                  <SelectItem value="q4_2023">Q4 2023</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Section Selection */}
            <div className="space-y-3">
              <label className="text-sm font-medium">Include Sections</label>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {dashboardSections.map((section) => (
                  <div key={section.id} className="flex items-start gap-2">
                    <Checkbox
                      id={section.id}
                      checked={selectedSections.includes(section.id)}
                      onCheckedChange={() => handleSectionToggle(section.id)}
                    />
                    <div className="flex-1">
                      <label 
                        htmlFor={section.id} 
                        className="text-sm font-medium cursor-pointer"
                      >
                        {section.name}
                      </label>
                      <p className="text-xs text-muted-foreground">{section.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Export Button */}
            <div className="pt-4">
              <Button 
                onClick={handleExport} 
                className="w-full" 
                size="lg"
                disabled={selectedSections.length === 0}
              >
                <Download className="h-4 w-4 mr-2" />
                Export {exportFormats.find(f => f.id === selectedFormat)?.name}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Exports */}
      <Card className="border shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Recent Exports
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Download previous exports or re-run with same parameters
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentExports.map((export_, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    {export_.type === "PDF Report" ? (
                      <FileText className="h-5 w-5 text-red-600" />
                    ) : export_.type === "CSV Data" ? (
                      <Database className="h-5 w-5 text-green-600" />
                    ) : (
                      <Image className="h-5 w-5 text-blue-600" />
                    )}
                  </div>
                  <div>
                    <div className="font-medium text-sm">{export_.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {export_.type} • {export_.date} • {export_.size}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Export Guidelines */}
      <Card className="border shadow-lg bg-muted/30">
        <CardHeader>
          <CardTitle>Export Guidelines</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">Data Sensitivity</h4>
              <p className="text-muted-foreground">
                All exported data maintains anonymization and complies with data protection regulations. 
                Personal identifiers are masked or removed.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">File Retention</h4>
              <p className="text-muted-foreground">
                Exported files are stored securely for 30 days and can be re-downloaded during this period. 
                Large datasets may require longer processing times.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Usage Rights</h4>
              <p className="text-muted-foreground">
                Exported reports are for internal government use only. Distribution outside authorized 
                personnel requires additional approval and may have usage restrictions.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}