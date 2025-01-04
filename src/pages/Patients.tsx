//src\pages\Patients.tsx
import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search } from "lucide-react";

const mockPatients = [
  {
    id: 1,
    name: "Juan Pérez López",
    birthDate: "1990-05-15",
    lastConsultation: "2024-02-20",
  },
  {
    id: 2,
    name: "María García Ruiz",
    birthDate: "1985-08-22",
    lastConsultation: "2024-02-18",
  },
];

const Patients = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background animate-fade-in">
        <AppSidebar />
        <main className="flex-1 p-6">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Pacientes</h1>

            <Card>
              <CardHeader>
                <CardTitle>Buscar Pacientes</CardTitle>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar por nombre, ID o fecha..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Nombre</TableHead>
                      <TableHead>Fecha de Nacimiento</TableHead>
                      <TableHead>Última Consulta</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockPatients.map((patient) => (
                      <TableRow key={patient.id} className="cursor-pointer hover:bg-muted">
                        <TableCell>{patient.id}</TableCell>
                        <TableCell>{patient.name}</TableCell>
                        <TableCell>{patient.birthDate}</TableCell>
                        <TableCell>{patient.lastConsultation}</TableCell>
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

export default Patients;