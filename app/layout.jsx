import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import './page.module.css';
import { site } from './site';

const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({
  children,
  pageTitle,
  pageDescription,
  pageTags,
  isHomePage // Ajoutez un paramètre pour indiquer si la page est la page d'accueil
}) {
  const siteTitle = site.title;
  const siteDescription = site.description;

  const description = `${pageDescription || ''} | ${siteDescription}`;
  const title = `${pageTitle || ''} | ${siteTitle}`;

  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {pageTags && (
          <meta name="keywords" content={pageTags.split(',').map(tag => tag.trim()).join(',')} />
        )}
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* Add other meta tags if needed */}
      </head>
      <body className={`${inter.className} bg-neutral-900`}>
        {children}
      </body>
    </html>
  );
};
