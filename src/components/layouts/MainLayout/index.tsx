import { Outlet } from "react-router";
import Navbar from "./Navbar";
import { LayoutProvider } from "@/context/LayoutContext";

const MainLayout = () => {
    return (
        <LayoutProvider>
            <div className="">
                {/* Sidebar */}

                <div className="">
                    {/* Navbar */}
                    <Navbar />

                    <main className="">
                        <Outlet />
                    </main>
                </div>
            </div>
        </LayoutProvider>
    );
};

export default MainLayout;
