"use client"

import { IconMoon, IconSun } from "@tabler/icons-react";
import { dockItems } from "./DockData";
import { FloatingDock } from "./FloatingDockComponent";

export function NavbarComponent() {
    return(
        <div className="flex items-center justify-between">
            <FloatingDock items={dockItems}/>
            {/* <IconMoon className="h-5 w-5 text-neutral-700 dark:text-neutral-300" /> */}
            <IconSun className="h-8 w-8 text-neutral-700 dark:text-neutral-300 cursor-pointer" />
        </div>
    )   
}