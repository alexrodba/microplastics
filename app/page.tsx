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
          <SectionHeading>Què són els microplàstics?</SectionHeading>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <div>
              <p className="text-lg mb-6">
                Els microplàstics són partícules de plàstic de menys de 5 mm de diàmetre. Poden provenir de diverses
                fonts, incloent la degradació de productes plàstics més grans, microesferes en productes cosmètics, o
                fibres sintètiques de la roba.
              </p>
              <p className="text-lg">
                Aquestes petites partícules són pràcticament invisibles a simple vista, però s'han detectat en tots els
                ecosistemes del planeta: des dels oceans més profunds fins a les muntanyes més altes, i fins i
                tot en l'aire que respirem i l'aigua que bevem.
              </p>
            </div>
            <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Microplàstics vistos a través d'un microscopi"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impacte ambiental */}
      <section id="impacte-ambiental" className="w-full py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionHeading>Impacte Ambiental</SectionHeading>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <div className="order-2 md:order-1 relative h-80 md:h-96 rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Contaminació per microplàstics en ecosistemes marins"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-lg mb-6">
                Els microplàstics representen una amenaça greu per als ecosistemes marins i terrestres. Aquests
                contaminants persistents s'acumulen en els organismes vius i poden transferir-se a través de la cadena
                alimentària.
              </p>
              <p className="text-lg mb-6">
                La fauna marina és especialment vulnerable, ja que molts animals confonen els microplàstics amb
                aliments. Això pot provocar bloquejos digestius, desnutrició i, en alguns casos, la mort.
              </p>
              <p className="text-lg">
                A més, els microplàstics poden absorbir i concentrar contaminants químics tòxics presents a l'aigua,
                actuant com a vectors d'aquests compostos nocius.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Riscos per a la salut */}
      <section id="riscos-salut" className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading>Riscos per a la Salut Humana</SectionHeading>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <div>
              <p className="text-lg mb-6">
                Els estudis científics han detectat microplàstics en el cos humà, incloent la sang, els pulmons i fins i
                tot la placenta. Encara que la investigació sobre els seus efectes en la salut humana està en curs, hi
                ha preocupacions significatives.
              </p>
              <p className="text-lg mb-6">
                Els microplàstics poden contenir additius químics com ftalats i bisfenol A (BPA), coneguts per ser
                disruptors endocrins que poden afectar el sistema hormonal.
              </p>
              <p className="text-lg">
                La inhalació de microplàstics a través de l'aire pot provocar inflamació pulmonar i estrès oxidatiu,
                mentre que la ingestió pot afectar el microbioma intestinal i potencialment contribuir a problemes
                digestius.
              </p>
            </div>
            <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Representació dels microplàstics en el cos humà"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fonts principals */}
      <section id="fonts" className="w-full py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionHeading>Fonts Principals de Microplàstics</SectionHeading>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Productes Cosmètics</h3>
              <p>
                Molts exfoliants, pastes de dents i productes de neteja facial contenen microesferes de plàstic que
                acaben als nostres sistemes d'aigua.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Tèxtils Sintètics</h3>
              <p>
                La roba feta de materials sintètics com el polièster allibera microfibres de plàstic cada vegada que es
                renta, contribuint significativament a la contaminació per microplàstics.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Degradació de Plàstics</h3>
              <p>
                Els productes plàstics més grans es fragmenten amb el temps a causa de l'exposició a la llum solar,
                l'erosió i altres factors ambientals, creant microplàstics secundaris.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Pneumàtics</h3>
              <p>
                El desgast dels pneumàtics dels vehicles allibera partícules de microplàstic que són arrossegades per
                l'aigua de pluja fins als sistemes aquàtics.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Pintures i Recobriments</h3>
              <p>
                Les pintures i recobriments sintètics es desgasten amb el temps i alliberen partícules de microplàstic
                al medi ambient.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Residus Plàstics</h3>
              <p>
                La gestió inadequada dels residus plàstics permet que aquests materials entrin al medi ambient, on es
                degraden en partícules més petites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Què podem fer */}
      <section id="solucions" className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading>Què Podem Fer?</SectionHeading>

          <div className="mt-12">
            <div className="bg-cyan-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 text-cyan-800">Accions Individuals</h3>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-cyan-700 text-white rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg">
                    Reduir l'ús de plàstics d'un sol ús (bosses, ampolles, palletes, etc.)
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-cyan-700 text-white rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg">Evitar productes cosmètics i de neteja que continguin microesferes</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-cyan-700 text-white rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg">Preferir roba de fibres naturals com el cotó, el lli o la llana</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-cyan-700 text-white rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg">Utilitzar filtres de rentadora per capturar microfibres</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-cyan-700 text-white rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg">Participar en neteges de platges i espais naturals</span>
                </li>
              </ul>
            </div>

            <div className="bg-cyan-50 p-8 rounded-xl mt-8">
              <h3 className="text-2xl font-semibold mb-6 text-cyan-800">Accions Col·lectives</h3>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-cyan-700 text-white rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg">Donar suport a polítiques que limitin l'ús de plàstics d'un sol ús</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-cyan-700 text-white rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg">Promoure la investigació sobre alternatives sostenibles als plàstics</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-cyan-700 text-white rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg">
                    Exigir a les empreses que redueixin l'ús de plàstics en els seus productes i embalatges
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-cyan-700 text-white rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg">
                    Donar suport a organitzacions que treballen per combatre la contaminació per plàstics
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="w-full py-16 md:py-24 bg-cyan-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Uneix-te a la Nostra Causa</h2>
            <p className="text-xl mb-8">
              Subscriu-te a la nostra newsletter per rebre informació actualitzada sobre els microplàstics,
              investigacions recents i accions que pots prendre per reduir el seu impacte.
            </p>

            <NewsletterSignup />
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
