"use client";

import * as React from "react";
import { Shield, User } from "lucide-react";

import { NavMain } from "@/components/nav-main";
// import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
// import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useSession } from "next-auth/react";

// This is sample data.

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: d } = useSession();
  const { user } = d || {};
  console.log("user", user);
  const adminRoutes = {
    title: "Admin Dashboard",
    url: "#",
    icon: Shield,
    isActive: true,
    items: [
      {
        title: "Product List",
        url: "/dashboard/admin/product-list",
      },
    ],
  };
  const data = {
    user: {
      name: String(user?.username),
      email: String(user?.email),
      avatar:
        user?.image_url || "https://i.ibb.co.com/Nnt2N26/user-placeholder.png",
    },
    navMain: [
      {
        title: "User Dashboard",
        url: "#",
        icon: User,
        isActive: true,
        items: [
          {
            title: "Profile",
            url: "/dashboard",
          },
          {
            title: "Add Product",
            url: "/dashboard/user/product-list/add",
          },
          {
            title: "Product List",
            url: "/dashboard/user/product-list",
          },
          {
            title: "Cart",
            url: "/dashboard/user/cart",
          },
          {
            title: "Wish List",
            url: "/dashboard/user/wish-list",
          },
          {
            title: "Deposite Balance",
            url: "/dashboard/user/deposite",
          },
          {
            title: "Check Balance",
            url: "/dashboard/user/info",
          },
          {
            title: "My Orders",
            url: "/dashboard/user/my-sold-items",
          },
          {
            title: "Purchase History",
            url: "/dashboard/user/purchase-history",
          },
          {
            title: "Change Password",
            url: "/dashboard/user/change-password",
          },
        ],
      },
    ],
  };
  if (user?.isAdmin) {
    data.navMain.push(adminRoutes);
    console.log(user);
  }
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
  // <NavProjects projects={data.projects} />
  /*
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      {
        title: "Models",
        url: "#",
        icon: Bot,
        items: [
          {
            title: "Genesis",
            url: "#",
          },
          {
            title: "Explorer",
            url: "#",
          },
          {
            title: "Quantum",
            url: "#",
          },
        ],
      },
    projects: [
      {
        name: "Design Engineering",
        url: "#",
        icon: Frame,
      },
      {
        name: "Sales & Marketing",
        url: "#",
        icon: PieChart,
      },
      {
        name: "Travel",
        url: "#",
        icon: Map,
      },
    ],
    teams: [
      {
        name: "Acme Inc",
        logo: GalleryVerticalEnd,
        plan: "Enterprise",
      },
      {
        name: "Acme Corp.",
        logo: AudioWaveform,
        plan: "Startup",
      },
      {
        name: "Evil Corp.",
        logo: Command,
        plan: "Free",
      },
    ],
      {
        title: "Settings",
        url: "#",
        icon: Settings2,
        items: [
          {
            title: "General",
            url: "#",
          },
          {
            title: "Team",
            url: "#",
          },
          {
            title: "Billing",
            url: "#",
          },
          {
            title: "Limits",
            url: "#",
          },
        ],
      },
  */
}
