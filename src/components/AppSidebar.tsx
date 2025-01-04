// src/components/AppSidebar.tsx
import { FileText, Home, Search, User, Users } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", icon: Home, url: "/" },
  { title: "Pacientes", icon: Users, url: "/patients" },
  { title: "Consultas", icon: FileText, url: "/consultations" },
  { title: "Búsqueda", icon: Search, url: "/search" },
  { title: "Responsables", icon: User, url: "/responsibles" },
];

export function AppSidebar() {
  return (
    <Sidebar className="bg-card dark:bg-card-dark transition-colors duration-500">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-foreground dark:text-foreground transition-colors duration-500">
            Clínica
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="flex items-center gap-2 text-foreground dark:text-foreground hover:text-primary transition-colors duration-300"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
