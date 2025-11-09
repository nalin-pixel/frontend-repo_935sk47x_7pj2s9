const cards = [
  {
    title: "Studio Ghibli Vibes",
    desc: "Soft palettes, cozy scenery, gentle magic.",
    img: "https://images.unsplash.com/photo-1608889175123-8f3b4e9dc9d0?q=80&w=1600&auto=format&fit=crop",
    tag: "Whimsical"
  },
  {
    title: "Neon City Nights",
    desc: "Cyberpunk glow with kawaii charm.",
    img: "https://images.unsplash.com/photo-1544385561-5b439b2b6f31?q=80&w=1600&auto=format&fit=crop",
    tag: "Futuristic"
  },
  {
    title: "Pastel Dreams",
    desc: "Candy colors and plush motifs.",
    img: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?q=80&w=1600&auto=format&fit=crop",
    tag: "Pastel"
  },
];

export default function Collections() {
  return (
    <section id="collections" className="py-16 lg:py-24 bg-gradient-to-b from-pink-50/60 to-white dark:from-pink-950/10 dark:to-transparent">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">Curated Collections</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">Hand-picked sets to match your mood.</p>
          </div>
          <a href="#trending" className="hidden sm:inline-flex text-sm font-medium text-pink-600 hover:text-pink-700">View all</a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => (
            <article key={c.title} className="group relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 dark:ring-white/10 bg-white/70 dark:bg-zinc-900/70 backdrop-blur">
              <img src={c.img} alt={c.title} className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="p-5">
                <span className="inline-flex items-center rounded-full bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300 px-3 py-1 text-xs font-medium">{c.tag}</span>
                <h3 className="mt-3 text-lg font-semibold text-zinc-900 dark:text-white">{c.title}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
