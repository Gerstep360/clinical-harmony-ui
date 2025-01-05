import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { VitalSignsSection } from "./consultation-form/VitalSignsSection";
import { EvaluationSection } from "./consultation-form/EvaluationSection";
import { DiagnosisSection } from "./consultation-form/DiagnosisSection";
import { PDFGenerator } from "./consultation-form/PDFGenerator";
import { ConsultationFormData } from "./consultation-form/types";
import { Save } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const consultationSchema = z.object({
  temperatura: z.string().min(1, "La temperatura es requerida"),
  talla: z.string().min(1, "La talla es requerida"),
  peso: z.string().min(1, "El peso es requerido"),
  fc: z.string().min(1, "La frecuencia cardíaca es requerida"),
  pa: z.string().min(1, "La presión arterial es requerida"),
  fr: z.string().min(1, "La frecuencia respiratoria es requerida"),
  subjetivo: z.string().min(1, "El motivo de consulta es requerido"),
  objetivo: z.string().min(1, "La evaluación objetiva es requerida"),
  analisis: z.string().min(1, "El análisis es requerido"),
  plan_de_accion: z.string().min(1, "El plan de acción es requerido"),
});

interface NewConsultationFormProps {
  patientId: number;
  patientName: string;
}

export const NewConsultationForm = ({ patientId, patientName }: NewConsultationFormProps) => {
  const { toast } = useToast();
  const form = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      temperatura: "",
      talla: "",
      peso: "",
      fc: "",
      pa: "",
      fr: "",
      subjetivo: "",
      objetivo: "",
      analisis: "",
      plan_de_accion: "",
    },
  });

  const onSubmit = async (values: ConsultationFormData) => {
    try {
      console.log("Form values:", values);
      // Implement form submission logic here
      
      toast({
        title: "Consulta guardada",
        description: "La consulta se ha guardado exitosamente.",
      });
    } catch (error) {
      console.error("Error saving consultation:", error);
      toast({
        title: "Error",
        description: "Hubo un error al guardar la consulta.",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 animate-fade-in">
        <VitalSignsSection form={form} />
        <EvaluationSection form={form} />
        <DiagnosisSection form={form} />

        <div className="flex flex-col md:flex-row gap-4 justify-end">
          <PDFGenerator data={form.getValues()} patientName={patientName} />
          <Button type="submit" className="w-full md:w-auto">
            <Save className="mr-2" />
            Guardar Consulta
          </Button>
        </div>
      </form>
    </Form>
  );
};
