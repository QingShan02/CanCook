'use client'
import "../globals.css";
import React, { useEffect } from 'react';
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../../components/Header"), { ssr: false })
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false })


export default function RootLayout({
  children,
}:
  {
    children: React.ReactNode
  }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <html lang="en">
      <head>

      </head>
      <body>
        <div className="container-fluid">
          <div>
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
