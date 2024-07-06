
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import ContactPage from "../contact/contact"

export function MainPage() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <img src="/logo.png" width={32} height={32} alt="Logo" />
            <span className="text-lg font-semibold">ROLADIN PLUS</span>
          </Link>
          <nav className="hidden gap-4 md:flex">
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              Accueil
            </Link>
            <Link
              href="#projects"
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              Projets
            </Link>
            <Link
              href="#about"
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
              prefetch={false}
            >
              À propos
            </Link>
           
          </nav>
          <Link
              href="#contact">  
               <Button>Réserver une consultation</Button>
               </Link>
       
        </div>
      </header>
      <main>
        <section className="bg-gradient-to-r from-primary to-secondary py-20 text-primary-foreground">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Sublimez votre intérieur avec ROLADIN PLUS
                </h1>
                <p className="text-lg leading-relaxed">
                  Découvrez le parfait mélange de style et de fonctionnalité avec nos services exceptionnels de design
                  d&apos;intérieur. Laissez-nous transformer votre espace en un chef-d&apos;œuvre.
                </p>
                <div className="flex gap-4">
                  <Link href="#contact">
                  <Button>Réserver une consultation</Button>
                  </Link>
                  <Link href="#about">
                  <Button variant="secondary">En savoir plus</Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/intro.jpeg"
                  width={500}
                  height={500}
                  alt="Image de héros"
                  className="max-w-full rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Nos projets exceptionnels</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Explorez notre portefeuille de projets de design d&apos;intérieur époustouflants qui témoignent de notre
                expertise et de notre créativité.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <img
                  src="/loft.jpeg"
                  width={600}
                  height={400}
                  alt="Projet 1"
                  className="h-48 w-full rounded-t-lg object-cover"
                />
                <CardContent className="space-y-4 p-4">
                  <h3 className="text-xl font-semibold">Appartement loft moderne</h3>
                  <p className="text-muted-foreground">
                    Un design de loft épuré et contemporain qui maximise l&apos;espace et la lumière naturelle.
                  </p>
                 
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/house.jpeg"
                  width={600}
                  height={400}
                  alt="Projet 2"
                  className="h-48 w-full rounded-t-lg object-cover"
                />
                <CardContent className="space-y-4 p-4">
                  <h3 className="text-xl font-semibold">Maison familiale cosy</h3>
                  <p className="text-muted-foreground">
                    Une maison familiale chaleureuse et accueillante, axée sur le confort et la fonctionnalité.
                  </p>
                 
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/penthouse.jpeg"
                  width={600}
                  height={400}
                  alt="Projet 3"
                  className="h-48 w-full rounded-t-lg object-cover"
                />
                <CardContent className="space-y-4 p-4">
                  <h3 className="text-xl font-semibold">Penthouse de luxe</h3>
                  <p className="text-muted-foreground">
                    Un design de penthouse époustouflant qui dégage l&apos;élégance et la sophistication.
                  </p>
                  
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="about" className="bg-muted py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex items-center justify-center">
                <img
                  src="/about.jpeg"
                  width={500}
                  height={500}
                  alt="Image à propos"
                  className="max-w-full rounded-lg shadow-xl"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">À propos de ROLADIN PLUS</h2>
                <p className="text-lg leading-relaxed">
                  ROLADIN PLUS est une entreprise de design d&apos;intérieur de premier plan, dédiée à la création d&apos;espaces
                  de vie et de travail exceptionnels. Avec des années d&apos;expérience et une équipe de designers
                  talentueux, nous nous efforçons de transformer votre vision en réalité.
                </p>
                <p className="text-lg leading-relaxed">
                  Notre passion pour le design, notre attention aux détails et notre engagement envers la satisfaction
                  de nos clients nous ont valu une réputation d&apos;excellence dans l&apos;industrie. Nous travaillons en étroite
                  collaboration avec nos clients pour comprendre leurs besoins et leurs préférences uniques, et nous
                  utilisons notre expertise pour livrer des designs époustouflants, fonctionnels et personnalisés.
                </p>
                
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Contactez-nous</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Prêt à transformer votre espace ? Contactez-nous dès aujourd&apos;hui pour programmer une consultation.
              </p>
            </div>
            <div className="mt-12 flex justify-center">
             <ContactPage />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-8">
      <div className=" mx-auto px-4 md:px-6 flex flex-col md:flex-column items-center justify-between">
          <p className="  mt-4 ">© 2024 Rolandin plus.</p>
          <p className="  "> Tous droits réservés.</p>
          </div>
          <div className=" mx-auto px-4 md:px-6 flex flex-col md:flex-column items-center justify-between">
          <p className="  mt-4 ">26 RUE FAVART </p>
          <p className="   ">13015 MARSEILLE</p>
          <p className="  mt-4 ">contact@kalouis-plus.fr</p>

          <p className="  mt-4 ">TEL: 04 28 29 39 24 </p>
          </div>
      </footer>
    </div>
  )
}

function LogInIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>
  )
}
