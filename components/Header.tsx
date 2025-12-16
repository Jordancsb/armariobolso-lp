'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

// components/Header.jsx
export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-30">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-black text-sm font-bold text-white">
            AB
          </span>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight">
              Armário de Bolso
            </div>
            <div className="text-[11px] text-slate-500">
              Seu closet na palma da sua mão
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          <a href="#features" className="hover:text-black">
            Funcionalidades
          </a>
          <a href="#tools" className="hover:text-black">
            Para lojistas
          </a>
          <a href="#faq" className="hover:text-black">
            Dúvidas
          </a>
          <a href="#pricing" className="hover:text-black">
            Planos
          </a>
        </nav>

        {/* Ações */}
        {/* <div className="flex items-center gap-3 text-sm">
          <button className="hidden text-slate-600 hover:text-black md:inline">
            Entrar
          </button>
          <button className="rounded-full bg-black px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-gray-800">
            Criar conta grátis
          </button>
        </div> */}
      </div>
    </header>
  );
}
