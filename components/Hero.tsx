'use client'

import Image from 'next/image'
import imageBackground from '@/assets/Banner.png'

// components/Hero.jsx
export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-14 md:flex-row md:py-20">
        {/* Texto */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Seu armário digital
            <br />
            <span className="text-black">com inteligência artificial.</span>
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
            Organize seu closet, experimente roupas virtualmente e receba sugestões de looks personalizados.
            Para lojistas: gere modelos, remova fundos, crie variações de produtos e muito mais com IA.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button className="rounded-full bg-black px-5 py-2.5 text-xs font-semibold text-white shadow-md hover:bg-gray-800 md:text-sm">
              Baixar app grátis
            </button>
            <button className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 hover:border-black md:text-sm">
              ▶ Ver como funciona
            </button>
          </div>

          <p className="mt-3 text-[11px] text-slate-500 md:text-xs">
            Disponível para iOS e Android • Perfeito para uso pessoal e profissional
          </p>
        </div>
      </div>

      {/* Banner - metade da largura, encostando na lateral direita */}
      <div className="absolute right-0 top-0 h-full w-1/2">
        <Image
          src={imageBackground}
          alt="Banner"
          className="h-full w-full object-cover"
          fill
          priority
        />
      </div>
    </section>
  );
}
