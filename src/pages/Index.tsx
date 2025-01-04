// src/pages/Index.tsx
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Users, UserPlus, Activity } from 'lucide-react';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background dark:bg-background transition-colors duration-300">
        <AppSidebar />
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6 animate-fade-in">
            <SidebarTrigger className="transition-transform duration-300 hover:scale-105" />
            <ThemeToggle />
          </div>
          
          <div className="space-y-6">
            <h1 className="text-3xl font-bold animate-fade-in">Dashboard</h1>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {/* Tarjeta Total Pacientes */}
              <Card className="bg-card transition-all duration-300 hover:scale-105 animate-fade-in">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium transition-colors duration-300">
                    Total Pacientes
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground transition-colors duration-300" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold transition-colors duration-300">1,234</div>
                </CardContent>
              </Card>
              
              {/* Tarjeta Consultas Hoy */}
              <Card className="bg-card transition-all duration-300 hover:scale-105 animate-fade-in [animation-delay:150ms]">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium transition-colors duration-300">
                    Consultas Hoy
                  </CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground transition-colors duration-300" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold transition-colors duration-300">23</div>
                </CardContent>
              </Card>
              
              {/* Tarjeta Nuevos Pacientes */}
              <Card className="bg-card transition-all duration-300 hover:scale-105 animate-fade-in [animation-delay:300ms]">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium transition-colors duration-300">
                    Nuevos Pacientes
                  </CardTitle>
                  <UserPlus className="h-4 w-4 text-muted-foreground transition-colors duration-300" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold transition-colors duration-300">12</div>
                </CardContent>
              </Card>

              {/* Tarjeta Consultas Pendientes */}
              <Card className="bg-card transition-all duration-300 hover:scale-105 animate-fade-in [animation-delay:450ms]">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium transition-colors duration-300">
                    Consultas Pendientes
                  </CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground transition-colors duration-300" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold transition-colors duration-300">8</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {/* Consultas Recientes */}
              <Card className="bg-card transition-all duration-300 hover:scale-105 animate-fade-in [animation-delay:600ms]">
                <CardHeader>
                  <CardTitle className="transition-colors duration-300">Consultas Recientes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors duration-300 animate-fade-in"
                        style={{ animationDelay: `${(i * 150) + 750}ms` }}
                      >
                        <div>
                          <div className="font-medium transition-colors duration-300">Juan Pérez</div>
                          <div className="text-sm text-muted-foreground transition-colors duration-300">
                            Control rutinario
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground transition-colors duration-300">
                          Hace {i} hora{i > 1 ? 's' : ''}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Nuevos Pacientes */}
              <Card className="bg-card transition-all duration-300 hover:scale-105 animate-fade-in [animation-delay:750ms]">
                <CardHeader>
                  <CardTitle className="transition-colors duration-300">Nuevos Pacientes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors duration-300 animate-fade-in"
                        style={{ animationDelay: `${(i * 150) + 900}ms` }}
                      >
                        <div>
                          <div className="font-medium transition-colors duration-300">María García</div>
                          <div className="text-sm text-muted-foreground transition-colors duration-300">
                            Primera consulta
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground transition-colors duration-300">
                          Hace {i} día{i > 1 ? 's' : ''}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;