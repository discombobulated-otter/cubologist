// components/Sidebar.jsx
import { useState } from "react";
import { Menu, X, Cube, Timer, Eye, Home, Settings, Trophy, BookOpen } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const location = useLocation();

  const navigationItems = [
    { path: "/", label: "Cube Editor", icon: Home },
    { path: "/timer", label: "Solve Timer", icon: Timer },
    { path: "/visualizer", label: "3D Cube", icon: Eye },
    { path: "/algorithms", label: "Algorithms", icon: BookOpen },
    { path: "/stats", label: "Statistics", icon: Trophy },
    { path: "/settings", label: "Settings", icon: Settings },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Mobile Overlay */}
      {!collapsed && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setCollapsed(true)}
        />
      )}

      <div className="flex relative z-50">
        {/* Mobile Toggle Button */}
        <button
          className="fixed top-4 left-4 p-3 md:hidden bg-gray-900 text-white rounded-xl shadow-lg hover:bg-gray-800 transition-all duration-200 z-50"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <Menu size={20} /> : <X size={20} />}
        </button>

        {/* Sidebar */}
        <div
          className={`${
            collapsed ? "-translate-x-full md:translate-x-0" : "translate-x-0"
          } fixed md:relative left-0 top-0 flex flex-col w-72 h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-white shadow-2xl transition-transform duration-300 ease-in-out z-40`}
        >
          {/* Header */}
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg">
                <Cube size={24} className="text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Rubik's Cube
                </h2>
                <p className="text-sm text-gray-400">Master the cube</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navigationItems.map((item, index) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 relative overflow-hidden ${
                    active
                      ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-gray-800"
                  }`}
                  onClick={() => setCollapsed(true)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Active indicator */}
                  {active && (
                    <div className="absolute left-0 top-0 w-1 h-full bg-white rounded-r-full" />
                  )}
                  
                  {/* Icon */}
                  <div className={`p-2 rounded-lg transition-colors duration-200 ${
                    active 
                      ? "bg-white bg-opacity-20" 
                      : "bg-gray-700 group-hover:bg-gray-600"
                  }`}>
                    <Icon size={18} />
                  </div>
                  
                  {/* Label */}
                  <span className="font-medium">{item.label}</span>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-200 rounded-xl" />
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-700">
            <div className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">RC</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Cube Master</p>
                  <p className="text-xs text-gray-400">Level 15</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;