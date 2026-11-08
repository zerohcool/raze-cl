"use client"

import * as React from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Demo from "@/components/ui/demo"
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react"

const SERVICES = [
  {
    tag: "01 / Estrategia",
    title: "Identidad & Dirección",
    description:
      "Construimos sistemas visuales coherentes que conectan desde el primer vistazo hasta el último detalle de la página.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=85",
    alt: "Diseño abstracto de ondas y formas orgánicas",
    speed: 0.9,
  },
  {
    tag: "02 / Ingeniería",
    title: "WebApps & Dashboards",
    description:
      "Plataformas operativas, control de KPIs y sistemas de gestión en tiempo real con arquitectura moderna en Next.js.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85",
    alt: "Arquitectura tecnológica y circuitos de precisión",
    speed: 1.15,
  },
  {
    tag: "03 / Atmósfera",
    title: "Diseño a Medida",
    description:
      "Cada proyecto se adapta a los objetivos comerciales y operativos de tu empresa con atención directa y personalizada.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80",
    alt: "Red global y conexiones digitales nocturnas",
    speed: 1.0,
  },
]

export default function Home() {
  const pageRef = React.useRef<HTMLDivElement | null>(null)

  React.useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const root = pageRef.current
    if (!root) return

    const mm = gsap.matchMedia()

    // Solo activamos el movimiento cinemático cuando el usuario no solicita reducir movimiento
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // 1. Parallax multicapa en el Hero al iniciar el scroll
      gsap.to("[data-hero-copy]", {
        yPercent: -18,
        opacity: 0.25,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-hero-section]",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })

      gsap.fromTo(
        "[data-hero-logo-card]",
        { yPercent: 0, scale: 0.94 },
        {
          yPercent: 16,
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-hero-section]",
            start: "top top",
            end: "bottom top",
            scrub: 1.1,
          },
        }
      )

      gsap.fromTo(
        "[data-hero-logo]",
        { scale: 0.96, yPercent: 6 },
        {
          scale: 1.15,
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-hero-section]",
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      )

      // 2. Imagen panorámica central que se expande suavemente al hacer scroll (clip-path + scale + parallax interno)
      const expandTl = gsap.timeline({
        scrollTrigger: {
          trigger: "[data-expand-stage]",
          start: "top 88%",
          end: "center center",
          scrub: 1.1,
        },
      })

      expandTl
        .fromTo(
          "[data-expand-frame]",
          {
            clipPath: "inset(14% 12% 14% 12% round 32px)",
            scale: 0.88,
          },
          {
            clipPath: "inset(0% 0% 0% 0% round 24px)",
            scale: 1,
            ease: "power2.out",
          },
          0
        )
        .fromTo(
          "[data-expand-img]",
          {
            scale: 1.32,
            yPercent: -10,
          },
          {
            scale: 1.04,
            yPercent: 6,
            ease: "none",
          },
          0
        )
        .fromTo(
          "[data-expand-caption]",
          {
            y: 28,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
          },
          0.25
        )

      // Continuación del parallax interno mientras la imagen panorámica sale por arriba
      gsap.fromTo(
        "[data-expand-img]",
        { yPercent: 6 },
        {
          yPercent: 18,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-expand-stage]",
            start: "center center",
            end: "bottom top",
            scrub: 1.1,
          },
        }
      )

      // 3. Tarjetas de Servicios: expansión suave de la ventana de imagen + parallax vertical de la foto
      const cards = gsap.utils.toArray<HTMLElement>("[data-parallax-card]")
      cards.forEach((card, idx) => {
        const media = card.querySelector<HTMLElement>("[data-parallax-media]")
        const img = card.querySelector<HTMLElement>("[data-parallax-img]")
        const speed = Number(card.dataset.speed || 1)

        // Entrada escalonada de la tarjeta
        gsap.fromTo(
          card,
          {
            y: 50 * speed,
            opacity: 0,
            scale: 0.96,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            delay: idx * 0.06,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        )

        // Expansión suave del contenedor de imagen al entrar en vista
        if (media) {
          gsap.fromTo(
            media,
            {
              clipPath: "inset(12% 8% 12% 8% round 16px)",
              scale: 0.92,
            },
            {
              clipPath: "inset(0% 0% 0% 0% round 16px)",
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                end: "center 55%",
                scrub: 1,
              },
            }
          )
        }

        // Desplazamiento parallax de la imagen interna durante todo el recorrido
        if (img) {
          gsap.fromTo(
            img,
            {
              scale: 1.24,
              yPercent: -14 * speed,
            },
            {
              scale: 1.05,
              yPercent: 14 * speed,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.1,
              },
            }
          )
        }
      })

      // 4. Revelado cinemático de la sección de Contacto
      gsap.fromTo(
        "[data-contact-reveal]",
        {
          y: 36,
          opacity: 0,
          scale: 0.97,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#contacto",
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        }
      )
    }, root)

    return () => mm.revert()
  }, [])

  return (
    <div
      ref={pageRef}
      id="inicio"
      className="min-h-screen w-full overflow-x-clip bg-[rgb(35,45,67)] text-[#f4f1ea] selection:bg-[#e89a6a]/30 selection:text-[#ffd2a0]"
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
          <a href="#vision" className="transition-colors hover:text-[#ffd2a0]">
            Visión
          </a>
          <a href="#servicios" className="transition-colors hover:text-[#ffd2a0]">
            Servicios
          </a>
          <a href="#contacto" className="transition-colors hover:text-[#ffd2a0]">
            Contacto
          </a>
        </nav>
      </header>

      {/* Contenido principal con GSAP ScrollTrigger Parallax */}
      <main className="mx-auto max-w-6xl px-6 sm:px-10">
        {/* Hero */}
        <section
          data-hero-section
          className="grid min-h-[80svh] items-center gap-12 py-16 lg:grid-cols-12"
        >
          <div data-hero-copy className="will-change-transform lg:col-span-7">
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
                href="#vision"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white/85 transition-colors hover:border-white/30 hover:bg-white/[0.07]"
              >
                Explorar experiencia
              </a>
            </div>
          </div>

          {/* Emblema Raze con Parallax en el Hero */}
          <div className="flex items-center justify-center lg:col-span-5">
            <div
              data-hero-logo-card
              className="relative flex items-center justify-center rounded-3xl border border-white/10 bg-white/[0.02] p-10 shadow-2xl backdrop-blur-sm will-change-transform sm:p-14"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-3xl bg-radial from-[#e89a6a]/15 via-transparent to-transparent"
              />
              <div data-hero-logo className="will-change-transform">
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
          </div>
        </section>

        {/* Escena Panorámica Cinemática — Se expande suavemente al hacer scroll */}
        <section id="vision" data-expand-stage className="py-12 sm:py-20">
          <div
            data-expand-frame
            className="relative h-[58svh] min-h-[380px] w-full overflow-hidden rounded-3xl border border-white/15 bg-[#192133] shadow-2xl will-change-[transform,clip-path] sm:h-[72svh]"
          >
            {/* Imagen con contra-parallax y zoom suave */}
            <img
              data-expand-img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1800&q=85"
              alt="Ingeniería digital y arquitectura de software"
              className="h-full w-full object-cover object-center brightness-75 contrast-110 will-change-transform"
            />

            {/* Gradiente atmosférico en tonos Raze */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#192133] via-[#232d43]/40 to-transparent"
            />

            {/* Leyenda sobre la escena expandida */}
            <div
              data-expand-caption
              className="absolute inset-x-0 bottom-0 flex flex-col justify-between gap-4 p-8 sm:flex-row sm:items-end sm:p-12"
            >
              <div className="max-w-xl">
                <span className="inline-block rounded-full border border-[#e89a6a]/40 bg-[#14100f]/60 px-3.5 py-1 text-[11px] font-semibold tracking-[0.2em] text-[#ffd2a0] uppercase backdrop-blur-md">
                  Ingeniería &amp; Movimiento
                </span>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-4xl">
                  Sistemas diseñados para escalar con fluidez visual y técnica.
                </h2>
              </div>
              <p className="text-xs font-medium tracking-widest text-white/75 uppercase">
                Antofagasta · Chile
              </p>
            </div>
          </div>
        </section>

        {/* Sección Servicios con Imágenes que se expanden y se desplazan en Parallax */}
        <section id="servicios" className="border-t border-white/10 py-24">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.25em] text-[#e89a6a] uppercase">
              Nuestras Capacidades
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Arquitectura digital de principio a fin.
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {SERVICES.map((service) => (
              <div
                key={service.tag}
                data-parallax-card
                data-speed={service.speed}
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 will-change-transform"
              >
                {/* Ventana de imagen con expansión suave por ScrollTrigger y parallax interno */}
                <div
                  data-parallax-media
                  className="relative mb-6 h-52 w-full overflow-hidden rounded-xl bg-[#192133] will-change-[transform,clip-path]"
                >
                  <img
                    data-parallax-img
                    src={service.image}
                    alt={service.alt}
                    className="h-full w-full object-cover object-center brightness-90 transition-all duration-500 will-change-transform group-hover:brightness-105"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#232d43]/80 via-transparent to-transparent"
                  />
                </div>

                <div>
                  <span className="text-xs font-medium tracking-widest text-[#e89a6a] uppercase">
                    {service.tag}
                  </span>
                  <h3 className="mt-2.5 text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sección Contacto Profesional con entrada escalonada */}
        <section id="contacto" className="border-t border-white/10 pt-24 pb-16">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            {/* Columna izquierda: Presentación y titular */}
            <div data-contact-reveal className="will-change-transform lg:col-span-5">
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
                data-contact-reveal
                href="https://wa.me/56966735408"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-200 will-change-transform hover:border-[#e89a6a]/50 hover:bg-white/[0.06]"
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
                data-contact-reveal
                href="mailto:andres.adt@gmail.com"
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-200 will-change-transform hover:border-[#e89a6a]/50 hover:bg-white/[0.06]"
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
              <div
                data-contact-reveal
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 will-change-transform sm:col-span-2 sm:flex-row sm:items-center"
              >
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
