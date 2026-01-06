import Link from "next/link";
import { siteConfig, stats, processSteps, benefits, problems } from "@/config/site";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-claovia-main" />
            <span className="text-xl font-bold text-claovia-dark">Claovia</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/sign-in" className="text-sm font-medium hover:text-claovia-main">
              Connexion
            </Link>
            <Link
              href="/sign-up"
              className="rounded-full bg-claovia-main px-6 py-2 text-sm font-medium text-white hover:bg-claovia-dark"
            >
              Essai gratuit
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-claovia-dark md:text-6xl">
          Vos collaborateurs parlent.
          <br />
          <span className="text-claovia-main">Vos managers agissent.</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-text-light">
          Transformez le feedback des collaborateurs en plans d'action concrets et outils prêts à l'emploi pour les managers.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/sign-up"
            className="rounded-full bg-claovia-main px-8 py-4 text-lg font-semibold text-white hover:bg-claovia-dark"
          >
            Commencer gratuitement
          </Link>
          <Link
            href="/demo"
            className="rounded-full border-2 border-claovia-main px-8 py-4 text-lg font-semibold text-claovia-main hover:bg-cream"
          >
            Voir une démo
          </Link>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-claovia-dark py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-3xl font-bold text-claovia-light">{stat.value}</div>
                <div className="text-sm text-white">{stat.label}</div>
                <div className="text-xs text-claovia-light">{stat.source}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problème */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="mb-12 text-center text-4xl font-bold text-claovia-dark">
          Le problème que nous résolvons
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {problems.map((problem, index) => (
            <div key={index} className="rounded-2xl bg-cream p-8 text-center">
              <div className="mb-4 text-5xl">{problem.icon}</div>
              <h3 className="mb-3 text-xl font-bold text-claovia-dark">{problem.title}</h3>
              <p className="text-text-light">{problem.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Solution - Process Steps */}
      <section className="bg-cream py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-claovia-dark">
            Comment ça marche
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-claovia-main text-3xl">
                    {step.emoji}
                  </div>
                </div>
                <div className="mb-2 text-sm font-semibold text-claovia-main">
                  Étape {step.number}
                </div>
                <h3 className="mb-3 text-lg font-bold text-claovia-dark">{step.title}</h3>
                <p className="text-sm text-text-light">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bénéfices */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="mb-12 text-center text-4xl font-bold text-claovia-dark">
          Pour toute l'organisation
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {Object.values(benefits).map((benefit, index) => (
            <div key={index} className="rounded-2xl border-2 border-cream p-6">
              <div className="mb-4 text-4xl">{benefit.icon}</div>
              <h3 className="mb-4 text-lg font-bold text-claovia-dark">{benefit.title}</h3>
              <ul className="space-y-2">
                {benefit.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-text-light">
                    <span className="text-claovia-main">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-claovia-main py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white">
            Prêt à transformer votre feedback ?
          </h2>
          <p className="mb-8 text-xl text-white/90">
            Commencez gratuitement dès aujourd'hui. Aucune carte de crédit requise.
          </p>
          <Link
            href="/sign-up"
            className="inline-block rounded-full bg-white px-8 py-4 text-lg font-semibold text-claovia-main hover:bg-cream"
          >
            Essayer gratuitement
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-claovia-dark py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-claovia-main" />
              <span className="text-lg font-bold text-white">Claovia</span>
            </div>
            <div className="text-sm text-white/60">
              © 2024 Claovia. Tous droits réservés.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
