/** Based on the JSON Resume work item, with a local `commitment` extension. */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  /**
   * Marks an open-ended role that ran alongside the primary career. Omitted
   * means full-time; `sortPositions` uses this to keep an enduring side role
   * from outranking every later full-time position.
   */
  commitment?: 'part-time';
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'Dirección de Proyección Social y Extensión Cultural — UNCP',
    position: 'Asistente de Automatización',
    url: 'https://www.uncp.edu.pe',
    startDate: '2024-01-01',
    summary: `Automatización de reportes con Python para la emisión de certificados institucionales
    en la Dirección de Proyección Social y Extensión Cultural de la UNCP (Edificio Inteligente, 2do piso).
    Simulación de descargas manuales y generación de documentos con los detalles requeridos para los certificados.`,
    highlights: [
      'Automatización de generación de reportes con Python reduciendo tiempo de procesamiento manual.',
      'Simulación de flujos de descarga manual para integración con sistemas de emisión de certificados.',
      'Desarrollo de scripts para formateo y validación de datos requeridos por la oficina.',
    ],
  },
];

export default work;
