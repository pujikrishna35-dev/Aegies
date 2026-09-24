import { Metadata } from 'next';

export function constructMetadata({
  title = 'AEGIS OVERSEAS | Your Future Has No Borders',
  description = 'Aegis Overseas helps students discover top universities in USA, UK, Canada, Australia, Germany & Europe. Expert counseling, test coaching, funding, and visa guidance.',
  image = '/images/og-aegis.jpg',
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    keywords: [
      'Study Abroad',
      'Overseas Education Consultant Nellore',
      'Overseas Education Tirupati',
      'Study in USA',
      'Study in UK',
      'Study in Canada',
      'Study in Germany tuition free',
      'IELTS coaching',
      'GRE coaching',
      'Aegis Overseas Education'
    ],
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@Aegisoverseas',
    },
    metadataBase: new URL('https://aegisoverseas.com'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
