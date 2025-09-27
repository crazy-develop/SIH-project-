import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  X, 
  MapPin, 
  Calendar, 
  Users, 
  Star, 
  GraduationCap, 
  Building, 
  Phone, 
  Mail, 
  Globe, 
  Award,
  BookOpen,
  DollarSign,
  Clock,
  CheckCircle,
  ExternalLink,
  Download,
  Heart,
  Share2,
  TrendingUp
} from "lucide-react";

interface College {
  name: string;
  location: string;
  established: string;
  courses: string[];
  rating: number;
  students: string;
  image: string;
}

interface CollegeDetailModalProps {
  college: College;
  onClose: () => void;
}

export function CollegeDetailModal({ college, onClose }: CollegeDetailModalProps) {
  const [activeTab, setActiveTab] = useState("overview");
  const [isFavorited, setIsFavorited] = useState(false);

  // Extended college data based on the college name
  const getExtendedCollegeData = (collegeName: string) => {
    const baseData = {
      phone: "+91-194-2272595",
      email: "info@college.ac.in",
      website: "www.college.ac.in",
      type: "Public University",
      affiliation: "UGC Recognized",
      accreditation: "NAAC A+ Grade",
      totalFaculty: "250+",
      departments: 12,
      hostels: "Separate for Boys & Girls",
      library: "Central Library with 50,000+ books",
      sports: "Cricket, Football, Basketball, Tennis",
      scholarships: ["Merit-based", "Need-based", "Minority scholarships"],
      placements: {
        percentage: "85%",
        averagePackage: "₹4.5 LPA",
        topRecruiter: "TCS, Infosys, Wipro"
      },
      admissionProcess: "Entrance Exam + Merit List",
      fees: {
        undergraduate: "₹50,000/year",
        postgraduate: "₹60,000/year",
        hostel: "₹30,000/year"
      }
    };

    switch (collegeName) {
      case "University of Kashmir":
        return {
          ...baseData,
          description: "The University of Kashmir, established in 1948, is a premier educational institution in the Kashmir Valley. Known for its excellence in research and academics, it offers undergraduate, postgraduate, and doctoral programs across various disciplines.",
          highlights: [
            "First university established in J&K",
            "115+ affiliated colleges",
            "Research excellence in Sciences & Humanities",
            "Beautiful campus spread over 2,500 acres"
          ],
          notableFaculty: [
            "Prof. Nilofer Khan - Vice Chancellor",
            "Dr. Shakil Romshoo - Earth Sciences",
            "Prof. Mushtaq Margoob - Psychology"
          ],
          achievements: [
            "NAAC A+ Grade",
            "Category I University by UGC",
            "Top 100 Universities in India"
          ]
        };
      
      case "University of Jammu":
        return {
          ...baseData,
          description: "The University of Jammu, established in 1969, is a leading institution in the Jammu region. It has emerged as a center of excellence in higher education and research with modern infrastructure and quality faculty.",
          highlights: [
            "NAAC accredited with A Grade",
            "90+ affiliated colleges",
            "Strong industry partnerships",
            "State-of-the-art campus facilities"
          ],
          notableFaculty: [
            "Prof. Manoj Dhar - Vice Chancellor",
            "Dr. Yash Paul Sharma - Biotechnology",
            "Prof. Jyoti Sharma - Management Studies"
          ],
          achievements: [
            "QS Asia University Rankings",
            "NIRF Rankings participant",
            "Research excellence awards"
          ]
        };
      
      case "NIT Srinagar":
        return {
          ...baseData,
          description: "National Institute of Technology Srinagar is one of the premier technical institutions in India. Established in 1960, it offers undergraduate, postgraduate, and doctoral programs in engineering, technology, and sciences.",
          highlights: [
            "Institute of National Importance",
            "100% placement record",
            "World-class infrastructure",
            "Strong alumni network globally"
          ],
          notableFaculty: [
            "Prof. Rakesh Sehgal - Director",
            "Dr. M. Tariq Banday - Computer Science",
            "Prof. S.M.K. Quadri - Electronics"
          ],
          achievements: [
            "NIRF Ranking: Top 50 Engineering",
            "NAAC A+ Grade",
            "NBA Accredited Programs"
          ],
          placements: {
            percentage: "95%",
            averagePackage: "₹8.5 LPA",
            topRecruiter: "Google, Microsoft, Amazon"
          }
        };
      
      case "SKUAST Kashmir":
        return {
          ...baseData,
          description: "Sher-e-Kashmir University of Agricultural Sciences and Technology of Kashmir is a specialized university focusing on agricultural sciences, horticulture, veterinary sciences, and forestry.",
          highlights: [
            "Pioneer in agricultural research in J&K",
            "Advanced research facilities",
            "Strong farmer connect programs",
            "International collaborations"
          ],
          notableFaculty: [
            "Prof. Nazir Ahmad Ganai - Vice Chancellor",
            "Dr. F.A. Shaheen - Plant Pathology",
            "Prof. Syed Sheraz Mahdi - Soil Science"
          ],
          achievements: [
            "ICAR recognition",
            "Best Agricultural University Award",
            "Research impact in Kashmir agriculture"
          ]
        };
      
      default:
        return baseData;
    }
  };

  const extendedData = getExtendedCollegeData(college.name);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: college.name,
        text: `Check out ${college.name} - one of the top institutions in ${college.location}`,
        url: window.location.href
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="relative">
          <div className="h-48 overflow-hidden">
            <ImageWithFallback
              src={college.image}
              alt={college.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
          >
            <X className="w-4 h-4" />
          </Button>

          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex justify-between items-end">
              <div className="text-white">
                <h1 className="text-2xl lg:text-3xl font-bold mb-1">{college.name}</h1>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{college.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Est. {college.established}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{college.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsFavorited(!isFavorited)}
                  className="bg-white/20 border-white/20 text-white hover:bg-white/30"
                >
                  <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current text-red-400' : ''}`} />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleShare}
                  className="bg-white/20 border-white/20 text-white hover:bg-white/30"
                >
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="academics">Academics</TabsTrigger>
              <TabsTrigger value="admissions">Admissions</TabsTrigger>
              <TabsTrigger value="facilities">Facilities</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6 mt-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">About the Institution</h3>
                <p className="text-slate-600 leading-relaxed">{extendedData.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-4">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Award className="w-5 h-5 text-blue-600 mr-2" />
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {extendedData.highlights?.map((highlight, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card className="p-4">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Building className="w-5 h-5 text-green-600 mr-2" />
                    Quick Facts
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Type:</span>
                      <span className="font-medium">{extendedData.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Students:</span>
                      <span className="font-medium">{college.students}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Faculty:</span>
                      <span className="font-medium">{extendedData.totalFaculty}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Departments:</span>
                      <span className="font-medium">{extendedData.departments}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Accreditation:</span>
                      <span className="font-medium">{extendedData.accreditation}</span>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="p-4">
                <h4 className="font-semibold mb-3 flex items-center">
                  <Award className="w-5 h-5 text-purple-600 mr-2" />
                  Achievements & Recognition
                </h4>
                <div className="grid md:grid-cols-3 gap-3">
                  {extendedData.achievements?.map((achievement, index) => (
                    <Badge key={index} variant="secondary" className="p-2 text-center">
                      {achievement}
                    </Badge>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="academics" className="space-y-6 mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-4">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                    Courses Offered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {college.courses.map((course, index) => (
                      <Badge key={index} variant="outline">{course}</Badge>
                    ))}
                  </div>
                </Card>

                <Card className="p-4">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Users className="w-5 h-5 text-green-600 mr-2" />
                    Faculty Excellence
                  </h4>
                  <div className="space-y-2">
                    {extendedData.notableFaculty?.map((faculty, index) => (
                      <div key={index} className="text-sm">
                        <p className="font-medium">{faculty.split(' - ')[0]}</p>
                        <p className="text-slate-600">{faculty.split(' - ')[1]}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              <Card className="p-4">
                <h4 className="font-semibold mb-3 flex items-center">
                  <TrendingUp className="w-5 h-5 text-orange-600 mr-2" />
                  Placement Statistics
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">{extendedData.placements.percentage}</p>
                    <p className="text-sm text-slate-600">Placement Rate</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">{extendedData.placements.averagePackage}</p>
                    <p className="text-sm text-slate-600">Average Package</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-slate-800">{extendedData.placements.topRecruiter}</p>
                    <p className="text-sm text-slate-600">Top Recruiters</p>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="admissions" className="space-y-6 mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-4">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <DollarSign className="w-5 h-5 text-green-600 mr-2" />
                    Fee Structure
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-2 bg-slate-50 rounded">
                      <span>Undergraduate</span>
                      <span className="font-medium">{extendedData.fees.undergraduate}</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-slate-50 rounded">
                      <span>Postgraduate</span>
                      <span className="font-medium">{extendedData.fees.postgraduate}</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-slate-50 rounded">
                      <span>Hostel</span>
                      <span className="font-medium">{extendedData.fees.hostel}</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Clock className="w-5 h-5 text-blue-600 mr-2" />
                    Admission Process
                  </h4>
                  <p className="text-sm text-slate-600 mb-3">{extendedData.admissionProcess}</p>
                  <div className="space-y-2">
                    <h5 className="font-medium text-sm">Scholarships Available:</h5>
                    {extendedData.scholarships.map((scholarship, index) => (
                      <Badge key={index} variant="secondary" className="mr-2 mb-2">
                        {scholarship}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="facilities" className="space-y-6 mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-4">
                  <h4 className="font-semibold mb-3">Campus Facilities</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Building className="w-4 h-4 text-blue-600" />
                      <span>{extendedData.hostels}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-4 h-4 text-green-600" />
                      <span>{extendedData.library}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-orange-600" />
                      <span>Sports: {extendedData.sports}</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <h4 className="font-semibold mb-3">Contact Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-blue-600" />
                      <span>{extendedData.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-green-600" />
                      <span>{extendedData.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Globe className="w-4 h-4 text-purple-600" />
                      <span>{extendedData.website}</span>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Footer Actions */}
        <div className="border-t border-slate-200 p-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download Brochure
              </Button>
              <Button variant="outline" size="sm">
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit Website
              </Button>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-green-500">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}