import hero3 from '@/assets/Closet.jpg'

// components/FocusSection.jsx
export default function FocusSection() {
  return (
    <section className="bg-gradient-soft py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-xl font-bold text-black md:text-2xl">
            Para uso pessoal e profissional
          </h2>
          <p className="mt-2 text-xs text-slate-700 md:text-sm">
            Organize seu guarda-roupa pessoal ou gerencie seu negócio de moda com ferramentas
            inteligentes que facilitam seu dia a dia.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-10 md:flex-row">
          {/* Lista */}
          <div className="md:w-1/2">
            <ul className="space-y-4 text-sm">
              <li>
                <h3 className="font-semibold text-black">
                  Uso pessoal: organize seu guarda-roupa
                </h3>
                <p className="text-xs text-slate-700 md:text-sm">
                  Tenha todas suas roupas organizadas digitalmente, receba sugestões de looks
                  personalizados e experimente combinações antes de sair de casa.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-black">
                  Uso profissional: ferramentas para lojistas
                </h3>
                <p className="text-xs text-slate-700 md:text-sm">
                  Gere modelos virtuais, remova fundos, crie variações de produtos e descrições
                  automáticas. Tudo com inteligência artificial.
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-black">
                  Provador virtual para clientes
                </h3>
                <p className="text-xs text-slate-700 md:text-sm">
                  Mostre aos seus clientes como as roupas ficam antes da compra.
                  Aumente a confiança e reduza devoluções.
                </p>
              </li>
            </ul>

            <a 
              href="https://play.google.com/store/apps/details?id=com.armariodebolso" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 rounded-full bg-gradient-primary px-5 py-2.5 text-xs font-semibold text-white shadow-lg hover:opacity-90 transition-opacity md:text-sm inline-block"
            >
              Baixar app agora
            </a>
          </div>

          {/* Mockup simples */}
          <div className="md:w-1/2">
            <div className="mx-auto flex h-80 w-40 flex-col rounded-[2rem] border-2 border-secondary/30 bg-white p-3 shadow-lg md:h-96 md:w-48">
              <img src={hero3.src} alt="Focus Matters Mockup" className="w-full h-full object-cover rounded-[2rem]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
