import React from 'react';
import { Menu, ShieldCheck, LogIn, RefreshCcw, ArrowRightToLine } from 'lucide-react';

export default function App() {
  return (
    <div className="flex h-screen w-full bg-[#F8FAFC] font-sans text-slate-800 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-72 bg-[#114B79] flex flex-col text-white shadow-xl z-20">
        {/* Logo Area */}
        <div className="p-8 flex items-center gap-4">
          <div className="bg-white text-[#114B79] p-2.5 rounded-xl shadow-sm">
            <ShieldCheck size={28} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-wide leading-tight">
              RASTREIO <span className="text-[#6EE7B7]">GESA</span>
            </span>
            <span className="text-[10px] text-blue-200 tracking-[0.2em] font-medium mt-0.5">
              SUBIPEI • GOIÁS
            </span>
          </div>
        </div>

        <div className="flex-1"></div>

        {/* Bottom Action */}
        <div className="bg-[#0C3A60] p-6 cursor-pointer hover:bg-[#0A2F4E] transition-colors flex items-center gap-3 border-t border-blue-900/50">
          <ArrowRightToLine size={20} className="text-blue-200" />
          <span className="text-sm font-semibold tracking-wide text-blue-50">ACESSAR SISTEMA</span>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative z-10">
        {/* Header */}
        <header className="bg-white h-24 border-b border-slate-200 flex items-center justify-between px-8 shadow-sm">
          <div className="flex items-center gap-6">
            <button className="text-slate-400 hover:text-[#114B79] transition-colors p-2 -ml-2 rounded-lg hover:bg-slate-50">
              <Menu size={28} strokeWidth={2} />
            </button>
            <div className="flex flex-col">
              <span className="text-[#114B79] font-bold text-[13px] tracking-wide">
                SUBSECRETARIA DE INOVAÇÃO, PLANEJAMENTO, EDUCAÇÃO E INFRAESTRUTURA
              </span>
              <div className="flex items-center gap-2 text-[11px] text-slate-400 font-bold tracking-wider mt-1">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                <span>GERÊNCIA DE SUPORTE ADMINISTRATIVO • GESA</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            {/* Status Badge */}
            <div className="flex items-center gap-2.5 bg-[#E8F5E9] text-[#2E7D32] px-4 py-2 rounded-full border border-[#C8E6C9]/50">
              <RefreshCcw size={16} className="animate-[spin_3s_linear_infinite]" strokeWidth={2.5} />
              <div className="flex flex-col justify-center">
                <span className="text-[10px] font-bold leading-tight tracking-wide">CLOUD REALTIME</span>
                <span className="text-[9px] font-bold leading-tight opacity-70 tracking-wider">LINK ESTÁVEL</span>
              </div>
            </div>

            {/* Login Button */}
            <button className="bg-[#114B79] hover:bg-[#0C3A60] text-white px-6 py-3 rounded-full font-bold text-xs tracking-wide flex items-center gap-2.5 transition-all shadow-md shadow-blue-900/10 hover:shadow-blue-900/20">
              <LogIn size={16} strokeWidth={2.5} />
              ENTRAR
            </button>
          </div>
        </header>

        {/* Main Area */}
        <main className="flex-1 flex items-center justify-center p-8 bg-gradient-to-b from-[#F8FAFC] to-white">
          <div className="max-w-2xl w-full flex flex-col items-center text-center -mt-20">
            {/* Icon */}
            <div className="bg-[#F1F5F9] text-[#114B79] p-8 rounded-[2rem] mb-10 shadow-sm border border-slate-200/60">
              <ShieldCheck size={56} strokeWidth={2} />
            </div>

            {/* Typography */}
            <h1 className="text-4xl font-extrabold text-[#114B79] mb-6 tracking-tight">
              BEM-VINDO AO PORTAL GESA
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed mb-12 max-w-xl font-medium">
              Você está no ambiente de consulta pública limitada. Para gerenciar processos SEI e emendas parlamentares, acesse sua conta institucional.
            </p>

            {/* Action Button */}
            <button className="bg-[#114B79] hover:bg-[#0C3A60] text-white px-8 py-4 rounded-2xl font-bold text-sm tracking-wide flex items-center gap-3 transition-all shadow-xl shadow-blue-900/20 hover:shadow-blue-900/30 hover:-translate-y-0.5">
              ACESSAR PAINEL RESTRITO
              <LogIn size={20} strokeWidth={2.5} />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
