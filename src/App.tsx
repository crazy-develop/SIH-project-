import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { OnboardingScreen } from "./components/OnboardingScreen";
import { LoginScreen } from "./components/LoginScreen";
import { SignupScreen } from "./components/SignupScreen";
import { AptitudeQuizScreen } from "./components/AptitudeQuizScreen";
import { RecommendationDashboard } from "./components/RecommendationDashboard";
import { CareerPathMapping } from "./components/CareerPathMapping";
import { CollegesDirectory } from "./components/CollegesDirectory";
import { TimelineTracker } from "./components/TimelineTracker";
import { ImpactDashboard } from "./components/ImpactDashboard";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('onboarding');
  const [user, setUser] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleGetStarted = () => {
    if (isAuthenticated) {
      setCurrentScreen('quiz');
    } else {
      setCurrentScreen('signup');
    }
  };

  const handleLogin = (userType: 'student' | 'admin', userData: any) => {
    setUser(userData);
    setIsAuthenticated(true);
    if (userType === 'admin') {
      setCurrentScreen('admin');
    } else {
      setCurrentScreen('dashboard');
    }
  };

  const handleSignup = (userData: any) => {
    setUser(userData);
    setIsAuthenticated(true);
    setCurrentScreen('quiz');
  };

  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setCurrentScreen('onboarding');
  };

  const handleQuizComplete = () => {
    setCurrentScreen('dashboard');
  };

  const handleGoToLogin = () => {
    setCurrentScreen('login');
  };

  const handleGoToSignup = () => {
    setCurrentScreen('signup');
  };

  const handleBackToHome = () => {
    setCurrentScreen('onboarding');
  };

  const handleScreenChange = (screen: string) => {
    // Protect admin screen
    if (screen === 'admin' && user?.type !== 'admin') {
      return;
    }
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'onboarding':
        return (
          <OnboardingScreen 
            onGetStarted={handleGetStarted} 
            onLogin={handleGoToLogin}
          />
        );
      case 'login':
        return (
          <LoginScreen 
            onLogin={handleLogin}
            onBackToHome={handleBackToHome}
            onGoToSignup={handleGoToSignup}
          />
        );
      case 'signup':
        return (
          <SignupScreen
            onSignup={handleSignup}
            onBackToLogin={handleGoToLogin}
            onBackToHome={handleBackToHome}
          />
        );
      case 'quiz':
        return <AptitudeQuizScreen onQuizComplete={handleQuizComplete} />;
      case 'dashboard':
        return <RecommendationDashboard />;
      case 'career-path':
        return <CareerPathMapping />;
      case 'colleges':
        return <CollegesDirectory />;
      case 'timeline':
        return <TimelineTracker />;
      case 'admin':
        return <ImpactDashboard />;
      default:
        return (
          <OnboardingScreen 
            onGetStarted={handleGetStarted} 
            onLogin={handleGoToLogin}
          />
        );
    }
  };

  const showNavigation = () => {
    const authScreens = ['onboarding', 'login', 'signup'];
    return !authScreens.includes(currentScreen) && isAuthenticated;
  };

  return (
    <div className="min-h-screen bg-white">
      {showNavigation() && (
        <Navigation 
          currentScreen={currentScreen} 
          onScreenChange={handleScreenChange}
          user={user}
          onLogout={handleLogout}
        />
      )}
      {renderScreen()}
    </div>
  );
}