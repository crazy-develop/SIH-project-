import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { 
  MapPin, 
  Search, 
  Filter, 
  Star, 
  BookOpen, 
  Users, 
  DollarSign,
  Map,
  List,
  Phone,
  Globe,
  GraduationCap
} from "lucide-react";
import { useState } from "react";

const colleges = [
  {
    id: 1,
    name: "Delhi University",
    type: "Government",
    location: "Delhi",
    distance: "2.5 km",
    rating: 4.8,
    courses: ["B.Sc", "B.A", "B.Com", "B.Tech"],
    fees: "₹10,000 - ₹50,000",
    cutoff: "95%+",
    facilities: ["Library", "Hostel", "Sports", "Labs"],
    medium: "English",
    established: "1922",
    image: "https://images.unsplash.com/photo-1758206523705-666590ae0a66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzU4OTYzNjI3fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 2,
    name: "Jawaharlal Nehru University",
    type: "Government",
    location: "Delhi",
    distance: "8.2 km",
    rating: 4.7,
    courses: ["M.A", "M.Sc", "Ph.D", "B.A"],
    fees: "₹5,000 - ₹25,000",
    cutoff: "90%+",
    facilities: ["Library", "Hostel", "Research Centers", "International Programs"],
    medium: "English",
    established: "1969",
    image: "https://images.unsplash.com/photo-1758206523705-666590ae0a66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzU4OTYzNjI3fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 3,
    name: "Lady Shri Ram College",
    type: "Government",
    location: "Delhi",
    distance: "5.1 km",
    rating: 4.9,
    courses: ["B.A", "B.Sc", "B.Com"],
    fees: "₹15,000 - ₹30,000",
    cutoff: "98%+",
    facilities: ["Library", "Cultural Centers", "Career Counseling", "Alumni Network"],
    medium: "English",
    established: "1956",
    image: "https://images.unsplash.com/photo-1758206523705-666590ae0a66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzU4OTYzNjI3fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 4,
    name: "Amity University",
    type: "Private",
    location: "Noida",
    distance: "25.3 km",
    rating: 4.2,
    courses: ["B.Tech", "BBA", "B.Sc", "Law"],
    fees: "₹2,00,000 - ₹5,00,000",
    cutoff: "75%+",
    facilities: ["Modern Campus", "Industry Partnerships", "Placement Cell", "International Exchange"],
    medium: "English",
    established: "2005",
    image: "https://images.unsplash.com/photo-1758206523705-666590ae0a66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzU4OTYzNjI3fDA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function CollegesDirectory() {
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filteredColleges = colleges.filter(college =>
    college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    college.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    college.courses.some(course => course.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const filters = [
    { id: 'government', label: 'Government', count: 3 },
    { id: 'private', label: 'Private', count: 1 },
    { id: 'engineering', label: 'Engineering', count: 2 },
    { id: 'arts', label: 'Arts', count: 3 },
    { id: 'commerce', label: 'Commerce', count: 2 },
    { id: 'hostel', label: 'Hostel Available', count: 4 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-2">
            Nearby Colleges Directory
          </h1>
          <p className="text-slate-600">
            Discover the best colleges near you with comprehensive information
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                placeholder="Search colleges, courses, or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            {/* View Toggle */}
            <div className="flex space-x-2">
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="flex items-center space-x-2"
              >
                <List className="w-4 h-4" />
                <span>List</span>
              </Button>
              <Button
                variant={viewMode === 'map' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('map')}
                className="flex items-center space-x-2"
              >
                <Map className="w-4 h-4" />
                <span>Map</span>
              </Button>
            </div>
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {filters.map(filter => (
              <Button
                key={filter.id}
                variant={selectedFilters.includes(filter.id) ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  if (selectedFilters.includes(filter.id)) {
                    setSelectedFilters(selectedFilters.filter(f => f !== filter.id));
                  } else {
                    setSelectedFilters([...selectedFilters, filter.id]);
                  }
                }}
                className="flex items-center space-x-1"
              >
                <Filter className="w-3 h-3" />
                <span>{filter.label}</span>
                <Badge variant="secondary" className="text-xs ml-1">
                  {filter.count}
                </Badge>
              </Button>
            ))}
          </div>
        </Card>

        {/* Results */}
        <div className="flex gap-8">
          {/* Filters Sidebar (Desktop) */}
          <div className="hidden lg:block w-64 space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-slate-800 mb-4">Quick Filters</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium text-slate-700 mb-2">Distance</h4>
                  <div className="space-y-1">
                    <label className="flex items-center space-x-2 text-sm">
                      <input type="radio" name="distance" className="text-blue-600" />
                      <span>Within 5 km</span>
                    </label>
                    <label className="flex items-center space-x-2 text-sm">
                      <input type="radio" name="distance" className="text-blue-600" />
                      <span>Within 10 km</span>
                    </label>
                    <label className="flex items-center space-x-2 text-sm">
                      <input type="radio" name="distance" className="text-blue-600" />
                      <span>Within 25 km</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-slate-700 mb-2">Fees Range</h4>
                  <div className="space-y-1">
                    <label className="flex items-center space-x-2 text-sm">
                      <input type="checkbox" className="text-blue-600" />
                      <span>Under ₹50,000</span>
                    </label>
                    <label className="flex items-center space-x-2 text-sm">
                      <input type="checkbox" className="text-blue-600" />
                      <span>₹50,000 - ₹2,00,000</span>
                    </label>
                    <label className="flex items-center space-x-2 text-sm">
                      <input type="checkbox" className="text-blue-600" />
                      <span>Above ₹2,00,000</span>
                    </label>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-slate-800 mb-4">Popular Courses</h3>
              <div className="space-y-2">
                {['B.Tech', 'B.A', 'B.Sc', 'B.Com', 'BBA', 'Law'].map(course => (
                  <Button key={course} variant="ghost" size="sm" className="w-full justify-start">
                    <BookOpen className="w-4 h-4 mr-2" />
                    {course}
                  </Button>
                ))}
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {viewMode === 'map' ? (
              <Card className="p-8 h-96 bg-slate-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-slate-600 mb-2">Map View</h3>
                  <p className="text-slate-500">Interactive map showing college locations</p>
                  <Button className="mt-4" onClick={() => setViewMode('list')}>
                    Switch to List View
                  </Button>
                </div>
              </Card>
            ) : (
              <div className="space-y-6">
                {filteredColleges.map((college) => (
                  <Card key={college.id} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* College Image */}
                      <div className="w-full lg:w-48 h-48 lg:h-32 rounded-lg overflow-hidden bg-slate-200">
                        <img 
                          src={college.image} 
                          alt={college.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* College Details */}
                      <div className="flex-1 space-y-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-xl font-bold text-slate-800">{college.name}</h3>
                              <Badge variant={college.type === 'Government' ? 'default' : 'secondary'}>
                                {college.type}
                              </Badge>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-slate-600">
                              <span className="flex items-center space-x-1">
                                <MapPin className="w-4 h-4" />
                                <span>{college.location} • {college.distance}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <Star className="w-4 h-4 text-yellow-500" />
                                <span>{college.rating}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <GraduationCap className="w-4 h-4" />
                                <span>Est. {college.established}</span>
                              </span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <h4 className="text-sm font-medium text-slate-700 mb-2">Available Courses</h4>
                            <div className="flex flex-wrap gap-1">
                              {college.courses.slice(0, 3).map((course, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {course}
                                </Badge>
                              ))}
                              {college.courses.length > 3 && (
                                <Badge variant="outline" className="text-xs">
                                  +{college.courses.length - 3} more
                                </Badge>
                              )}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-sm font-medium text-slate-700 mb-2">Fees & Cutoff</h4>
                            <div className="space-y-1">
                              <p className="text-sm text-slate-600 flex items-center space-x-1">
                                <DollarSign className="w-3 h-3" />
                                <span>{college.fees}</span>
                              </p>
                              <p className="text-sm text-slate-600">
                                Cutoff: {college.cutoff}
                              </p>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-sm font-medium text-slate-700 mb-2">Key Facilities</h4>
                            <div className="flex flex-wrap gap-1">
                              {college.facilities.slice(0, 2).map((facility, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {facility}
                                </Badge>
                              ))}
                              {college.facilities.length > 2 && (
                                <Badge variant="secondary" className="text-xs">
                                  +{college.facilities.length - 2}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                          <div className="flex space-x-4 text-sm text-slate-600">
                            <span>Medium: {college.medium}</span>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Phone className="w-4 h-4 mr-1" />
                              Contact
                            </Button>
                            <Button variant="outline" size="sm">
                              <Globe className="w-4 h-4 mr-1" />
                              Website
                            </Button>
                            <Button size="sm">
                              Apply Now
                            </Button>
                          </div>
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