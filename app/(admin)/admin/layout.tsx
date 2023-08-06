'use client'
import Sidebar from "../../../components/Sidebar";
import { SessionProvider } from "next-auth/react";
import "../../globals.css";
import React, { ReactNode } from "react"

interface IProps {
  children: ReactNode,
  session: any
}
export default function AdminLayout({
  children,
  session
}: IProps) {
  return (
    <html lang="en">
      <head>
        {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" /> */}
      </head>
      <body>
        <div className="container-fluid d-flex">
          <SessionProvider session={session}>
            <Sidebar />
            <div style={{ width: "80%" }}>
              {children}
            </div>
          </SessionProvider>
        </div>
      </body>
    </html>
  )
}
