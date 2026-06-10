"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // AQUÍ IRÁ TU ENDPOINT CUANDO LO TENGAS
      /*
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) throw new Error('Error en el registro');
      const data = await response.json();
      console.log('Registro exitoso', data);
      */
      
      console.log("Datos listos para enviar al endpoint:", formData);
      // Simulación de delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      console.error("Error al registrar:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0b1326] text-[#dae2fd] text-base overflow-x-hidden min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-5 md:px-10 py-3 bg-[#0b1326]/80 backdrop-blur-xl border-b border-[#434656]/10 shadow-sm">
        <span className="text-2xl font-bold text-[#b8c3ff] tracking-tight">
          NanoCode
        </span>
      </header>

      <main className="flex-grow flex flex-col md:flex-row pt-[64px]">
        {/* Visual Side (Inspiration) */}
        <section className="hidden md:flex flex-1 relative items-center justify-center p-[64px] overflow-hidden bg-[#060e20]">
          <div className="relative z-10 max-w-lg text-center">
            <div className="inline-block px-3 py-1 bg-[#2e5bff]/20 text-[#b8c3ff] rounded-full text-xs font-bold tracking-[0.1em] mb-[24px] uppercase">
              Micro-Aprendizaje
            </div>
            <h1 className="text-[48px] leading-[56px] font-bold tracking-tight text-[#dae2fd] mb-[24px]">
              Domina el código en{" "}
              <span className="text-[#94db00] drop-shadow-[0_0_15px_#2e5bff] animate-pulse">5 minutos</span> al día.
            </h1>
            <p className="text-lg text-[#c4c5d9] leading-relaxed">
              "La programación no se trata de lo que sabes, sino de lo que puedes
              descubrir en pequeñas ráfagas de curiosidad."
            </p>
            <div className="mt-[64px] flex justify-center gap-[24px] opacity-50">
              <span className="text-4xl">  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 -960 960 960" 
                    fill="currentColor" 
                    className="text-secondary w-[32px] h-[32px]"
                  >
                    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm120-60 56-56-84-84 84-84-56-56-140 140 140 140Zm160-20v80h240v-80H440Z"/>
                  </svg></span>
              <span className="text-4xl"><svg
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  viewBox="0 0 24 24"
  fill="currentColor"
  
>
  <path d="M3 3h18v18H3V3zm11.749 14.332c1.037 0 1.705-.443 2.115-1.07l-1.423-1.011c-.305.419-.661.644-1.168.644-.543 0-.965-.296-.965-.913 0-.613.578-.85 1.25-.992l.836-.17c1.472-.296 2.39-1.015 2.39-2.38 0-1.464-1.121-2.45-2.718-2.45-1.398 0-2.355.602-2.824 1.536l1.41 1.012c.28-.52.66-.81 1.233-.81.442 0 .809.238.809.704 0 .542-.486.723-1.137.856l-.887.186c-1.558.332-2.476 1.066-2.476 2.458 0 1.547 1.156 2.406 2.73 2.406zm-4.707-.156c.746 0 1.332-.234 1.684-.71l-1.422-1.028c-.187.278-.445.41-.75.41-.492 0-.809-.281-.809-.855V9.453h-1.895v5.336c0 1.562.977 2.379 2.41 2.379-.001.004.782.004.782.004z" />
</svg></span>
              <span className="text-4xl"><svg
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="text-[#c4c5d9]/50 hover:text-[#2e5bff] hover:drop-shadow-[0_0_12px_#2e5bff] transition-all duration-300 cursor-pointer"
>
  {/* Disco superior */}
  <ellipse cx="12" cy="5" rx="9" ry="3" />
  {/* Línea divisoria central */}
  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
  {/* Cuerpo del cilindro y base */}
  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
