import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';

import { ToasterProvider } from '@/components/toaster-provider';
import { ModalProvider } from '@/components/modal-provider';

import { Analytics } from "@vercel/analytics/react";

import './globals.css'

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Acedly Ai',
  description: 'AI Content Generation Platform',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9889724479754056"
            crossOrigin="anonymous">
          </script>
        </head>
        <body className={font.className}>
          <ToasterProvider />
          <ModalProvider />
          {children}
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  )
}
