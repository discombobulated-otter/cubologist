    import { useState } from "react";
    import {
        BrowserRouter as Router,
        Routes,
        Route,
        Link,
        useLocation,
    } from "react-router-dom";
    import CubeEditor from "./utils/CubeEditor";
    import Voxel from "./threeDimensionalCube/voxel";
    import Sidebar from "./components/SideBar";


    

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
                        <Route path="/visualizer" element={<Voxel/>} />
                    </Routes>
                </SidebarLayout>
            </Router>
        );
    }

    export default App;
