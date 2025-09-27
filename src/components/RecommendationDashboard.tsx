import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { 
  User, 
  BookOpen, 
  Briefcase, 
  GraduationCap, 
  Building, 
  Lightbulb,
  Star,
  TrendingUp,
  Clock,
  ChevronRight
} from "lucide-react";

export function RecommendationDashboard() {
  const userProfile = {
    name: "Priya Sharma",
    class: "Class 12",
    school: "Delhi Public School",
    interests: ["Mathematics", "Technology", "Problem Solving"],
    avatar: "https://images.unsplash.com/photo-1758270704534-fd9715bffc0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudHMlMjBsZWFybmluZ3xlbnwxfHx8fDE3NTg5NjM2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
  };

  const streamRecommendations = [
    {
      id: 1,
      title: "Science (PCM)",
      match: 95,
      description: "Perfect for your mathematical aptitude and technology interests",
      subjects: ["Physics", "Chemistry", "Mathematics"],
      careers: ["Engineering", "Research", "Technology"],
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Science (PCB)",
      match: 75,
      description: "Great if you're interested in life sciences and healthcare",
      subjects: ["Physics", "Chemistry", "Biology"],
      careers: ["Medicine", "Biotechnology", "Research"],
      color: "bg-green-500"
    },
    {
      id: 3,
      title: "Commerce",
      match: 65,
      description: "Good for business acumen and analytical thinking",
      subjects: ["Accountancy", "Economics", "Business Studies"],
      careers: ["Business", "Finance", "Entrepreneurship"],
      color: "bg-purple-500"
    }
  ];

  const careerPaths = [
    {
      icon: Building,
      title: "Government Jobs",
      description: "Civil Services, Banking, Railways",
      popularity: "High Demand",
      color: "text-blue-600 bg-blue-100"
    },
    {
      icon: GraduationCap,
      title: "Higher Studies",
      description: "Engineering, Medicine, Research",
      popularity: "Most Popular",
      color: "text-green-600 bg-green-100"
    },
    {
      icon: Briefcase,
      title: "Private Sector",
      description: "IT, Banking, Consulting",
      popularity: "Growing Fast",
      color: "text-purple-600 bg-purple-100"
    },
    {
      icon: Lightbulb,
      title: "Entrepreneurship",
      description: "Start your own business",
      popularity: "Innovation Focus",
      color: "text-orange-600 bg-orange-100"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* User Profile Card */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-8">
              <div className="text-center space-y-4">
                <Avatar className="w-20 h-20 mx-auto">
                  <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
                  <AvatarFallback>{userProfile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-slate-800">{userProfile.name}</h3>
                  <p className="text-sm text-slate-600">{userProfile.class}</p>
                  <p className="text-xs text-slate-500">{userProfile.school}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-slate-700">Interests</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {userProfile.interests.map((interest, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button className="w-full" variant="outline">
                  <User className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-2">
                Your Career Dashboard
              </h1>
              <p className="text-slate-600">
                Personalized recommendations based on your aptitude assessment
              </p>
            </div>

            {/* Stream Recommendations */}
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <BookOpen className="w-6 h-6 mr-2 text-blue-600" />
                Recommended Subject Streams
              </h2>
              <div className="grid gap-6">
                {streamRecommendations.map((stream) => (
                  <Card key={stream.id} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-semibold text-slate-800">{stream.title}</h3>
                          <Badge className={`${stream.color} text-white`}>
                            {stream.match}% Match
                          </Badge>
                        </div>
                        <p className="text-slate-600 mb-4">{stream.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm font-medium text-slate-700 mb-2">Core Subjects:</p>
                            <div className="flex flex-wrap gap-1">
                              {stream.subjects.map((subject, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {subject}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-700 mb-2">Career Options:</p>
                            <div className="flex flex-wrap gap-1">
                              {stream.careers.map((career, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {career}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center ml-4">
                        <div className={`w-16 h-16 rounded-full ${stream.color} flex items-center justify-center text-white mb-2`}>
                          <Star className="w-8 h-8" />
                        </div>
                        <Button size="sm" variant="ghost">
                          Learn More
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Career Path Preview */}
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2 text-green-600" />
                Career Path Options
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {careerPaths.map((path, index) => {
                  const Icon = path.icon;
                  return (
                    <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg ${path.color}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-slate-800 mb-1">{path.title}</h3>
                          <p className="text-sm text-slate-600 mb-2">{path.description}</p>
                          <Badge variant="outline" className="text-xs">
                            <Clock className="w-3 h-3 mr-1" />
                            {path.popularity}
                          </Badge>
                        </div>
                        <ChevronRight className="w-5 h-5 text-slate-400" />
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <Card className="p-6 bg-gradient-to-r from-blue-600 to-green-500">
              <div className="text-white">
                <h3 className="text-xl font-semibold mb-2">Ready for Next Steps?</h3>
                <p className="mb-4 opacity-90">
                  Explore detailed career paths, find colleges, and plan your timeline
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="secondary" size="sm">
                    View Career Map
                  </Button>
                  <Button variant="secondary" size="sm">
                    Find Colleges
                  </Button>
                  <Button variant="secondary" size="sm">
                    Plan Timeline
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}