</svg></span>
            </div>
          </div>
          {/* Ambient Glows */}
          <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[#b8c3ff]/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-[#ddb7ff]/10 rounded-full blur-[100px]"></div>
        </section>

        {/* Form Side */}
        <section className="flex-1 flex items-center justify-center px-5 py-[64px] md:py-0">
          <div className="w-full max-w-md space-y-[24px]">
            <div className="space-y-[4px]">
              <h2 className="text-2xl md:text-[32px] md:leading-[40px] font-bold text-[#dae2fd]">
                Crea tu cuenta
              </h2>
              <p className="text-[#c4c5d9] text-base">
                Empieza tu viaje hacia la maestría técnica hoy mismo.
              </p>
            </div>

            {/* Main Form */}
            <form onSubmit={handleSubmit} className="space-y-[24px]">
              <div className="space-y-[4px]">
                <label className="text-xs font-bold tracking-[0.1em] uppercase text-[#c4c5d9]" htmlFor="name">
                  NOMBRE COMPLETO
                </label>
                <div className="relative focus-within:scale-[1.01] transition-transform duration-200">
                  <input
                    className="w-full bg-[#131b2e] border border-[#434656]/30 rounded-lg p-3 focus:ring-2 focus:ring-[#b8c3ff]/50 focus:border-[#b8c3ff] outline-none transition-all placeholder:text-[#8e90a2]/50"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ej. Alex Rivera"
                    required
                    type="text"
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className="space-y-[4px]">
                <label className="text-xs font-bold tracking-[0.1em] uppercase text-[#c4c5d9]" htmlFor="email">
                  EMAIL
                </label>
                <div className="relative focus-within:scale-[1.01] transition-transform duration-200">
                  <input
                    className="w-full bg-[#131b2e] border border-[#434656]/30 rounded-lg p-3 focus:ring-2 focus:ring-[#b8c3ff]/50 focus:border-[#b8c3ff] outline-none transition-all placeholder:text-[#8e90a2]/50"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@codepulse.io"
                    required
                    type="email"
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className="space-y-[4px]">
                <label className="text-xs font-bold tracking-[0.1em] uppercase text-[#c4c5d9]" htmlFor="password">
                  CONTRASEÑA
                </label>
                <div className="relative focus-within:scale-[1.01] transition-transform duration-200">
                  <input
                    className="w-full bg-[#131b2e] border border-[#434656]/30 rounded-lg p-3 focus:ring-2 focus:ring-[#b8c3ff]/50 focus:border-[#b8c3ff] outline-none transition-all placeholder:text-[#8e90a2]/50 pr-10"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                    type={showPassword ? "text" : "password"}
                    autoComplete="off"
                  />
                  <button
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8e90a2] hover:text-[#b8c3ff] transition-colors"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
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

              <div className="flex items-start gap-3 pt-[4px]">
                <input
                  className="mt-1 rounded border-[#434656]/30 bg-[#131b2e] text-[#b8c3ff] focus:ring-[#b8c3ff] focus:ring-offset-[#0b1326]"
                  id="terms"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  type="checkbox"
                  required
                />
                <label className="text-sm text-[#c4c5d9] leading-snug" htmlFor="terms">
                  Acepto los <span className="text-[#b8c3ff] hover:underline cursor-pointer">Términos de Servicio</span> y la <span className="text-[#b8c3ff] hover:underline cursor-pointer">Política de Privacidad</span>.
                </label>
              </div>

              <button
                disabled={loading}
                className="w-full py-[16px] bg-[#2e5bff] text-[#efefff] text-[20px] font-bold rounded-xl transition-all active:scale-[0.98] mt-[24px] disabled:opacity-50 hover:shadow-[0_0_20px_rgba(46,91,255,0.4)]"
                type="submit"
              >
                {loading ? "Creando cuenta..." : "Crear Cuenta"}
              </button>
            </form>

            <p className="text-center text-base text-[#c4c5d9] mt-[24px]">
              ¿Ya eres miembro? <button onClick={() => router.push('./sesion')} className="text-[#b8c3ff] font-bold hover:underline cursor-pointer">Inicia Sesión</button>
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-[40px] px-5 md:px-10 flex flex-col md:flex-row justify-between items-center gap-[24px] bg-[#060e20] border-t border-[#434656]/10">
        <div className="flex flex-col items-center md:items-start gap-[4px]">
          <span className="text-2xl font-bold text-[#dae2fd]">
            NanoCode
          </span>
          <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#8e90a2]">
            © 2026 NanoCode. Domina el código.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-[24px]">
          <span className="text-xs font-bold tracking-[0.1em] uppercase text-[#8e90a2] hover:text-[#94db00] transition-colors duration-200 cursor-pointer">Privacidad</span>
          <span className="text-xs font-bold tracking-[0.1em] uppercase text-[#8e90a2] hover:text-[#94db00] transition-colors duration-200 cursor-pointer">Términos</span>
          <span className="text-xs font-bold tracking-[0.1em] uppercase text-[#8e90a2] hover:text-[#94db00] transition-colors duration-200 cursor-pointer">Contacto</span>
        </div>
      </footer>
    </div>
  );
}