import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const mockConsultations = [
  {
    id: 1,
    patientName: "Juan Pérez López",
    date: "2024-02-20",
    type: "Control rutinario",
    status: "Completada",
  },
  {
    id: 2,
    patientName: "María García Ruiz",
    date: "2024-02-18",
    type: "Emergencia",
    status: "Completada",
  },
];

const Consultations = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background animate-fade-in">
        <AppSidebar />
        <main className="flex-1 p-6">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Consultas</h1>

            <Card>
              <CardHeader>
                <CardTitle>Historial de Consultas</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Paciente</TableHead>
                      <TableHead>Fecha</TableHead>
                      <TableHead>Tipo</TableHead>
                      <TableHead>Estado</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockConsultations.map((consultation) => (
                      <TableRow key={consultation.id} className="cursor-pointer hover:bg-muted">
                        <TableCell>{consultation.id}</TableCell>
                        <TableCell>{consultation.patientName}</TableCell>
                        <TableCell>{consultation.date}</TableCell>
                        <TableCell>{consultation.type}</TableCell>
                        <TableCell>{consultation.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Consultations;