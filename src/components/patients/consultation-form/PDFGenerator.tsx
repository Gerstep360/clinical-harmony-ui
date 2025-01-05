import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from "@react-pdf/renderer";
import { ConsultationFormData } from "./types";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

interface PDFGeneratorProps {
  data: ConsultationFormData;
  patientName: string;
}

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 12,
    marginBottom: 3,
  },
});

const ConsultationPDF = ({ data, patientName }: PDFGeneratorProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Historia Clínica - {patientName}</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Signos Vitales</Text>
        <Text style={styles.text}>Temperatura: {data.temperatura}°C</Text>
        <Text style={styles.text}>Talla: {data.talla} cm</Text>
        <Text style={styles.text}>Peso: {data.peso} kg</Text>
        <Text style={styles.text}>Frecuencia Cardíaca: {data.fc}</Text>
        <Text style={styles.text}>Presión Arterial: {data.pa}</Text>
        <Text style={styles.text}>Frecuencia Respiratoria: {data.fr}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Evaluación</Text>
        <Text style={styles.text}>Motivo de Consulta:</Text>
        <Text style={styles.text}>{data.subjetivo}</Text>
        <Text style={styles.text}>Evaluación Objetiva:</Text>
        <Text style={styles.text}>{data.objetivo}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Diagnóstico y Plan</Text>
        <Text style={styles.text}>Análisis/Diagnóstico:</Text>
        <Text style={styles.text}>{data.analisis}</Text>
        <Text style={styles.text}>Plan de Acción:</Text>
        <Text style={styles.text}>{data.plan_de_accion}</Text>
      </View>
    </Page>
  </Document>
);

export const PDFGenerator = ({ data, patientName }: PDFGeneratorProps) => {
  const fileName = `consulta_${patientName.toLowerCase().replace(/\s+/g, '_')}.pdf`;
  
  return (
    <PDFDownloadLink
      document={<ConsultationPDF data={data} patientName={patientName} />}
      fileName={fileName}
    >
      {({ loading }) => (
        <Button 
          variant="outline"
          disabled={loading}
          className="w-full md:w-auto animate-fade-in"
          type="button"
        >
          <FileDown className="mr-2" />
          {loading ? "Generando PDF..." : "Descargar PDF"}
        </Button>
      )}
    </PDFDownloadLink>
  );
};