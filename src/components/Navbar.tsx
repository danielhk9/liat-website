import Link from "next/link";

const links = [
  { href: "/", label: "בית" },
  { href: "/about", label: "אודות" },
  { href: "/workshops", label: "סדנאות" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <div
        className="mx-4 mt-3 rounded-2xl px-6 py-3 flex items-center justify-between"
        style={{
          background: "#fffbf0",
          border: "3px solid #1a1a1a",
          boxShadow: "0 5px 0 rgba(0,0,0,0.2)",
        }}
      >
        <Link href="/" className="flex items-center gap-2 text-2xl font-extrabold text-green-600 hover:text-green-700 transition-colors">
          <span className="text-xl">🥗</span>
          לחשוב בריא
        </Link>

        <nav className="flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-4 py-1.5 rounded-full text-sm font-bold text-gray-700 hover:bg-green-100 hover:text-green-700 transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="game-btn-sm-green mr-2">
            צור קשר
          </Link>
        </nav>
      </div>
    </header>
  );
}
