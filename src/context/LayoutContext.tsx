import { useResponsive } from "@/hooks/useResponsive";
import { createContext, useEffect, useState, type ReactNode } from "react";

interface LayoutContextProps {
    sidebarCollapsed: boolean;
    setSidebarCollapsed: (collapsed: boolean) => void;
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (open: boolean) => void;
    currentSection: string;
    setCurrentSection: (section: string) => void;
    isMobile: boolean;
    isTablet: boolean;
}

const LayoutContext = createContext<LayoutContextProps | null>(null);

interface LayoutProviderProps {
    children: ReactNode;
}

const LayoutProvider = ({ children }: LayoutProviderProps) => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [currentSection, setCurrentSection] = useState("dashboard");
    const { isMobile, isTablet, isDesktop } = useResponsive();

    // Persist sidebar state only for desktop users
    useEffect(() => {
        if (isDesktop) {
            const savedState = localStorage.getItem("sidebarCollapsed");
            if (savedState !== null) {
                setSidebarCollapsed(JSON.parse(savedState));
            }
        }
    }, [isDesktop]);

    useEffect(() => {
        if (isDesktop) {
            localStorage.setItem(
                "sidebarCollapsed",
                JSON.stringify(sidebarCollapsed)
            );
        }
    }, [sidebarCollapsed, isDesktop]);

    // Close mobile menu when screen size changes to desktop
    useEffect(() => {
        if (isDesktop) {
            setMobileMenuOpen(false);
        }
    }, [isDesktop]);
    
    return (
        <LayoutContext.Provider
            value={{
                sidebarCollapsed,
                setSidebarCollapsed,
                mobileMenuOpen,
                setMobileMenuOpen,
                currentSection,
                setCurrentSection,
                isMobile,
                isTablet,
            }}
        >
            {children}
        </LayoutContext.Provider>
    );
};

export { LayoutContext, LayoutProvider };
