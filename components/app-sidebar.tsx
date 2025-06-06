"use client"

import type * as React from "react"
import { BookOpen, LifeBuoy, Map, Layers, Zap, Globe, Palette } from "lucide-react"
import { usePathname } from "next/navigation"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
} from "@/components/ui/sidebar"
import Link from "next/link"

const data = {
    user: {
        name: "pawabloX",
        email: "design@pawablox.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [

        {
            title: "How to Use",
            url: "/how-to-use",
            icon: LifeBuoy,
        },
        {
            title: "Foundation",
            url: "/foundation",
            icon: Palette,
        },

        {
            title: "All components",
            url: "/all-components",
            icon: Map,
        },
        {
            title: "Custom Components",
            url: "/custom-components",
            icon: Layers,
        },
        {
            title: "Pawa-proxy Guide",
            url: "/pawa-proxy",
            icon: Globe,
        },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const pathname = usePathname()

    return (
        <Sidebar variant="inset" className="border-r border-border" {...props}>
            <SidebarHeader className="border-b border-border">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/">
                                <div className="flex aspect-square size-9 items-center justify-center rounded-lg bg-gradient-to-br from-green-400 to-green-600 text-sidebar-primary-foreground shadow-sm">
                                    <span className="text-white font-bold text-sm">P</span>
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    <span className="text-green-600">pawa</span>
                    <span className="text-gray-900 dark:text-gray-100">bloX</span>
                  </span>
                                    <span className="truncate text-xs text-muted-foreground">Design System</span>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-xs font-medium text-muted-foreground">Navigation</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {data.navMain.map((item) => {
                                const isActive = pathname === item.url
                                return (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <Link
                                                href={item.url}
                                                className={`flex flex-row items-center gap-3 py-1.5 transition-colors ${
                                                    isActive
                                                        ? "text-green-600 font-medium bg-green-50 dark:bg-green-950/20 rounded-md"
                                                        : "hover:bg-muted/50 rounded-md"
                                                }`}
                                            >
                                                <item.icon className={`w-4 h-4 ${isActive ? "text-green-600" : "text-muted-foreground"}`} />
                                                <span className="text-sm">{item.title}</span>
                                                {isActive && <div className="w-1 h-5 bg-green-600 rounded-full ml-auto mr-1"></div>}
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            })}

                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link
                                        href="/example-apps"
                                        className={`flex flex-row items-center gap-3 py-1.5 transition-colors ${
                                            pathname === "/example-apps"
                                                ? "text-green-600 font-medium bg-green-50 dark:bg-green-950/20 rounded-md"
                                                : "hover:bg-muted/50 rounded-md"
                                        }`}
                                    >
                                        <Zap
                                            className={`w-4 h-4 ${pathname === "/example-apps" ? "text-green-600" : "text-muted-foreground"}`}
                                        />
                                        <span className="text-sm">Example Apps</span>
                                        {pathname === "/example-apps" && (
                                            <div className="w-1 h-5 bg-green-600 rounded-full ml-auto mr-1"></div>
                                        )}
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="border-t border-border">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton className="hover:bg-muted/50 rounded-md">
                            <div className="flex aspect-square size-9 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                <span className="text-xs font-semibold">{data.user.name.slice(0, 2).toUpperCase()}</span>
                            </div>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-semibold">{data.user.name}</span>
                                <span className="truncate text-xs text-muted-foreground">{data.user.email}</span>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}
