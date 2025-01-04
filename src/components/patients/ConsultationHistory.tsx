import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ConsultationHistoryProps {
  patientId: number;
}

export const ConsultationHistory = ({ patientId }: ConsultationHistoryProps) => {
  const [filterType, setFilterType] = useState("all");

  // Mock consultations data - replace with actual data fetching
  const consultations = [
    {
      id_consulta: 1,
      fecha: "2024-02-20",
      edad: 33,
      talla: 170,
      peso: 70,
      temperatura: 36.5,
      fc: 80,
      pa: "120/80",
      fr: 16,
      subjetivo: "Dolor de cabeza",
      objetivo: "Paciente presenta...",
      analisis: "Migraña",
      plan_de_accion: "Reposo y medicación",
    },
    // Add more mock consultations as needed
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold">Historial de Consultas</h3>
        <Select value={filterType} onValueChange={setFilterType}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Filtrar por tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas las consultas</SelectItem>
            <SelectItem value="routine">Consultas de rutina</SelectItem>
            <SelectItem value="emergency">Emergencias</SelectItem>
            <SelectItem value="followup">Seguimientos</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        {consultations.map((consultation) => (
          <Card
            key={consultation.id_consulta}
            className="hover:bg-accent transition-colors cursor-pointer"
          >
            <CardHeader>
              <CardTitle className="text-lg">
                Consulta del {new Date(consultation.fecha).toLocaleDateString()}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Temperatura</p>
                  <p className="font-medium">{consultation.temperatura}°C</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Presión Arterial</p>
                  <p className="font-medium">{consultation.pa}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Peso</p>
                  <p className="font-medium">{consultation.peso} kg</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Talla</p>
                  <p className="font-medium">{consultation.talla} cm</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">Diagnóstico</p>
                <p className="font-medium">{consultation.analisis}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};