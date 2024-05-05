'use client'

import Navbar from "@/navigation/horizontal/NavbarContent";
import Sidebar, { SidebarItem } from "@/navigation/vertical/NavbarContent"
import { LayoutDashboard, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings } from "lucide-react";
export default function PagesLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-screen">
            <Sidebar>
                <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" active />
                <SidebarItem icon={<StickyNote size={20} />} text="Projects" alert />
                <SidebarItem icon={<Calendar size={20} />} text="Calendar" />
                <SidebarItem icon={<Layers size={20} />} text="Tasks" />
                <SidebarItem icon={<Flag size={20} />} text="Reporting" />
                <hr className="my-3" />
                <SidebarItem icon={<Settings size={20} />} text="Settings" />
                <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
            </Sidebar>

            <main className="w-full flex flex-col ">
                <Navbar />
                <div className="h-screen overflow-auto">
                    {children}
                </div>
            </main>
        </div>
    )
}