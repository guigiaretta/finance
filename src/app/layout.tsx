
import "./globals.css";
import { Header } from '../components/header'
import { Cards } from "../components/cards";


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
        {children}
      </body>
    </html>
  );
}
