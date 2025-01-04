import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PatientInfo } from "@/components/patients/PatientInfo";
import { ConsultationHistory } from "@/components/patients/ConsultationHistory";
import { NewConsultationForm } from "@/components/patients/NewConsultationForm";

const PatientProfile = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("info");

  // Mock patient data - replace with actual data fetching
  const patient = {
    id_paciente: 1,
    apellido_paterno: "García",
    apellido_materno: "López",
    nombres: "Juan Carlos",
    fecha_nacimiento: "1990-05-15",
    sexo: "M",
    procedencia: "Local",
    fecha_ingreso: "2024-01-01",
    idioma_hablado: "Español",
    idioma_materno: "Español",
    auto_pertenencia_cultural: "Mestizo",
    estado_civil: "S",
    escolaridad: "U",
    grupo_sanguineo: "O+",
    factor_rh: "Positivo",
  };

  return (
    <div className="container mx-auto p-6 space-y-6 animate-fade-in">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            {patient.nombres} {patient.apellido_paterno} {patient.apellido_materno}
          </CardTitle>
          <CardDescription>ID: {patient.id_paciente}</CardDescription>
        </CardHeader>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="info">Información Personal</TabsTrigger>
          <TabsTrigger value="history">Historial Clínico</TabsTrigger>
          <TabsTrigger value="new-consultation">Nueva Consulta</TabsTrigger>
        </TabsList>
        <TabsContent value="info" className="mt-6">
          <PatientInfo patient={patient} />
        </TabsContent>
        <TabsContent value="history" className="mt-6">
          <ConsultationHistory patientId={patient.id_paciente} />
        </TabsContent>
        <TabsContent value="new-consultation" className="mt-6">
          <NewConsultationForm patientId={patient.id_paciente} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PatientProfile;