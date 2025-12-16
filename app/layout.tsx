import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Armário de Bolso - Provador virtual para lojas de roupa",
  description:
    "Crie experiências de provador virtual, organize o catálogo e venda mais com o Armário de Bolso.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#f5f7fb] text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}

