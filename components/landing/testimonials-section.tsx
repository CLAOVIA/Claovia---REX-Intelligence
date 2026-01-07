"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marie Dubois",
    role: "DRH",
    company: "TechCorp (250 salariés)",
    image: "/avatars/marie.jpg",
    content:
      "En 3 mois, notre turnover a baissé de 12% à 7%. Les managers ont enfin des outils concrets au lieu de faire du ressenti. Le ROI est immédiat.",
    rating: 5,
    stat: "-41% de turnover",
  },
  {
    name: "Thomas Leclerc",
    role: "CEO",
    company: "FinanceHub",
    image: "/avatars/thomas.jpg",
    content:
      "Claovia m'a fait gagner 5h par semaine. Les REX sont structurés, les plans d'action sont prêts. Je passe mon temps à échanger avec mon équipe, pas à rédiger des documents.",
    rating: 5,
    stat: "5h gagnées/semaine",
  },
  {
    name: "Sophie Martin",
    role: "Manager Produit",
    company: "StartupXYZ",
    image: "/avatars/sophie.jpg",
    content:
      "Avant Claovia, je faisais des 1:1 'à l'aveugle'. Maintenant, je sais exactement ce qui préoccupe mon équipe avant même la réunion. C'est un game changer.",
    rating: 5,
    stat: "100% des collaborateurs se sentent écoutés",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Témoignages
            </span>
          </div>
          <h2 className="text-5xl font-head font-bold text-deep mb-6">
            Ils transforment leur management
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des résultats concrets chez plus de 500 managers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-accent/30 hover:shadow-2xl transition-all relative"
            >
              <div className="absolute top-8 right-8 text-accent/10">
                <Quote size={48} fill="currentColor" />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-8 relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-deep/20 flex items-center justify-center text-deep font-head font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-deep">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <div className="inline-block px-4 py-2 bg-accent/10 rounded-full">
                  <span className="text-accent font-semibold text-sm">
                    {testimonial.stat}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
