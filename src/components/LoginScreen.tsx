import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  User, 
  Shield, 
  ArrowLeft,
  CheckCircle,
  AlertCircle
} from "lucide-react";

interface LoginScreenProps {
  onLogin: (userType: 'student' | 'admin', userData: any) => void;
  onBackToHome: () => void;
  onGoToSignup: () => void;
}

export function LoginScreen({ onLogin, onBackToHome, onGoToSignup }: LoginScreenProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [loginType, setLoginType] = useState<'student' | 'admin'>('student');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError(''); // Clear error when user starts typing
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Basic validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      // Mock authentication - in real app, this would be an API call
      if (formData.email && formData.password.length >= 6) {
        const userData = {
          id: loginType === 'admin' ? 'admin1' : 'student1',
          email: formData.email,
          name: loginType === 'admin' ? 'Admin User' : 'Student User',
          type: loginType
        };
        onLogin(loginType, userData);
      } else {
        setError('Invalid credentials. Please try again.');
      }
      setIsLoading(false);
    }, 1000);
  };

  const features = [
    {
      icon: CheckCircle,
      title: "Personalized Guidance",
      description: "Get recommendations tailored to your interests and goals"
    },
    {
      icon: CheckCircle,
      title: "Expert Counseling", 
      description: "Access to certified career counselors and mentors"
    },
    {
      icon: CheckCircle,
      title: "College Directory",
      description: "Comprehensive database of colleges across India"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={onBackToHome}
          className="mb-8 hover:bg-white/50"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Login Form */}
          <div className="flex items-center justify-center">
            <Card className="w-full max-w-md p-8 shadow-xl">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">CG</span>
                </div>
                <h1 className="text-2xl font-bold text-slate-800 mb-2">Welcome Back</h1>
                <p className="text-slate-600">Sign in to continue your career journey</p>
              </div>

              <Tabs value={loginType} onValueChange={(value) => setLoginType(value as 'student' | 'admin')} className="mb-6">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="student" className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Student</span>
                  </TabsTrigger>
                  <TabsTrigger value="admin" className="flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>Admin</span>
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              {error && (
                <div className="flex items-center space-x-2 text-red-600 text-sm mb-4 p-3 bg-red-50 rounded-lg">
                  <AlertCircle className="w-4 h-4" />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      className="pl-10 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="text-blue-600" />
                    <span className="text-slate-600">Remember me</span>
                  </label>
                  <button type="button" className="text-blue-600 hover:text-blue-700">
                    Forgot password?
                  </button>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600"
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing in...' : 'Sign In'}
                </Button>

                <div className="text-center">
                  <span className="text-slate-600">Don't have an account? </span>
                  <button 
                    type="button"
                    onClick={onGoToSignup}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Sign up
                  </button>
                </div>
              </form>

              {/* Demo Credentials */}
              <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                <h4 className="text-sm font-medium text-slate-700 mb-2">Demo Credentials:</h4>
                <div className="text-xs text-slate-600 space-y-1">
                  <p><strong>Student:</strong> student@demo.com / password</p>
                  <p><strong>Admin:</strong> admin@demo.com / password</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Features & Image */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Your Career Journey Starts Here
              </h2>
              <p className="text-lg text-slate-600">
                Join thousands of students who have discovered their perfect career path 
                with our AI-powered guidance platform.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1629360021730-3d258452c425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzU4ODcyMDgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Students studying together"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                    <Icon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-800">{feature.title}</h3>
                      <p className="text-sm text-slate-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}