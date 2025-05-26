
import "./globals.css";
import { Header } from '../components/header'
import { Cards } from "../components/cards";
import { AnaliseCategoria } from "../components/analiseCategoria"
import { TransactionsList } from "../components/transacoes";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" class="light">

      <body
        className={`antialiased`}
      >
        <Header />
        <Cards />
        <AnaliseCategoria />
        <TransactionsList />

        {children}

        <script src="./script.js"></script>
      </body>
    </html>
  );
}
