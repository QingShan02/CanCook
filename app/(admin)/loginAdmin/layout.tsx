'use client'
import "../../globals.css";
import React from 'react';
<meta name="google-site-verification" content="qIuNUBGmQ2EpiBUHYcmBJZdQjd4643hwJD2sSd98isk" />

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
