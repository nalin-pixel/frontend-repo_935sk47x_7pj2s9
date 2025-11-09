import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative order-2 lg:order-1">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Elegant. Kawaii. Modern.
          </h1>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Step into Anime Verse — a curated universe of adorable aesthetics and sleek modern vibes. Discover hand-picked collections, trending characters, and cozy visuals crafted for fans.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#collections" className="rounded-full bg-pink-500 text-white px-5 py-2.5 text-sm font-medium shadow hover:bg-pink-600 active:bg-pink-700 transition-colors">Explore Collections</a>
            <a href="#trending" className="rounded-full border border-zinc-300 dark:border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:border-pink-400 hover:text-pink-600 transition-colors">See Trending</a>
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full order-1 lg:order-2 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 dark:ring-white/10">
          <Spline scene="https://prod.spline.design/6nT0oz3-3XG3Gqfr/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-zinc-950/60"></div>
        </div>
      </div>
    </section>
  );
}
