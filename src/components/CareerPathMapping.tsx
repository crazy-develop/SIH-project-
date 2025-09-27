import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  ArrowRight, 
  BookOpen, 
  Briefcase, 
  GraduationCap, 
  Building,
  Search,
  Filter,
  BarChart3
} from "lucide-react";
import { useState } from "react";

const careerPaths = [
  {
    id: 1,
    title: "Engineering Path",
    stream: "Science (PCM)",
    stages: [
      { step: "Class 12", description: "Physics, Chemistry, Mathematics", icon: BookOpen },
      { step: "Entrance Exam", description: "JEE Main/Advanced, BITSAT", icon: Search },
      { step: "B.Tech/B.E.", description: "Computer Science, Mechanical, etc.", icon: GraduationCap },
      { step: "Career Options", description: "Software Engineer, Research, Higher Studies", icon: Briefcase }
    ],
    popularity: "Most Popular",
    difficulty: "High",
    duration: "4-6 years",
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "Medical Path",
    stream: "Science (PCB)",
    stages: [
      { step: "Class 12", description: "Physics, Chemistry, Biology", icon: BookOpen },
      { step: "NEET Exam", description: "National Eligibility Entrance Test", icon: Search },
      { step: "MBBS/BDS", description: "Medical/Dental Degree", icon: GraduationCap },
      { step: "Practice/Specialization", description: "Doctor, Surgeon, Specialist", icon: Briefcase }
    ],
    popularity: "High Demand",
    difficulty: "Very High",
    duration: "5-8 years",
    color: "bg-green-500"
  },
  {
    id: 3,
    title: "Business/Finance Path",
    stream: "Commerce",
    stages: [
      { step: "Class 12", description: "Accountancy, Economics, Business", icon: BookOpen },
      { step: "Entrance Exam", description: "CAT, MAT, CLAT (for Law)", icon: Search },
      { step: "BBA/B.Com/CA", description: "Business Administration, Commerce", icon: GraduationCap },
      { step: "Career Options", description: "Manager, Analyst, Entrepreneur", icon: Briefcase }
    ],
    popularity: "Growing",
    difficulty: "Medium",
    duration: "3-5 years",
    color: "bg-purple-500"
  },
  {
    id: 4,
    title: "Government Services",
    stream: "Any Stream",
    stages: [
      { step: "Class 12", description: "Any stream with good academics", icon: BookOpen },
      { step: "UPSC/SSC", description: "Civil Services, Banking exams", icon: Search },
      { step: "Training", description: "Service-specific training", icon: GraduationCap },
      { step: "Government Job", description: "IAS, IPS, Bank PO, etc.", icon: Building }
    ],
    popularity: "Stable Choice",
    difficulty: "High",
    duration: "2-4 years",
    color: "bg-indigo-500"
  }
];

