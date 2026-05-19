import Link from "next/link";
import WorkshopCard from "@/components/WorkshopCard";
import {
  TomatoChar,
  CarrotChar,
  BroccoliChar,
  LemonChar,
  AvocadoChar,
  OnionChar,
} from "@/components/FoodCharacters";

const workshops = [
  { href: "/workshops/kids-cooking", title: "סדנאת בישול לילדים", description: "בישול בריא, כיף ומלא צבעים לילדים", emoji: "👨‍🍳" },
  { href: "/workshops/ice-cream",    title: "סדנאת גלידה",         description: "הכנת גלידה טבעית ומזינה ביחד",   emoji: "🍦" },
  { href: "/workshops/adults",       title: "סדנאת מבוגרים",       description: "לחשוב בריא ולהאכיל בריא",       emoji: "🥗" },
];

const floatingChars = [
  { Char: TomatoChar,   size: 80, top: "10%", right: "6%",  left: undefined, delay: "0s",   duration: "4s"   },
  { Char: BroccoliChar, size: 90, top: "55%", right: "3%",  left: undefined, delay: "1.2s", duration: "5s"   },
  { Char: LemonChar,    size: 76, top: "18%", right: undefined, left: "5%", delay: "0.6s", duration: "3.8s" },
  { Char: CarrotChar,   size: 65, top: "65%", right: undefined, left: "6%", delay: "1.8s", duration: "4.5s" },
  { Char: AvocadoChar,  size: 70, top: "35%", right: "10%", left: undefined, delay: "2.2s", duration: "3.6s" },
  { Char: OnionChar,    size: 72, top: "78%", right: "13%", left: undefined, delay: "0.9s", duration: "4.2s" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-24 overflow-hidden">

        {/* Floating food characters */}
        {floatingChars.map((item, i) => (
          <div
            key={i}
            className="absolute select-none pointer-events-none hidden md:block"
            style={{
              top: item.top,
              right: item.right,
              left: item.left,
              animation: `floatChar ${item.duration} ease-in-out infinite`,
              animationDelay: item.delay,
              filter: "drop-shadow(0 8px 18px rgba(0,0,0,0.18))",
            }}
          >
            <item.Char size={item.size} />
          </div>
        ))}

        {/* Hero card */}
        <div
          className="relative text-center max-w-2xl mx-auto px-10 py-16 rounded-3xl"
          style={{
            background: "rgba(255,255,255,0.72)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "3px solid rgba(255,255,255,0.9)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.1), 0 1px 0 rgba(255,255,255,0.9) inset",
          }}
        >
          <div className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            🌱 סדנאות תזונה בריאה לכל המשפחה
          </div>
          <h1 className="text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
            לחשוב{" "}
            <span className="text-green-600">בריא</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            כי תזונה נכונה מתחילה בחשיבה נכונה —<br />
            סדנאות בישול לילדים, גלידה, ומבוגרים
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/workshops" className="game-btn-primary">
              לסדנאות שלי
            </Link>
            <Link href="/contact" className="game-btn-secondary">
              צרו קשר
            </Link>
          </div>
        </div>
      </section>

      {/* Workshop Cards */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-3 text-gray-800">הסדנאות שלי</h2>
        <p className="text-center text-gray-500 mb-12">בחרו את הסדנה שמתאימה לכם</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ perspective: 1000 }}>
          {workshops.map((w) => (
            <WorkshopCard key={w.href} href={w.href} title={w.title} description={w.description} emoji={w.emoji} />
          ))}
        </div>
      </section>

      {/* CTA Strip */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div
          className="text-center px-10 py-14 rounded-3xl"
          style={{
            background: "linear-gradient(135deg, #16a34a, #15803d)",
            boxShadow: "0 20px 60px rgba(22,163,74,0.3)",
            border: "3px solid #14532d",
          }}
        >
          <h2 className="text-3xl font-bold text-white mb-3">מוכנים להתחיל?</h2>
          <p className="text-green-100 mb-8 text-lg">צרו קשר ואמצא את הסדנה המתאימה לכם</p>
          <Link href="/contact" className="game-btn-cta">
            צרו קשר עכשיו
          </Link>
        </div>
      </section>
    </>
  );
}
