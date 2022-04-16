import { Document, Page, Font } from '@react-pdf/renderer';
import React from 'react';
import Html from 'react-pdf-html';
import { DownloadPdfProps } from '.';

Font.register({
  family: 'Roboto',
  src: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',
  fontStyle: 'normal',
  fontWeight: 300
});

// Create Document Component
export function PdfCards({ card }: DownloadPdfProps) {
  return (
    <Document title="Cartelas">
      <Page orientation="landscape" wrap={false} size="A4">
        <Html>""</Html>
      </Page>
    </Document>
  );
}
