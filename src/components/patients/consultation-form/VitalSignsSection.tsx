import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UseFormReturn } from "react-hook-form";
import { ConsultationFormData } from "./types";

interface VitalSignsSectionProps {
  form: UseFormReturn<ConsultationFormData>;
}

export const VitalSignsSection = ({ form }: VitalSignsSectionProps) => {
  return (
    <Card className="bg-clinic-blue/30 transition-all duration-300 hover:bg-clinic-blue/40">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold animate-fade-in">Signos Vitales</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormField
          control={form.control}
          name="temperatura"
          render={({ field }) => (
            <FormItem className="animate-fade-in">
              <FormLabel>Temperatura (°C)</FormLabel>
              <FormControl>
                <Input type="number" step="0.1" {...field} className="transition-all duration-300" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="talla"
          render={({ field }) => (
            <FormItem className="animate-fade-in [animation-delay:100ms]">
              <FormLabel>Talla (cm)</FormLabel>
              <FormControl>
                <Input type="number" {...field} className="transition-all duration-300" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="peso"
          render={({ field }) => (
            <FormItem className="animate-fade-in [animation-delay:200ms]">
              <FormLabel>Peso (kg)</FormLabel>
              <FormControl>
                <Input type="number" step="0.1" {...field} className="transition-all duration-300" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fc"
          render={({ field }) => (
            <FormItem className="animate-fade-in [animation-delay:300ms]">
              <FormLabel>Frecuencia Cardíaca</FormLabel>
              <FormControl>
                <Input type="number" {...field} className="transition-all duration-300" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pa"
          render={({ field }) => (
            <FormItem className="animate-fade-in [animation-delay:400ms]">
              <FormLabel>Presión Arterial</FormLabel>
              <FormControl>
                <Input {...field} placeholder="120/80" className="transition-all duration-300" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fr"
          render={({ field }) => (
            <FormItem className="animate-fade-in [animation-delay:500ms]">
              <FormLabel>Frecuencia Respiratoria</FormLabel>
              <FormControl>
                <Input type="number" {...field} className="transition-all duration-300" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
};