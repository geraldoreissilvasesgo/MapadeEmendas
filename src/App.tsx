import React, { useState } from 'react';
import { Menu, ShieldCheck, LogIn, RefreshCcw, ArrowRightToLine, Mail, Lock, Eye, Zap } from 'lucide-react';

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-[#F8FAFC] font-sans text-slate-800 overflow-hidden relative">
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
            <button 
              onClick={() => setIsLoginOpen(true)}
              className="bg-[#114B79] hover:bg-[#0C3A60] text-white px-6 py-3 rounded-full font-bold text-xs tracking-wide flex items-center gap-2.5 transition-all shadow-md shadow-blue-900/10 hover:shadow-blue-900/20"
            >
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
            <button 
              onClick={() => setIsLoginOpen(true)}
              className="bg-[#114B79] hover:bg-[#0C3A60] text-white px-8 py-4 rounded-2xl font-bold text-sm tracking-wide flex items-center gap-3 transition-all shadow-xl shadow-blue-900/20 hover:shadow-blue-900/30 hover:-translate-y-0.5"
            >
              ACESSAR PAINEL RESTRITO
              <LogIn size={20} strokeWidth={2.5} />
            </button>
          </div>
        </main>
      </div>

      {/* Login Modal Overlay */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#6B8A9F]/90 backdrop-blur-sm p-4">
          {/* Main Modal */}
          <div className="bg-white rounded-[2rem] w-full max-w-[420px] p-10 relative shadow-2xl flex flex-col items-center animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsLoginOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 font-medium text-sm transition-colors"
            >
              Fechar
            </button>

            {/* Logo */}
            <div className="relative mb-6 mt-2">
              <div className="bg-[#0C3A60] text-white p-4 rounded-2xl shadow-lg">
                <ShieldCheck size={32} strokeWidth={2} />
              </div>
              <div className="absolute -top-2 -right-2 text-[#00E676]">
                <Zap size={20} fill="currentColor" strokeWidth={0} />
              </div>
            </div>

            {/* Typography */}
            <h2 className="text-2xl font-extrabold text-[#0C3A60] mb-1 tracking-tight">
              RASTREIO <span className="text-[#00E676]">GESA</span>
            </h2>
            <p className="text-[9px] font-bold text-slate-400 tracking-[0.2em] uppercase mb-10">
              GESTÃO E TEMPORALIDADE • SUBIPEI
            </p>

            {/* Form */}
            <form className="w-full space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mb-2 block">
                  E-MAIL CORPORATIVO (@GOIAS.GOV.BR)
                </label>
                <div className="relative flex items-center">
                  <Mail size={18} className="absolute left-4 text-slate-400" strokeWidth={2} />
                  <input
                    type="email"
                    placeholder="teste@goias.gov.br"
                    className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-[#0C3A60] placeholder:text-slate-400 focus:outline-none focus:border-[#0C3A60] focus:ring-1 focus:ring-[#0C3A60] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mb-2 block">
                  SENHA DE ACESSO
                </label>
                <div className="relative flex items-center">
                  <Lock size={18} className="absolute left-4 text-slate-400" strokeWidth={2} />
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-12 pr-12 py-3.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-[#0C3A60] placeholder:text-slate-400 focus:outline-none focus:border-[#0C3A60] focus:ring-1 focus:ring-[#0C3A60] transition-all"
                  />
                  <button type="button" className="absolute right-4 text-slate-400 hover:text-[#0C3A60] transition-colors">
                    <Eye size={18} strokeWidth={2} />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <div className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded bg-white checked:bg-[#0C3A60] checked:border-[#0C3A60] transition-all cursor-pointer"
                    defaultChecked
                  />
                  <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <label htmlFor="remember" className="text-[10px] font-bold text-slate-400 tracking-wider uppercase cursor-pointer select-none">
                  RELEMBRAR CREDENCIAL INSTITUCIONAL
                </label>
              </div>

              <button className="w-full bg-[#0C3A60] hover:bg-[#0A2F4E] text-white py-4 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-3 mt-8 transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-900/30">
                ACESSAR PAINEL
                <ArrowRightToLine size={18} strokeWidth={2.5} />
              </button>
            </form>
          </div>

          {/* Bottom Info Pill */}
          <div className="mt-6 bg-white rounded-full px-8 py-4 shadow-lg text-[9px] font-bold text-[#0C3A60] tracking-wider uppercase text-center max-w-[420px] w-full">
            O SISTEMA PRIORIZA SUA SENHA CORPORATIVA PERSONALIZADA APÓS A PRIMEIRA ALTERAÇÃO NO PAINEL DE PERFIL.
          </div>
        </div>
      )}
    </div>
  );
}
