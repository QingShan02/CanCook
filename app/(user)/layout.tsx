'use client'
import "../globals.css";
import React, { ReactNode } from 'react';
import { SessionProvider } from "next-auth/react";
import dynamic from "next/dynamic";
import { useEffect } from 'react';
import { ViewProvider } from "@/common/context";
import Script from "next/script";
const Header = dynamic(() => import("../../components/Header"), { ssr: false })
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false })

interface IProps {
  children: ReactNode,
  session: any
}

export default function RootLayout({
  children,
  session
}: IProps) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, [])
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="qIuNUBGmQ2EpiBUHYcmBJZdQjd4643hwJD2sSd98isk" />
        <link rel="icon" href="/_next/image?url=%2Fassert%2Fimg%2Flogo2.png&w=256&q=75" type="image/x-icon" sizes="any" />
        <Script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"></Script>
        <Script
          src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
        ></Script>

        <Script
          src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
        ></Script>
        <title>CanCook</title>
      </head>
      <body>
        <div className="container-fluid">
          <ViewProvider>
            <SessionProvider session={session}>
              <Header />
              {children}
              <Footer />
            </SessionProvider>
          </ViewProvider>
        </div >
      </body >
    </html >
  )
}
