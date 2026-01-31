import hero2 from '@/assets/Hero2.jpg'

// components/ToolsSection.jsx
export default function ToolsSection() {
  return (
    <section id="tools" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-xl font-bold text-black md:text-2xl">
            Ferramentas poderosas de IA para moda
          </h2>
          <p className="mt-2 text-xs text-slate-700 md:text-sm">
            Organize seu armário pessoal ou gerencie seu catálogo profissional com ferramentas
            inteligentes que economizam tempo e aumentam suas vendas.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-10 md:flex-row">
          {/* Mockup */}
          <div className="md:w-1/2">
            <div className="mx-auto flex h-80 w-40 flex-col rounded-[2rem] border-2 border-primary/30 bg-primarySoft p-3 shadow-lg md:h-96 md:w-48">
              <img src={hero2.src} alt="Essential Tools Mockup" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Lista */}
          <div className="md:w-1/2">
            <ul className="space-y-4 text-sm">
              <li>
                <h3 className="font-semibold text-black">
                  Organize seu armário digital
                </h3>
                <p className="text-xs text-slate-700 md:text-sm">
                  Adicione suas roupas ao app e tenha todo seu guarda-roupa organizado na palma da mão.
                  Perfeito para planejar looks e não repetir combinações.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-black">
                  Experimente roupas virtualmente
                </h3>
                <p className="text-xs text-slate-700 md:text-sm">
                  Use o provador virtual para ver como as peças ficam em você antes de comprar.
                  Ideal para lojistas mostrarem produtos aos clientes.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-black">
                  Gere conteúdo profissional com IA
                </h3>
                <p className="text-xs text-slate-700 md:text-sm">
                  Crie imagens de modelos, remova fundos, gere descrições e variações de produtos
                  automaticamente. Economize tempo e dinheiro em produção.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
