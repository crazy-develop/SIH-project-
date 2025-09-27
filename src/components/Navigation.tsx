import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { 
  Home, 
  BrainCircuit, 
  User, 
  MapPin, 
  School, 
  Calendar, 
  BarChart3,
  Menu,
  X,
  LogOut,
  Settings
} from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  currentScreen: string;
  onScreenChange: (screen: string) => void;
  user?: any;
  onLogout?: () => void;
}

const screens = [
  { id: 'onboarding', name: 'Welcome', icon: Home },
  { id: 'quiz', name: 'Quiz', icon: BrainCircuit },
  { id: 'dashboard', name: 'Dashboard', icon: User },
  { id: 'career-path', name: 'Career Path', icon: MapPin },
  { id: 'colleges', name: 'Colleges', icon: School },
  { id: 'timeline', name: 'Timeline', icon: Calendar },
  { id: 'admin', name: 'Admin', icon: BarChart3 },
];

export function Navigation({ currentScreen, onScreenChange, user, onLogout }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">CG</span>
            </div>
            <span className="text-xl font-semibold text-slate-800">Career Guide</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-1">
              {screens
                .filter(screen => user?.type === 'admin' || screen.id !== 'admin')
                .map((screen) => {
                const Icon = screen.icon;
                return (
                  <Button
                    key={screen.id}
                    variant={currentScreen === screen.id ? "default" : "ghost"}
                    size="sm"
                    onClick={() => onScreenChange(screen.id)}
                    className="flex items-center space-x-2"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{screen.name}</span>
                  </Button>
                );
              })}
            </div>
            
            {user && (
              <div className="flex items-center space-x-3 border-l border-slate-200 pl-4">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-blue-100 text-blue-600 text-sm">
                    {user.name?.split(' ').map((n: string) => n[0]).join('') || 'U'}
                  </AvatarFallback>
                </Avatar>
                <div className="hidden lg:block">
                  <p className="text-sm font-medium text-slate-800">{user.name}</p>
                  <p className="text-xs text-slate-600 capitalize">{user.type}</p>
                </div>
                <Button variant="ghost" size="sm" onClick={onLogout}>
                  <LogOut className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden bg-white border-b border-slate-200">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">CG</span>
            </div>
            <span className="text-lg font-semibold text-slate-800">Career Guide</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
        
        {isMobileMenuOpen && (
          <div className="border-t border-slate-200 bg-white">
            <div className="p-4">
              <div className="grid grid-cols-2 gap-2 mb-4">
                {screens
                  .filter(screen => user?.type === 'admin' || screen.id !== 'admin')
                  .map((screen) => {
                  const Icon = screen.icon;
                  return (
                    <Button
                      key={screen.id}
                      variant={currentScreen === screen.id ? "default" : "ghost"}
                      size="sm"
                      onClick={() => {
                        onScreenChange(screen.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex flex-col items-center space-y-1 h-auto py-3"
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-xs">{screen.name}</span>
                    </Button>
                  );
                })}
              </div>
              
              {user && (
                <div className="border-t border-slate-200 pt-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-blue-100 text-blue-600">
                        {user.name?.split(' ').map((n: string) => n[0]).join('') || 'U'}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium text-slate-800">{user.name}</p>
                      <p className="text-xs text-slate-600 capitalize">{user.type}</p>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => {
                      onLogout?.();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full justify-start"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}