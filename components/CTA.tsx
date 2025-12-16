'use client';

export default function FinalCtaSection() {
  const plans = [
    {
      name: 'Uso Pessoal',
      description: 'Perfeito para organizar seu guarda-roupa pessoal e receber sugestões de looks.',
      price: 'R$ 19,90',
      period: 'por mês',
      bgColor: 'bg-slate-100',
      buttonColor: 'bg-black hover:bg-slate-800',
      buttonText: 'Começar teste grátis',
      features: [
        'Organize seu armário digital',
        'Provador virtual pessoal',
        'Assistente de estilo com IA',
        'Sugestões de looks personalizados',
        'Sem limites de peças',
        'Suporte'
      ]
    },
    {
      name: 'Lojistas',
      description: 'Ferramentas profissionais para criar conteúdo, gerenciar catálogo e aumentar vendas.',
      price: 'R$ 49,90',
      period: 'por mês',
      bgColor: 'bg-slate-100',
      buttonColor: 'bg-black hover:bg-slate-800',
      buttonText: 'Começar teste grátis',
      features: [
        'Gerar modelos virtuais com IA',
        'Remover fundo de imagens',
        'Criar variações de produtos',
        'Análise e descrições automáticas',
        'Provador virtual para clientes',
        'Suporte'
      ]
    },
    {
      name: 'Lojistas Premium',
      description: 'Para lojistas que precisam de mais recursos e suporte.',
      price: 'R$ 99,90',
      period: 'por mês',
      bgColor: 'bg-slate-100',
      buttonColor: 'bg-black hover:bg-slate-800',
      buttonText: 'Começar teste grátis',
      features: [
        'Todas as ferramentas do plano Lojistas',
        'Créditos ilimitados',
        'Suporte prioritário',
        'Acesso a antecipação de novas funcionalidades',
      ]
    }
  ];

  return (
    <section id="pricing" className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col rounded-2xl sm:rounded-3xl ${plan.bgColor} p-5 sm:p-6 shadow-sm`}
            >
              {/* Header */}
              <div className="mb-3 sm:mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{plan.name}</h3>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-slate-700">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-4 sm:mb-6">
                <div className="text-2xl sm:text-3xl font-bold text-slate-900">{plan.price}</div>
                {plan.period && (
                  <div className="mt-1 text-xs text-slate-600">{plan.period}</div>
                )}
              </div>

              {/* Button */}
              <button
                className={`mb-4 sm:mb-6 w-full rounded-lg sm:rounded-xl ${plan.buttonColor} px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white transition-colors`}
              >
                {plan.buttonText}
              </button>

              {/* Features */}
              <ul className="flex-1 space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-700">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0 text-slate-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
