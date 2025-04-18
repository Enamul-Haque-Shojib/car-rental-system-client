
import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  MessageCircleMore,
  PieChart,
  Settings,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    
  } from "@/components/ui/sidebar"
import NavMain from "./NavMain";
import NavUser from "./NavUser";


import { ChevronsUpDown, Plus } from "lucide-react"
import { Link } from "react-router";
import NavProject from "./NavProject";
import useAuth from "@/hooks/useAuth";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  
  navAdmin: [
    {
      title: "Car Management",
      url: "",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Add Car",
          url: "/dashboard/add_car",
        },
        {
          title: "All Cars",
          url: "/dashboard/all_cars",
        },
       
      ],
    },
    {
      title: "Booking Management",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "All User Booked",
          url: "/dashboard/all_user_booked",
        },
      
      ],
    },
    {
      title: "Payment Management",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "All User Payment",
          url: "/dashboard/all_user_payment",
        },
      
      ],
    },
  
    {
      title: "User Management",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "All Users",
          url: "/dashboard/all_users",
        },
      ],
    },
    {
      title: "Profile Management",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "Profile",
          url: "/dashboard/profile",
        },
      ],
    },
    {
      title: "Chatting",
      url: "#",
      icon: MessageCircleMore,
      items: [
        {
          title: "Chat",
          url: "/dashboard/adminchat",
        },
      ],
    },
  ],
  navOwner: [
    {
      title: "Car Management",
      url: "",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Add Car",
          url: "/dashboard/add_car",
        },
        {
          title: "All Cars",
          url: "/dashboard/all_cars",
        },
       
      ],
    },
    {
      title: "Booking Management",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "All My Booked",
          url: "/dashboard/all_my_booked",
        },
        {
          title: "All User Booked",
          url: "/dashboard/all_user_booked",
        },
      
      ],
    },
    {
      title: "Payment Management",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "All My Payment",
          url: "/dashboard/all_my_payment",
        },
        {
          title: "All User Payment",
          url: "/dashboard/all_user_payment",
        },
      
      ],
    },
    {
      title: "Profile Management",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "Profile",
          url: "/dashboard/profile",
        },
      ],
    },
  ],
  navUser: [
    {
      title: "Booking Management",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "All My Booked",
          url: "/dashboard/all_my_booked",
        },
       
      
      ],
    },
    {
      title: "Payment Management",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "All My Payment",
          url: "/dashboard/all_my_payment",
        },
      
      
      ],
    },
    {
      title: "Profile Management",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "Profile",
          url: "/dashboard/profile",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: Frame,
    },
  ],
}
const AppSidebar = ({ ...props }) => {
  const {user, role} = useAuth();

  
    return (
        <Sidebar collapsible="icon" {...props}>
          <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
            <Link to='/'>
                    <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                    >
                        
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                        SM
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">
                        SmartCar Rentals
                        </span>
                        <span className="truncate text-xs">Car</span>
                    </div>
                    
                    </SidebarMenuButton>
                    </Link>
            </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent>
             <NavProject projects={data.projects} />
             {
              role==='admin' && <NavMain items={data.navAdmin} />
             }
             {
              role==='owner' && <NavMain items={data.navOwner} />
             }
             {
              role==='user' && <NavMain items={data.navUser} />
             }
            
           
          </SidebarContent>
          <SidebarFooter>
            <NavUser />
          </SidebarFooter>
          <SidebarRail />
        </Sidebar>
      )
};

export default AppSidebar;