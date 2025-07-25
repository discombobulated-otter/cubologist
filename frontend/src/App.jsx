import { useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useLocation,
} from "react-router-dom";
import { Menu, X, Box, Timer, Eye } from "lucide-react";

import CubeEditor from "./utils/CubeEditor";

const navItems = [
    { path: "/", label: "Cube Editor", icon: Box },
    { path: "/timer", label: "Solve Timer", icon: Timer },
    { path: "/visualizer", label: "3D Visualizer", icon: Eye },
];

function Sidebar({ collapsed, toggle }) {
    const location = useLocation();

    return (
        <aside
            className={`bg-gray-900 text-white h-screen transition-all duration-300 ${
                collapsed ? "w-16" : "w-64"
            } flex flex-col`}
        >
            <div className="p-4 flex justify-between items-center">
                <button onClick={toggle} className="text-white">
                    {collapsed ? <Menu /> : <X />}
                </button>
            </div>
            <nav className="flex flex-col gap-2 px-2">
                {navItems.map(({ path, label, icon: Icon }) => {
                    const isActive = location.pathname === path;
                    return (
                        <Link
                            key={path}
                            to={path}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                                isActive
                                    ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
                                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                            }`}
                        >
                            <div className="flex items-center justify-center w-6">
                                <Icon size={18} />
                            </div>
                            {!collapsed && <span>{label}</span>}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}

function SidebarLayout({ children }) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="flex min-h-screen bg-[#030712] text-white">
            <Sidebar collapsed={collapsed} toggle={() => setCollapsed((c) => !c)} />
            <main className="flex-1 p-6 overflow-y-auto">{children}</main>
        </div>
    );
}

function App() {
    return (
        <Router>
            <SidebarLayout>
                <Routes>
                    <Route path="/" element={<CubeEditor />} />
                    <Route path="/timer" element={<div>Timer Page (WIP)</div>} />
                    <Route path="/visualizer" element={<div>3D Visualizer (WIP)</div>} />
                </Routes>
            </SidebarLayout>
        </Router>
    );
}

export default App;
