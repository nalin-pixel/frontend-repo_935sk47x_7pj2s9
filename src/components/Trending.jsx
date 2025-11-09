import { Star } from "lucide-react";

const items = [
  { title: "Mochi Mascots", likes: 4.8, img: "https://images.unsplash.com/photo-1583997052301-092bf69cf987?q=80&w=1600&auto=format&fit=crop" },
  { title: "Samurai Aesthetics", likes: 4.6, img: "https://images.unsplash.com/photo-1563891212558-5b08188a88b8?q=80&w=1600&auto=format&fit=crop" },
  { title: "Magical Girls", likes: 4.9, img: "https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?q=80&w=1600&auto=format&fit=crop" },
];

export default function Trending() {
  return (
    <section id="trending" className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">Trending Now</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="overflow-hidden rounded-2xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur shadow-sm ring-1 ring-black/5 dark:ring-white/10">
              <img src={it.img} alt={it.title} className="h-48 w-full object-cover" />
              <div className="p-5 flex items-center justify-between">
                <h3 className="font-semibold text-zinc-900 dark:text-white">{it.title}</h3>
                <div className="inline-flex items-center gap-1 text-pink-600">
                  <Star size={16} className="fill-pink-500/30" />
                  <span className="text-sm font-medium">{it.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
