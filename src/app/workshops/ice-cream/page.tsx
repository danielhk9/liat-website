import Link from "next/link";
import CalBooking from "@/components/CalBooking";

export const metadata = {
  title: "סדנאת גלידה | לחשוב בריא",
};

export default function IceCream() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <Link href="/workshops" className="text-green-600 text-sm font-semibold hover:underline mb-6 inline-block">
        ← חזרה לסדנאות
      </Link>

      {/* Placeholder image */}
      <div className="bg-gray-200 rounded-2xl aspect-video flex items-center justify-center mb-10">
        <span className="text-gray-400 text-sm">תמונה מהסדנה</span>
      </div>

      <h1 className="text-4xl font-extrabold text-green-600 mb-4">סדנאת גלידה</h1>
      <p className="text-gray-600 text-lg mb-8 leading-relaxed">
        סדנאה מיוחדת להכנת גלידה בריאה וטעימה! הילדים יכינו גלידות טבעיות ומזינות
        ויגלו שאפשר לאכול מתוק ובריא בו זמנית. סדנאה מושלמת לימי קיץ חמים ולאירועים מיוחדים.
      </p>

      <ul className="space-y-3 mb-10 text-gray-700">
        {["מתאים לגילאי 4–14", "קבוצות קטנות עד 12 ילדים", "משך הסדנה: שעה וחצי", "כולל חומרי גלם וציוד"].map((item) => (
          <li key={item} className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
            {item}
          </li>
        ))}
      </ul>

      <div
        className="rounded-3xl p-8"
        style={{
          background: "rgba(255,255,255,0.9)",
          border: "3px solid #14532d",
          boxShadow: "0 6px 0 #14532d",
        }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">הזמינו מקום</h2>
        <p className="text-gray-500 mb-6 text-center">בחרו תאריך שמתאים לכם</p>
        <CalBooking calLink="Liat_Leibovich/ice-cream" namespace="ice-cream" />
      </div>
    </div>
  );
}
