import React from 'react';
import { CardsProps } from '../CardSorteio';

export type DownloadPdfProps = {
  card: CardsProps;
};

// Create Document Component
export function DownloadPdf({ card }: DownloadPdfProps) {
  const HtmlString = Uint8Array.from(atob(card.html), c => c.charCodeAt(0));

  let blob = new Blob([HtmlString], { type: 'application/pdf' });

  const href = window.URL.createObjectURL(blob);

  return (
    <a
      href={href}
      download={`sorteio_${new Date(card.date_sort).toLocaleDateString()}.pdf`}
    >
      Download
    </a>
  );
}
