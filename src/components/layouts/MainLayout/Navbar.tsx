import { Menu, Package, Search } from "lucide-react";
import { useState } from "react";
import ThemeToggler from "@/components/common/ThemeToggler";
import NotificationsPopover from "@/components/NotificationsPopover";
import { useLayout } from "@/hooks/useLayout";

const Navbar = () => {
    const {
        sidebarCollapsed,
        setSidebarCollapsed,
        mobileMenuOpen,
        setMobileMenuOpen,
        isMobile,
        isTablet,
    } = useLayout();

    const [searchFocused, setSearchFocused] = useState(false);

    return (
        <header className="bg-background border-b border-border px-4 py-3 flex items-center justify-between relative z-40 transition-colors">
            {/* Left section - Logo and menu toggle */}
            <div className="flex items-center space-x-4">
                <button
                    className="p-2 rounded-md hover:bg-muted transition-colors focus:ring-2 focus:ring-ring"
                    onClick={() => {
                        if (isMobile) {
                            setMobileMenuOpen(!mobileMenuOpen);
                        } else {
                            setSidebarCollapsed(!sidebarCollapsed);
                        }
                    }}
                    aria-label={
                        isMobile ? "Toggle mobile menu" : "Toggle sidebar"
                    }
                >
                    <Menu className="h-5 w-5 text-foreground" />
                </button>

                <div className="flex items-center space-x-2">
                    <Package className="h-8 w-8 text-blue-60 dark:text-blue-400" />

                    <span
                        className={`text-xl font-semibold text-foreground transition-colors ${
                            isMobile ? "hidden xs:block" : ""
                        }`}
                    >
                        TechHub
                    </span>
                </div>
            </div>

            {/* Center section - Search */}
            <div
                className={`flex-1 max-w-2xl transition-all duration-200 ${
                    isMobile
                        ? searchFocused
                            ? "mx-2"
                            : "mx-4 max-w-xs"
                        : "mx-8"
                }`}
            >
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder={
                            isMobile
                                ? "Search..."
                                : "Search products, suppliers, locations..."
                        }
                        className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                        onFocus={() => setSearchFocused(true)}
                        onBlur={() => setSearchFocused(false)}
                    />
                </div>
            </div>

            {/* Right section - Theme toggle, notifications and user menu */}
            <div className="flex items-center space-x-2 sm:space-x-4">
                <ThemeToggler />
                <NotificationsPopover />
            </div>
        </header>
    );
};

export default Navbar;
