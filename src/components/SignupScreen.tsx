import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  User, 
  Phone,
  MapPin,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  GraduationCap
} from "lucide-react";

interface SignupScreenProps {
  onSignup: (userData: any) => void;
  onBackToLogin: () => void;
  onBackToHome: () => void;
}

export function SignupScreen({ onSignup, onBackToLogin, onBackToHome }: SignupScreenProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    class: '',
    school: '',
    state: '',
    interests: []
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [step, setStep] = useState(1);

  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 
    'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 
    'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 
    'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Jammu and Kashmir', 'Ladakh'
  ];

  const classes = ['Class 10', 'Class 11', 'Class 12', 'Graduated'];

  const interestOptions = [
    'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 
    'Economics', 'Accounting', 'History', 'Geography', 'English Literature',
    'Arts & Design', 'Music', 'Sports', 'Entrepreneurship', 'Social Work'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError('');
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const validateStep1 = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      setError('Please fill in all required fields');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
      setError('');
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (!formData.class || !formData.school || !formData.state) {
      setError('Please fill in all required fields');
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      const userData = {
        id: 'student_' + Date.now(),
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        class: formData.class,
        school: formData.school,
        state: formData.state,
        interests: formData.interests,
        type: 'student'
      };
      onSignup(userData);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={step === 1 ? onBackToHome : () => setStep(1)}
          className="mb-8 hover:bg-white/50"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {step === 1 ? 'Back to Home' : 'Previous Step'}
        </Button>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Signup Form */}
          <div className="flex items-center justify-center">
            <Card className="w-full max-w-md p-8 shadow-xl">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">CG</span>
                </div>
                <h1 className="text-2xl font-bold text-slate-800 mb-2">
                  {step === 1 ? 'Create Account' : 'Complete Profile'}
                </h1>
                <p className="text-slate-600">
                  {step === 1 ? 'Join thousands of students finding their career path' : 'Tell us about your academic background'}
                </p>
              </div>

              {/* Progress Indicator */}
              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center space-x-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                    step >= 1 ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'
                  }`}>
                    1
                  </div>
                  <div className={`w-12 h-1 ${step >= 2 ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                    step >= 2 ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'
                  }`}>
                    2
                  </div>
                </div>
              </div>

              {error && (
                <div className="flex items-center space-x-2 text-red-600 text-sm mb-4 p-3 bg-red-50 rounded-lg">
                  <AlertCircle className="w-4 h-4" />
                  <span>{error}</span>
                </div>
              )}

              {step === 1 ? (
                <form onSubmit={(e) => { e.preventDefault(); handleNext(); }} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                      />
                    </div>
                  </div>

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
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
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
                        placeholder="Create a password"
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

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                        className="pl-10 pr-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600">
                    Continue
                  </Button>

                  <div className="text-center">
                    <span className="text-slate-600">Already have an account? </span>
                    <button 
                      type="button"
                      onClick={onBackToLogin}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="class">Current Class</Label>
                    <Select value={formData.class} onValueChange={(value) => handleInputChange('class', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your class" />
                      </SelectTrigger>
                      <SelectContent>
                        {classes.map((cls) => (
                          <SelectItem key={cls} value={cls}>{cls}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="school">School/College Name</Label>
                    <div className="relative">
                      <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <Input
                        id="school"
                        placeholder="Enter your school/college name"
                        value={formData.school}
                        onChange={(e) => handleInputChange('school', e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Select value={formData.state} onValueChange={(value) => handleInputChange('state', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your state" />
                      </SelectTrigger>
                      <SelectContent>
                        {states.map((state) => (
                          <SelectItem key={state} value={state}>{state}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Interests (Select up to 5)</Label>
                    <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto">
                      {interestOptions.map((interest) => (
                        <button
                          key={interest}
                          type="button"
                          onClick={() => handleInterestToggle(interest)}
                          disabled={formData.interests.length >= 5 && !formData.interests.includes(interest)}
                          className={`p-2 text-xs rounded-lg border transition-colors ${
                            formData.interests.includes(interest)
                              ? 'bg-blue-600 text-white border-blue-600'
                              : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300'
                          } ${
                            formData.interests.length >= 5 && !formData.interests.includes(interest)
                              ? 'opacity-50 cursor-not-allowed'
                              : ''
                          }`}
                        >
                          {interest}
                        </button>
                      ))}
                    </div>
                    <p className="text-xs text-slate-500">
                      Selected: {formData.interests.length}/5
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Creating Account...' : 'Create Account'}
                  </Button>
                </form>
              )}
            </Card>
          </div>

          {/* Right Column - Benefits */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Join Our Community of Future Leaders
              </h2>
              <p className="text-lg text-slate-600">
                Get personalized career guidance, discover your strengths, and 
                connect with the best colleges for your future.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1565598494553-5685d762031c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBjb3Vuc2VsaW5nJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzU4OTY0MTk2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Career counseling session"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="grid gap-6">
              <Card className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <h3 className="text-lg font-semibold mb-2">Personalized Recommendations</h3>
                <p className="text-blue-100">
                  Our AI analyzes your interests and skills to suggest the perfect career paths and colleges.
                </p>
              </Card>
              
              <Card className="p-6 bg-gradient-to-r from-green-600 to-green-700 text-white">
                <h3 className="text-lg font-semibold mb-2">Expert Guidance</h3>
                <p className="text-green-100">
                  Connect with certified career counselors and get professional advice for your future.
                </p>
              </Card>
              
              <Card className="p-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
                <h3 className="text-lg font-semibold mb-2">Comprehensive Resources</h3>
                <p className="text-purple-100">
                  Access our extensive database of colleges, courses, and career information.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}