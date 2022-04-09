import { PdfCards } from './document';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { CardsProps } from '../CardSorteio';

export type DownloadPdfProps = {
  card: CardsProps;
};

export default function DownloadPdf({ card }: DownloadPdfProps) {
  return (
    <PDFDownloadLink
      document={<PdfCards card={card} />}
      fileName={
        'sorteio do dia ' +
        new Date(card.date_sort).toLocaleDateString() +
        '.pdf'
      }
    >
      {({ loading }) => (loading ? 'Carregando Documento...' : 'Baixar PDF')}
    </PDFDownloadLink>
  );
}
