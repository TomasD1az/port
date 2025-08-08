// app/layout.tsx
import "./styles/globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Football Stadium Portfolio",
  description: "3D portfolio — avatar explores a football stadium"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}