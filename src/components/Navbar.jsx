import { Sparkles, Heart } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 dark:bg-zinc-900/60 border-b border-zinc-200/60 dark:border-zinc-800/60">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-pink-600 dark:text-pink-400">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-pink-100 text-pink-600 dark:bg-pink-900/40 dark:text-pink-300">
            <Sparkles size={18} />
          </span>
          <span className="text-lg">Anime Verse</span>
        </a>

        <ul className="hidden md:flex items-center gap-6 text-sm text-zinc-700 dark:text-zinc-300">
          <li>
            <a href="#collections" className="hover:text-pink-600 transition-colors">Collections</a>
          </li>
          <li>
            <a href="#trending" className="hover:text-pink-600 transition-colors">Trending</a>
          </li>
          <li>
            <a href="#newsletter" className="hover:text-pink-600 transition-colors">Newsletter</a>
          </li>
        </ul>

        <a
          href="#newsletter"
          className="inline-flex items-center gap-2 rounded-full bg-pink-500 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-pink-600 active:bg-pink-700 transition-colors"
        >
          <Heart size={16} className="fill-white/30" /> Join Us
        </a>
      </nav>
    </header>
  );
}
