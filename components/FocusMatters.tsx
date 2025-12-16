import hero3 from '@/assets/Closet.jpg'

// components/FocusSection.jsx
export default function FocusSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
            Para uso pessoal e profissional
          </h2>
          <p className="mt-2 text-xs text-slate-600 md:text-sm">
            Organize seu guarda-roupa pessoal ou gerencie seu negócio de moda com ferramentas
            inteligentes que facilitam seu dia a dia.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-10 md:flex-row">
          {/* Lista */}
          <div className="md:w-1/2">
            <ul className="space-y-4 text-sm">
              <li>
                <h3 className="font-semibold text-slate-900">
                  Uso pessoal: organize seu guarda-roupa
                </h3>
                <p className="text-xs text-slate-600 md:text-sm">
                  Tenha todas suas roupas organizadas digitalmente, receba sugestões de looks
                  personalizados e experimente combinações antes de sair de casa.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-slate-900">
                  Uso profissional: ferramentas para lojistas
                </h3>
                <p className="text-xs text-slate-600 md:text-sm">
                  Gere modelos virtuais, remova fundos, crie variações de produtos e descrições
                  automáticas. Tudo com inteligência artificial.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-slate-900">
                  Provador virtual para clientes
                </h3>
                <p className="text-xs text-slate-600 md:text-sm">
                  Mostre aos seus clientes como as roupas ficam antes da compra.
                  Aumente a confiança e reduza devoluções.
                </p>
              </li>
            </ul>

            <button className="mt-6 rounded-full bg-black px-5 py-2.5 text-xs font-semibold text-white shadow-md hover:bg-gray-800 md:text-sm">
              Baixar app agora
            </button>
          </div>

          {/* Mockup simples */}
          <div className="md:w-1/2">
            <div className="mx-auto flex h-80 w-40 flex-col rounded-[2rem] border border-slate-200 bg-white p-3 shadow-sm md:h-96 md:w-48">
              <img src={hero3.src} alt="Focus Matters Mockup" className="w-full h-full object-cover rounded-[2rem]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
