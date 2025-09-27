import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  TrendingUp, 
  Users, 
  GraduationCap, 
  Target, 
  BarChart3,
  PieChart,
  Activity,
  Award,
  Download,
  Share,
  Calendar,
  MapPin
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Cell,
  LineChart,
  Line,
  Area,
  AreaChart
} from "recharts";

const enrollmentData = [
  { month: 'Jan', before: 120, after: 180 },
  { month: 'Feb', before: 110, after: 190 },
  { month: 'Mar', before: 130, after: 210 },
  { month: 'Apr', before: 125, after: 220 },
  { month: 'May', before: 140, after: 240 },
  { month: 'Jun', before: 135, after: 260 },
];

const streamDistribution = [
  { name: 'Science (PCM)', value: 45, color: '#3b82f6' },
  { name: 'Science (PCB)', value: 30, color: '#10b981' },
  { name: 'Commerce', value: 20, color: '#8b5cf6' },
  { name: 'Arts', value: 5, color: '#f59e0b' },
];

const usageData = [
  { week: 'Week 1', users: 1200, sessions: 3400, assessments: 850 },
  { week: 'Week 2', users: 1350, sessions: 3800, assessments: 920 },
  { week: 'Week 3', users: 1480, sessions: 4200, assessments: 1080 },
  { week: 'Week 4', users: 1620, sessions: 4600, assessments: 1250 },
];

const dropoutReduction = [
  { year: '2022', rate: 18 },
  { year: '2023', rate: 15 },
  { year: '2024', rate: 12 },
  { year: '2025', rate: 8 },
];

export function ImpactDashboard() {
  const kpiCards = [
    {
      title: "Total Students Reached",
      value: "12,450",
      change: "+25%",
      trend: "up",
      icon: Users,
      color: "bg-blue-500"
    },
    {
      title: "College Enrollment Increase",
      value: "78%",
      change: "+15%",
      trend: "up",
      icon: GraduationCap,
      color: "bg-green-500"
    },
    {
      title: "Dropout Rate Reduction",
      value: "8%",
      change: "-10%",
      trend: "down",
      icon: Target,
      color: "bg-purple-500"
    },
    {
      title: "Career Guidance Sessions",
      value: "3,280",
      change: "+32%",
      trend: "up",
      icon: Activity,
      color: "bg-orange-500"
    }
  ];

  const achievements = [
    {
      title: "Education Innovation Award 2024",
      description: "Recognized for outstanding contribution to student career guidance",
      date: "March 2024",
      icon: Award
    },
    {
      title: "Partnership with 50+ Colleges",
      description: "Successfully established partnerships with leading institutions",
      date: "February 2024",
      icon: GraduationCap
    },
    {
      title: "10,000+ Success Stories",
      description: "Students successfully placed in their preferred career paths",
      date: "January 2024", 
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-2">
              Impact Dashboard
            </h1>
            <p className="text-slate-600">
              Measuring the success and impact of our career guidance platform
            </p>
          </div>
          <div className="flex space-x-3 mt-4 lg:mt-0">
            <Button variant="outline" className="flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Export Report</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <Share className="w-4 h-4" />
              <span>Share</span>
            </Button>
            <Button className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Schedule Report</span>
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiCards.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-600 mb-1">{kpi.title}</p>
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-2">{kpi.value}</h3>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className={`w-4 h-4 ${
                        kpi.trend === 'up' ? 'text-green-500' : 'text-red-500'
                      }`} />
                      <span className={`text-sm font-medium ${
                        kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {kpi.change} from last month
                      </span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-lg ${kpi.color} text-white`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Charts Row 1 */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Enrollment Increase */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-800">College Enrollment Trends</h3>
                <p className="text-sm text-slate-600">Before vs After using our platform</p>
              </div>
              <BarChart3 className="w-6 h-6 text-blue-600" />
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={enrollmentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="before" fill="#94a3b8" name="Before" />
                <Bar dataKey="after" fill="#3b82f6" name="After" />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Stream Distribution */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-800">Stream Selection Distribution</h3>
                <p className="text-sm text-slate-600">Student preferences by subject stream</p>
              </div>
              <PieChart className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex flex-col lg:flex-row items-center">
              <ResponsiveContainer width="100%" height={250}>
                <RechartsPieChart>
                  <Pie
                    data={streamDistribution}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {streamDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RechartsPieChart>
              </ResponsiveContainer>
              <div className="space-y-2 lg:ml-4">
                {streamDistribution.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div 
                      className="w-4 h-4 rounded" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm text-slate-600">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Charts Row 2 */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* User Engagement */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-800">Platform Usage Analytics</h3>
                <p className="text-sm text-slate-600">Weekly active users and engagement</p>
              </div>
              <Activity className="w-6 h-6 text-purple-600" />
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={usageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="users" 
                  stackId="1" 
                  stroke="#8b5cf6" 
                  fill="#8b5cf6" 
                  fillOpacity={0.6}
                  name="Active Users"
                />
                <Area 
                  type="monotone" 
                  dataKey="sessions" 
                  stackId="2" 
                  stroke="#06b6d4" 
                  fill="#06b6d4" 
                  fillOpacity={0.6}
                  name="Sessions"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Card>

          {/* Dropout Reduction */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-800">Dropout Rate Reduction</h3>
                <p className="text-sm text-slate-600">Year-over-year improvement</p>
              </div>
              <Target className="w-6 h-6 text-red-600" />
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dropoutReduction}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="rate" 
                  stroke="#ef4444" 
                  strokeWidth={3}
                  dot={{ fill: '#ef4444', strokeWidth: 2, r: 6 }}
                  name="Dropout Rate %"
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Achievements and Regional Impact */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Achievements */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-6">Recent Achievements</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-slate-50">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-800">{achievement.title}</h4>
                        <p className="text-sm text-slate-600 mt-1">{achievement.description}</p>
                        <p className="text-xs text-slate-500 mt-2">{achievement.date}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Regional Impact */}
          <Card className="p-6">
            <div className="flex items-center space-x-2 mb-6">
              <MapPin className="w-5 h-5 text-green-600" />
              <h3 className="text-lg font-semibold text-slate-800">Regional Impact</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span className="text-sm font-medium">Delhi NCR</span>
                <Badge className="bg-blue-500">4,200+ students</Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="text-sm font-medium">Mumbai</span>
                <Badge className="bg-green-500">3,100+ students</Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                <span className="text-sm font-medium">Bangalore</span>
                <Badge className="bg-purple-500">2,800+ students</Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                <span className="text-sm font-medium">Chennai</span>
                <Badge className="bg-orange-500">2,350+ students</Badge>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg text-white">
              <h4 className="font-semibold mb-2">Total Reach</h4>
              <p className="text-2xl font-bold">150+ Cities</p>
              <p className="text-sm opacity-90">Across 25 states in India</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Fix import for Pie component
import { Pie } from 'recharts';