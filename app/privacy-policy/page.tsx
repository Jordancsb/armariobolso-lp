import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Política de Privacidade - Armário de Bolso",
  description: "Política de privacidade do Armário de Bolso. Saiba como protegemos seus dados pessoais.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 md:p-12">
          <h1 id="privacy-policy" className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Política de Privacidade
          </h1>
          <p className="text-sm text-slate-500 mb-8">
            Última atualização: {new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-slate max-w-none space-y-6 text-sm leading-relaxed">
            <section>
              <p className="text-slate-700 mb-4">
                O aplicativo Armário de Bolso utiliza a câmera do dispositivo exclusivamente para permitir que o usuário capture imagens para processamento visual.
              </p>
            </section>

            <section>
              <p className="text-slate-700 mb-4">
                As imagens capturadas são enviadas temporariamente a um serviço de processamento de imagem por inteligência artificial (Gemini) apenas para geração do resultado solicitado. Após o processamento, a imagem retorna para o dispositivo do usuário.
              </p>
            </section>

            <section>
              <p className="text-slate-700 mb-2">O usuário pode optar por salvar ou não a imagem processada.</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
                <li>Caso o usuário escolha salvar, a imagem será armazenada no histórico da conta do usuário e em servidores seguros (Amazon S3).</li>
                <li>Caso o usuário não escolha salvar, a imagem não é armazenada.</li>
              </ul>
            </section>

            <section>
              <p className="text-slate-700 mb-4">
                Os dados armazenados são excluídos automaticamente após 90 dias, garantindo que apenas informações recentes sejam mantidas em nossos servidores.
              </p>
            </section>

            <section>
              <p className="text-slate-700 mb-4">
                O Armário de Bolso não utiliza a câmera para coleta automática de dados, nem realiza gravações sem a ação explícita do usuário.
              </p>
            </section>

            <section className="pt-6 border-t border-slate-200">
              <p className="text-slate-700 mb-2">
                Para dúvidas ou solicitações relacionadas à privacidade, entre em contato pelo e-mail:
              </p>
              <div className="bg-slate-50 rounded-lg p-4 mt-4">
                <p className="text-slate-700">
                  <a href="mailto:contato@armariobolso.com" className="text-slate-900 font-medium hover:underline">
                    contato@armariobolso.com
                  </a>
                </p>
                <p className="text-slate-700">
                  <a href="mailto:jcaindoor+absuporte@gmail.com" className="text-slate-900 font-medium hover:underline">
                    jcaindoor+absuporte@gmail.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
