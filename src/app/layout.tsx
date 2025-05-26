
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

      <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </head>

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
