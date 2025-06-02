"use client"

import type * as React from "react"
import {BookOpen, LifeBuoy, Map, Layers, Zap} from "lucide-react"

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
import Link from "next/link";

const data = {
    user: {
        name: "pawabloX",
        email: "design@pawablox.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Getting Started",
            url: "/getting-started",
            icon: BookOpen,
        },

        {
            title: "How to Use",
            url: "/how-to-use",
            icon: LifeBuoy,
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
    ],
}

export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar variant="inset" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/">
                                <div
                                    className="flex aspect-square size-8 items-center justify-center rounded-lg bg-gradient-to-br from-green-400 to-green-600 text-sidebar-primary-foreground">
                                    <span className="text-white font-bold text-sm">P</span>
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    <span className="text-green-600">pawa</span>
                    <span className="text-gray-900">bloX</span>
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
                    <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {data.navMain.map((item) => (
                                <SidebarMenuItem key={item.title}>

                                    <SidebarMenuButton asChild>
                                        <Link href={item.url} className="flex flex-row items-center gap-2">
                                            <item.icon className="w-4 h-4"/>
                                            <span className={"text-sm"}>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}

                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/example-apps" className="flex flex-row items-center gap-2">
                                        <Zap className="w-4 h-4"/>
                                        <span className="text-sm">Example Apps</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <div
                                className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                <span
                                    className="text-xs font-semibold">{data.user.name.slice(0, 2).toUpperCase()}</span>
                            </div>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-semibold">{data.user.name}</span>
                                <span className="truncate text-xs">{data.user.email}</span>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}