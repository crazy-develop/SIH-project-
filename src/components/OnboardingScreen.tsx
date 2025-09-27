import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CollegeDetailModal } from "./CollegeDetailModal";
import {
  ArrowRight,
  Star,
  Users,
  BookOpen,
  BrainCircuit,
  CheckCircle,
  Quote,
  MapPin,
  GraduationCap,
  Award,
  TrendingUp,
  Shield,
  Clock,
} from "lucide-react";

interface OnboardingScreenProps {
  onGetStarted: () => void;
  onLogin: () => void;
}

export function OnboardingScreen({
  onGetStarted,
  onLogin,
}: OnboardingScreenProps) {
  const [selectedCollege, setSelectedCollege] =
    useState<any>(null);
  const features = [
    {
      icon: BrainCircuit,
      title: "Smart Assessment",
      description:
        "AI-powered aptitude tests to discover your strengths and interests",
      color: "text-blue-600 bg-blue-100",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description:
        "Get personalized advice from experienced career counselors",
      color: "text-green-600 bg-green-100",
    },
    {
      icon: BookOpen,
      title: "College Finder",
      description:
        "Find the best-fit institutions across India, including J&K",
      color: "text-purple-600 bg-purple-100",
    },
    {
      icon: TrendingUp,
      title: "Career Mapping",
      description:
        "Visual career paths from education to professional success",
      color: "text-orange-600 bg-orange-100",
    },
    {
      icon: Clock,
      title: "Timeline Tracker",
      description:
        "Never miss important deadlines and opportunities",
      color: "text-red-600 bg-red-100",
    },
    {
      icon: Shield,
      title: "Trusted Platform",
      description:
        "Used by 10,000+ students with 98% success rate",
      color: "text-indigo-600 bg-indigo-100",
    },
  ];

  const jkColleges = [
    {
      name: "University of Kashmir",
      location: "Srinagar, J&K",
      established: "1948",
      courses: ["Engineering", "Medicine", "Arts", "Commerce"],
      rating: 4.6,
      students: "25,000+",
      image:
        "https://images.unsplash.com/photo-1724440813172-8be178b5670e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYW1tdSUyMGthc2htaXIlMjB1bml2ZXJzaXR5JTIwY29sbGVnZXxlbnwxfHx8fDE3NTg5NjQxODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "University of Jammu",
      location: "Jammu, J&K",
      established: "1969",
      courses: ["Law", "Management", "Sciences", "Education"],
      rating: 4.4,
      students: "20,000+",
      image:
        "https://images.unsplash.com/photo-1610558751153-154582773d89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHVuaXZlcnNpdHklMjBjYW1wdXN8ZW58MXx8fHwxNzU4OTY0MTk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "NIT Srinagar",
      location: "Srinagar, J&K",
      established: "1960",
      courses: ["B.Tech", "M.Tech", "MBA", "Ph.D"],
      rating: 4.8,
      students: "3,500+",
      image:
        "https://images.unsplash.com/photo-1610558751153-154582773d89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHVuaXZlcnNpdHklMjBjYW1wdXN8ZW58MXx8fHwxNzU4OTY0MTk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "SKUAST Kashmir",
      location: "Srinagar, J&K",
      established: "1982",
      courses: [
        "Agriculture",
        "Horticulture",
        "Veterinary",
        "Forestry",
      ],
      rating: 4.3,
      students: "2,800+",
      image:
        "https://images.unsplash.com/photo-1610558751153-154582773d89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHVuaXZlcnNpdHklMjBjYW1wdXN8ZW58MXx8fHwxNzU4OTY0MTk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const testimonials = [
    {
      name: "Aarav Sharma",
      role: "Engineering Student",
      location: "Delhi",
      quote:
        "This platform helped me choose the right stream and get into my dream college. The career guidance was spot-on!",
      image:
        "https://images.unsplash.com/photo-1565598494553-5685d762031c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBjb3Vuc2VsaW5nJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzU4OTY0MTk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Priya Verma",
      role: "Medical Student",
      location: "Mumbai",
      quote:
        "The aptitude test revealed my true interests. I'm now pursuing medicine and couldn't be happier with my choice.",
      image:
        "https://images.unsplash.com/photo-1565598494553-5685d762031c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBjb3Vuc2VsaW5nJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzU4OTY0MTk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Rohit Singh",
      role: "Commerce Graduate",
      location: "Jammu",
      quote:
        "Found the perfect college in J&K through this platform. The local college database is incredibly comprehensive.",
      image:
        "https://images.unsplash.com/photo-1565598494553-5685d762031c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBjb3Vuc2VsaW5nJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzU4OTY0MTk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const stats = [
    {
      number: "12,450+",
      label: "Students Guided",
      icon: Users,
    },
    {
      number: "50+",
      label: "Partner Colleges",
      icon: GraduationCap,
    },
    { number: "98%", label: "Success Rate", icon: Award },
    { number: "25+", label: "States Covered", icon: MapPin },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header with Login */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">CG</span>
            </div>
            <span className="text-xl font-semibold text-slate-800">
              Career Guide
            </span>
          </div>
          <Button variant="outline" onClick={onLogin}>
            Sign In
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                  <Star className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    Trusted by 10,000+ Students
                  </span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 leading-tight">
                  Your Personal
                  <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                    {" "}
                    Career & College{" "}
                  </span>
                  Guide
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Discover your perfect career path with
                  personalized recommendations, college
                  guidance, and expert insights tailored for
                  Classes 10-12 students across India.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Card className="p-4 text-center border-blue-200 bg-blue-50">
                  <BrainCircuit className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-slate-800">
                    Smart Assessment
                  </h3>
                  <p className="text-sm text-slate-600">
                    AI-powered aptitude tests
                  </p>
                </Card>
                <Card className="p-4 text-center border-green-200 bg-green-50">
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-slate-800">
                    Expert Guidance
                  </h3>
                  <p className="text-sm text-slate-600">
                    Career counselor insights
                  </p>
                </Card>
                <Card className="p-4 text-center border-purple-200 bg-purple-50">
                  <BookOpen className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-slate-800">
                    College Finder
                  </h3>
                  <p className="text-sm text-slate-600">
                    Best-fit institutions
                  </p>
                </Card>
              </div>

              <div className="space-y-4">
                <Button
                  onClick={onGetStarted}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-sm text-slate-500">
                  ✨ Free to use • No registration required •
                  Instant results
                </p>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1629360021730-3d258452c425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzU4ODcyMDgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Students studying together"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>

              {/* Floating Cards */}
              <Card className="absolute -bottom-4 -left-4 p-4 bg-white shadow-lg border-green-200">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Live Guidance
                    </p>
                    <p className="text-xs text-slate-600">
                      24/7 Support Available
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="absolute -top-4 -right-4 p-3 bg-white shadow-lg border-blue-200">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">
                    98%
                  </p>
                  <p className="text-xs text-slate-600">
                    Success Rate
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-green-500 rounded-full text-white mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-800 mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-slate-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              About Our Platform
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We're revolutionizing career guidance for Indian
              students by combining AI technology with expert
              counseling to help you make informed decisions
              about your future.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Why Choose Our Career Guidance Platform?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800">
                      Personalized Recommendations
                    </h4>
                    <p className="text-slate-600">
                      Our AI analyzes your interests, skills,
                      and preferences to suggest the best career
                      paths.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800">
                      Comprehensive College Database
                    </h4>
                    <p className="text-slate-600">
                      Access information about colleges across
                      India, including detailed profiles of
                      institutions in Jammu & Kashmir.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800">
                      Expert Career Counseling
                    </h4>
                    <p className="text-slate-600">
                      Get guidance from certified career
                      counselors with years of experience in
                      student mentoring.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800">
                      Timeline Management
                    </h4>
                    <p className="text-slate-600">
                      Never miss important deadlines with our
                      comprehensive academic and career timeline
                      tracker.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1565598494553-5685d762031c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBjb3Vuc2VsaW5nJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzU4OTY0MTk2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Career counseling session"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow"
                >
                  <div
                    className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* J&K Colleges Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Featured Colleges in Jammu & Kashmir
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Discover top educational institutions in the
              beautiful valley of Kashmir and the historic
              region of Jammu, offering world-class education
              amidst stunning natural landscapes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {jkColleges.map((college, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={college.image}
                    alt={college.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-1">
                        {college.name}
                      </h3>
                      <div className="flex items-center space-x-2 text-sm text-slate-600">
                        <MapPin className="w-4 h-4" />
                        <span>{college.location}</span>
                        <span>•</span>
                        <span>Est. {college.established}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium text-slate-700">
                        {college.rating}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {college.courses.map(
                      (course, courseIndex) => (
                        <Badge
                          key={courseIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          {course}
                        </Badge>
                      ),
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-slate-600">
                      <Users className="w-4 h-4" />
                      <span>{college.students} students</span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setSelectedCollege(college)
                      }
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card className="p-8 bg-gradient-to-r from-blue-600 to-green-600 text-white inline-block">
              <h3 className="text-xl font-bold mb-2">
                Explore More J&K Colleges
              </h3>
              <p className="mb-4 opacity-90">
                Discover 50+ more colleges and universities in
                Jammu & Kashmir
              </p>
              <Button
                variant="secondary"
                onClick={onGetStarted}
              >
                View Complete Directory
              </Button>
            </Card>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-slate-600">
              Hear from students who found their perfect career
              path with our guidance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-slate-600">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-slate-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <Quote className="w-8 h-8 text-blue-600 mb-3" />
                <p className="text-slate-600 italic">
                  "{testimonial.quote}"
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Discover Your Perfect Career Path?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Join thousands of students who have already found
            their direction with our AI-powered career guidance
            platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={onGetStarted}
              size="lg"
              variant="secondary"
              className="px-8 py-3 text-blue-600 hover:text-blue-700 group"
            >
              Start Your Assessment
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* College Detail Modal */}
      {selectedCollege && (
        <CollegeDetailModal
          college={selectedCollege}
          onClose={() => setSelectedCollege(null)}
        />
      )}
    </div>
  );
}