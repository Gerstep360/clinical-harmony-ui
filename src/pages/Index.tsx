// src/pages/Index.tsx
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Users, UserPlus, Activity } from 'lucide-react';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background dark:bg-background-dark animate-fade-in text-foreground dark:text-foreground transition-colors duration-300">
        <AppSidebar />
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <SidebarTrigger />
            <ThemeToggle />
          </div>
          
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {/* Tarjeta Total Pacientes */}
              <Card className="bg-card dark:bg-card-dark">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Pacientes
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground dark:text-muted-foreground-dark" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,234</div>
                </CardContent>
              </Card>
              
              {/* Tarjeta Consultas Hoy */}
              <Card className="bg-card dark:bg-card-dark">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Consultas Hoy
                  </CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground dark:text-muted-foreground-dark" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">23</div>
                </CardContent>
              </Card>
              
              {/* Tarjeta Nuevos Pacientes */}
              <Card className="bg-card dark:bg-card-dark">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Nuevos Pacientes
                  </CardTitle>
                  <UserPlus className="h-4 w-4 text-muted-foreground dark:text-muted-foreground-dark" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                </CardContent>
              </Card>

              {/* Tarjeta Consultas Pendientes */}
              <Card className="bg-card dark:bg-card-dark">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Consultas Pendientes
                  </CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground dark:text-muted-foreground-dark" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {/* Consultas Recientes */}
              <Card className="bg-card dark:bg-card-dark">
                <CardHeader>
                  <CardTitle>Consultas Recientes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent dark:hover:bg-accent-dark transition-colors"
                      >
                        <div>
                          <div className="font-medium">Juan Pérez</div>
                          <div className="text-sm text-muted-foreground dark:text-muted-foreground-dark">
                            Control rutinario
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground dark:text-muted-foreground-dark">
                          Hace {i} hora{i > 1 ? 's' : ''}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Nuevos Pacientes */}
              <Card className="bg-card dark:bg-card-dark">
                <CardHeader>
                  <CardTitle>Nuevos Pacientes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent dark:hover:bg-accent-dark transition-colors"
                      >
                        <div>
                          <div className="font-medium">María García</div>
                          <div className="text-sm text-muted-foreground dark:text-muted-foreground-dark">
                            Primera consulta
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground dark:text-muted-foreground-dark">
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
