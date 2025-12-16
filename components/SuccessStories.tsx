import LogoMix from '@/assets/logoMix.jpg'
// components/TestimonialSection.jsx
export default function TestimonialSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 md:flex-row">
        {/* Foto */}
        <div className="md:w-1/3">
          <div className="mx-auto h-[100px] w-[100px] rounded-full bg-red-200 shadow-md circle-full">
            <img src={LogoMix.src} alt="Logo Brechó Mix e Mix Chic" className="w-full h-full object-cover circle-full" />
          </div>
        </div>

        {/* Depoimento */}
        <div className="md:w-2/3">
          <span className="text-[11px] font-semibold uppercase tracking-wide text-black">
            Histórias de sucesso
          </span>
          <p className="mt-3 text-sm italic text-slate-700 md:text-base">
            "O App (Armário de Bolso) me ajudou muito a postar meus produtos no Instagram e nos gurpos de Whatsapp.
            Velocidade que ganhei e facilidade de uso das ferramentas são os principais! Estou gostando bastante!"
          </p>
          <div className="mt-3 text-xs text-slate-500">
            <div className="font-semibold text-slate-800">
              Cicera Bezerra Cruz
            </div>
            <div>Proprietária do Brechó Mix e Mix Chic</div>
          </div>
        </div>
      </div>
    </section>
  );
}
