import Image from "next/image"
import Link from "next/link"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { SectionHeading } from "@/components/section-heading"
import { WaveDivider } from "@/components/wave-divider"
import { getContent } from '@/lib/content'

export default function Home() {
  const content = getContent()
  
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-cyan-800 to-cyan-600 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <Image
                src="/logo.jpg"
                alt="Microplàstics hero"
                width={400}
                height={250}
                className="rounded-xl shadow-lg"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {content.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              {content.hero.subtitle}
            </p>
            <Link
              href="#newsletter"
              className="bg-white text-cyan-800 px-8 py-3 rounded-full font-medium text-lg hover:bg-cyan-50 transition-colors"
            >
              {content.hero.cta}
            </Link>
          </div>
        </div>
      </section>

      <WaveDivider />

      {/* Què són els microplàstics */}
      <section id="que-son" className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading>{content.whatAre.title}</SectionHeading>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <div>
              {content.whatAre.content.map((text: string, idx: number) => (
                <p className="text-lg mb-6" key={idx}>{text}</p>
              ))}
            </div>
            <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
            <Image
                src="/micro1.jpg"
                alt="Microplàstics"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impacte ambiental */}
      <section id="impacte-ambiental" className="w-full py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionHeading>{content.environmentalImpact.title}</SectionHeading>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <div className="order-2 md:order-1 relative h-80 md:h-96 rounded-xl overflow-hidden">
            <Image
                src="/micro2.jpg"
                alt="Microplàstics dins d'un peix"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
                priority
              />
            </div>
            <div className="order-1 md:order-2">
              {content.environmentalImpact.content.map((text: string, idx: number) => (
                <p className="text-lg mb-6" key={idx}>{text}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Riscos per a la salut */}
      <section id="riscos-salut" className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading>{content.healthRisks.title}</SectionHeading>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <div>
              {content.healthRisks.content.map((text: string, idx: number) => (
                <p className="text-lg mb-6" key={idx}>{text}</p>
              ))}
            </div>
            <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
            <Image
                src="/micro3.jpg"
                alt="Representació dels microplàstics dins el cos humà"
                width={600}
                height={450}
                className="rounded-xl shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fonts principals */}
      <section id="fonts" className="w-full py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionHeading>{content.sources.title}</SectionHeading>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {Object.values(content.sources.items).map((item: any, idx: number) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Què podem fer */}
      <section id="solucions" className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading>{content.solutions.title}</SectionHeading>

          <div className="mt-12">
            <div className="bg-cyan-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 text-cyan-800">{content.solutions.subtitle}</h3>

              <ul className="space-y-4">
                {content.solutions.actions.map((action: string, idx: number) => (
                  <li className="flex items-start" key={idx}>
                    <div className="bg-cyan-700 text-white rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-lg">{action}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-cyan-50 p-8 rounded-xl mt-8">
              <h3 className="text-2xl font-semibold mb-6 text-cyan-800">Accions col·lectives</h3>

              <ul className="space-y-4">
                {content.solutions.collectiveActions && content.solutions.collectiveActions.map((action: string, idx: number) => (
                  <li className="flex items-start" key={idx}>
                    <div className="bg-cyan-700 text-white rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-lg">{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="w-full py-16 md:py-24 bg-cyan-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{content.newsletter.title}</h2>
            <p className="text-xl mb-8">
              {content.newsletter.content}
            </p>

            <NewsletterSignup />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="w-full py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionHeading>{content.contact.title}</SectionHeading>

          <div className="mt-12">
            <form action="https://formspree.io/f/xpwrwndl" method="POST" className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="El teu nom"
                required
                className="w-full p-3 rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="El teu correu electrònic"
                required
                className="w-full p-3 rounded"
              />
              <textarea
                name="message"
                placeholder="El teu missatge"
                required
                className="w-full p-3 rounded"
                rows={5}
              />
              <button
                type="submit"
                className="w-full bg-cyan-700 text-white py-3 rounded font-bold hover:bg-cyan-800 transition-colors"
              >
                Envia
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>© {new Date().getFullYear()} microplastics.cat - Tots els drets reservats</p>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-cyan-400 transition-colors">
                Política de Privacitat
              </Link>
              <Link href="#" className="hover:text-cyan-400 transition-colors">
                Contacte
              </Link>
              <Link href="#" className="hover:text-cyan-400 transition-colors">
                Sobre Nosaltres
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
