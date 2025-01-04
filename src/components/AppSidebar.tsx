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
    <Sidebar className="bg-card transition-all duration-300">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-foreground transition-colors duration-300">
            Clínica
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item, index) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="flex items-center gap-2 text-foreground hover:text-primary transition-all duration-300 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <item.icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
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