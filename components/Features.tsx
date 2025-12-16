'use client'

import { Wand2, Camera, Eraser, User, Sparkles, Shield } from 'lucide-react'

const items = [
  {
    icon: User,
    title: "Provador Virtual",
    desc: "Experimente roupas virtualmente. Veja como as peças ficam em você ou em modelos diferentes antes de comprar.",
  },
  {
    icon: Wand2,
    title: "Gerar Modelos com IA",
    desc: "Crie imagens profissionais de suas roupas usando modelos virtuais gerados por inteligência artificial.",
  },
  {
    icon: Camera,
    title: "Assistente de Estilo",
    desc: "Receba sugestões personalizadas de looks baseadas no seu estilo, ocasião e preferências de cores.",
  },
  {
    icon: Eraser,
    title: "Remover Fundo",
    desc: "Remova o fundo de imagens de produtos automaticamente para criar catálogos profissionais e limpos.",
  },
  {
    icon: Sparkles,
    title: "Análise de Produto",
    desc: "Obtenha descrições detalhadas, títulos e hashtags para seus produtos gerados automaticamente por IA.",
  },
  {
    icon: Shield,
    title: "Variações de Produto",
    desc: "Gere variações de cores e estilos do mesmo produto para expandir seu catálogo sem novas fotos.",
  },
];

export default function FeaturesRow() {
  return (
    <section
      id="features"
      className="border-y border-slate-200 bg-gray-50 py-12 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-200 text-black">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900 md:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


