import Image from "next/image"
import Demo from "@/components/ui/demo"
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react"

export default function Home() {
  return (
    <div
      id="inicio"
      className="min-h-screen w-full bg-[rgb(35,45,67)] text-[#f4f1ea] selection:bg-[#e89a6a]/30 selection:text-[#ffd2a0]"
    >
      {/* Navegación principal con Logo Raze */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 sm:px-10">
        <a href="#inicio" className="group flex items-center gap-3.5">
          <Image
            src="/raze-logo-svg/raze-fuego-simbolo-oscuro.svg"
            alt="Raze Símbolo"
            width={42}
            height={36}
            priority
            className="h-9 w-auto transition-transform duration-300 group-hover:scale-105"
          />
          <Image
            src="/raze-logo-svg/raze-blanco-nombre.svg"
            alt="RAZE"
            width={110}
            height={21}
            priority
            className="h-4.5 w-auto"
          />
        </a>
        <nav className="hidden gap-8 text-sm text-white/75 sm:flex">
          <a href="#servicios" className="transition-colors hover:text-[#ffd2a0]">
            Servicios
          </a>
          <a href="#contacto" className="transition-colors hover:text-[#ffd2a0]">
            Contacto
          </a>
        </nav>
      </header>

      {/* Contenido principal (Hero + Servicios + Contacto) con fondo rgb(35, 45, 67) */}
      <main className="mx-auto max-w-6xl px-6 sm:px-10">
        {/* Hero */}
        <section className="grid min-h-[80svh] items-center gap-12 py-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.25em] text-[#e89a6a] uppercase">
              Diseño &amp; Desarrollo Digital
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Experiencias digitales creadas con precisión y movimiento orgánico.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Soluciones web modernas y plataformas operativas pensadas al detalle, desde
              la arquitectura técnica hasta una identidad visual armónica.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-full bg-[#e89a6a] px-6 py-3 text-sm font-medium text-[#14100f] transition-colors hover:bg-[#ffd2a0]"
              >
                Iniciar conversación
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white/85 transition-colors hover:border-white/30 hover:bg-white/[0.07]"
              >
                Explorar servicios
              </a>
            </div>
          </div>

          {/* Emblema Raze destacado en el Hero */}
          <div className="flex items-center justify-center lg:col-span-5">
            <div className="relative flex items-center justify-center rounded-3xl border border-white/10 bg-white/[0.02] p-10 shadow-2xl backdrop-blur-sm sm:p-14">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-3xl bg-radial from-[#e89a6a]/15 via-transparent to-transparent"
              />
              <Image
                src="/raze-logo-svg/raze-fuego-completo-oscuro.svg"
                alt="Logo RAZE Completo"
                width={320}
                height={242}
                priority
                className="relative h-auto w-56 drop-shadow-[0_12px_32px_rgba(241,70,52,0.22)] sm:w-68"
              />
            </div>
          </div>
        </section>

        {/* Sección Servicios / Enfoque */}
        <section id="servicios" className="border-t border-white/10 py-24">
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <span className="text-xs font-medium tracking-widest text-[#e89a6a] uppercase">
                01 / Estrategia
              </span>
              <h2 className="mt-3 text-xl font-semibold text-white">
                Identidad &amp; Dirección
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                Construimos sistemas visuales coherentes que conectan desde el primer
                vistazo hasta el último detalle de la página.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <span className="text-xs font-medium tracking-widest text-[#e89a6a] uppercase">
                02 / Ingeniería
              </span>
              <h2 className="mt-3 text-xl font-semibold text-white">
                WebApps &amp; Dashboards
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                Plataformas operativas, control de KPIs y sistemas de gestión en tiempo
                real con arquitectura moderna en Next.js.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <span className="text-xs font-medium tracking-widest text-[#e89a6a] uppercase">
                03 / Atmósfera
              </span>
              <h2 className="mt-3 text-xl font-semibold text-white">
                Diseño a Medida
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                Cada proyecto se adapta a los objetivos comerciales y operativos de tu
                empresa con atención directa y personalizada.
              </p>
            </div>
          </div>
        </section>

        {/* Sección Contacto Profesional */}
        <section id="contacto" className="border-t border-white/10 pt-24 pb-16">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            {/* Columna izquierda: Presentación y titular */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#e89a6a]/30 bg-[#e89a6a]/10 px-3.5 py-1.5 text-xs font-medium tracking-wide text-[#ffd2a0]">
                <span className="h-2 w-2 rounded-full bg-[#e89a6a]" />
                Disponible para nuevos proyectos
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Hablemos sobre tu próximo proyecto.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/65">
                Atención directa para desarrollo web, consultoría técnica y experiencias
                digitales a medida.
              </p>

              {/* Tarjeta de perfil principal con isotipo Raze */}
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] p-2 ring-1 ring-white/15">
                    <Image
                      src="/raze-logo-svg/raze-fuego-simbolo-oscuro.svg"
                      alt="Raze"
                      width={32}
                      height={27}
                      className="h-7 w-auto"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-medium tracking-wider text-white/50 uppercase">
                      Contacto Directo · RAZE
                    </p>
                    <h3 className="text-lg font-semibold text-white">
                      Andres Alquinta Ayala
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna derecha: Tarjetas de canales de contacto */}
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {/* Teléfono / WhatsApp: +56 9 6673 5408 */}
              <a
                href="https://wa.me/56966735408"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-200 hover:border-[#e89a6a]/50 hover:bg-white/[0.06]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.06] text-[#e89a6a] transition-colors group-hover:bg-[#e89a6a] group-hover:text-[#14100f]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-white/35 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#ffd2a0]" />
                </div>

                <div className="mt-8">
                  <p className="text-xs font-medium tracking-wider text-white/50 uppercase">
                    Teléfono &amp; WhatsApp
                  </p>
                  <p className="mt-1.5 font-mono text-lg font-medium text-white group-hover:text-[#ffd2a0]">
                    +56 9 6673 5408
                  </p>
                </div>
              </a>

              {/* Correo Electrónico */}
              <a
                href="mailto:andres.adt@gmail.com"
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-200 hover:border-[#e89a6a]/50 hover:bg-white/[0.06]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.06] text-[#e89a6a] transition-colors group-hover:bg-[#e89a6a] group-hover:text-[#14100f]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-white/35 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#ffd2a0]" />
                </div>

                <div className="mt-8">
                  <p className="text-xs font-medium tracking-wider text-white/50 uppercase">
                    Correo Electrónico
                  </p>
                  <p className="mt-1.5 text-lg font-medium break-all text-white group-hover:text-[#ffd2a0]">
                    andres.adt@gmail.com
                  </p>
                </div>
              </a>

              {/* Ubicación (Ancho completo en la fila inferior) */}
              <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:col-span-2 sm:flex-row sm:items-center">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-[#e89a6a]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium tracking-wider text-white/50 uppercase">
                      Ubicación
                    </p>
                    <p className="mt-0.5 text-lg font-medium text-white">
                      Antofagasta - Chile
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-3 sm:mt-0">
                  <a
                    href="tel:+56966735408"
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white/80 transition-colors hover:border-white/25 hover:text-white"
                  >
                    Llamar directamente
                  </a>
                  <a
                    href="mailto:andres.adt@gmail.com"
                    className="rounded-lg bg-[#e89a6a]/15 px-4 py-2 text-xs font-medium text-[#ffd2a0] ring-1 ring-[#e89a6a]/30 transition-colors hover:bg-[#e89a6a]/25"
                  >
                    Enviar correo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer con MurmurationWordmark al final del scroll */}
      <Demo />
    </div>
  )
}
