"use client"

import Image from "next/image"
import MurmurationWordmark from "@/components/ui/murmuration-wordmark"

// Trazos vectoriales oficiales de raze-logo-svg/raze-blanco-completo.svg (viewBox 0 0 853 644)
const RAZE_LOGO_SHAPE = {
  width: 853,
  height: 644,
  paths: [
    // R exterior
    "M201.4 26.5 H485.45 A127 127 0 0 1 542.6 267 L657 415.5 H578 L421 213.4 H484.1 A53.4 53.4 0 0 0 484.1 106.6 H264 Z",
    // Corte diagonal de la R
    "M358.2 322 L401 280.7 L505 415.5 H430 Z",
    // Símbolo '<'
    "M268 163.8 V182.8 L231.6 211 L268 239 V257.4 L214.7 216 V204 Z",
    // Símbolo '/'
    "M320.4 146.8 H337 L294 274.4 H278 Z",
    // Símbolo '>'
    "M347.5 163.8 L400.7 205 V217 L347.5 256.6 V238 L383.7 210 L347.5 182 Z",
    // Logotipo tipográfico 'RAZE'
    "M30.6 475.7 H139.8 A46.4 46.4 0 0 1 149.3 567.4 L186 609.2 H146 L108 568.7 H78.2 V609.2 H48.4 V537.5 H140.1 A15.45 15.45 0 0 0 140.1 506.6 H48 Z M238.8 609.2 L316.5 475.7 H342 L421 609.2 H385.2 L330 515 L274.8 609.2 Z M473.6 475.7 H614 V501.6 L521.9 581.3 H614 V609.2 H473.6 V581 L562.3 504.7 H473.6 Z M686.6 475.7 H825 L812 504.5 H686.6 Z M686.6 528.8 H813 L800 557.4 H686.6 Z M686.6 581.8 H820 L808 609.3 H686.6 Z",
  ],
}

export default function Demo() {
  return (
    <footer className="relative w-full">
      <MurmurationWordmark
        word="RAZE"
        svgShape={RAZE_LOGO_SHAPE}
        birds={5200}
        preset="dusk"
        palette={{ skyTop: "#232d43" }}
        height="88svh"
      >
        {/* Fundido superior para unir sin cortes el fondo rgb(35, 45, 67) con el cielo del canvas */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#232d43] via-[#232d43]/65 to-transparent"
        />

        {/* Sombra inferior suave para que el texto claro del pie destaque siempre sobre los juncos y el horizonte */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#14100f]/90 via-[#14100f]/45 to-transparent"
        />

        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-between px-6 pt-12 pb-8 sm:px-10">
          {/* Encabezado sutil del footer con el logo oficial */}
          <div className="flex flex-col justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <a href="#inicio" className="flex items-center gap-3">
                <Image
                  src="/raze-logo-svg/raze-fuego-simbolo-oscuro.svg"
                  alt="Raze Símbolo"
                  width={36}
                  height={31}
                  className="h-8 w-auto"
                />
                <Image
                  src="/raze-logo-svg/raze-blanco-nombre.svg"
                  alt="RAZE"
                  width={96}
                  height={18}
                  className="h-4 w-auto opacity-90"
                />
              </a>
              <span className="hidden h-4 w-px bg-white/15 sm:inline-block" />
              <p className="text-xs text-white/75">
                Pasa el cursor sobre la bandada para interactuar con el cielo.
              </p>
            </div>

            <nav className="flex flex-wrap gap-6 text-sm text-white/85">
              <a href="#inicio" className="transition-colors hover:text-[#ffd2a0]">
                Inicio
              </a>
              <a href="#clientes" className="transition-colors hover:text-[#ffd2a0]">
                Clientes
              </a>
              <a href="#servicios" className="transition-colors hover:text-[#ffd2a0]">
                Servicios
              </a>
              <a href="#contacto" className="transition-colors hover:text-[#ffd2a0]">
                Contacto
              </a>
            </nav>
          </div>

          {/* Barra inferior del footer con letras claras de alto contraste */}
          <div className="flex flex-col items-start justify-between gap-2 rounded-xl border border-white/15 bg-[#14100f]/60 px-5 py-3.5 text-xs text-white/95 shadow-lg backdrop-blur-md sm:flex-row sm:items-center">
            <span className="font-medium tracking-wide drop-shadow-sm">
              © 2026 Raze · Andres Alquinta Ayala. Todos los derechos reservados.
            </span>
            <span className="font-semibold tracking-wider text-[#ffd2a0] uppercase drop-shadow-sm">
              Antofagasta - Chile
            </span>
          </div>
        </div>
      </MurmurationWordmark>
    </footer>
  )
}
