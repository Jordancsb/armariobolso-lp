'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from '@/assets/Logo.png'
// components/Header.jsx
export default function Header() {
  return (
    <header className="border-b border-primary/20 bg-white/90 backdrop-blur-md sticky top-0 z-30">
      <div className="mx-auto flex max-w-6xl items-center justify-center md:justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-transparent">
            <img
              src={Logo.src}
              alt="Armário de Bolso"
              className="w-full h-full object-contain"
            />
          </span>
          <div className="leading-tight">
            <div className="text-xs md:text-sm font-semibold tracking-tight text-black">
              Armário de Bolso
            </div>
            <div className="text-[10px] md:text-[11px] text-slate-600">
              Seu closet na palma da sua mão
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
          <a href="#features" className="hover:text-black transition-colors">
            Funcionalidades
          </a>
          <a href="#tools" className="hover:text-black transition-colors">
            Para lojistas
          </a>
          <a href="#faq" className="hover:text-black transition-colors">
            Dúvidas
          </a>
          <a href="#pricing" className="hover:text-black transition-colors">
            Planos
          </a>
        </nav>

        {/* Ações */}
        {/* <div className="flex items-center gap-3 text-sm">
          <button className="hidden text-slate-600 hover:text-black md:inline">
            Entrar
          </button>
          <button className="rounded-full bg-gradient-primary px-4 py-2 text-xs font-semibold text-white shadow-sm hover:opacity-90 transition-opacity">
            Criar conta grátis
          </button>
        </div> */}
      </div>
    </header>
  );
}
