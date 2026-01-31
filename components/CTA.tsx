'use client';

export default function FinalCtaSection() {
  const plans = [
    {
      name: 'Pacote Inicial',
      description: 'Ideal para começar a usar as ferramentas de IA e testar os recursos.',
      price: 'R$ 9,90',
      credits: '10 créditos',
      bgColor: 'bg-primarySoft border-2 border-primary/20',
      buttonColor: 'bg-gradient-primary hover:opacity-90',
      buttonText: 'Comprar agora',
      features: [
        '10 créditos para usar',
        '1 crédito = 1 imagem gerada',
        'Créditos nunca expiram',
        'Só paga após aceitar e salvar',
        'Todas as ferramentas de IA',
        'Suporte'
      ]
    },
    {
      name: 'Pacote Profissional',
      description: 'Para quem precisa gerar mais conteúdo e ter melhor custo-benefício.',
      price: 'R$ 24,90',
      credits: '30 créditos',
      bgColor: 'bg-white border-2 border-primary',
      buttonColor: 'bg-gradient-primary hover:opacity-90',
      buttonText: 'Comprar agora',
      features: [
        '30 créditos para usar',
        '1 crédito = 1 imagem gerada',
        'Créditos nunca expiram',
        'Só paga após aceitar e salvar',
        'Todas as ferramentas de IA',
        'Suporte'
      ]
    },
    {
      name: 'Pacote Avançado',
      description: 'Máximo poder para lojistas e profissionais que precisam de volume.',
      price: 'R$ 49,90',
      credits: '60 créditos',
      bgColor: 'bg-secondarySoft border-2 border-secondary/20',
      buttonColor: 'bg-gradient-primary hover:opacity-90',
      buttonText: 'Comprar agora',
      features: [
        '60 créditos para usar',
        '1 crédito = 1 imagem gerada',
        'Créditos nunca expiram',
        'Só paga após aceitar e salvar',
        'Todas as ferramentas de IA',
        'Suporte prioritário'
      ]
    },
    {
      name: 'Plano Assinatura',
      description: 'Para quem precisa gerar muito conteúdo todo mês com economia máxima.',
      price: 'R$ 99,90',
      credits: '300 créditos mensais',
      period: 'por mês',
      bgColor: 'bg-gradient-primary border-2 border-primary',
      buttonColor: 'bg-black hover:bg-slate-800',
      buttonText: 'Assinar agora',
      textColor: 'text-white',
      isSubscription: true,
      features: [
        '300 créditos mensais',
        'Gerar modelos virtuais com IA',
        'Remover fundos de imagens',
        'Criar variações de produtos',
        'Descrições automáticas',
        'Provador virtual',
        'Mala inteligente (em breve)',
        'Suporte prioritário'
      ]
    }
  ];

  return (
    <section id="pricing" className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Título da seção */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            Escolha seu plano de créditos
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-700">
            Pague apenas pelo que usar. Cada crédito gera uma imagem com IA.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col rounded-2xl sm:rounded-3xl ${plan.bgColor} p-5 sm:p-6 shadow-lg hover:shadow-xl transition-shadow ${plan.isSubscription ? 'lg:scale-105' : ''}`}
            >
              {/* Badge para assinatura */}
              {plan.isSubscription && (
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wide bg-black text-white rounded-full">
                    Ideal para Lojistas
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="mb-3 sm:mb-4">
                <h3 className={`text-lg sm:text-xl font-bold ${plan.textColor || 'text-black'}`}>{plan.name}</h3>
                <p className={`mt-2 text-[11px] sm:text-xs leading-relaxed ${plan.textColor || 'text-slate-700'}`}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-4 sm:mb-6">
                {plan.period && (
                  <div className={`mt-0.5 text-[10px] ${plan.textColor ? 'text-white/70' : 'text-slate-600'}`}>{plan.period}</div>
                )}
                <div className={`text-2xl sm:text-3xl font-bold ${plan.textColor || 'text-black'}`}>{plan.price}</div>
                <div className={`mt-1 text-xs font-semibold ${plan.textColor ? 'text-white/90' : 'text-primary'}`}>
                  {plan.credits}
                </div>
              </div>

              {/* Button */}
              <button
                className={`mb-4 sm:mb-6 w-full rounded-lg sm:rounded-xl ${plan.buttonColor} px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white transition-all`}
              >
                {plan.buttonText}
              </button>

              {/* Features */}
              <ul className={`flex-1 space-y-2 sm:space-y-2.5 text-[11px] sm:text-xs ${plan.textColor || 'text-slate-700'}`}>
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2">
                    <svg
                      className={`mt-0.5 h-3 w-3 sm:h-3.5 sm:w-3.5 flex-shrink-0 ${plan.textColor || 'text-black'}`}
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

        {/* Nota explicativa */}
        <div className="mt-8 text-center max-w-3xl mx-auto">
          <p className="text-xs text-slate-600 mb-2">
            💡 <strong>Como funciona:</strong> Você só é cobrado quando aceita e salva a imagem gerada pela IA.
            Créditos de pacotes nunca expiram!
          </p>
          <p className="text-xs text-slate-500">
            <strong>Recursos disponíveis:</strong> Gerar modelos virtuais, remover fundos de imagens, criar variações de produtos,
            gerar descrições automáticas, provador virtual, mala inteligente (em breve) e muito mais.
            As ferramentas variam conforme o plano escolhido.
          </p>
        </div>
      </div>
    </section>
  );
}
