import { Menu, X, Box, Timer, Eye } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const navItems = [
    { path: "/cubologist", label: "Cube Editor", icon: Box },
    { path: "/cubologist/timer", label: "Solve Timer", icon: Timer },
    { path: "/cubologist/visualizer", label: "3D Visualizer", icon: Eye },
];

function Navbar() {
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className="bg-gray-900 text-white shadow-lg">
            <div className="absolute top-0 left-0 w-full h-16 z-100  mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Brand */}
                    <div className="flex-shrink-0">
                        <button className="text-xl font-bold" onClick={() => window.location.href = "/cubologist"}>Cubologist</button>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-4">
                            {navItems.map(({ path, label, icon: Icon }) => {
                                const isActive = location.pathname === path;
                                return (
                                    <Link
                                        key={path}
                                        to={path}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                                            isActive
                                                ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
                                                : "text-gray-300 hover:text-white hover:bg-gray-800"
                                        }`}
                                    >
                                        <Icon size={18} />
                                        <span>{label}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-700">
                            {navItems.map(({ path, label, icon: Icon }) => {
                                const isActive = location.pathname === path;
                                return (
                                    <Link
                                        key={path}
                                        to={path}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 block ${
                                            isActive
                                                ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
                                                : "text-gray-300 hover:text-white hover:bg-gray-800"
                                        }`}
                                    >
                                        <Icon size={18} />
                                        <span>{label}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;