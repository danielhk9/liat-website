import WorkshopCard from "@/components/WorkshopCard";

const workshops = [
  { href: "/workshops/kids-cooking", title: "סדנאת בישול לילדים", description: "סדנאה אינטראקטיבית שבה הילדים לומדים להכין מנות בריאות וטעימות בכיף", emoji: "👨‍🍳" },
  { href: "/workshops/ice-cream",    title: "סדנאת גלידה",         description: "הכנת גלידה טבעית ומזינה — כי אפשר לאכול מתוק ובריא בו זמנית",     emoji: "🍦" },
  { href: "/workshops/adults",       title: "סדנאת מבוגרים",       description: "ללמוד כיצד להכין אוכל בריא לילדים ולשנות את הגישה לתזונה נכונה",  emoji: "🥗" },
];

export default function Workshops() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-extrabold text-green-600 text-center mb-4">הסדנאות שלי</h1>
      <p className="text-gray-600 text-center mb-14 text-lg">בחרו את הסדנה שמתאימה לכם והזמינו מקום</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ perspective: 1000 }}>
        {workshops.map((w) => (
          <WorkshopCard key={w.href} href={w.href} title={w.title} description={w.description} emoji={w.emoji} />
        ))}
      </div>
    </div>
  );
}
