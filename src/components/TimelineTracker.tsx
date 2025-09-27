import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  Calendar, 
  Clock, 
  AlertTriangle, 
  CheckCircle, 
  Bell, 
  Plus,
  ChevronLeft,
  ChevronRight,
  Filter
} from "lucide-react";
import { useState } from "react";

const timelineEvents = [
  {
    id: 1,
    title: "CBSE Board Exam Registration",
    type: "exam",
    date: "2024-09-15",
    deadline: "2024-09-30",
    status: "upcoming",
    priority: "high",
    description: "Register for Class 12 board examinations",
    category: "Board Exams"
  },
  {
    id: 2,
    title: "JEE Main Application",
    type: "application",
    date: "2024-10-01",
    deadline: "2024-10-31",
    status: "upcoming", 
    priority: "high",
    description: "Apply for Joint Entrance Examination",
    category: "Engineering"
  },
  {
    id: 3,
    title: "NEET Application",
    type: "application",
    date: "2024-10-15",
    deadline: "2024-11-15",
    status: "upcoming",
    priority: "high",
    description: "Apply for National Eligibility Entrance Test",
    category: "Medical"
  },
  {
    id: 4,
    title: "Delhi University Admission",
    type: "admission",
    date: "2025-06-01",
    deadline: "2025-07-15",
    status: "future",
    priority: "medium",
    description: "DU undergraduate admission process begins",
    category: "College Admission"
  },
  {
    id: 5,
    title: "Scholarship Application Deadline",
    type: "scholarship",
    date: "2024-11-30",
    deadline: "2024-11-30",
    status: "urgent",
    priority: "high",
    description: "Merit-based scholarship applications close",
    category: "Scholarships"
  },
  {
    id: 6,
    title: "Career Counseling Session",
    type: "counseling",
    date: "2024-10-10",
    deadline: "2024-10-10",
    status: "completed",
    priority: "medium",
    description: "One-on-one career guidance session",
    category: "Guidance"
  }
];

const notifications = [
  {
    id: 1,
    message: "B.Sc. admissions close in 5 days",
    type: "urgent",
    time: "2 hours ago"
  },
  {
    id: 2,
    message: "New scholarship opportunity available",
    type: "info",
    time: "1 day ago"
  },
  {
    id: 3,
    message: "JEE Main mock test reminder",
    type: "reminder",
    time: "2 days ago"
  }
];

export function TimelineTracker() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [viewMode, setViewMode] = useState<'calendar' | 'timeline'>('timeline');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const categories = [
    { id: 'all', name: 'All Events', count: timelineEvents.length },
    { id: 'Board Exams', name: 'Board Exams', count: 1 },
    { id: 'Engineering', name: 'Engineering', count: 1 },
    { id: 'Medical', name: 'Medical', count: 1 },
    { id: 'College Admission', name: 'College Admission', count: 1 },
    { id: 'Scholarships', name: 'Scholarships', count: 1 }
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? timelineEvents 
    : timelineEvents.filter(event => event.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'urgent': return 'bg-red-500 text-white';
      case 'upcoming': return 'bg-yellow-500 text-white';
      case 'future': return 'bg-blue-500 text-white';
      case 'completed': return 'bg-green-500 text-white';
      default: return 'bg-slate-500 text-white';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'urgent': return <AlertTriangle className="w-4 h-4" />;
      case 'upcoming': return <Clock className="w-4 h-4" />;
      case 'future': return <Calendar className="w-4 h-4" />;
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      if (selectedMonth === 0) {
        setSelectedMonth(11);
        setSelectedYear(selectedYear - 1);
      } else {
        setSelectedMonth(selectedMonth - 1);
      }
    } else {
      if (selectedMonth === 11) {
        setSelectedMonth(0);
        setSelectedYear(selectedYear + 1);
      } else {
        setSelectedMonth(selectedMonth + 1);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-2">
            Timeline Tracker
          </h1>
          <p className="text-slate-600">
            Stay on top of important dates, deadlines, and opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Notifications */}
            <Card className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Bell className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-slate-800">Notifications</h3>
              </div>
              <div className="space-y-3">
                {notifications.map((notification) => (
                  <div key={notification.id} className={`p-3 rounded-lg text-sm ${
                    notification.type === 'urgent' 
                      ? 'bg-red-50 border border-red-200' 
                      : 'bg-blue-50 border border-blue-200'
                  }`}>
                    <p className={`font-medium ${
                      notification.type === 'urgent' ? 'text-red-800' : 'text-blue-800'
                    }`}>
                      {notification.message}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">{notification.time}</p>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                View All Notifications
              </Button>
            </Card>

            {/* Categories */}
            <Card className="p-6">
              <h3 className="font-semibold text-slate-800 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? 'default' : 'ghost'}
                    size="sm"
                    className="w-full justify-between"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <span>{category.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="font-semibold text-slate-800 mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Event
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Bell className="w-4 h-4 mr-2" />
                  Set Reminder
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter Events
                </Button>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* View Controls */}
            <Card className="p-6">
              <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
                <div className="flex items-center space-x-4">
                  <Button
                    variant={viewMode === 'timeline' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('timeline')}
                  >
                    Timeline View
                  </Button>
                  <Button
                    variant={viewMode === 'calendar' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('calendar')}
                  >
                    Calendar View
                  </Button>
                </div>

                {/* Month Navigation */}
                <div className="flex items-center space-x-4">
                  <Button variant="outline" size="sm" onClick={() => navigateMonth('prev')}>
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <span className="font-semibold text-slate-800 min-w-32 text-center">
                    {months[selectedMonth]} {selectedYear}
                  </span>
                  <Button variant="outline" size="sm" onClick={() => navigateMonth('next')}>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Content Area */}
            {viewMode === 'calendar' ? (
              <Card className="p-6">
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="text-center font-medium text-slate-600 py-2">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 35 }, (_, i) => {
                    const day = i - 6 + 1; // Adjusting for month start
                    const isValidDay = day > 0 && day <= 31;
                    const hasEvents = isValidDay && Math.random() > 0.8; // Random events for demo
                    
                    return (
                      <div
                        key={i}
                        className={`h-20 p-1 border border-slate-200 rounded ${
                          isValidDay ? 'bg-white hover:bg-slate-50 cursor-pointer' : 'bg-slate-100'
                        }`}
                      >
                        {isValidDay && (
                          <>
                            <div className="text-sm font-medium text-slate-800">{day}</div>
                            {hasEvents && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-1"></div>
                            )}
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </Card>
            ) : (
              <div className="space-y-4">
                {filteredEvents.map((event, index) => (
                  <Card key={event.id} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className={`p-2 rounded-lg ${getStatusColor(event.status)}`}>
                        {getStatusIcon(event.status)}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-lg font-semibold text-slate-800">{event.title}</h3>
                            <p className="text-sm text-slate-600">{event.description}</p>
                          </div>
                          <Badge variant="outline">{event.category}</Badge>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>Date: {new Date(event.date).toLocaleDateString()}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>Deadline: {new Date(event.deadline).toLocaleDateString()}</span>
                          </span>
                          <Badge 
                            className={`${getStatusColor(event.status)} capitalize`}
                          >
                            {event.status}
                          </Badge>
                        </div>

                        <div className="flex justify-between items-center mt-4">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              Set Reminder
                            </Button>
                            <Button variant="outline" size="sm">
                              More Info
                            </Button>
                          </div>
                          {event.status === 'upcoming' && (
                            <Button size="sm">
                              Apply Now
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}