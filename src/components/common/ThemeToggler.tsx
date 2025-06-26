import { useId } from "react";
import { MoonIcon, SunIcon } from "lucide-react";

import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeToggler() {
    const id = useId();
    const { theme, setTheme } = useTheme();

    // Derive checked from context
    const checked = theme === "dark";

    return (
        <div
            className="group inline-flex items-center gap-2"
            data-state={checked ? "checked" : "unchecked"}
        >
            <span
                id={`${id}-off`}
                className="group-data-[state=checked]:text-muted-foreground/70 flex-1 cursor-pointer text-right text-sm font-medium"
                aria-controls={id}
                onClick={() => setTheme("dark")}
            >
                <MoonIcon size={16} aria-hidden="true" />
            </span>

            <Switch
                id={id}
                checked={checked}
                onCheckedChange={() => setTheme(checked ? "light" : "dark")}
                aria-labelledby={`${id}-off ${id}-on`}
                aria-label="Toggle between dark and light mode"
            />
            <span
                id={`${id}-on`}
                className="group-data-[state=unchecked]:text-muted-foreground/70 flex-1 cursor-pointer text-left text-sm font-medium"
                aria-controls={id}
                onClick={() => setTheme("light")}
            >
                <SunIcon size={16} aria-hidden="true" />
            </span>
        </div>
    );
}