export function CareerPathMapping() {
  const [selectedPath, setSelectedPath] = useState<number | null>(null);
  const [compareMode, setCompareMode] = useState(false);
  const [comparedPaths, setComparedPaths] = useState<number[]>([]);

  const handleCompare = (pathId: number) => {
    if (comparedPaths.includes(pathId)) {
      setComparedPaths(comparedPaths.filter(id => id !== pathId));
    } else if (comparedPaths.length < 3) {
      setComparedPaths([...comparedPaths, pathId]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-2">
            Course-to-Career Path Mapping
          </h1>
          <p className="text-slate-600 mb-6">
            Explore different educational and career pathways to make informed decisions
          </p>
          
          <div className="flex justify-center space-x-4">
            <Button 
              variant={compareMode ? "default" : "outline"}
              onClick={() => setCompareMode(!compareMode)}
              className="flex items-center space-x-2"
            >
              <BarChart3 className="w-4 h-4" />
              <span>Compare Paths</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </Button>
          </div>
        </div>

        {/* Compare Banner */}
        {compareMode && (
          <Card className="p-4 mb-8 bg-blue-50 border-blue-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-blue-800">Compare Mode Active</h3>
                <p className="text-sm text-blue-600">
                  Select up to 3 career paths to compare them side by side
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-blue-600">
                  {comparedPaths.length}/3 selected
                </span>
                {comparedPaths.length > 0 && (
                  <Button size="sm" variant="default">
                    View Comparison
                  </Button>
                )}
              </div>
            </div>
          </Card>
        )}

        {/* Career Paths */}
        <div className="grid gap-8">
          {careerPaths.map((path) => (
            <Card 
              key={path.id} 
              className={`p-6 transition-all duration-300 ${
                selectedPath === path.id ? 'ring-2 ring-blue-500 shadow-lg' : 'hover:shadow-lg'
              } ${
                comparedPaths.includes(path.id) ? 'ring-2 ring-green-500' : ''
              }`}
            >
              {/* Path Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl lg:text-2xl font-bold text-slate-800">{path.title}</h3>
                    <Badge variant="outline">{path.stream}</Badge>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                    <span className="flex items-center space-x-1">
                      <div className={`w-3 h-3 rounded-full ${path.color}`}></div>
                      <span>{path.popularity}</span>
                    </span>
                    <span>Difficulty: {path.difficulty}</span>
                    <span>Duration: {path.duration}</span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  {compareMode && (
                    <Button
                      size="sm"
                      variant={comparedPaths.includes(path.id) ? "default" : "outline"}
                      onClick={() => handleCompare(path.id)}
                      disabled={!comparedPaths.includes(path.id) && comparedPaths.length >= 3}
                    >
                      {comparedPaths.includes(path.id) ? 'Selected' : 'Select'}
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setSelectedPath(selectedPath === path.id ? null : path.id)}
                  >
                    {selectedPath === path.id ? 'Collapse' : 'View Details'}
                  </Button>
                </div>
              </div>

              {/* Path Flow */}
              <div className="relative">
                <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
                  {path.stages.map((stage, index) => {
                    const Icon = stage.icon;
                    return (
                      <div key={index} className="flex flex-col items-center text-center flex-1">
                        <div className={`w-16 h-16 rounded-full ${path.color} flex items-center justify-center text-white mb-3 shadow-lg`}>
                          <Icon className="w-8 h-8" />
                        </div>
                        <h4 className="font-semibold text-slate-800 mb-1">{stage.step}</h4>
                        <p className="text-sm text-slate-600 max-w-32">{stage.description}</p>
                        
                        {index < path.stages.length - 1 && (
                          <ArrowRight className="hidden lg:block w-6 h-6 text-slate-400 mt-4 absolute right-[-12px] top-6" />
                        )}
                        {index < path.stages.length - 1 && (
                          <ArrowRight className="lg:hidden w-6 h-6 text-slate-400 mt-4 rotate-90" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Expanded Details */}
              {selectedPath === path.id && (
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="p-4 bg-blue-50 border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">Key Skills Required</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Analytical thinking</li>
                        <li>• Problem-solving</li>
                        <li>• Communication</li>
                        <li>• Technical aptitude</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4 bg-green-50 border-green-200">
                      <h4 className="font-semibold text-green-800 mb-2">Job Market</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• High demand</li>
                        <li>• Good salary prospects</li>
                        <li>• Growth opportunities</li>
                        <li>• Industry stability</li>
                      </ul>
                    </Card>
                    
                    <Card className="p-4 bg-purple-50 border-purple-200">
                      <h4 className="font-semibold text-purple-800 mb-2">Top Colleges</h4>
                      <ul className="text-sm text-purple-700 space-y-1">
                        <li>• IITs, NITs</li>
                        <li>• BITS Pilani</li>
                        <li>• Top state colleges</li>
                        <li>• Private universities</li>
                      </ul>
                    </Card>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Card className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <h3 className="text-xl font-semibold mb-2">Need Personal Guidance?</h3>
            <p className="mb-4 opacity-90">
              Connect with career counselors for personalized advice
            </p>
            <Button variant="secondary" size="sm">
              Book Counseling Session
            </Button>
          </Card>
          
          <Card className="p-6 bg-gradient-to-r from-green-600 to-green-700 text-white">
            <h3 className="text-xl font-semibold mb-2">Explore Colleges</h3>
            <p className="mb-4 opacity-90">
              Find the best colleges for your chosen career path
            </p>
            <Button variant="secondary" size="sm">
              View College Directory
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}