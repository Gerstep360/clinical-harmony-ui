import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
}

export const NewConsultationForm = ({ patientId }: NewConsultationFormProps) => {
  const form = useForm<z.infer<typeof consultationSchema>>({
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

  const onSubmit = (values: z.infer<typeof consultationSchema>) => {
    console.log(values);
    // Implement form submission logic here
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 animate-fade-in">
        <Card className="bg-clinic-blue/30">
          <CardHeader>
            <CardTitle>Signos Vitales</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="temperatura"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Temperatura (°C)</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="talla"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Talla (cm)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="peso"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Peso (kg)</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fc"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Frecuencia Cardíaca</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pa"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Presión Arterial</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="120/80" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fr"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Frecuencia Respiratoria</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card className="bg-clinic-green/30">
          <CardHeader>
            <CardTitle>Evaluación</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="subjetivo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Motivo de Consulta</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="objetivo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Evaluación Objetiva</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card className="bg-clinic-purple/30">
          <CardHeader>
            <CardTitle>Diagnóstico y Plan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="analisis"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Análisis/Diagnóstico</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="plan_de_accion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Plan de Acción</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button type="submit" className="w-full md:w-auto">
            Guardar Consulta
          </Button>
        </div>
      </form>
    </Form>
  );
};