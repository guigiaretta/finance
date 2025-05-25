
import "./globals.css";
import { Header } from '../components/header'
import { Cards } from "../components/cards";
import { AnaliseCategoria } from "../components/analiseCategoria"



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />
        <Cards />
        <AnaliseCategoria />
        {children}
      </body>
    </html>
  );
}
