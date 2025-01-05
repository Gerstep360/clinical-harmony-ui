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

interface EvaluationSectionProps {
  form: UseFormReturn<ConsultationFormData>;
}

export const EvaluationSection = ({ form }: EvaluationSectionProps) => {
  return (
    <Card className="bg-clinic-green/30 transition-all duration-300 hover:bg-clinic-green/40">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold animate-fade-in">Evaluación</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <FormField
          control={form.control}
          name="subjetivo"
          render={({ field }) => (
            <FormItem className="animate-fade-in [animation-delay:100ms]">
              <FormLabel>Motivo de Consulta</FormLabel>
              <FormControl>
                <Textarea {...field} className="min-h-[100px] transition-all duration-300" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="objetivo"
          render={({ field }) => (
            <FormItem className="animate-fade-in [animation-delay:200ms]">
              <FormLabel>Evaluación Objetiva</FormLabel>
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