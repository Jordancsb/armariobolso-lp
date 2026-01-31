// components/FaqSection.jsx
const faqs = [
  {
    q: "O app é gratuito para uso pessoal?",
    a: "Sim! O plano de uso pessoal é totalmente gratuito e permite organizar seu armário e receber sugestões de looks baseados no seu armário cadastrado"
  },
  {
    q: "Quais ferramentas de IA estão disponíveis?",
    a: "Você pode gerar modelos virtuais, remover fundos de imagens, criar variações de produtos, gerar descrições automáticas, mala inteligente (em Breve) e muito mais. As ferramentas variam conforme o plano escolhido.",
  },
  {
    q: "Preciso de conhecimento técnico para usar?",
    a: "Não! O app foi desenvolvido para ser intuitivo. Basta fazer upload das fotos e usar as ferramentas disponíveis. A IA faz todo o trabalho pesado.",
  },
  {
    q: "Funciona offline?",
    a: "O app precisa de conexão com internet para usar as ferramentas de IA, mas você pode visualizar seu armário organizado mesmo sem conexão.",
  },
  {
    q: "Posso usar para meu negócio de moda?",
    a: "Sim! O plano para lojistas oferece todas as ferramentas profissionais para criar conteúdo, gerenciar catálogo e mostrar produtos aos clientes com provador virtual.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="border-y border-primary/20 bg-gradient-soft py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-xl font-bold text-black md:text-2xl">
          Respostas para suas principais dúvidas
        </h2>

        <div className="mt-8 space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="rounded-xl bg-white border border-primary/10 px-4 py-3 text-sm shadow-sm hover:shadow-md transition-shadow"
            >
              <summary className="cursor-pointer list-none font-semibold text-black">
                {item.q}
              </summary>
              <p className="mt-2 text-xs text-slate-700 md:text-sm">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
