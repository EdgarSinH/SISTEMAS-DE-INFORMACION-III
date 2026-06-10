"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SesionPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  
  // Usamos nombres alternativos para engañar al autocompletado del navegador
  const [formData, setFormData] = useState({
    loginEmail: "",
    loginKey: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // AQUÍ IRÁ LA LLAMADA A TU ENDPOINT DE LOGIN
      /*
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Mapeamos de vuelta a los nombres que tu API espere
        body: JSON.stringify({
          email: formData.loginEmail,
          password: formData.loginKey
        })
      });
      
      if (!response.ok) throw new Error('Credenciales inválidas');
      const data = await response.json();
      console.log('Login exitoso', data);
      // router.push('/dashboard'); // Redirigir al usuario
      */
      
      console.log("Datos listos para enviar al backend:", formData);
      // Simulación de carga
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0b1326] text-[#dae2fd] font-sans selection:bg-[#2e5bff] selection:text-[#efefff] min-h-screen overflow-x-hidden">
      <main className="flex flex-col md:flex-row min-h-screen w-full">
        
        {/* Left Side: Motivational & Branding */}
        <section className="hidden md:flex flex-col justify-center items-start w-1/2 p-[64px] bg-[#060e20] relative overflow-hidden">
          {/* Decorative Glows */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#b8c3ff]/20 rounded-full blur-[120px] animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
          <div className="absolute -bottom-40 -right-20 w-80 h-80 bg-[#6f00be]/20 rounded-full blur-[100px] animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
          
          <div className="relative z-10 max-w-lg my-auto">
            <div className="mb-[40px] inline-flex items-center gap-[12px]">
              {/* Logo (Puedes reemplazar este div por tu etiqueta img real luego) */}
              <div className="h-12 w-12 flex items-center justify-center filter drop-shadow-[0_0_8px_rgba(46,91,255,0.8)]">
               <div className="h-12 w-12 flex items-center justify-center filter drop-shadow-[0_0_8px_rgba(46,91,255,0.8)]">
                <span className="text-3xl">[logo]</span>
              </div>
              </div>
           <span className="text-[24px] leading-[32px] font-semibold text-[#b8c3ff] tracking-tight block w-full text-left">
  NanoCode
</span>
            </div>
            
            <h1 className="text-[48px] leading-[56px] font-bold tracking-tight text-[#dae2fd] mb-[24px]">
              Tu carrera evoluciona en <span className="text-[#b8c3ff]">tiempo real.</span>
            </h1>
            
            <p className="text-[18px] leading-[28px] text-[#c4c5d9] mb-[64px] leading-relaxed">
              Transforma tu futuro 5 minutos a la vez. Únete a una comunidad de desarrolladores que dominan las tecnologías del mañana con precisión y velocidad.
            </p>
            
            <div className="space-y-[24px]">
              <div className="flex items-center gap-[24px]">
                <div className="w-10 h-10 rounded-lg bg-[#222a3d] flex items-center justify-center text-[#94db00]">
                  <span className="text-xl"><svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 -960 960 960" 
                fill="currentColor" 
                className="text-tertiary w-[18px] h-[18px]"
              >
                <path d="m320-80 40-280H200l240-520h200l-40 280h160L520-80H320Z"/>
              </svg></span>
                </div>
                <span className="text-[16px] leading-[24px] text-[#dae2fd]">
                  Micro-learning de alto impacto
                </span>
              </div>
              <div className="flex items-center gap-[24px]">
                <div className="w-10 h-10 rounded-lg bg-[#222a3d] flex items-center justify-center text-[#b8c3ff]">
                  <span className="text-xl"> <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 -960 960 960" 
                    fill="currentColor" 
                    className="text-secondary w-[32px] h-[32px]"
                  >
                    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm120-60 56-56-84-84 84-84-56-56-140 140 140 140Zm160-20v80h240v-80H440Z"/>
                  </svg></span>
                </div>
                <span className="text-[16px] leading-[24px] text-[#dae2fd]">
                  Entorno de desarrollo real integrado
                </span>
              </div>
            </div>
          </div>
          
          {/* Footer-like text for branding */}
          <div className="absolute bottom-[24px] left-[64px] text-[#c4c5d9]/40 text-[12px] leading-[16px] font-bold tracking-[0.1em] uppercase">
            © 2026 NANOCODE
          </div>
        </section>

        {/* Right Side: Login Form */}
        <section className="flex flex-col justify-center items-center w-full md:w-1/2 px-[20px] md:px-[64px] bg-[#0b1326]">
          
          {/* Mobile Branding Only */}
          <div className="md:hidden mb-[40px] flex flex-col items-center">
            <div className="h-10 mb-[12px] flex items-center justify-center">
               <span className="text-2xl">[Icono: Logo CodePulse]</span>
            </div>
            <span className="text-[24px] leading-[32px] font-semibold text-[#b8c3ff]">
              CodePulse
            </span>
          </div>
          
          <div className="w-full max-w-[440px]">
            <header className="mb-[64px] text-center md:text-left">
              <h2 className="text-[24px] leading-[32px] font-semibold text-[#dae2fd] mb-[4px]">
                Bienvenido de nuevo
              </h2>
              <p className="text-[16px] leading-[24px] text-[#c4c5d9]">
                Continúa tu viaje de aprendizaje hoy.
              </p>
            </header>
            
            <form onSubmit={handleSubmit} className="space-y-[24px]">
              {/* --- TRAMPAS PARA EL NAVEGADOR --- */}
              <input type="text" name="fakeusernameremembered" style={{ display: 'none' }} />
              <input type="password" name="fakepasswordremembered" style={{ display: 'none' }} />
              
              {/* Email Field */}
              <div className="space-y-[4px]">
                <label className="text-[12px] leading-[16px] font-bold tracking-[0.1em] uppercase text-[#c4c5d9] ml-1" htmlFor="loginEmail">
                  Correo Electrónico
                </label>
                <div className="relative group focus-within:scale-[1.01] transition-transform duration-200">
                  <input
                    className="w-full bg-[#131b2e] border border-[#434656]/30 text-[#dae2fd] rounded-xl px-[24px] py-[12px] focus:border-[#b8c3ff] focus:ring-1 focus:ring-[#b8c3ff] transition-all duration-300 placeholder:text-[#8e90a2]/50 outline-none"
                    id="loginEmail"
                    name="loginEmail"
                    value={formData.loginEmail}
                    onChange={handleChange}
                    placeholder="nombre@ejemplo.com"
                    type="email"
                    required
                    autoComplete="off"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8e90a2] group-focus-within:text-[#b8c3ff] transition-colors">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="transition-all duration-300 group-focus-within:drop-shadow-[0_0_12px_#b8c3ff]"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
</span>
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-[4px]">
                <div className="flex justify-between items-center px-1">
                  <label className="text-[12px] leading-[16px] font-bold tracking-[0.1em] uppercase text-[#c4c5d9]" htmlFor="loginKey">
                    Contraseña
                  </label>
                  {/* <span className="text-[13px] font-medium text-[#b8c3ff] hover:text-[#ddb7ff] transition-colors cursor-pointer">
                    ¿Olvidaste tu contraseña?
                  </span> */}
                </div>
                <div className="relative group focus-within:scale-[1.01] transition-transform duration-200">
                  <input
                    className="w-full bg-[#131b2e] border border-[#434656]/30 text-[#dae2fd] rounded-xl px-[24px] py-[12px] focus:border-[#b8c3ff] focus:ring-1 focus:ring-[#b8c3ff] transition-all duration-300 placeholder:text-[#8e90a2]/50 outline-none pr-12"
                    id="loginKey"
                    name="loginKey"
                    value={formData.loginKey}
                    onChange={handleChange}
                    placeholder="••••••••"
                    type={showPassword ? "text" : "password"}
                    required
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8e90a2] hover:text-[#b8c3ff] group-focus-within:text-[#b8c3ff] transition-colors"
                  >
                    <span className="text-xl">
                      {showPassword ? <svg
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  {/* Pupila parcial */}
  <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
  {/* Arco superior parcial */}
  <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
  {/* Arco inferior parcial */}
  <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
  {/* Línea diagonal de tachado */}
  <line x1="2" y1="2" x2="22" y2="22" />
</svg> : <svg
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  {/* Forma del ojo */}
  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
  {/* Pupila */}
  <circle cx="12" cy="12" r="3" />
</svg>}
                    </span>
                  </button>
                </div>
              </div>

              {/* Primary Action */}
              <button
                disabled={loading}
                type="submit"
                className="w-full bg-[#2e5bff] text-[#efefff] text-[16px] leading-[24px] py-[12px] rounded-xl font-bold hover:shadow-[0_0_20px_rgba(46,91,255,0.4)] active:scale-95 transition-all duration-200 mt-[24px] disabled:opacity-50"
              >
                {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
              </button>
            </form>

            <div className="relative my-[64px] text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#434656]/20"></div>
              </div>
            </div>

            <p className="mt-[64px] text-center text-[16px] leading-[24px] text-[#c4c5d9]">
              ¿No tienes una cuenta?{" "}
              <button onClick={() => router.push('./register')} className="text-[#b8c3ff] font-bold hover:underline ml-1 cursor-pointer">
                Regístrate gratis
              </button>
            </p>
          </div>
        </section>
      </main>

      {/* Floating Atmosphere Elements */}
      <div className="fixed top-1/4 right-10 w-2 h-2 bg-[#94db00] rounded-full animate-pulse blur-[1px] hidden md:block"></div>
      <div className="fixed bottom-1/4 left-1/3 w-1.5 h-1.5 bg-[#b8c3ff] rounded-full animate-ping hidden md:block"></div>
    </div>
  );
}