// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 text-xs text-slate-600">
        <div className="grid gap-8 md:grid-cols-6">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-primary text-[11px] font-bold text-white">
                AB
              </span>
              <span className="text-sm font-semibold text-black">
                Armário de Bolso
              </span>
            </div>
            <p className="mt-3 max-w-xs text-[11px] text-slate-600">
              Seu armário digital com inteligência artificial. Organize seu guarda-roupa pessoal
              ou gerencie seu negócio de moda com ferramentas profissionais de IA.
            </p>
          </div>

          <div>
            <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-black">
              Produto
            </h4>
            <ul className="space-y-1 text-[11px] text-slate-600">
              <li className="hover:text-black cursor-pointer transition-colors">Como funciona</li>
              <li className="hover:text-black cursor-pointer transition-colors">Integrações</li>
              <li className="hover:text-black cursor-pointer transition-colors">Planos</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-black">
              Para quem é
            </h4>
            <ul className="space-y-1 text-[11px] text-slate-600">
              <li className="hover:text-black cursor-pointer transition-colors">Lojas de roupa</li>
              <li className="hover:text-black cursor-pointer transition-colors">Brechós</li>
              <li className="hover:text-black cursor-pointer transition-colors">Stylists</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-black">
              Suporte
            </h4>
            <ul className="space-y-1 text-[11px] text-slate-600">
              <li className="hover:text-black cursor-pointer transition-colors">Central de ajuda</li>
              <li className="hover:text-black cursor-pointer transition-colors">Contato</li>
              <li className="hover:text-black cursor-pointer transition-colors">Status</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-black">
              Empresa
            </h4>
            <ul className="space-y-1 text-[11px] text-slate-600">
              <li className="hover:text-black cursor-pointer transition-colors">Sobre</li>
              <li className="hover:text-black cursor-pointer transition-colors">Parceiros</li>
              <li>
                <a href="/privacy-policy#privacy-policy" className="hover:text-black transition-colors">
                  Privacidade
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-primary/20 pt-4 text-[11px] md:flex-row">
          <span className="text-slate-600">© {new Date().getFullYear()} Armário de Bolso. Todos os direitos reservados.</span>
          <div className="flex items-center gap-3 text-slate-600">
            <span className="hover:text-black cursor-pointer transition-colors">Instagram</span>
            <span className="hover:text-black cursor-pointer transition-colors">WhatsApp</span>
            <span className="hover:text-black cursor-pointer transition-colors">LinkedIn</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
