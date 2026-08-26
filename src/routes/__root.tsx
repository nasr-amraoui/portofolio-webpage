import { ReactNode } from "react";

export function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>NasrEddine Amraoui — Portfolio</title>
      </head>
      <body>{children}</body>
    </html>
  );
}