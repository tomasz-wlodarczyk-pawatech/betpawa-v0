"use client"

import type * as React from "react"
import {BookOpen, LifeBuoy, Map, Layers} from "lucide-react"

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
                            <a href="/">
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
                            </a>
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
                                        <a href={item.url}>
                                            <item.icon/>
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
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
