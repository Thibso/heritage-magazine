import { ReactNode } from "react";
import "./globals.css";

export default function RootLayout({
  children,
  lang,
}: {
  children: ReactNode;
  lang: string;
}) {
  return (
    <html lang={lang}>
      <head>
        <meta
          name="google-site-verification"
          content="-QKRvd7-p6MLOV-f9k66HH_c-pyIvALPTOPKHD2Sghk"
        />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
