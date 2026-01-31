'use client'

import Image from 'next/image'
import imageBackground from '@/assets/Banner.png'
import imageBackgroundMobile from '@/assets/B2.png' 

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-6 px-4 py-10 md:flex-row md:gap-10 md:py-20">
        {/* Texto */}
        <div className="w-full text-center md:w-1/2 md:text-left z-10">
          <h1 className="text-2xl font-bold tracking-tight text-black md:text-4xl lg:text-5xl">
            Seu armário digital
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">com inteligência artificial.</span>
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-700 md:mt-4 md:text-base">
            Organize seu closet, experimente roupas virtualmente e receba sugestões de looks personalizados.
            Para lojistas: gere modelos, remova fundos, crie variações de produtos e muito mais com IA.
          </p>

          <div className="mt-5 flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start gap-3 md:mt-6">
            <a
              href="https://play.google.com/store/apps/details?id=com.armariodebolso"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-90 transition-opacity inline-block text-center"
            >
              Baixar app grátis
            </a>
            <a
              href="https://www.youtube.com/@armariodebolso"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border-2 border-primary/30 bg-white px-5 py-3 text-sm font-semibold text-black hover:border-primary hover:bg-primarySoft transition-all"
            >
              ▶ Ver como funciona
            </a>
          </div>

          <p className="mt-3 text-xs text-slate-600 md:text-xs">
            Disponível para iOS e Android • Perfeito para uso pessoal e profissional
          </p>
        </div>

        {/* Banner - Imagens diferentes para Mobile e Desktop */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          {/* Imagem Mobile - visível apenas abaixo de 760px */}
          <div className="relative w-full max-w-sm h-64 rounded-2xl overflow-hidden shadow-lg md:hidden">
            <Image
              src={imageBackgroundMobile}
              alt="Banner Mobile"
              className="object-cover"
              fill
              priority
            />
          </div>

          {/* Imagem Desktop - visível apenas acima de 760px */}
          <div className="relative hidden md:block w-full max-w-none h-96 overflow-hidden">
            <Image
              src={imageBackground}
              alt="Banner Desktop"
              className="object-cover"
              fill
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
