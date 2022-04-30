import React from 'react';

type CardsProps = {
  card_id: string;
  title: string;
  number_of_cards: number;
  unit_price: number;
  min: number;
  max: number;
  amount_random_number: number;
  values_sorted: Array<number[]>;
  html: string;
  client_id: string;
  date_sort: Date;
  status: string | null;
  sort_result: number | null;
};

export type DownloadPdfProps = {
  card: CardsProps;
};

// Create Document Component
export function DownloadPdf({ card }: DownloadPdfProps) {
  const HtmlString = Uint8Array.from(atob(card.html), c => c.charCodeAt(0));

  const blob = new Blob([HtmlString], { type: 'application/pdf' });

  const href = window.URL.createObjectURL(blob);

  return (
    <a href={href} target="_blank" rel="noreferrer">
      Download
    </a>
  );
}
