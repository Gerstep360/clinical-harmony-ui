import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PatientInfoProps {
  patient: {
    fecha_nacimiento: string;
    sexo: string;
    procedencia: string;
    fecha_ingreso: string;
    idioma_hablado: string;
    idioma_materno: string;
    auto_pertenencia_cultural: string;
    estado_civil: string;
    escolaridad: string;
    grupo_sanguineo: string;
    factor_rh: string;
  };
}

export const PatientInfo = ({ patient }: PatientInfoProps) => {
  const getEstadoCivil = (code: string) => {
    const estados = {
      S: "Soltero/a",
      C: "Casado/a",
      D: "Divorciado/a",
      V: "Viudo/a",
    };
    return estados[code as keyof typeof estados] || code;
  };

  const getEscolaridad = (code: string) => {
    const niveles = {
      P: "Primaria",
      S: "Secundaria",
      U: "Universidad",
      N: "Ninguna",
    };
    return niveles[code as keyof typeof niveles] || code;
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 animate-fade-in">
      <Card className="bg-clinic-blue/30">
        <CardHeader>
          <CardTitle>Información Personal</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground">Fecha de Nacimiento</p>
            <p className="font-medium">{new Date(patient.fecha_nacimiento).toLocaleDateString()}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Sexo</p>
            <p className="font-medium">{patient.sexo === "M" ? "Masculino" : "Femenino"}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Estado Civil</p>
            <p className="font-medium">{getEstadoCivil(patient.estado_civil)}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Escolaridad</p>
            <p className="font-medium">{getEscolaridad(patient.escolaridad)}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-clinic-green/30">
        <CardHeader>
          <CardTitle>Información Médica</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground">Grupo Sanguíneo</p>
            <p className="font-medium">{patient.grupo_sanguineo}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Factor RH</p>
            <p className="font-medium">{patient.factor_rh}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Procedencia</p>
            <p className="font-medium">{patient.procedencia}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Fecha de Ingreso</p>
            <p className="font-medium">{new Date(patient.fecha_ingreso).toLocaleDateString()}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-clinic-purple/30">
        <CardHeader>
          <CardTitle>Información Cultural</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground">Idioma Materno</p>
            <p className="font-medium">{patient.idioma_materno}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Idioma Hablado</p>
            <p className="font-medium">{patient.idioma_hablado}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Auto Pertenencia Cultural</p>
            <p className="font-medium">{patient.auto_pertenencia_cultural}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};