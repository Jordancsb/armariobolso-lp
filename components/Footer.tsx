// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 text-xs text-slate-500">
        <div className="grid gap-8 md:grid-cols-6">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-black text-[11px] font-bold text-white">
                AB
              </span>
              <span className="text-sm font-semibold text-slate-900">
                Armário de Bolso
              </span>
            </div>
            <p className="mt-3 max-w-xs text-[11px]">
              Seu armário digital com inteligência artificial. Organize seu guarda-roupa pessoal
              ou gerencie seu negócio de moda com ferramentas profissionais de IA.
            </p>
          </div>

          <div>
            <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-700">
              Produto
            </h4>
            <ul className="space-y-1 text-[11px]">
              <li>Como funciona</li>
              <li>Integrações</li>
              <li>Planos</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-700">
              Para quem é
            </h4>
            <ul className="space-y-1 text-[11px]">
              <li>Lojas de roupa</li>
              <li>Brechós</li>
              <li>Stylists</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-700">
              Suporte
            </h4>
            <ul className="space-y-1 text-[11px]">
              <li>Central de ajuda</li>
              <li>Contato</li>
              <li>Status</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-700">
              Empresa
            </h4>
            <ul className="space-y-1 text-[11px]">
              <li>Sobre</li>
              <li>Parceiros</li>
              <li>
                <a href="/privacy-policy#privacy-policy" className="hover:text-slate-900">
                  Privacidade
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-4 text-[11px] md:flex-row">
          <span>© {new Date().getFullYear()} Armário de Bolso. Todos os direitos reservados.</span>
          <div className="flex items-center gap-3">
            <span>Instagram</span>
            <span>WhatsApp</span>
            <span>LinkedIn</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
