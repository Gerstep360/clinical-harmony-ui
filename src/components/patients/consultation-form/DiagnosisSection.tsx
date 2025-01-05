import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UseFormReturn } from "react-hook-form";
import { ConsultationFormData } from "./types";

interface DiagnosisSectionProps {
  form: UseFormReturn<ConsultationFormData>;
}

export const DiagnosisSection = ({ form }: DiagnosisSectionProps) => {
  return (
    <Card className="bg-clinic-peach/30 transition-all duration-300 hover:bg-clinic-peach/40">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold animate-fade-in">Diagnóstico y Plan</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <FormField
          control={form.control}
          name="analisis"
          render={({ field }) => (
            <FormItem className="animate-fade-in [animation-delay:100ms]">
              <FormLabel>Análisis/Diagnóstico</FormLabel>
              <FormControl>
                <Textarea {...field} className="min-h-[100px] transition-all duration-300" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="plan_de_accion"
          render={({ field }) => (
            <FormItem className="animate-fade-in [animation-delay:200ms]">
              <FormLabel>Plan de Acción</FormLabel>
              <FormControl>
                <Textarea {...field} className="min-h-[100px] transition-all duration-300" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
};